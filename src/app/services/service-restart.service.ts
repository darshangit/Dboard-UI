import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';
import { SelectItem } from 'primeng/primeng';
import { ServiceRestartRequestModel } from '../request-models/service-restart-request.model';

@Injectable()
export class ServiceRestartService {

    accessRoutes: string[];

    constructor(private http: Http) { }

    getEnvironments(): Observable<SelectItem[]> {

        return this.http.get('../../assets/environment.json').map((response: Response) => {
            return response.json() as SelectItem[];
        }).catch(this.handleError);
    }

    getServices(): Observable<SelectItem[]> {
        return this.http.get('../../assets/services.json').map((response: Response) => {
            return response.json() as SelectItem[];
        }).catch(this.handleError);
    }

    restart(serName: string, environment: string): Observable<Response> {
        const headers = new Headers({ 'Content-Type': 'application/json' });
        const requestop = new RequestOptions({ headers });

        const serviceRequestModel: ServiceRestartRequestModel = {
            serviceName: serName
        };

        return this.http.post('http://' + environment + ':6061/dboard/restart', JSON.stringify(serviceRequestModel), requestop)
        .map((response: Response) => {
            return response.json() as Response;
        });
    }

    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}

