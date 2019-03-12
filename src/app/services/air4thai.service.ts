import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Air4thaiService {

  constructor(private http: HttpClient) { }

  getAir4Thai(): Observable<any> {
    return this.http.get('http://air4thai.pcd.go.th/services/getNewAQI_JSON.php?region=1');
  }
}
