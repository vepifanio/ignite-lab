import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Product {
  @Field(() => ID)
  id: String;

  @Field()
  title: String;

  @Field()
  slug: String;
}
