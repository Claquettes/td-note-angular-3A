import { Component } from '@angular/core';
import {Vol} from "../../models/vol.model";
import {Input} from "@angular/core";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-vol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.scss']
})
export class VolComponent {
  @Input() vol!: Vol;

}
