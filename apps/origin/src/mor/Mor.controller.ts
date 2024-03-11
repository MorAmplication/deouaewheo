import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";

@swagger.ApiTags("mors")
@common.Controller("mors")
export class MorController extends CONTROLLER_BASE {
  constructor(protected readonly service: MorService) {
    super(service);
  }

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
