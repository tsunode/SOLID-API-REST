import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { PostgresusersRepository } from "./../../repositories/implementations/PostgresUsersRepository";
import { MailtrapMailProvider } from "./../../providers/implementations/MailtrapMailProvider";

const mailtrapMailProvider = new MailtrapMailProvider();
const postgresusersRepository = new PostgresusersRepository();

const createUserUseCase = new CreateUserUseCase(
  postgresusersRepository,
  mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController};