exports.paginaInicial = (req, res) => {
  // console.log(req.flash('error'), req.flash('success'), req.flash('info'));
  // req.flash('info', 'Olá mundo!');
  // req.flash('error', 'asfdjafsjk');
  // req.flash('success', 'Sucesso');

  // console.log(req.session.usuario);
  // req.session.usuario = { nome: 'Gabriel', logado: true };
  res.render('index');
  return;
};

exports.trataPost = (req, res) => {
  res.send(req.body);
  return;
};
