/**
 * HeroApiController
 *
 * @description :: Server-side logic for managing Heroapis
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    crearHero: function (req, res) {
        if (req.method == "POST") {
            var parametros = req.allParams();
            if (parametros.nombre && parametros.castillo && parametros.nivel) {
                var heroCrear = {
                        nombre: parametros.nombre
                        , castillo: parametros.castillo
                        , nivel: parametros.nivel
                    }
                    //                if (heroCrear.correo == "") {
                    //                    delete usuarioCrear.correo
                    //                }
                HeroApi.create(heroCrear).exec(function (err, heroCreado) {
                    if (err) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Fallo al crear el hero"
                                , rawError: err
                                , url: "/CrearHero"
                            }
                        });
                    }
                    HeroApi.find().exec(function (errorIndefinido, herosEncontrados) {
                        if (errorIndefinido) {
                            res.view('vistas/Error', {
                                error: {
                                    desripcion: "Hubo un problema cargando los heros"
                                    , rawError: errorIndefinido
                                    , url: "/ListarHeros"
                                }
                            });
                        }
                        res.view('vistas/Hero/ListarHeros', {
                            heros: herosEncontrados
                        });
                    })
                })
            }
            else {
                return res.view('vistas/Error', {
                    error: {
                        desripcion: "Llena todos los parametros, nombre,castillo y nivel"
                        , rawError: "Fallo en envio de parametros"
                        , url: "/CrearHero"
                    }
                });
            }
        }
        else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Error en el uso del Metodo HTTP"
                    , rawError: "HTTP Invalido"
                    , url: "/CrearHero"
                }
            });
        }
    }
    , BorrarHero: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id) {
            HeroApi.destroy({
                id: parametros.id
            }).exec(function (errorInesperado, HeroRemovido) {
                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "Tuvimos un Error Inesperado"
                            , rawError: errorInesperado
                            , url: "/ListarHeros"
                        }
                    });
                }
                HeroApi.find().exec(function (errorIndefinido, herosEncontrados) {
                    if (errorIndefinido) {
                        res.view('vistas/Error', {
                            error: {
                                desripcion: "Hubo un problema cargando los Hero"
                                , rawError: errorIndefinido
                                , url: "/ListarHeros"
                            }
                        });
                    }
                    res.view('vistas/Hero/listarHeros', {
                        heros: herosEncontrados
                    });
                })
            })
        }
        else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos el ID para borrar al Hero"
                    , rawError: "No envia ID"
                    , url: "/ListarHero"
                }
            });
        }
    }
    , editarHero: function (req, res) {
        var parametros = req.allParams();
        if (parametros.id && (parametros.nombre || parametros.castillo || parametros.nivel)) {
            var heroAEditar = {
                nombre: parametros.nombre
                , castillo: parametros.castillo
                , nivel: parametros.nivel
            }
            if (heroAEditar.nombre == "") {
                delete heroAEditar.nombre
            }
            if (heroAEditar.castillo == "") {
                delete heroAEditar.castillo
            }
            if (heroAEditar.nivel == "") {
                delete heroAEditar.nivel
            }
            HeroApi.update({
                id: parametros.id
            }, heroAEditar).exec(function (errorInesperado, HeroRemovido) {
                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "Tuvimos un Error Inesperado"
                            , rawError: errorInesperado
                            , url: "/ListarHeros"
                        }
                    });
                }
                Usuario.find().exec(function (errorIndefinido, herosEncontrados) {
                    if (errorIndefinido) {
                        res.view('vistas/Error', {
                            error: {
                                desripcion: "Hubo un problema cargando los Heros"
                                , rawError: errorIndefinido
                                , url: "/ListarHeros"
                            }
                        });
                    }
                    res.view('vistas/Hero/ListarHeros', {
                        heros: herosEncontrados
                    });
                })
            })
        }
        else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Necesitamos que envies el ID y el nombre, castillo o nivel"
                    , rawError: "No envia Parametros"
                    , url: "/ListarHeros"
                }
            });
        }
    }
};