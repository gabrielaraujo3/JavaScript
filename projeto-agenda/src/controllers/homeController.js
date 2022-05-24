exports.paginaInicial = (req, res) => {
  // console.log(req.flash('error'), req.flash('success'), req.flash('info'));
  // req.flash('info', 'Olá mundo!');
  // req.flash('error', 'asfdjafsjk');
  // req.flash('success', 'Sucesso');

  // console.log(req.session.usuario);
  // req.session.usuario = { nome: 'Gabriel', logado: true };
  res.render('index', {
    titulo: 'Este será o título da página',
    numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  });
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
