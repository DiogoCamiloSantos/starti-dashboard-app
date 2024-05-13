import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BehaviorSubject } from 'rxjs';
import { Payment } from 'src/core/domain/payment/payment';
import { RepositoryModule } from 'src/core/repository/repository.module';
import { PaymentService } from 'src/core/service/payments/payments.service';
import { ServiceModule } from 'src/core/service/service.module';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ServiceModule,
    RepositoryModule
  ],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {

  protected paymentsSubject = new BehaviorSubject<Payment[]>([]);
  protected payments$ = this.paymentsSubject.asObservable();

  private paymentService = inject(PaymentService);

  loadPayments() {
    this.paymentService.getAll().subscribe(
      payments =>
      this.paymentsSubject.next(payments)
    );
  }

  ngOnInit(): void {
    this.loadPayments();
  }

  ngOnDestroy(): void {
    this.paymentsSubject.unsubscribe();
  }
}
