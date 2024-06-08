import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  standalone: true,
  imports: [MatIcon],
  styleUrls: ['./passager.component.scss']
})
export class PassagerComponent {
  @Input() passager!: Passager;
}
