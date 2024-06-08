import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import { CommonModule } from '@angular/common';
import {PassagerComponent} from "../passager/passager.component";

@Component({
  selector: 'app-liste-passagers',
  templateUrl: './liste-passagers.component.html',
  imports: [CommonModule, PassagerComponent],
  standalone: true,
  styleUrls: ['./liste-passagers.component.scss']
})
export class ListePassagersComponent {
  @Input() passagers: Passager[] = [];
}
