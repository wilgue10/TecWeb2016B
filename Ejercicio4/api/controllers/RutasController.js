/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {
        return res.view('vistas/home');
    },
    crearUsuario: function (req, res) {
        return res.view('vistas/Usuario/crearUsuario');
    },
    
    crearHero: function (req, res) {
        return res.view('vistas/Hero/crearHero');
    },
    listarHeros: function (req, res) {
       HeroApi.find()
            .exec(function (errorIndefinido, herosEncontrados) {

                if (errorIndefinido) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "Hubo un problema cargando los Usuarios",
                            rawError: errorIndefinido,
                            url: "/ListarHeros"
                        }
                    });
                }

                res.view('vistas/Hero/ListarHeros', {
                    heros: herosEncontrados
                });
            })
    },
    editarHero: function (req, res) {

        var parametros = req.allParams();

        if (parametros.id) {

            HeroApi.findOne({
                id: parametros.id
            }).exec(function (errorInesperado, HeroEncontrado) {
                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "Error Inesperado",
                            rawError: errorInesperado,
                            url: "/ListarHeros"
                        }
                    });
                }
                if(HeroEncontrado){
                     return res.view("vistas/Hero/editarHero",{
                         heroAEditar:HeroEncontrado,
                         
                     });
                }else{
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "El Hero con id: "+parametros.id+" no existe.",
                            rawError: "No existe el Hero",
                            url: "/ListarHeros"
                        }
                    });
                }
            })
        } else {

            return res.view('vistas/Error', {
                error: {
                    desripcion: "No ha enviado el parametro ID",
                    rawError: "Faltan Parametros",
                    url: "/ListarHeros"
                }
            });

        }
    },
    error: function (req, res) {
        return res.view('vistas/Error', {
            error: {
                desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
                rawError: "Ruta equivocada",
                url: "/Inicio"
            }
        });
    },
    listarUsuarios: function (req, res) {

        Usuario.find()
            .exec(function (errorIndefinido, usuariosEncontrados) {

                if (errorIndefinido) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "Hubo un problema cargando los Usuarios",
                            rawError: errorIndefinido,
                            url: "/ListarUsuarios"
                        }
                    });
                }

                res.view('vistas/Usuario/ListarUsuarios', {
                    usuarios: usuariosEncontrados
                });
            })
    },
    listarPoderes: function (req, res) {

        PoderApi.find()
            .exec(function (errorIndefinido, poderesEncontrados) {

                if (errorIndefinido) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "Hubo un problema cargando los poderes",
                            rawError: errorIndefinido,
                            url: "/ListarPoderes"
                        }
                    });
                }

                res.view('vistas/Poder/listarPoderes', {
                    poderes: poderesEncontrados
                });
            })
    },
    crearPoder: function (req, res) {
        return res.view('vistas/Poder/crearPoder');
    },
    editarUsuario: function (req, res) {

        var parametros = req.allParams();

        if (parametros.id) {

            Usuario.findOne({
                id: parametros.id
            }).exec(function (errorInesperado, UsuarioEncontrado) {
                if (errorInesperado) {
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "Error Inesperado",
                            rawError: errorInesperado,
                            url: "/ListarUsuarios"
                        }
                    });
                }
                if(UsuarioEncontrado){
                     return res.view("vistas/Usuario/editarUsuario",{
                         usuarioAEditar:UsuarioEncontrado,
                         inicioSesion:true
                     });
                }else{
                    return res.view('vistas/Error', {
                        error: {
                            desripcion: "El usuario con id: "+parametros.id+" no existe.",
                            rawError: "No existe el usuario",
                            url: "/ListarUsuarios"
                        }
                    });
                }
            })
        } else {

            return res.view('vistas/Error', {
                error: {
                    desripcion: "No ha enviado el parametro ID",
                    rawError: "Faltan Parametros",
                    url: "/ListarUsuarios"
                }
            });

        }
    }

    
    
    
    
};