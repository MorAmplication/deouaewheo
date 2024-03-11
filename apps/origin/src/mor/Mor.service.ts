import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MorService } from "./apps/origin/src/Mor/Mor.service.ts";

@Injectable()
export class MorService {
  constructor(protected readonly prisma: PrismaService) {}
  async Create(args: MorCreateInput): Promise<MorCreateResults> {
    throw new Error("Not implemented");
  }
}
