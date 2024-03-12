import * as graphql from "@nestjs/graphql";
import { CreateUserArgs } from "../user/base/CreateUserArgs";
import { User } from "../user/base/User";
import { AmitService } from "./amit.service";

export class AmitResolver {
  constructor(protected readonly service: AmitService) {}

  @graphql.Query(() => User)
  async Create(
    @graphql.Args()
    args: CreateUserArgs
  ): Promise<User> {
    return this.service.Create(args);
  }
}
