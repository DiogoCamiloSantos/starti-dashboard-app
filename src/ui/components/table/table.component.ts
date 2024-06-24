import { CommonModule } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  computed,
  input
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
    LoadingDirective
  ],  
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy {
  search = debouncedSignal('');
  signalListTable = input<ITableData | null>({ titles: [], values: [] });
  signalListValues = this.onChangeFilter();


  constructor (
    public loadingService: LoadingService
  ) {

  }



  ngOnInit(): void {}

  ngOnDestroy(): void {}

  onChangeFilter() {
    return computed(() =>
      this.signalListTable()?.values.filter((row) =>
        row.some((cell) =>
          cell.value
            ?.toString()
            .toLowerCase()
            .includes(this.search().toLowerCase())
        )
      )
    );
  }
}
