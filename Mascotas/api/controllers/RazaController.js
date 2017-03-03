/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearRaza: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre && parametros.peso) {
        Raza.create({
          nombre: parametros.nombre,
          peso: parametros.peso
        }).exec(function (error, razaCreada) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo problemas creando la raza, inténtalo de nuevo: ' + error,
              url: '/crearRaza'
            }
          });
          Raza.find().exec(function (error, razasEncontrados) {
            if (error) return res.serverError()
            sails.log.info(razasEncontrados);
            return res.view('vistas/Raza/listarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontrados
            })
          });
        });
      } else {
        // bad Request
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearRaza'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearRaza'
        }
      });
    }

  },
  editarRaza: function (req, res) {

    var parametros = req.allParams();
    if (req.method == 'POST') {
      if (parametros.id) {
        Raza.update({
          id: parametros.id
        }, {
          peso: parametros.peso
        }).exec(function (error) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'Hubo un error editando la raza: ' + error,
                url: '/listarRazas'
              }
            });
          }

          Raza.find().exec(function (error, razasEncontradas) {
            if (error) return res.serverError();
            return res.view('vistas/Raza/listarRazas', {
              title: 'Lista de Razas',
              razas: razasEncontradas
            })
          });

        });

      } else {
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envía todos los parametros',
            url: '/editarRaza'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el método HTTP',
          url: '/editarRaza'
        }
      });
    }

  },
  borrarRaza: function (req, res) {
    var parametros = req.allParams();

    if (parametros.id) {

      Raza.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, razaEliminada) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              descripcion: "Tuvimos un Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarRazas"
            }
          });
        }
        Raza.find()
          .exec(function (errorIndefinido, razasEncontradas) {

            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  descripcion: "Hubo un problema cargando las razas",
                  rawError: errorIndefinido,
                  url: "/ListarRazas"
                }
              });
            }
            res.view('vistas/Raza/listarRazas', {
              razas: razasEncontradas
            });
          })
      })

    } else {
      return res.view('vistas/Error', {
        error: {
          descripcion: "Necesitamos el ID para borrar la raza",
          rawError: "No envía ID",
          url: "/ListarRaza"
        }
      });
    }
  }
};
