import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { catchError, Observable, throwError } from 'rxjs';
import { userlogin } from '../interface/array';
import { user } from '../interface/Iuser';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private data?: any;

  constructor(private http: HttpClient) { }
  //this is 
  setData(data: any) {
    this.data = data;
  }
  //this is 
  getData() {
    let temp = this.data;
    this.clrData();
    return temp;
  }
  //this is 
  clrData() {
    this.data = 'undefined';
  }

  
  //this is 
  getAllComp(name: string): Observable<any> {
    let userObj: user;
    userObj = { SongName: name };
    return this.http.post<any>('https://localhost:44361/api/Values/Allcomp', userObj).pipe(catchError(this.errorhand));

  }

  //this is 
  getmysong(name: string ): Observable<any> {
    let userObj: user;
    userObj = { SongName: name }
    return this.http.post<any>('https://localhost:44361/api/Values/GetselectedSong', userObj).pipe(catchError(this.errorhand));

  }
  //this is 
  getAllArtist(): Observable<any> {
    
    return this.http.get<any>('https://localhost:44361/api/Values/GetAllArtist').pipe(catchError(this.errorhand));

  }
  //this is 
  getAllSongsByArtist(name: string): Observable<any> {
    let userObj: user;
    userObj = { Artist: name, SongName:name};
    return this.http.post<any>('https://localhost:44361/api/Values/GetAllSongByArtist', userObj).pipe(catchError(this.errorhand));

  }

  login(uname: string, pass:string): Observable<string> {
    let userObj: userlogin;
    userObj = { username: uname, password: pass };
    return this.http.post<string>('https://localhost:44361/api/Values/login', userObj).pipe(catchError(this.errorhand));
  }

  register(name: string, uname: string, password: string): Observable<string> {
    let userObj: userlogin;
    userObj = { name: name, username: uname, password: password };
    return this.http.post<string>('https://localhost:44361/api/Values/Register',userObj).pipe(catchError(this.errorhand))
  } 

  errorhand(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error.message || 'server error');
  }
}
