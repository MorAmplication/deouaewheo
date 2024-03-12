import { Module } from "@nestjs/common";
import { AmitService } from "./amit.service";
import { AmitController } from "./amit.controller";
import { AmitResolver } from "./amit.resolver";

@Module({
  controllers: [AmitController],
  providers: [AmitService, AmitResolver],
  exports: [AmitService],
})
export class AmitModule {}
