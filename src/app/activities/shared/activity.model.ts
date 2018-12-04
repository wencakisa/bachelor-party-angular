import { Price } from './price.model';
import { Deserializable } from '../../shared/deserializable.model';

export class Activity implements Deserializable {
  id: number;
  title: string;
  subtitle: string;
  details: string;
  duration: number;
  transfer_provided: boolean;
  guide_provided: boolean;
  image_url: string;
  by: string;
  prices: Price[];

  deserialize(params: any): Activity {
    Object.assign(this, params);
    return this;
  }

  getLowestPriceAmount(): number {
    return this.prices.map(price => price.amount).reduce((a, b) => Math.min(a, b))
  }
}
