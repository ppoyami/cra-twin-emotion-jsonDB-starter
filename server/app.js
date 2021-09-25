const express = require('express');
const cors = require('cors');

class App {
  constructor() {
    this.app = express();
    this.setMiddleWare();
    this.getRouting();
  }
  setMiddleWare() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(
      cors({
        origin: 'http://localhost:3000',
        credentials: true,
      })
    );
  }

  getRouting() {
    this.app.use(require('./controllers'));
  }
}

module.exports = new App().app;
