import Mongoose from 'mongoose';
import { schema, field, buildSchema } from 'mongoose-schema-decorators';

@schema({ _id: false })
class Oauth2 {
  @field
  public access_token: string;

  @field
  public refresh_token: string;

  @field
  public id: string;
}
