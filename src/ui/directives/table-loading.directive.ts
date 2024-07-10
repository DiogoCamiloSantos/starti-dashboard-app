import { Directive, ElementRef, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { LoadingService } from '@uiservices/loading.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[tableLoadingDirective]',
  standalone: true
})
export class TableLoadingDirective implements OnInit, OnDestroy {
  private loadingSubscription: Subscription;
  private loadingDiv: HTMLDivElement;
  private loadingService = inject(LoadingService);

  @Input() set appLoading(isLoading: boolean) {
    this.toggleLoading(isLoading);
  }

  constructor(private el: ElementRef) {}

  ngOnInit() {
    this.loadingSubscription = this.loadingService.loading$.subscribe(isLoading => {
      this.toggleLoading(isLoading);
    });
  }

  ngOnDestroy() {
    if (this.loadingSubscription) {
      this.loadingSubscription.unsubscribe();
    }
  }

  private toggleLoading(isLoading: boolean) {
    if (isLoading) {
      this.el.nativeElement.style.display = 'none';
      this.showLoadingIndicator();
    } else {
      this.el.nativeElement.style.display = '';
      this.hideLoadingIndicator();
    }
  }

  private showLoadingIndicator() {
    this.loadingDiv = document.createElement('div');
    this.loadingDiv.className = 'loading-indicator';
    this.loadingDiv.innerHTML = '<div class="lds-dual-ring"></div>';
    this.el.nativeElement.parentElement.appendChild(this.loadingDiv);
  }

  private hideLoadingIndicator() {
    if (this.loadingDiv) {
      this.loadingDiv.remove();
    }
  }
}
