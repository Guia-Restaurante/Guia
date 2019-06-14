import { Component, OnInit   } from '@angular/core';
import * as jQuery from 'jquery';
import { Router } from '@angular/router';
import { AuthService } from '../../../user/services/auth.service';
import { DishesService } from '../../services/dishes.service';



@Component({
    selector: 'app-new-dishe',
    templateUrl: './new-dishe.component.html'
})
export class NewdisheComponent implements OnInit{

    dish: any = {};

    constructor(private router: Router, 
                protected authService: AuthService, 
                protected httpService: DishesService){}

    ngOnInit () {
        jQuery('.modal').modal({complete: () => this.router.navigate(['/dishes']) });
        jQuery('.modal').modal('open');
        this.authService.getUser()
        .then((res) => {
            this.dish.restaurant_id = res.restaurant.id;
        });
    }

    addFile(e){
        console.log(e.target.files);
        this.dish.photo = e.target.files[0];
    }

    save(e){
        e.preventDefault();

        if(!this.dish.photo){
            window.Materialize.toast('Selecione uma foto antes', 3000, 'red')
            return;
        }
        let formData = new FormData;
        formData.append('photo', this.dish.photo);
        formData.append('name', this.dish.name);
        formData.append('description', this.dish.description);
        formData.append('price', this.dish.price);
        formData.append('restaurant_id', this.dish.restaurant_id);

        this.httpService.builder()
            .insert(formData)
            .then(() => {
                this.httpService.eventEmitter.emit();
                jQuery('.modal').modal('close');
            });
    }
}