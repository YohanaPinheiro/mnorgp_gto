module.exports = function(application){
	application.get('/cadastro', function(req, res){
		application.app.controllers.cadastro.cadastro(application, req, res);
	});

	application.post('/cadastrar', function(req, res){
		application.app.controllers.cadastro.cadastrar(application, req, res);
	});

	application.get('/cadastrar_novo_usuario', function(req, res){
		application.app.controllers.cadastro.cadastrar_novo_usuario(application, req, res);
	});
}