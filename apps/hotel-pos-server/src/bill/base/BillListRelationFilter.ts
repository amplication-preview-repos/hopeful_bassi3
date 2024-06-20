/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BillWhereInput } from "./BillWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class BillListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => BillWhereInput,
  })
  @ValidateNested()
  @Type(() => BillWhereInput)
  @IsOptional()
  @Field(() => BillWhereInput, {
    nullable: true,
  })
  every?: BillWhereInput;

  @ApiProperty({
    required: false,
    type: () => BillWhereInput,
  })
  @ValidateNested()
  @Type(() => BillWhereInput)
  @IsOptional()
  @Field(() => BillWhereInput, {
    nullable: true,
  })
  some?: BillWhereInput;

  @ApiProperty({
    required: false,
    type: () => BillWhereInput,
  })
  @ValidateNested()
  @Type(() => BillWhereInput)
  @IsOptional()
  @Field(() => BillWhereInput, {
    nullable: true,
  })
  none?: BillWhereInput;
}
export { BillListRelationFilter as BillListRelationFilter };