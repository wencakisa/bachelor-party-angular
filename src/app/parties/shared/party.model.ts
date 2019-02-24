import { Deserializable } from '../../shared/deserializable.model';
import { Activity } from '../../activities/shared/activity.model';
import { User } from '../../users/shared/user.model';
import { Invite } from 'src/app/invites/shared/invite.model';

enum AcceptanceStatus {
  Pending = 'pending',
  Accepted = 'accepted'
}

export class Party implements Deserializable {
  id: number;
  title: string;
  date: string;
  activities: Activity[];
  host: User;
  guide: User;
  customers: User[];
  invites: Invite[];

  deserialize(input: any): this {
    Object.assign(this, input)
    return this
  }

  getParticipants(): Object[] {
    let participants = []
    
    this.customers.map(user => user.email).forEach(email => {
      participants.push(
        {
          email: email,
          acceptanceStatus: AcceptanceStatus.Accepted
        }
      )
    })

    this.invites.map(invite => invite.email).forEach(email => {
      participants.push(
        {
          email: email,
          acceptanceStatus: AcceptanceStatus.Pending
        }
      )
    })
    
    return participants.sort((a, b) => a.email - b.email);
  }
}
