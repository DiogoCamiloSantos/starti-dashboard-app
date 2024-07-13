import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PaymentService } from '@services/payments/payments.service';
import { TableComponent } from 'src/ui/components/table/table.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [    
    MatButtonModule,
    CommonModule,
    TableComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  protected paymentService = inject(PaymentService);
  protected payments$ = this.paymentService.payments$;
  protected onSearch = (search: string) => this.paymentService.getBy(search);
}
