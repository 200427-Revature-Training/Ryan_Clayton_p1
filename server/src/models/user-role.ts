export class Role{
    role: string;
    id:number;

    static from(obj:RoleRow){
        const role = new Role(
            obj.user_role, obj.user_id
        );
        return role
    }
    constructor (role: string,id:number){
        this.role = role;
        this.id = id;
    }
}
export interface RoleRow{
    user_role: string;
    user_id:number;
}