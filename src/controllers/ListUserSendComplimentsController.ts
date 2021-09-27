import {Request, Response} from "express";
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsService"


class ListUserSendComplimentsController{
  async handle(request: Request, response: Response){
    const {user_id} = requert;

    const listUserSendComplimentsService = new ListUserSendComplimentsController();

    const compliments = await listUserSendComplimentsService.execute();

    return response.json(compliments);

  }
}

export { ListUserSendComplimentsController}