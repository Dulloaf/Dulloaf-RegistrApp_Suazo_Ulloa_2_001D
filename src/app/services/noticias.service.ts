import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespuestaTopHeadLines } from '../interfaces/interfaces';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {


  constructor(private Http:HttpClient) { }
  
  getTopHeadlines(){
    return this.Http.get<RespuestaTopHeadLines>('https://newsapi.org/v2/everything?q=apple&from=2023-09-25&to=2023-09-25&sortBy=popularity&apiKey=b32a0f8c7e434587b1ecaf47a53a93b9')
    }
  }