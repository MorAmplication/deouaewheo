import * as graphql from "@nestjs/graphql";

@graphql.Resolver(() => ENTITY)
export class MorResolver extends RESOLVER_BASE {
  constructor(protected readonly service: MorService) {
    super(service);
  }

  @graphql.Mutation(() => MorCreateResults)
  async Create(
    @graphql.Args()
    args: MorCreateInput
  ): Promise<MorCreateResults> {
    return this.service.Create(args);
  }
}
