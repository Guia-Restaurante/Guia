<!DOCTYPE html>
<html>
<head>
    <title></title>
</head>
<body>
<form id="form">
    <input type="text" name="name" value="Erik's bar">
    <input type="text" name="description" value="Melhor Wiski da região">
    <input type="file" name="photo" id="file">
</form>

<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script type="text/javascript">

    $('#file').on('change', function () {

        let formData = new FormData();
        formData.append('name', 'Erik\'s bar');
        formData.append('description', 'Melhor Wiski da região');
        formData.append('photo', $('#file')[0].files[0]);

        let headers = {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImIwOTkyM2JlNDU1MmY5ZGJmZDBmM2ZjYzMxOTJmZGEyMDk5NDIwODA2MjVlNTQ3ZDRjYmRhMzM5NDgzZDM3NjIzYjdjZTZlZTgyNDlkOWIwIn0.eyJhdWQiOiIzIiwianRpIjoiYjA5OTIzYmU0NTUyZjlkYmZkMGYzZmNjMzE5MmZkYTIwOTk0MjA4MDYyNWU1NDdkNGNiZGEzMzk0ODNkMzc2MjNiN2NlNmVlODI0OWQ5YjAiLCJpYXQiOjE1MjE4OTg3NDQsIm5iZiI6MTUyMTg5ODc0NCwiZXhwIjoxNTUzNDM0NzQzLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.TtEFnFuZsgF9r30oLiS-_9WTEwPmS7TJrGZKpLh2AsdhoVAfkGYSGg3Bw-lvSwQ2YKgNxxz0MRU_wwWjiesfEAqF2SlIpt12jfU16Ghrdj7XTdpMGT9Lrb8_XJm7z4S2TVat-ybPJ4M5uatuS85wECrKcBm717FWLL0X0kQqmwXDCPjs7pAk3RZrahU6R60h_xjYBvFQyH8kpG-RRhQfjVi-r0YerBmNUptx51CVLWz3h1tfX4ArM2AhdDYZGk1j0W_qKOYHX2KWZPCnqY6tRCUWC_HAIrLmVfQONkXgTtu2GRfVwXOIGh68BrgxXNMh1PVPz2mG1oPoEufbSi9OI-5rSAJJlh8YtoGlFeCB6kuXqJ-vEa8XOD75KltkAvtJHboZi4SoM46Fw124ft2XhTFzTr_caCm6uN1ZW4RqEUQdJEdOh25tAKD7Grgog4P1Yi8au_O5QTP0u4e9tZ75nzkdQRuO9InGdr1wj2GHhn4iiAgQMMFFlj95yM_myz3DWJWDJUph8n-vXjcmwjdoisBEhaSoyf4yeBC-ho1otEUzl5d42jBLMErLnMdiJZckoncu8udo4NtR7S1btuSvhXeuhOlHYf4HdoGFCYvLk7DbqACRRYa8cSsgyeexZsVe4jtzbriZDV4bLHpK3kwnsHRxQXyNV-Cf96gLn4FM9UI',
            //'content-type': 'multipart/form-data'
            'content-type': 'application/x-www-form-urlencoded'
        }

        axios.post('http://localhost:8000/api/v1/restaurants/2', formData, {headers: headers})
    })
</script>
</body>
</html>