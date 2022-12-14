const express = require('express');
const app = express();

var axios = require('axios');
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('port', process.env.PORT || 3001);


app.listen(app.get('port'), () => {
    console.log('Escuchando puerto', app.get('port'));
  });
  


  
  app.post("/vermensaje", async (req, res) => {
    try{
    var nombre= "Lolocar";
    var edad = "0";
    if(req.body.nombre)
        nombre=req.body.nombre.toString();

        var config = {
            method: 'get',
            url: 'https://api.agify.io/?name='+nombre,
            headers: { }
          };
          
          console.log(config);
          var response = await axios(config);
        //  console.log(response.data)
          console.log(JSON.stringify(response.data))
        if(response.data.age)
          edad=response.data.age;

    
    res.json({ message: "Hola, "+nombre+". Tu nombre tiene "+edad+" años." });
    }
    catch(error){
        console.log(error);
        res.json(error);
    }
});