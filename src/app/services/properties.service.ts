import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { PropertiesModel } from '../models/properties-response.model';

@Injectable()
export class PropertiesService {
  constructor(private httpClient: HttpClient) {}

  loadProperties(serviceName: string, environment: string): Observable<PropertiesModel[]> {
    return this.httpClient.get<PropertiesModel[]>('http://' + 'localhost' + ':6061/loadPoperties/' + 'servicename');
  }

  updateProperties(propetiesList: PropertiesModel[], serviceName, environment: string): Observable<PropertiesModel[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.httpClient.post<PropertiesModel[]>('http://' + 'localhost' + ':6061/updateProperties/' + 'servicename',
    propetiesList, httpOptions);
  }

  updatePropertiesAllEnvironments(propetiesList: PropertiesModel[], serviceName) {

  }
}
