import { Payment } from "src/core/domain/payment/payment";
import { AbstractParser } from "../base/abstract.parser";
import { Injectable } from "@angular/core";

@Injectable({providedIn: `root`})
export class PaymentParser extends AbstractParser<Payment>{
    parse(payload: any): Payment {
        const payment = new Payment();

        payment.setId(payload.id);
        payment.setName(payload.name);
        payment.setUsername(payload.username);
        payment.setTitle(payload.title);
        payment.setValue(payload.value);
        payment.setDate(payload.date);
        payment.setImage(payload.image);
        payment.setIsPayed(payload.isPayed);

        return payment;
    }
}
