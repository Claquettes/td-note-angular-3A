import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Vol} from "../../models/vol.model";
import {CommonModule} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-vol',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss'],
  host: {
    class: 'vol-component'
  }
})
export class VolComponent {
  @Input() vol!: Vol;
  @Output() volSelected = new EventEmitter<Vol>();

  selectVol() {
    this.volSelected.emit(this.vol);
  }
}
