import { Deserializable } from '../../shared/deserializable.model';
import { Activity } from '../../activities/shared/activity.model';

export class Party implements Deserializable {
  id: number;
  title: string;
  // datetime: string;
  activities: Activity[];

  deserialize(params: any): Party {
    Object.assign(this, params)
    return this
  }
}