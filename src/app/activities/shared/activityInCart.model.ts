import { Activity } from './activity.model';
import { Price } from './price.model';

export class ActivityInCart extends Activity {
  price: Price;

  constructor(activity: Activity) {
    super();

    this.deserialize(activity);

    if (this.prices.length === 1) {
      this.price = this.prices[0];
    }
  }
}
