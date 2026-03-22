import {  ModuleWithProviders, NgModule } from "@angular/core";
import { RemoteGatewayFactory } from "../gateway/remote-gateway-factory";
import { PaymentParser } from "../parser/payment/payment.parser";
import { PaymentRepository } from "./payment/payments.repository";

@NgModule({
    imports: [
       
    ],
    providers: [
        RemoteGatewayFactory, PaymentParser
    ]
})
export class RepositoryModule {
    static forRoot(): ModuleWithProviders<RepositoryModule> {
        return {
            ngModule: RepositoryModule,
            providers: [
                PaymentRepository
            ]
        }
    }
}