import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Observable, of } from 'rxjs';
import { RepositoryModule } from 'src/core/repository/repository.module';
import { ServiceModule } from 'src/core/service/service.module';
import TableData from './models/table-data.interface';

@Component({
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    ServiceModule,
    RepositoryModule
  ],
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnDestroy, OnChanges {

  signalList = input<Observable<any[]> | null>(of([]));
  signalListTable = input<Observable<TableData<any>> | null>(of({titles: [], values: []}));

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }
}
