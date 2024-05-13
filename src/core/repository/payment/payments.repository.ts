import { Injectable } from "@angular/core";
import { Observable, delay, of } from "rxjs";
import { Payment } from "src/core/domain/payment/payment";
import { RemoteGatewayFactory } from "../../gateway/remote-gateway-factory";
import { PaymentParser } from "../../parser/payment/payment.parser";

@Injectable({providedIn: `root`})
export class PaymentRepository {
    constructor(
        private remoteGatewayFactory: RemoteGatewayFactory,
        private paymentParser: PaymentParser
    ) {}

    // async get(): Promise<Payment[]> {
    //     const request = this.remoteGatewayFactory.createDefaultRemoteGateway();
    //     const response = payments;

    //     const data = this.paymentParser.parseList(response);

    //     return data;
    // }

    get(): Observable<Payment[]> {
      const request = this.remoteGatewayFactory.createDefaultRemoteGateway();
      const response = payments;

      const data = this.paymentParser.parseList(response);

      return of(payments).pipe(delay(2000));
  }
}

const payments = [
  new Payment("1", "Diogo Camilo", "@diogocamilo", "Programador", 100.0, "29/09/2022", true),
  new Payment("2", "Luciana Oliveira", "@lucy", "Programadora", 200.0, "29/09/2022", false),
  new Payment("3", "Diogo Camilo", "@diogocamilo", "Programador", 100.0, "29/09/2022", true),
  new Payment("4", "Luciana Oliveira", "@lucy", "Programadora", 200.0, "29/09/2022", false),
  new Payment("5", "Diogo Camilo", "@diogocamilo", "Programador", 100.0, "29/09/2022", true),
  new Payment("6", "Luciana Oliveira", "@lucy", "Programadora", 200.0, "29/09/2022", false)
]
