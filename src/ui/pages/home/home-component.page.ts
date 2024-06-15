import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import { first, map, take } from 'rxjs/operators';
import { User } from 'src/core/domain/user/user';
import { PaymentService } from 'src/core/service/payments/payments.service';
import { UserService } from 'src/core/service/users/users.service';
import { HeaderComponent } from 'src/ui/components/header/header.component';
import { TableComponent } from 'src/ui/components/table/table.component';
import { SpacingDirective } from 'src/ui/directives/spacing.directive';
import { Payment } from './../../../core/domain/payment/payment';
import TableData from 'src/ui/components/table/models/table-data.interface';
import { PaymentParser } from 'src/core/parser/payment/payment.parser';

@Component({
  standalone: true,
  imports: [
    TableComponent,
    HeaderComponent,
    SpacingDirective,
    MatButtonModule,
    CommonModule
  ],
  templateUrl: './home-component.page.html',
  styleUrls: ['home-component.page.scss'],
})
export class HomeComponentPage implements OnChanges {
  loading = false;
  users: User[];
  title = signal(`Lista de Pagamentos`);

  protected paymentsSubject = new BehaviorSubject<TableData<Payment>>({titles: [], values: []});
  protected payments$ = this.paymentsSubject.asObservable();

  private paymentService = inject(PaymentService);
  private paymentParser = inject(PaymentParser);

  constructor(private userService: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy() {
    this.paymentsSubject.unsubscribe();
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });

    this.paymentService.getAll()
    .pipe(map(payments => this.paymentParser.parseListAsTable(payments)))
    .subscribe(
      payments =>
        this.paymentsSubject.next(payments)
    );
  }


  addPayment() {
    // this.paymentsSubject
    // .pipe(take(1))
    // .subscribe((table) => table.values.push(new Payment("5", "Diogo Camilo", "@diogocamilo", "Programador", 100.0, "29/09/2022", true)));
  }
}
