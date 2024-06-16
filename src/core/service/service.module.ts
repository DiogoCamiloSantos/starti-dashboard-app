import { ModuleWithProviders, NgModule } from "@angular/core";
import { RepositoryModule } from "../repository/repository.module";
import { PaymentService } from "./payments/payments.service";


@NgModule({
    imports: [RepositoryModule.forRoot()]
})
export class ServiceModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: ServiceModule,
            providers: [
                PaymentService
            ]
        }
    }
}