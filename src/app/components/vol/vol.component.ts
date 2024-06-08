import { Component } from '@angular/core';
import {Vol} from "../../models/vol.model";
import {Input} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-vol',
  standalone: true,
  imports: [CommonModule, MatIcon],
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss']
})
export class VolComponent {
  @Input() vol!: Vol;

}
