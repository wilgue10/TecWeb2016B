/**
 * Heroe.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
    attributes: {
        nombre: {
            type: 'string'
            , required: true
        }
        , castillo: {
            type: 'string'
            , required: true
        }
        , nivel: {
            type: 'integer'
            , required: true
        }
        , // idPoder es el nombre del Foreign Key
        idPoder: {
            // Model-> es el nombre de la tabla padre
            model: 'Poder'
            , // Required es OPCIONAL si no queremos registros huerfanos de raza
            required: false
        }
    }
};