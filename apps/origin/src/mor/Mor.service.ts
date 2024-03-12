import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MorCreateInput } from "../mor/MorCreateInput";
import { MorCreateResults } from "../mor/MorCreateResults";

@Injectable()
export class MorService {
  constructor(protected readonly prisma: PrismaService) {}
  async Create(args: MorCreateInput): Promise<MorCreateResults> {
    throw new Error("Not implemented");
  }
}
