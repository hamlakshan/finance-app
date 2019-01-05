import {Component, Input, OnInit} from "@angular/core";
import {BillToApprove, ElectricityBill} from "../../../../models/data-models";
import {ApprovalService} from "../../../../services/approval.service";

@Component({
    selector: "app-certify-electricity-bill",
    templateUrl: "./certify-electricity-bill.component.html",
    styleUrls: ["./certify-electricity-bill.component.scss"]
})
export class CertifyElectricityBillComponent implements OnInit {


    @Input()
    bill: ElectricityBill;

    constructor(private _approvalService: ApprovalService) {
    }

    ngOnInit() {
    }

    approve() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "electricitybill";
        approvedBill.status = "approved";
        approvedBill.comment = "approved successfully";
        approvedBill.billId = this.bill.billNo;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill);
    }

    reject() {
        const approvedBill = new BillToApprove();
        approvedBill.billType = "electricitybill";
        approvedBill.status = "rejected";
        approvedBill.comment = "rejected the bill";
        approvedBill.billId = this.bill.billNo;
        approvedBill.userId = 1;
        this._approvalService.approveBill(approvedBill);
    }

}
