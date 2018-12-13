import { Deserializable } from '../../shared/deserializable.model';
import { Activity } from 'src/app/activities/shared/activity.model';
import { Price } from 'src/app/activities/shared/price.model';

export class Quotation implements Deserializable {
  id: number;
  group_size: number;
  user_email: string;
  activities: Activity[];
  prices: Price[];

  deserialize(params: any): Quotation {
    Object.assign(this, params);
    return this;
  }
}
