import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MorCreateInput } from "../mor/base/MorCreateInput";
import { MorCreateResults } from "../mor/base/MorCreateResults";

@Injectable()
export class MorService {
  constructor(protected readonly prisma: PrismaService) {}
  async Create(args: MorCreateInput): Promise<MorCreateResults> {
    throw new Error("Not implemented");
  }
}
