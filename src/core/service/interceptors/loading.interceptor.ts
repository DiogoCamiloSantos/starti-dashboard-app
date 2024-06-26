import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '@uiservices/loading.service';
import { delay, finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  
    const loadingService = inject(LoadingService);    
    loadingService.show();
  
    return next(req).pipe(
        delay(3000),
        finalize(() => loadingService.hide())
    );
};