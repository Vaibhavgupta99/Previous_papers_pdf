<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <input type="text" name="text" placeholder="Write text here">
    

<script>

/* x = "Hello"

localStorage.setItem('xyz', x)

y = ['Vaibhav', 'Raj', 'Shweta']

localStorage.setItem('name', JSON.stringify(y)) */


   /*  y = JSON.parse(localStorage.getItem('name')) */

    document.write(JSON.parse(localStorage.getItem('name'))[0])

    document.getElementsByName('text')[0].value = JSON.parse(localStorage.getItem('name'))[1]

    document.write("<br><br>"+localStorage.length)

    console.log(localStorage.length)

    /* localStorage.removeItem('xyz')

    localStorage.clear() */

    document.write(localStorage.key(0))

    name = 'Vaibhav'
    phone = '9928996259'

    form = {'name': name , 'phone': phone}

    localStorage.setItem('form', JSON.stringify(form))

    document.write(JSON.parse(localStorage.getItem('form'))['name'])

    y = JSON.parse(localStorage.getItem('form'))['phone']

    document.getElementsByName('text')[0].value = y


    /* x = [{'name': ['vaibhav','raj'], 'city':'rewa'}, {'age': '22'}]
    y = {'name': ['vaibhav','raj','shweta']}

    document.write(y['name'][0])
    document.write('<br>')
    document.write(x[1]['age'],' ',x[0]['name'][1])
    document.write('<br>')

    z=5;

    try {


        
        document.write(z+'<br>')

        // if(z == 5){
        //     throw "Hello";
        // }


        throw "Hello123";

        


        
    } catch (error) {
        document.write(error)        
    }

    finally{
        document.write('<br>')
        document.write("Hii, Vaibhav");
    } */

    




</script>


</body>
</html>