import {Component, LOCALE_ID, Output, ViewEncapsulation} from '@angular/core';
import { MAT_DATE_RANGE_SELECTION_STRATEGY } from '@angular/material/datepicker';
import { AEROPORTS } from './../../constants/aeroport.constant';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { IAeroport } from '../../models/aeroport.model';
import { ThreeDayRangeSelectionStrategy } from '../../date-adapter';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import {MatCommonModule} from '@angular/material/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-filtres',
  standalone: true,
  templateUrl: './filtres.component.html',
  styleUrls: ['./filtres.component.scss'],
  imports: [FormsModule, MatIconModule, MatButtonModule, MatInputModule,
    MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatCommonModule, CommonModule],
  providers: [
    provideNativeDateAdapter(),
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: MAT_DATE_LOCALE, useValue: 'fr-FR' },
    {
      provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
      useClass: ThreeDayRangeSelectionStrategy,
    },
  ],
  encapsulation: ViewEncapsulation.None
})
export class FiltresComponent {
    @Output() filtersApplied = new EventEmitter<{airport: string, startDate: Date, endDate: Date}>();

  selectedAirport: string = '';
  //aujourd'hui et dans 3 jours
  startDate: Date = new Date();
  endDate: Date = new Date(this.startDate.getTime() + 3 * 24 * 60 * 60 * 1000);


  aeroports: IAeroport[] = AEROPORTS;

}
