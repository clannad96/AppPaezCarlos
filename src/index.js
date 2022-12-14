const express = require('express');
const app = express();

//var axios = require('axios');
//app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set('port', process.env.PORT || 3001);


app.listen(app.get('port'), () => {
    console.log('Escuchando puerto', app.get('port'));
  });
  


  
  app.post("/vermensaje", (req, res) => {
    var candidato= "Lolocar";
    if(req.body.candidato)
        candidato=req.body.candidato;
    res.json({ message: "Hola, "+candidato });
  });