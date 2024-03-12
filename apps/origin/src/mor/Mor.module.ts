import { Module } from "@nestjs/common";
import { MorService } from "./Mor.service";
import { MorController } from "./Mor.controller";
import { MorResolver } from "./Mor.resolver";

@Module({
  controllers: [MorController],
  providers: [MorService, MorResolver],
  exports: [MorService],
})
export class MorModule {}
