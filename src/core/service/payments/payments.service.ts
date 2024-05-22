import { Injectable } from "@angular/core";
import { PaymentRepository } from "../../repository/payment/payments.repository";
import { Payment } from "src/core/domain/payment/payment";
import { Observable } from "rxjs";
import TableData, { TableCell } from "src/ui/components/table/models/table-data.interface";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(
    private paymentRepository: PaymentRepository
  ) { }

  parseToTable(payments: Payment[]) {

  }

  getAll(): Observable<Payment[]> {
    try {
      return this.paymentRepository.get();
    } catch (error) {
      console.error(error);
      throw new Error(`Payment service is not available!`);
    }
  }
}
