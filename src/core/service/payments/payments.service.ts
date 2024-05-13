import { Injectable } from "@angular/core";
import { PaymentRepository } from "../../repository/payment/payments.repository";
import { Payment } from "src/core/domain/payment/payment";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PaymentService {
    constructor(
        private paymentRepository: PaymentRepository
    ) { }

    // async getAll(): Promise<Payment[]> {
    //     try {
    //         return await this.paymentRepository.get();
    //     } catch (error) {
    //         console.error(error);
    //         throw new Error(`Payment service is not available!`);
    //     }
    // }

    getAll(): Observable<Payment[]> {
      try {
          return this.paymentRepository.get();
      } catch (error) {
          console.error(error);
          throw new Error(`Payment service is not available!`);
      }
  }

}
