import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppContext } from 'src/core/context/app-context';
import { HeaderComponent } from 'src/ui/components/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent
  ],
  providers: [
    AppContext
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Starti';
}
