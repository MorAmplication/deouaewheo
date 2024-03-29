import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { MorService } from "./mor.service";
import { MorCreateInput } from "../mor/MorCreateInput";
import { MorCreateResults } from "../mor/MorCreateResults";

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
