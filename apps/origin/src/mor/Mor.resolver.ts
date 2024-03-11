import * as graphql from "@nestjs/graphql";

@graphql.Resolver(() => ENTITY)
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
