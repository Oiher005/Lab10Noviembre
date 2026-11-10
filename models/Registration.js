const { Schema, model } = require('mongoose');

// TODO PARTE 1: Crear un esquema de Mongoose para el modelo Registration con las siguientes propiedades:
//   event: ObjectId, referencia al modelo Event, obligatorio
//   name:  String, obligatorio, trim, mínimo 2 caracteres
//   email: String, obligatorio, trim, en minúsculas, debe contener una @
//   { timestamps: true }
//
// Además: una persona solo puede inscribirse UNA vez en CADA evento.
//


const registrationSchema = new Schema({
  // TODO

  
  event:       { type: 'ObjectId', ref:'Event', required: true },
  name:        { type: String,required: true, trim: true, min: 2 },
  email:       { type: String, required: true, trim: true, lowercase: true, validate: /@/ },
  }, 
  { timestamps: true }
);

module.exports = model('Registration', registrationSchema);
registrationSchema.index({ event: 1, email: 1 }, { unique: true })
