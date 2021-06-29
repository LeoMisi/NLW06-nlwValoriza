import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    const complimentsRepositores = getCustomRepository(ComplimentsRepositories);
    const userRepositories = getCustomRepository(UsersRepositories);

    const userReceiverExists = await userRepositories.findOne(user_receiver);

    if (user_sender === user_receiver) {
      throw new Error("Incorrect User Receiver");
    }

    if (!userReceiverExists) {
      throw new Error("User receiver does not exist!");
    }

    const compliment = complimentsRepositores.create({
      tag_id,
      user_receiver,
      user_sender,
      message,
    });

    await complimentsRepositores.save(compliment);

    return compliment;
  }
}

export { CreateComplimentService };
