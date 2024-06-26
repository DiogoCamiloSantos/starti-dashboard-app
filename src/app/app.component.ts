import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppContext } from 'src/core/context/app-context';
import { HeaderComponent } from 'src/ui/components/header/header.component';
import { SidebarComponent } from 'src/ui/components/sidebar/sidebar.component';
import { CustomMaterialModule } from 'src/ui/modules/material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomMaterialModule,
    SidebarComponent,
    HeaderComponent
  ],
  providers: [
    AppContext
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'payfriends';
}
