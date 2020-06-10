import {db} from "./db"
import { ContentRow } from "../models/content";
import { Content } from "../models/content";

export function postContent(): Promise<Content[]>{
    const sql = `select * from ers_reimbursemenet, ers_reimbursement_type, ers_reimbursement_status 
    where ers_reimbursemenet.reimb_type_id = ers_reimbursement_type.reimb_type_id and ers_reimbursemenet.reimb_status_id = ers_reimbursement_status.reimb_status_id;`;
    return db.query<ContentRow>(sql,[])
        .then(result => result.rows.map(r=> Content.from(r)));
}

export function postContentID(id:number): Promise<Content[]>{
    const sql = `select * from ers_reimbursemenet, ers_reimbursement_type, ers_reimbursement_status 
    where ers_reimbursemenet.reimb_type_id = ers_reimbursement_type.reimb_type_id and ers_reimbursemenet.reimb_status_id = ers_reimbursement_status.reimb_status_id and reimb_author=$1;`;
    return db.query<ContentRow>(sql,[id])
        .then(result => result.rows.map(r=> Content.from(r)));
}
