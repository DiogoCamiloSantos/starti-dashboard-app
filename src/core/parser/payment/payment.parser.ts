import { Payment } from "src/core/entities/payment/payment";
import { AbstractParser, PayloadList } from "../base/abstract.parser";
import { Injectable } from "@angular/core";
import ITableData, { ITableCell } from "src/ui/components/table/interfaces/table-data.interface";

@Injectable({providedIn: `root`})
export class PaymentParser extends AbstractParser<Payment> {
    parse(payload: any): Payment {
        const payment = new Payment();

        payment.setName(`${payload.firstName} ${payload.lastName}`);
        payment.setUsername(payload.email);
        payment.setTitle(payload.title);
        payment.setValue(10000);
        payment.setCreatedAt(payload.createdAt);
        payment.setUpdatedAt(payload.createdAt);
        payment.setIsPayed(true);

        return payment;
    }

    parseListAsTable(payload: PayloadList): ITableData {
      return {titles: [], values: []};
    }
}
