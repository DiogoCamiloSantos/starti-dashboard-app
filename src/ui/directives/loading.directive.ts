import { Directive, ElementRef, Renderer2, OnInit, OnDestroy } from '@angular/core';
import { LoadingService } from '@uiservices/loading.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appLoading]',
  standalone: true
})
export class LoadingDirective implements OnInit, OnDestroy {
  private subscription: Subscription;

  constructor(private el: ElementRef, private renderer: Renderer2, private loadingService: LoadingService) {}

  ngOnInit() {
    this.subscription = this.loadingService.loading$.subscribe(isLoading => {
        console.log("teste loading 1");
        
      if (isLoading) {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
      } else {
        this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
