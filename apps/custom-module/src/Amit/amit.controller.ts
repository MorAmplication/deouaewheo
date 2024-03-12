import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AmitService } from "./amit.service";
import { CreateUserArgs } from "../user/base/CreateUserArgs";
import { User } from "../user/base/User";

@swagger.ApiTags("amits")
@common.Controller("amits")
export class AmitController {
  constructor(protected readonly service: AmitService) {}

  @common.Get("/:id/create")
  @swagger.ApiOkResponse({
    type: User
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Create(
    @common.Body()
    body: CreateUserArgs
  ): Promise<User> {
        return this.service.Create(body);
      }
}
