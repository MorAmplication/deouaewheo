import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreateUserArgs } from "../user/base/CreateUserArgs";
import { User } from "../user/base/User";

@Injectable()
export class AmitService {
  constructor(protected readonly prisma: PrismaService) {}
  async Create(args: CreateUserArgs): Promise<User> {
    throw new Error("Not implemented");
  }
}
