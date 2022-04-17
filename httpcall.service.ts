import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { BasicObj } from '../_modal/basicObj';

@Injectable({
  providedIn: 'root'
})
export class HttpCallService {
private recipeList: any[];
baseurl = environment.baseurl ;
constructor(private http: HttpClient) {this.recipeList=[]; }
addData(recipe: any) : Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(recipe);
    console.log(body)
    return this.http.post<any>(this.baseurl , body,{'headers':headers})

}
updateData(recipe: any, idx: number): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(recipe);
    console.log(body)
    return this.http.put<any>(this.baseurl , body,{'headers':headers})

}
getDataById( idx: number): Observable<BasicObj> {
    return this.http.get<BasicObj>(this.baseurl +idx );
    //return this.http.get(this.baseurl +idx );
}
getData( ): Observable<Object> {
    return this.http.get(this.baseurl  );
}
deleteData(): Observable<Object> {
    return this.http.delete(this.baseurl  );
}
}
