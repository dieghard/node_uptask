exports.proyectoshome = (req, res) => {
	res.render("index.pug", {
		nombrePagina: "Proyectos"
	});
};

exports.formularioProyecto = (req, res) => {
	res.render("nuevoProyecto.pug", {
		nombrePagina: "Nuevo Proyecto"
	});
};

exports.nuevoProyecto = (req, res) => {
	res.send("Enviaste el Formulario");
};

exports.nosotros = (req, res) => {
	res.render("nostros.pug");
};
