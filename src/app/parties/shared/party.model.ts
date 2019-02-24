import { Deserializable } from '../../shared/deserializable.model';
import { Activity } from '../../activities/shared/activity.model';
import { User } from '../../users/shared/user.model';

export class Party implements Deserializable {
  id: number;
  title: string;
  date: string;
  activities: Activity[];
  host: User;
  guide: User;
  customers: User[];

  deserialize(params: any): Party {
    Object.assign(this, params)
    return this
  }
}
