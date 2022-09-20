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
  fnacto: Date,
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

User.find({}).then(result => {
  console.log(result);
  mongoose.connection.close();
})

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});