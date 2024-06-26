import { Injectable } from "@angular/core";
import { Observable, delay, map, of } from "rxjs";
import { Payment } from "src/core/entities/payment/payment";
import { BackendUrl } from "src/core/gateway/config/url/back-end.url";
import ITableData from "src/ui/components/table/interfaces/table-data.interface";
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

      return request.getObs(new BackendUrl("UserProfile")).pipe(map((response: any) => {
        const data = this.paymentParser.parseList(response);
        
        return data;
      }));
    }
}
