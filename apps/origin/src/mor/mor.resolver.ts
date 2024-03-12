import * as graphql from "@nestjs/graphql";
import { MorCreateInput } from "../mor/MorCreateInput";
import { MorCreateResults } from "../mor/MorCreateResults";
import { MorService } from "./mor.service";

export class MorResolver {
  constructor(protected readonly service: MorService) {}

  @graphql.Mutation(() => MorCreateResults)
  async Create(
    @graphql.Args()
    args: MorCreateInput
  ): Promise<MorCreateResults> {
    return this.service.Create(args);
  }
}
