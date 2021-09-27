import {Request, Response} from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";


class ListUserReceiveComplimentsController{
  async handle(request: Request, response: Response){
    const {user_id} = requert;

    const listUserReceiveComplimentsService = new ListUserReceiveComplimentsController();

    const compliments = await listUserReceiveComplimentsService.execute();

    return response.json(compliments);

  }
}

export { ListUserReceiveComplimentsController}