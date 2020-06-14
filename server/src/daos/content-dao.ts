import {db} from "./db"
import { ContentRow } from "../models/content";
import { Content } from "../models/content";
import jwt_decode from 'jwt-decode'


export function postContent(): Promise<Content[]>{
    const sql = `select * from ers_reimbursement, ers_reimbursement_type, ers_reimbursement_status 
    where ers_reimbursement.reimb_type_id = ers_reimbursement_type.reimb_type_id and ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id and
     ers_reimbursement.reimb_status_id = 1;`;
    return db.query<ContentRow>(sql,[])
        .then(result => result.rows.map(r=> Content.from(r)));
}

export function postContentID(id:number): Promise<Content[]>{
    const sql = `select * from ers_reimbursement, ers_reimbursement_type, ers_reimbursement_status 
    where ers_reimbursement.reimb_type_id = ers_reimbursement_type.reimb_type_id and ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id and reimb_author=$1 and
    ers_reimbursement.reimb_status_id = 1;`;
    return db.query<ContentRow>(sql,[id])
        .then(result => result.rows.map(r=> Content.from(r)));
}
export function putRequest(payload:any):Promise<Content>{
    const date = new Date();
    // '2016-06-22 23:10:25'
    const dateString = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    const sql = `insert into ers_reimbursement values(default, $1, $2, null, $3,$6,$4,
	null,1,(select reimb_type_id from ers_reimbursement_type ers where reimb_type =$5)) returning *;`;
    return db.query<ContentRow>(sql,[payload.value,dateString,payload.description,payload.id,payload.type,payload.image])
    .then(result => result.rows.map(r=> Content.from(r))[0]);
}
export function approveRequest(payload:any):Promise<Content>{
    const sql = `update ers_reimbursement set reimb_resolver = $1, reimb_resolved = $2, reimb_status_id = 2 where reimb_id = $3 returning *;`;
    const date = new Date();
    // '2016-06-22 23:10:25'
    const dateString = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    return db.query<ContentRow>(sql,[payload.manager_id,dateString,payload.req_id])
    .then(result => result.rows.map(r=> Content.from(r))[0]);
}
export function rejectRequest(payload:any):Promise<Content>{
    const sql = `update ers_reimbursement set reimb_resolver = $1, reimb_resolved = $2, reimb_status_id = 3 where reimb_id = $3 returning *;`;
    const date = new Date();
    // '2016-06-22 23:10:25'
    const dateString = date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
    return db.query<ContentRow>(sql,[payload.manager_id,dateString,payload.req_id])
    .then(result => result.rows.map(r=> Content.from(r))[0]);
}
export function postPreviousContent(): Promise<Content[]>{
    const sql = `select * from ers_reimbursement, ers_reimbursement_type, ers_reimbursement_status 
    where ers_reimbursement.reimb_type_id = ers_reimbursement_type.reimb_type_id and ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id and
     ers_reimbursement.reimb_status_id != 1;`;
    return db.query<ContentRow>(sql,[])
        .then(result => result.rows.map(r=> Content.from(r)));
}

export function postPreviousContentID(id:number): Promise<Content[]>{
    const sql = `select * from ers_reimbursement, ers_reimbursement_type, ers_reimbursement_status 
    where ers_reimbursement.reimb_type_id = ers_reimbursement_type.reimb_type_id and ers_reimbursement.reimb_status_id = ers_reimbursement_status.reimb_status_id and reimb_author=$1 and
    ers_reimbursement.reimb_status_id != 1;`;
    return db.query<ContentRow>(sql,[id])
        .then(result => result.rows.map(r=> Content.from(r)));
}