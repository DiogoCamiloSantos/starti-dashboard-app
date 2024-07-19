import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  computed,
  effect,
  input,
  output
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RepositoryModule } from 'src/core/repository/repository.module';
import { ServiceModule } from 'src/core/service/service.module';
import { debouncedSignal } from 'src/ui/signals/DebouncedSignal';
import ITableData from './interfaces/table-data.interface';
import { LoadingDirective } from 'src/ui/directives/loading.directive';
import { LoadingService } from '@uiservices/loading.service';
import { TableLoadingDirective } from 'src/ui/directives/table-loading.directive';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    CommonModule,
    ServiceModule,
    RepositoryModule,
    LoadingDirective,
    TableLoadingDirective
  ],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  onSearch = output<string>();
  search = debouncedSignal('');
  
  tableData = input<ITableData | null>({ titles: [], values: [] });

  constructor(public loadingService: LoadingService) {
    effect(() => this.onSearch.emit(this.search()));
  }
}
