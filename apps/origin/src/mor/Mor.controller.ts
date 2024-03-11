import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { MorService } from "./Mor.service";
import { MorCreateInput } from "../mor/base/MorCreateInput";
import { MorCreateResults } from "../mor/base/MorCreateResults";

@swagger.ApiTags("mors")
@common.Controller("mors")
export class MorController {
  constructor(protected readonly service: MorService) {}

  @common.Get("/:id/create")
  @swagger.ApiOkResponse({
    type: MorCreateResults
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Create(
    @common.Body()
    body: MorCreateInput
  ): Promise<MorCreateResults> {
        return this.service.Create(body);
      }
}
