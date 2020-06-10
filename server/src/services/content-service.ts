import { Content } from "../models/content";
import * as contentDao from '../daos/content-dao'



export function postContent():Promise<Content[]>{
    return contentDao.postContent()
}
export function postContentID(id:number):Promise<Content[]>{
    return contentDao.postContentID(id)
}