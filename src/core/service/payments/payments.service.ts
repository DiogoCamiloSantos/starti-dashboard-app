import { Injectable } from "@angular/core";
import { BehaviorSubject, map } from "rxjs";
import ITableData from "src/ui/components/table/interfaces/table-data.interface";
import { UserProfileTableData } from "src/ui/components/table/models/user-profile-table-data.model";
import { PaymentRepository } from "../../repository/payment/payments.repository";

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private paymentRepository: PaymentRepository) {}

  paymentsSubject = new BehaviorSubject<ITableData>({ titles: [], values: [] });
  payments$ = this.paymentsSubject.asObservable();

  getAll() {
    try {
      return this.paymentRepository
        .get()
        .pipe(map((payments) => new UserProfileTableData(payments)))
        .subscribe((payments) => this.paymentsSubject.next(payments));
        
    } catch (error) {
      console.error(error);
      throw new Error(`Payment service is not available!`);
    }
  }

  
}
