/**
 * Mascota.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

      nombre:{
          type:'string',
          required:true
      },
      fechaNacimiento:{
          type:'date'
      },
      paisNacimiento:{
          type:'string',
          enum:['Ecuador','Perú','Colombia']
      },

      idRaza:{
          // Model-> es el nombre de la tabla padre
          model: 'Raza',
          // Required es OPCIONAL si no queremos registros huerfanos de raza
          required:true
      }
  }
};








