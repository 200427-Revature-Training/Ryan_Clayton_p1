export class Content {
    reimb_id: number;
    reimb_amount: number;
    reimb_submitted: Date;
    reimb_resolved: Date;
    reimb_description: string;
    reimb_receipt: Blob;
    reimb_author: number;
    reimb_resolver: number;
    reimb_status_id: number;
    reimb_type_id: number;

    static from(obj: ContentRow) {
        const content = new Content(
               obj.reimb_id, obj.reimb_amount,obj.reimb_submitted,obj.reimb_resolved,
               obj.reimb_description, obj.reimb_receipt, obj.reimb_author,obj.reimb_resolver,
               obj.reimb_status_id, obj.reimb_type_id
            );
        return content
    }
    constructor(reimbId: number,
        reimbAmount: number,
        reimbSubmitted: Date,
        reimbResolved: Date,
        reimbDescription: string,
        reimbReceipt: Blob,
        reimbAuthor: number,
        reimbResolver: number,
        reimbStatusId: number,
        reimbTypeId: number) {
        this.reimb_id = reimbId
        this.reimb_amount = reimbAmount
        this.reimb_submitted = reimbSubmitted
        this.reimb_resolved = reimbResolved
        this.reimb_description = reimbDescription
        this.reimb_receipt = reimbReceipt
        this.reimb_author = reimbAuthor
        this.reimb_resolver = reimbResolver
        this.reimb_status_id = reimbStatusId
        this.reimb_type_id = reimbTypeId
    }
}
export interface ContentRow {
    reimb_id: number,
    reimb_amount: number,
    reimb_submitted: Date,
    reimb_resolved: Date,
    reimb_description: string,
    reimb_receipt: Blob,
    reimb_author: number,
    reimb_resolver: number,
    reimb_status_id: number,
    reimb_type_id: number,
}