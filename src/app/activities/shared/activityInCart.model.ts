import { Activity } from './activity.model';
import { Price } from './price.model';

export class ActivityInCart {
  id: number;
  title: string;
  duration: number;
  price: Price;

  private activity: Activity;

  constructor(activity: Activity) {
    this.id = activity.id;
    this.title = activity.title;
    this.duration = activity.duration;
    this.activity = activity;
  }

  setPrice(price: Price): void {
    if (this.activity.prices.length === 1) {
      this.price = this.activity.prices[0];
    } else {
      this.price = price;
    }
  }
}
