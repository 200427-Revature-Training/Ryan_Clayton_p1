import { Content } from "../models/content";
import * as contentDao from '../daos/content-dao'



export function postContent():Promise<Content[]>{
    return contentDao.postContent()
}
export function postContentID(id:number):Promise<Content[]>{
    return contentDao.postContentID(id)
}
export function putRequest(payload:any):Promise<Content>{
    return contentDao.putRequest(payload)
}
export function approve(payload:any):Promise<Content>{
    return contentDao.approveRequest(payload)
}
export function reject(payload:any):Promise<Content>{
    return contentDao.rejectRequest(payload)
}
export function postPreviousContent():Promise<Content[]>{
    return contentDao.postPreviousContent()
}
export function postPreviousContentID(id:number):Promise<Content[]>{
    return contentDao.postPreviousContentID(id)
}