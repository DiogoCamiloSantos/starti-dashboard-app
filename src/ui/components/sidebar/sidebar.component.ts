import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from 'src/ui/modules/material/material.module';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CustomMaterialModule,
    RouterModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

}
