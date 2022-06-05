import express from 'express';

class App {
  constructor() {
    this.app = express();
    this.moddlewares();
    this.routes();
  }

  moddlewares() {
    this.app.use(express.urlencoded({ extend: true }));
    this.app.use(express.json());
  }

  routes() {

  }
}
