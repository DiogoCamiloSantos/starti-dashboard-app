import { Payment } from "src/core/domain/payment/payment";
import { AbstractParser, PayloadList } from "../base/abstract.parser";
import { Injectable } from "@angular/core";
import TableData, { TableCell } from "src/ui/components/table/models/table-data.interface";

@Injectable({providedIn: `root`})
export class PaymentParser extends AbstractParser<Payment> {
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

    parseListAsTable(payload: PayloadList): TableData<Payment> {
      const payments = payload as Payment[];

      const values = payments.map<TableCell[]>(payment => ([
        { value: payment.getName(), subtitle: payment.getUsername() },
        { value: payment.getTitle() },
        { value: payment.getDate(), subtitle: '10:00 AM' },
        { value: payment.getValue() },
        { value: payment.getIsPayed() }
      ]));

      return {
        titles: ["Usuário", "Título", "Data", "Valor", "Pago"],
        values
      }
    }
}
