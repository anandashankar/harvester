module.exports= {
    init : init
};

function init(app){
    app.get('/api/havesters/:id', function(req,res) {
    	var choice = req.params.id;
        res.send({"runtime" : "http://localhost:3000/api/harvesters/"+choice});
    })
}