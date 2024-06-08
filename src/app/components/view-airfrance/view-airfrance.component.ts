import {Component} from '@angular/core';
import {FiltresComponent} from '../filtres/filtres.component';
import {ListeVolsComponent} from '../liste-vols/liste-vols.component';
import {ListePassagersComponent} from '../liste-passagers/liste-passagers.component';
import {VolService} from "../../services/vol.service";
import {Vol} from "../../models/vol.model";


@Component({
  selector: 'app-view-airfrance',
  standalone: true,
  imports: [FiltresComponent, ListeVolsComponent, ListePassagersComponent],
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent {
  vols: Vol[] = [];

  constructor(private volService: VolService) {
  }

  convertToSeconds(date: Date): number {
    return Math.floor(date.getTime() / 1000);
  }


  onFiltersApplied(filters: { airport: any, startDate: Date, endDate: Date }) {
    const startDateS = this.convertToSeconds(filters.startDate);
    const endDateS = this.convertToSeconds(filters.endDate);
    const airport = filters.airport.nom;
    console.log("11 AIRPORT: ", airport); // Modify this line
    this.volService.getVolsDepart(airport, startDateS, endDateS)
      .subscribe(vols => {
        console.log(vols);
        this.vols = vols;
      });
  }

}
