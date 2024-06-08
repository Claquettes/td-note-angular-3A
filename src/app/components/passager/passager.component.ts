import { Component, Input } from '@angular/core';
import { Passager } from '../../models/passager.model';
import {MatIcon} from "@angular/material/icon";
import {ClasseVolColorDirective} from "../../classe-vol-color.directive";

@Component({
  selector: 'app-passager',
  templateUrl: './passager.component.html',
  standalone: true,
  imports: [MatIcon, ClasseVolColorDirective],
  styleUrls: ['./passager.component.scss']
})
export class PassagerComponent {
  @Input() passager!: Passager;

  ngOnInit() {
    console.log(this.passager.classeVol);
  }



}
