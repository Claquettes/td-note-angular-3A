import {Component} from '@angular/core';
import {Vol} from '../../models/vol.model';
import {Input} from '@angular/core';
import {VolComponent} from "../vol/vol.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-liste-vols',
  standalone: true,
  imports: [VolComponent, CommonModule],
  templateUrl: './liste-vols.component.html',
  styleUrls: ['./liste-vols.component.scss']
})
export class ListeVolsComponent {
  @Input() vols: Vol[] = [];
}
