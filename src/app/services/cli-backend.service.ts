import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { YearNode } from '../models/YearNode';

@Injectable({
  providedIn: 'root'
})
export class CliBackendService {
  //private apiUrl: string = "http://127.0.0.1:1913";
  private apiUrl: string = "http://jin.brypzn.com";


  private client: HttpClient;

  constructor(private httpClient: HttpClient) {
    this.client=httpClient;
  }

  public getYearNodeSeries(): Observable<YearNode[]> {
    return this.client.get<YearNode[]>(`${this.apiUrl}/api/data`);
  }


}
