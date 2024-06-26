import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '@uiservices/loading.service';
import { delay, finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  
    const loadingService = inject(LoadingService);
    console.log("Teste loading 2");
    
    loadingService.show();
  
    return next(req).pipe(
        finalize(() => loadingService.hide())
    );
};