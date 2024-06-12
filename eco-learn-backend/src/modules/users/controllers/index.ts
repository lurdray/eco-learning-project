import { NextFunction, Request, Response, Router } from 'express';
import Controller from '../../../shared/types/controllers.types';
import { IUserService } from '../types/abstractions';
import UserServices from '../services';

export default class UserController implements Controller {
  public path: string = '/users';
  public router: Router = Router();

  constructor(private userService: IUserService) {
    this.signUp = this.signUp.bind(this);
    this.login = this.login.bind(this);
    this.loadRoutes();
  }

  loadRoutes() {
    this.router.post(`${this.path}`, this.signUp);
    this.router.post(`${this.path}/login`, this.login);
  }

  public async signUp(req: Request, res: Response, next: NextFunction) {
    //  console.log({ service: this.userService });
    try {
      const data = await this.userService.signUp(req.body);
      return res
        .status(data.statusCode)
        .json({ ...data, message: data.message });
    } catch (error) {
      next(error);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.userService.login(req.body);
      return res
        .status(data.statusCode)
        .json({ ...data, message: data.message });
    } catch (error) {
      next(error);
    }
  }
}
