import { ModuleWithProviders, NgModule } from "@angular/core";
import { RepositoryModule } from "../repository/repository.module";
import { PaymentService } from "./payments/payments.service";
import { LoadingService } from "@uiservices/loading.service";


@NgModule({
    imports: [RepositoryModule.forRoot()]
})
export class ServiceModule {
    static forRoot(): ModuleWithProviders<any> {
        return {
            ngModule: ServiceModule,
            providers: [
                PaymentService,
                LoadingService
            ]
        }
    }
}