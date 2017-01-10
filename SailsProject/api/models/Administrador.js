module.exports = {

  attributes: {
      nombres:{
          type:'string',
          minLength:5
      },
      apellidos:{
          type:'string',
          minLength:5
      },
      correo:{
          type:'string',
          email:true,
          dafaultsTo:'correo@invalido.com'
      },
      tipo:{
          type:'string',
          enum:['Perfil','Usuarios','Correos'],
          dafaultsTo:'Usuarios'
      }

  }
};