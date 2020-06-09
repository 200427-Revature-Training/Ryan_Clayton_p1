import {db} from "./db"
import { ContentRow } from "../models/content";
import { Content } from "../models/content";

export function postContent(): Promise<Content>{
    const sql = `select * from ers_reimbursemenet;`;
    return db.query<ContentRow>(sql,[])
        .then(result => result.rows.map(r=> Content.from(r))[0]);
}

export function postContentID(id:number): Promise<Content>{
    const sql = `select * from ers_reimbursemenet where reimb_author=$1;`;
    return db.query<ContentRow>(sql,[id])
        .then(result => result.rows.map(r=> Content.from(r))[0]);
}
