import {Component} from '@angular/core';
import {FiltresComponent} from '../filtres/filtres.component';
import {ListeVolsComponent} from '../liste-vols/liste-vols.component';
import {ListePassagersComponent} from '../liste-passagers/liste-passagers.component';
import {VolService} from "../../services/vol.service";
import {Vol} from "../../models/vol.model";
import {Passager} from "../../models/passager.model";
import {PassagerService} from "../../services/passager.service";
import {ActivatedRoute} from "@angular/router";
import {Params} from "@angular/router";

@Component({
  selector: 'app-view-airfrance',
  standalone: true,
  imports: [FiltresComponent, ListeVolsComponent, ListePassagersComponent],
  templateUrl: './view-airfrance.component.html',
  styleUrls: ['./view-airfrance.component.scss']
})
export class ViewAirFranceComponent {
  vols: Vol[] = [];
  passagers: Passager[] = [];

  type: string = "departure";

  constructor(private volService: VolService, private passagerService: PassagerService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.type = params['type'];
    });
  }
  convertToSeconds(date: Date): number {
    return Math.floor(date.getTime() / 1000);
  }

  onFiltersApplied(filters: { airport: any, startDate: Date, endDate: Date }) {
    const startDateS = this.convertToSeconds(filters.startDate);
    const endDateS = this.convertToSeconds(filters.endDate);
    const airport = filters.airport.nom;
    if (this.type === 'departure') {
      this.volService.getVolsDepart(airport, startDateS, endDateS)
        .subscribe(vols => {
          console.log(vols);
          this.vols = vols;
        });
    } else {
      this.volService.getVolsArrivee(airport, startDateS, endDateS)
        .subscribe(vols => {
          console.log(vols);
          this.vols = vols;
        });
    }
  }
  onVolSelected(vol: Vol) {
    this.passagerService.getPassagers(vol.icao)
      .subscribe(passagers => {
        this.passagers = passagers;
      });
  }
}
