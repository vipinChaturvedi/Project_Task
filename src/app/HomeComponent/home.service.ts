import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';



@Injectable()
export class HomeService {

  private headers = new Headers({
    'Content-Type': 'application/json',
    'dataType': 'jsonp',
    'Access-Control-Allow-Origin': '*'
  });

  private url = '';

  // private localhost="qa.odigolive.com";

  constructor(private http: Http) {
  }

  getData() {

    this.url = 'https://thesmartq.firebaseio.com/menu.json';

    return this.http.get(this.url, {headers: this.headers})
      .map((response: Response) => {
        var body = response.json();
        return body;

      }).catch(this._errorHandler);
  }

_errorHandler(error: Response){
  console.error(error);
  return Observable.throw(error || "server Error");

}
}
