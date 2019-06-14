import { Component, OnInit   } from '@angular/core';
import * as jQuery from 'jquery';
import { Router, ActivatedRoute } from '@angular/router';
import { DishesService } from '../../services/dishes.service';

@Component({
    selector: 'app-edit-dishe',
    templateUrl: './edit-dishe.component.html'
})
export class EditdisheComponent implements OnInit{
    
    dish: any = {};

    constructor(private router: Router, private route: ActivatedRoute, protected httpService: DishesService){}

    ngOnInit () {
        jQuery('.modal').modal({complete: () => this.router.navigate(['/dishes']) });
        jQuery('.modal').modal('open');
     
        this.route.params.subscribe(params => {
            this.httpService.builder().view(params['id']).then(res =>{
                this.dish =res;
                window.Materialize.updateTextFields();
            });
        });
    }

    addFile(e){
        console.log(e.target.files);
        this.dish.photo = e.target.files[0];
    }

    save(e){
        e.preventDefault();
        let formData = this.dish;
        if(this.dish.photo){
            formData = new FormData;
            formData.append('photo', this.dish.photo);
            formData.append('name', this.dish.name);
            formData.append('description', this.dish.description);
            formData.append('price', this.dish.price);
            formData.append('restaurant_id', this.dish.restaurant_id);
        }    

        this.httpService.builder()
            .update(this.dish.id, formData)
            .then(() => {
                this.httpService.eventEmitter.emit();
                jQuery('.modal').modal('close');
            });
    }
}