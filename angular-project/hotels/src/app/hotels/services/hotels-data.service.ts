import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Hotel } from '../models/hotel';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HotelsDataService {
  public baseAPI: string =
    'https://hotelsearch2.p.rapidapi.com/?location=Tbilisi';

  constructor(private httpClient: HttpClient) {}

  public getHotels(): Observable<Hotel[]> {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'X-RapidAPI-Key': '45cdbb94c0mshcb7a755e815b533p1e674ejsn7b059bfb7178',
      'X-RapidAPI-Host': 'hotelsearch2.p.rapidapi.com',
    });
    return this.httpClient
      .get<Hotel[]>(this.baseAPI, {
        headers: httpHeaders,
      })
      .pipe(
        map((json: any) => {
          return (
            json.suggestions ? json.suggestions[0].entities || [] : []
          ).map((hotelJSON: any) => {
            return {
              id: hotelJSON.geoId,
              name: hotelJSON.name,
              isCustom: false,
              isDetailed: false,
            };
          });
        })
      );
  }
}
