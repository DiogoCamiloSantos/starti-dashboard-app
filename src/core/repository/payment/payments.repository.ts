import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { Payment } from "src/core/entities/payment/payment";
import { BackendUrl } from "src/core/gateway/config/url/back-end.url";
import { RemoteGatewayFactory } from "../../gateway/remote-gateway-factory";
import { PaymentParser } from "../../parser/payment/payment.parser";

@Injectable({providedIn: `root`})
export class PaymentRepository {
    constructor(
        private remoteGatewayFactory: RemoteGatewayFactory,
        private paymentParser: PaymentParser
    ) {}

    get(): Observable<Payment[]> {
      const request = this.remoteGatewayFactory.createDefaultRemoteGateway();

      return request
        .get(new BackendUrl('UserProfile'))
        .pipe(map((response: any) => this.paymentParser.parseList(response)));
    }

    getBy(search: string): Observable<Payment[]> {
      const request = this.remoteGatewayFactory.createDefaultRemoteGateway();

      return request
        .post(new BackendUrl('UserProfile'), { search })
        .pipe(map((response: any) => this.paymentParser.parseList(response)));
    }
}
