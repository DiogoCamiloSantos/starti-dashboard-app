import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';
import { Payment } from 'src/core/domain/payment/payment';
import { User } from 'src/core/domain/user/user';
import { PaymentService } from 'src/core/service/payments/payments.service';
import { UserService } from 'src/core/service/users/users.service';
import { HeaderComponent } from 'src/ui/components/header/header.component';
import { TableComponent } from 'src/ui/components/table/table.component';
import { SpacingDirective } from 'src/ui/directives/spacing.directive';


@Component({
  standalone: true,
  imports: [
    TableComponent,
    HeaderComponent,
    SpacingDirective,
    MatButtonModule
  ],
  templateUrl: './home-component.page.html',
  styleUrls: ['home-component.page.scss'],
})
export class HomeComponentPage {
  loading = false;
  users: User[];

  protected paymentsSubject = new BehaviorSubject<Payment[]>([]);
  protected payments$ = this.paymentsSubject.asObservable();

  private paymentService = inject(PaymentService);

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.loading = false;
      this.users = users;
    });


    this.paymentService.getAll().subscribe(
      payments =>
        this.paymentsSubject.next(payments)
    );
  }
}
