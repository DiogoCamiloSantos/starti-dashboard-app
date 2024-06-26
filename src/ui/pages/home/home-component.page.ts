import { CommonModule } from '@angular/common';
import { Component, OnChanges, SimpleChanges, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterOutlet } from '@angular/router';
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
    MatButtonModule,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './home-component.page.html',
  styleUrls: ['home-component.page.scss'],
})
export class HomeComponentPage implements OnChanges {
  protected paymentService = inject(PaymentService);

  constructor(private userService: UserService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnDestroy() {
    this.paymentService.paymentsSubject.unsubscribe();
  }

  ngOnInit() {
    this.paymentService.getAll();
  }
}
