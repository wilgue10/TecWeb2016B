/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  crearMascota: function (req, res) {
    var parametros = req.allParams();

    if (req.method == 'POST') {
      if (parametros.nombre && parametros.paisNacimiento && parametros.idRaza) {
        Mascota.create({
          nombre: parametros.nombre,
          fechaNacimiento: parametros.fechaNacimiento,
          paisNacimiento: parametros.paisNacimiento,
          idRaza: parametros.idRaza,
        }).exec(function (error, mascotaCreado) {
          if (error) return res.view('error', {
            title: 'Error',
            error: {
              descripcion: 'Hubo Problemas creando la mascota, intentalo de nuevo: ' + error,
              url: '/crearMascota'
            }
          });

          Mascota.find().populate("idRaza").exec(function (error, mascotasEncontrados) {
            if (error) return res.serverError()
            return res.view('vistas/Mascota/listarMascotas', {
              title: 'Lista de Mascotas',
              mascotas: mascotasEncontrados
            })
          });

        });
      } else {

        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envia todos los parametros',
            url: '/crearMascota'
          }
        });
      }
    } else {
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el metodo HTTP',
          url: '/crearMascota'
        }
      });
    }

  },
  editarMascota: function (req, res) {

    var parametros = req.allParams();
    if (req.method == 'POST') {
      if (parametros.nombre) {

        Mascota.update({
          id: parametros.id
        }, {
          nombre: parametros.nombre,
        }).exec(function (error) {
          if (error) {
            return res.view('error', {
              title: 'Error',
              error: {
                descripcion: 'Hubo un error editando la mascota: ' + error,
                url: '/listarMascota'
              }
            });
          }
          Mascota.find().populate("idRaza").exec(function (error, mascotasEncontradas) {
            if (error) return res.serverError()
            return res.view('vistas/Mascota/listarMascotas', {
              title: 'Lista de Mascotas',
              mascotas: mascotasEncontradas
            })
          });

        });

      } else {

        console.log('NO PARÁMETROS');
        return res.view('error', {
          title: 'Error',
          error: {
            descripcion: 'No envía todos los parametros',
            url: '/editarMascota'
          }
        });
      }
    } else {
      console.log('POST');
      return res.view('error', {
        title: 'Error',
        error: {
          descripcion: 'Falla en el método HTTP',
          url: '/editarMascota'
        }
      });
    }

  },
  borrarMascota: function (req, res) {
    var parametros = req.allParams();

    if (parametros.id) {

      Mascota.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, mascotaEliminada) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              descripcion: "Tuvimos un Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarMascotas"
            }
          });
        }
        Mascota.find().populate("idRaza")
          .exec(function (errorIndefinido, mascotasEncontradas) {

            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  descripcion: "Hubo un problema cargando las mascotas",
                  rawError: errorIndefinido,
                  url: "/ListarMascotas"
                }
              });
            }
            res.view('vistas/Mascota/listarMascotas', {
              mascotas: mascotasEncontradas
            });
          })
      })

    } else {
      return res.view('vistas/Error', {
        error: {
          descripcion: "Necesitamos el ID para borrar la mascota",
          rawError: "No envía ID",
          url: "/ListarMascota"
        }
      });
    }
  }

};
