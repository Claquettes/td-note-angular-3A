import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListePassagersComponent } from './components/liste-passagers/liste-passagers.component';

@NgModule({
  declarations: [ListePassagersComponent],
  imports: [CommonModule],
  exports: [ListePassagersComponent]
})
export class PassagersModule { }
