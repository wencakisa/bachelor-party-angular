export class Quotation {
  group_size: number;
  user_email: string;
  activity_ids: number[];

  deserialize(params: any): Quotation {
    Object.assign(this, params);
    return this;
  }
}
