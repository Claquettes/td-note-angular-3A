import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Passager } from '../models/passager.model';
import { IPassagerDto} from "../models/passager.model";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PassagerService {
  private readonly baseUrl = 'https://randomuser.me/api?';

  constructor(private http: HttpClient) { }

  getPassagers(icao: string): Observable<Passager[]> {
    return this.http.get<{ results: IPassagerDto[] }>(`${this.baseUrl}results=20&inc=name,picture&seed=${icao}`)
      .pipe(
        map(response => response.results.map(dto => new Passager(dto)))
      );
  }
}
