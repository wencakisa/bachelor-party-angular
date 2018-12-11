import { Price } from './price.model';
import { Deserializable } from '../../shared/deserializable.model';

export class Activity implements Deserializable {
  id: number;
  title: string;
  subtitle: string;
  details: string;
  duration: number;
  transfer_included: boolean;
  guide_included: boolean;
  image_url: string;
  time_type: string;
  prices: Price[];

  deserialize(params: any): Activity {
    Object.assign(this, params);
    return this;
  }

  getLowestPriceAmount(): number {
    if (this.prices.length > 1) {
      return this.prices.map(price => price.amount).reduce((a, b) => Math.min(a, b));
    } else if (this.prices.length === 1) {
      return this.prices[0].amount;
    } else {
      return -1;
    }
  }
}
