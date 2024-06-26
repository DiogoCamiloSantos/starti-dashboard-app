import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
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
export class DashboardComponent implements OnInit {
  protected paymentService = inject(PaymentService);

  constructor() { }

  ngOnInit(): void { }
}
