import { Role } from './role';

export class RoleFactory {
    public static createRole(name: string, route: string): Role {
        return new Role(name, route);
    }
}
