import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from 'src/app/app.component';
import { AppContext } from '../../context/app-context';
import { ServiceModule } from '../service.module';
import { PaymentService } from "./payments.service";
import { Payment } from 'src/core/domain/payment/payment';

describe("PaymentService", () => {
  let service: PaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientModule,
        ServiceModule.forRoot()
      ],
      providers: [
        AppContext
      ]
    });
    service = TestBed.inject(PaymentService);
  });

  describe('Validate service instance', () => {
    it('should ...', () => {
      expect(service).toBeTruthy();
    });
  });


  describe('Get list data', () => {
    it('show list', async () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;

      const list = await service.getAll();


      app.payments = list;

      fixture.detectChanges();



      expect(list).toBeTruthy(list instanceof Payment);

      return list;
    });
  });
});
