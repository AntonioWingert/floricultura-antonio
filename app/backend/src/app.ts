import 'express-async-errors'
import * as express from 'express';
import router from './routes';
import ErrorHandler from './middlewares/ErrorHandler';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();
    this.mountRoutes();
    this.handleErrors();
  }

  private mountRoutes(): void {
    this.app.use(router)
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }

  private handleErrors():void {
    this.app.use(ErrorHandler.handle)
  }
}

export { App };

export const { app } = new App();