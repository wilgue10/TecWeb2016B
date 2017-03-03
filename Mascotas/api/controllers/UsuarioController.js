/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

  crearUsuario: function (req, res) {

    var parametros = req.allParams();
    console.log(parametros);

    if (req.method == 'POST') {
      if (parametros.nombres && parametros.apellidos) {
        //creo el usuario
        Usuario.create({
          nombres: parametros.nombres,
          apellidos: parametros.apellidos,
          correo: parametros.correo
        }).exec(function (error, usuarioCreado) {
          if (error) return res.serverError()
          sails.log.info(usuarioCreado);

          Usuario.find({
            skip: 1
          }).exec(function (error, usuariosEncontrados) {
            if (error) return res.serverError()
            sails.log.info(usuariosEncontrados);
            return res.view('vistas/listarUsuarios', {
              title: 'Lista de Usuarios',
              usuarios: usuariosEncontrados
            })
          });


        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP'
        }
      });
    }

  },
  crearUsuarioForm: function (req, res) {

    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombres && parametros.apellidos) {
        Usuario.create({
          nombres: parametros.nombres,
          apellidos: parametros.apellidos,
          correo: parametros.correo
        }).exec(function (error, usuarioCreado) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'Hubo un error enviando los parámetros',
                error,
                url: '/crearUsuario'
              }
            });
          }
          sails.log.info('Se creo el usuario: ', usuarioCreado);

          Usuario.find().exec(function (error, usuariosEncontrados) {
            if (error) return res.serverError()
            sails.log.info(usuariosEncontrados);
            return res.view('vistas/listarUsuarios', {
              title: 'Lista de Usuarios',
              usuarios: usuariosEncontrados
            })
          });
        });

      } else {
        console.log('NO PARÁMETROS');
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearUsuario'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearUsuario'
        }
      });
    }

  },
  editarUsuarioForm: function (req, res) {

    var parametros = req.allParams();
    if (req.method == 'POST') {
      if (parametros.nombres && parametros.apellidos && parametros.id) {
        Usuario.update({
          id: parametros.id
        }, {
          nombres: parametros.nombres,
          apellidos: parametros.apellidos,
          correo: parametros.correo
        }).exec(function (error, usuarioCreado) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'hubo un error enviando los parametros:',
                error,
                url: '/crearUsuario'
              }
            });
          }
          sails.log.info('Se actualizó el usuario: ', usuarioCreado);

          Usuario.find().exec(function (error, usuariosEncontrados) {
            if (error) return res.serverError()
            sails.log.info(usuariosEncontrados);
            return res.view('vistas/listarUsuarios', {
              title: 'Lista de Usuarios',
              usuarios: usuariosEncontrados
            })
          });

        });

      } else {
        // bad Request
        console.log('NO PARÁMETROS');
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearUsuario'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearUsuario'
        }
      });
    }

  },
  borrarUsuario: function (req, res) {
    var parametros = req.allParams();

    if (parametros.id) {

      Usuario.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, UsuarioEliminado) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              descripcion: "Tuvimos un Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarUsuarios"
            }
          });
        }
        Usuario.find()
          .exec(function (errorIndefinido, usuariosEncontrados) {

            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  descripcion: "Hubo un problema cargando los usuarios",
                  rawError: errorIndefinido,
                  url: "/ListarUsuarios"
                }
              });
            }
            res.view('vistas/listarUsuarios', {
              usuarios: usuariosEncontrados
            });
          })
      })

    } else {
      return res.view('vistas/Error', {
        error: {
          descripcion: "Necesitamos el ID para borrar la bodega",
          rawError: "No envía ID",
          url: "/ListarUsuarios"
        }
      });
    }
  }

};
