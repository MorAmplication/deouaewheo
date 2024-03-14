import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";

@ObjectType()
class Customer {
    @Field(() => enum)
    @ApiProperty({
        required: true,
        type: () => enum
    })
    genderEnum!: enumName;
}

export { Customer as Customer };