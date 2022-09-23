const express = require("express");
const app = express();
const cors = require("cors");

const mongoose = require("mongoose");

const { model, Schema } = mongoose;

const connectionString = `mongodb+srv://EmilioRiveroUTN:Carloseltopoquegira72@users.olt1dm6.mongodb.net/?retryWrites=true&w=majority`

const port = 3001;

app.use(cors());
app.use(express.json());

mongoose.connect(connectionString)
  .then(() => {
    console.log("DB connected");
  }).catch(err => {
    console.log(err);
  });

const userSchema = new Schema({
  nombre: String,
  apellido: String,
  fnacto: String,
  dni: {  
    tipo: String,
    numero: Number
  },
  domicilio: {
    calle: String,
    numero: Number,
    provincia: String,
    localidad: String
  }
})

const User = model("User", userSchema);


app.get("/", (request, response) => {
  User.find({}).then(user => {
    response.json(user)
  });
});


app.post('/users/create', (request, response) => {

  const { nombre, apellido, fnacto, dni, domicilio, } = request.body

  const { nro, tipo } = dni;
  
  const { calle, numero, provincia, localidad } = domicilio

  const user = new User({
    nombre: nombre,
    apellido: apellido,
    fnacto: fnacto,
    dni: {
      tipo: tipo,
      numero: nro
    },
    domicilio : {
      calle: calle,
      numero: numero,
      provincia: provincia,
      localidad: localidad
    }
  });

  user.save().then(savedUser => {
    response.json(savedUser)
  });

})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});