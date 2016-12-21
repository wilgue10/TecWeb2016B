/**
 * SaludoController
 *
 * @description :: Server-side logic for managing Saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	hey: function(req, res){
        
        var params = req.allParams();
        
        if(req.method == 'GET') {
            res.json({
                name: 'Hey GET!',
                params: params 
            });
        }

        else if(req.method == 'POST') {
            res.json({
                name: 'Hey POST!'
            });
        } else {
            res.json({
                name: 'Hey EVERYBODY!'
            });
        }

    
    },
    bye: function(req, res){
        res.send('Bye');
    },
    time: function(req, res){
        res.send('Time');
    }
};

