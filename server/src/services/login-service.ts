import {Role} from "../models/user-role"
import * as loginDao from '../daos/login-Dao';


export function validateLogin(credentials:any):Promise<Role>{
    return loginDao.validateLogin(credentials)
}