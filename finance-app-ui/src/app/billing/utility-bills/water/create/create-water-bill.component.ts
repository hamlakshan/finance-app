import { Component, OnInit } from "@angular/core";
import {WaterBill} from "../../../../models/data-models";
import {WaterBillsService} from "../../../../services/water-bill.service";
import {Router} from "@angular/router";

@Component({
  selector: "app-create-water-bill",
  templateUrl: "./create-water-bill.component.html",
  styleUrls: ["./create-water-bill.component.scss"]
})
export class CreateWaterBillComponent implements OnInit {

  isAccountNoError: boolean;
    isPeriodError: boolean;
    isPreviousReadingError: boolean;
    isCurrentReadingError: boolean;
    isNoOfUnitsError: boolean;
    isAmountError: boolean;
    isLocationError: boolean;

    accountNoError: string;
    previousReadingError: string;
    currentReadingError: string;
    noOfUnitsError: string;
    amountError: string;
    locationError: string;
    periodError: string;

    private waterBill: WaterBill;
    private disableAddButton: boolean

  constructor(private waterBillsService: WaterBillsService, private _router: Router) {

  }

  ngOnInit() {
      this.waterBill = new WaterBill();
      this.clearForm();
      this.disableAddButton = false;
  }

    onSubmition(waterBillForm) {
//when form is submitted
        if (this.waterBill.billNo != null && this.waterBill.billNo != "" &&
            this.waterBill.location != null && this.waterBill.location != "" &&
            this.waterBill.previousReading != null &&
            this.waterBill.currentReading != null &&
            this.waterBill.noOfUnits != null &&
            this.waterBill.amount != null &&
            this.waterBill.location != null && this.waterBill.location != "") {

            this.waterBill.traineeStaffId = 1;
            this.waterBillsService.insertWaterBill(this.waterBill);
        }else {
            if (this.waterBill.billNo.length == 0){
                this.isAccountNoError = true;
                this.accountNoError = "Bill No cannot be empty"
            }else{
                this.isAccountNoError = false;
            }
            if (this.waterBill.period.length == 0){
                this.isPeriodError = true;
                this.periodError = "Period cannot be empty"
            }else{
                this.isPeriodError = false;
            }
            if (this.waterBill.previousReading == null){
                this.isPreviousReadingError = true;
                this.previousReadingError = "Previous Reading cannot be empty"
            }else{
                this.isPreviousReadingError = false;
            }
            if (this.waterBill.currentReading == null){
                this.isCurrentReadingError = true;
                this.currentReadingError = "Current Reading cannot be empty"
            }else{
                this.isCurrentReadingError = false;
            }
            if (this.waterBill.noOfUnits == null){
                this.isNoOfUnitsError = true;
                this.noOfUnitsError = "No of Units cannot be empty"
            }else{
                this.isNoOfUnitsError = false;
            }
            if (this.waterBill.amount == null){
                this.isAmountError = true;
                this.amountError = "Amount cannot be empty"
            }else{
                this.isAmountError = false;
            }
            if (this.waterBill.location.length == 0){
                this.isLocationError = true;
                this.locationError = "Bill No cannot be empty"
            }else{
                this.isLocationError = false;
            }
            this.disableAddButton = false;

        }

    }

  isAccountNoValid(accoutNo) {
//when the accout no is ented do the acount no check.
        //shold be a no in the database
        if (accoutNo.length == 0) {
            this.isAccountNoError = true;
            this.accountNoError = 'Bill no can not be empty';
        } else {
            this.isAccountNoError = false;
            this.accountNoError = '';
        }
    }

    isPeriodValid(period) {
        //shold be a no in the database
        if (period.length == 0) {
            this.isPeriodError = true;
            this.periodError = 'Period can not be empty';
        } else {
            this.isPeriodError = false;
            this.periodError = '';
        }

    }

    isPreviousReadingValid(previousReading) {
        //shold be a no in the database
        if (previousReading.length == 0) {
            this.isPreviousReadingError = true;
            this.previousReadingError = 'Previous Reading can not be empty';
        } else {
            this.isPreviousReadingError = false;
            this.previousReadingError = '';
        }
    }

    isCurrentReadingValid(currentReading) {
        //shold be a no in the database
        if (currentReading.length == 0) {
            this.isCurrentReadingError = true;
            this.currentReadingError = 'Current Reading can not be empty';
        } else {
            this.isCurrentReadingError = false;
            this.currentReadingError = '';
        }
    }

    isNoOfUnitsValid(noOfUnits) {
        //shold be a no in the database
        if (noOfUnits.length == 0) {
            this.isNoOfUnitsError = true;
            this.noOfUnitsError = 'No of Units can not be empty';
        } else {
            this.isNoOfUnitsError = false;
            this.noOfUnitsError = '';
        }
    }

    isAmountValid(amount) {
        //shold be a no in the database
        if (amount.length == 0) {
            this.isAmountError = true;
            this.amountError = 'Amount can not be empty';
        } else {
            this.isAmountError = false;
            this.amountError = '';
        }
    }

    isLocationValid(location) {
        //shold be a no in the database
        if (location.length == 0) {
            this.isLocationError = true;
            this.locationError = 'Location can not be empty';
        } else {
            this.isLocationError = false;
            this.locationError = '';
        }
    }

    private clearForm() {
        this.waterBill.amount = null;
        this.waterBill.currentReading = null;
        this.waterBill.previousReading = null;
        this.waterBill.location = '';
        this.waterBill.period = '';
        this.waterBill.noOfUnits = null;
        this.waterBill.billNo = '';
        this.clearErrors();
    }

    private clearErrors() {
        this.isAccountNoError = false;
        this.isPeriodError = false;
        this.isPreviousReadingError = false;
        this.isCurrentReadingError = false;
        this.isNoOfUnitsError = false;
        this.isAmountError = false;
        this.isLocationError = false;
        this.accountNoError = "";
        this.periodError = "";
        this.previousReadingError = "";
        this.currentReadingError = "";
        this.noOfUnitsError = "";
        this.accountNoError = "";
        this.locationError = "";
    }

}
