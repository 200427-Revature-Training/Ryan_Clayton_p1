export class Role{
    role: string;

    static from(obj:RoleRow){
        const role = new Role(
            obj.user_role
        );
        return role
    }
    constructor (role: string){
        this.role = role;
    }
}
export interface RoleRow{
    user_role: string;
}