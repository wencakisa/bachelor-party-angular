import { Deserializable } from 'src/app/shared/deserializable.model';
import { Role } from 'src/app/authentication/shared/role';

export class User implements Deserializable {
    id: number;
    email: string;
    password: string;
    role: string;

    deserialize(params: any): User {
        Object.assign(this, params);
        return this;
    }
}
