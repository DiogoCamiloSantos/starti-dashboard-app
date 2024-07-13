import { Injectable } from '@angular/core';
import { Payment } from '@entities/payment/payment';
import { map, Subject, take } from 'rxjs';
import ITableData from 'src/ui/components/table/interfaces/table-data.interface';
import { TableData } from 'src/ui/components/table/models/table-data.model';
import { PaymentRepository } from '../../repository/payment/payments.repository';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private paymentsSubject = new Subject<ITableData>();
  readonly payments$ = this.paymentsSubject.asObservable();

  constructor(private paymentRepository: PaymentRepository) {}

  getAll() {
    try {
      return this.paymentRepository
        .get()
        .pipe(
          take(1),
          map((payments) => new TableData(payments, Payment))
        )
        .subscribe((payments) => this.paymentsSubject.next(payments));
    } catch (error) {
      console.error(error);
      throw new Error(`Payment service is not available!`);
    }
  }

  getBy(search: string) {
    try {
      return this.paymentRepository
        .getBy(search)
        .pipe(
          take(1),
          map((payments) => new TableData(payments, Payment))
        )
        .subscribe((payments) => this.paymentsSubject.next(payments));
    } catch (error) {
      console.error(error);
      throw new Error(`Payment service is not available!`);
    }
  }
}
