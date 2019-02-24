import { Deserializable } from "src/app/shared/deserializable.model";

export class Invite implements Deserializable {
  email: string;
  invitable_id: number;
  invitable_type: string = 'Party';

  deserialize(params: any): Invite {
    Object.assign(this, params);
    return this;
  }
}
