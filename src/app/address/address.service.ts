import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { Governorate } from '../shared/models/address/governorate';
import { map, tap } from 'rxjs';
import { District } from '../shared/models/address/district';
import { Street } from '../shared/models/address/street';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  constructor(private http: HttpClient) { }

  getGovernorates() {
    return this.http.get<Governorate[]>(`${environment.appUrl}Address/Governorate`).pipe(
      tap((governorates: Governorate[]) => console.log(governorates))
    )
  }

  getDistricts(id: string) {
    return this.http.get<District[]>(`${environment.appUrl}Address/District`, { params: { id } }).pipe(
      map(distrcts =>
        distrcts.map(distrct => {
          return <District>{
            id: distrct['id'],
            name: distrct['name']
          }
        })
      ),
      tap((res: District[]) => console.log(res))
    )
  }
  getStreets(id: string) {
    return this.http.get<Street[]>(`${environment.appUrl}Address/Street`, { params: { id } }).pipe(
      map(distrcts =>
        distrcts.map(distrct => {
          return <Street>{
            id: distrct['id'],
            name: distrct['name']
          }
        })
      ),
      tap((res: Street[]) => console.log(res))
    )
  }

  getBuildings(id: string) {
    return this.http.get<Street[]>(`${environment.appUrl}Address/Building`, { params: { id } }).pipe(
      map(distrcts =>
        distrcts.map(distrct => {
          return <Street>{
            id: distrct['id'],
            name: distrct['name']
          }
        })
      ),
      tap((res: Street[]) => console.log(res))
    )
  }

}
