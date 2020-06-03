import {db} from "./db"
import { Role, RoleRow } from "../models/user-role"

export function validateLogin(credentials:any): Promise<Role>{
    const sql = `select ers_user_roles.user_role from ers_user_roles join ers_users on ers_users.ers_users_id = ers_user_roles.ers_user_role_id 
    where ers_users.ers_username =$1 and ers_users.ers_password=$2 ;`;
    return db.query<RoleRow>(sql,[credentials.ers_username,credentials.ers_password])
        .then(result => result.rows.map(r=> Role.from(r))[0]);
}
