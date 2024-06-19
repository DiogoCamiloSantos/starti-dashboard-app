import { CommonModule } from '@angular/common';
import {
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  input,
  signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, of } from 'rxjs';
import { RepositoryModule } from 'src/core/repository/repository.module';
import { ServiceModule } from 'src/core/service/service.module';
import TableData, { TableCell } from './models/table-data.interface';

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
  ],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {
  protected signalListValues = signal<TableCell[][]>([]);
  search = signal(``);
  signalListTable = input<Observable<TableData<any>> | null>(
    of({ titles: [], values: [] })
  );

  ngOnInit(): void {
    this.signalListTable()?.subscribe((table) =>
      this.signalListValues.set(table.values)
    );
  }

  ngOnDestroy(): void {}

  ngOnChanges(changes: SimpleChanges): void {}

  changeFilter() {
    this.signalListTable()?.subscribe((table) =>
      this.signalListValues.update(() =>
        table.values.filter((row) =>
          row.some((cell) =>
            cell.value?.toString()
              .toLowerCase()
              .includes(this.search().toLowerCase())
          )
        )
      )
    );
  }
}
