exports.middlewareGlobal = (req, res, next) => {
  // if(req.body.cliente) {
  //   req.body.cliente = req.body.cliente.replace('Araujo', 'NÃO USE ARAUJO');
  //   console.log();
  //   console.log(`Vi que você postou ${req.body.cliente}`);
  //   console.log();
  // }

  res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
  next();
};

exports.outroMiddleware = (req, res, next) => {
  next();
};


exports.checkCsrfError = (err, req, res, next) => {
  if (err && 'EBADCSRFTOKEN' === err.code) {
    return res.render('404');
  }
};

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken();
  next();
}
