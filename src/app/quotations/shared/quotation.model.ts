import { Deserializable } from '../../shared/deserializable.model';

export class Quotation implements Deserializable {
  group_size: number;
  user_email: string;
  activity_ids: number[];
  prices_ids: number[];

  deserialize(params: any): Quotation {
    Object.assign(this, params);
    return this;
  }
}
