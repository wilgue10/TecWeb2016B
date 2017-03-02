/**
 * PoderApiController
 *
 * @description :: Server-side logic for managing Poderapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    crearPoder: function (req, res) {
        var parametros = req.allParams();
        if (req.method == 'POST') {
            if (parametros.nombre) {
                PoderApi.create({
                    nombre: parametros.nombre
                    , nivel: parametros.nivel
                    , daño: parametros.daño
                }).exec(function (error, poderCreado) {
                    if (error) return res.view('error', {
                        title: 'Error'
                        , error: {
                            descripcion: 'Hubo Problemas creando el poder, intentalo de nuevo: ' + error
                            , url: '/CrearPoder'
                        }
                    });
                    PoderApi.find().exec(function (error, poderesEncontrados) {
                        if (error) return res.serverError()
                        sails.log.info(poderesEncontrados);
                        return res.view('vistas/Poder/listarPoderes', {
                            title: 'Lista de poderes'
                            , poderes: poderesEncontrados
                        })
                    });
                });
            }
            else {
                // bad Request
                return res.view('error', {
                    title: 'Error'
                    , error: {
                        descripcion: 'No envia todos los parametros'
                        , url: '/CrearPoder'
                    }
                });
            }
        }
        else {
            return res.view('error', {
                title: 'Error'
                , error: {
                    descripcion: 'Falla en el metodo HTTP'
                    , url: '/CrearPoder'
                }
            });
        }
    }
};