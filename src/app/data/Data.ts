import {HttpClient,HttpHeaders} from "@angular/common/http";
import { User } from "../model/User";
import { Subscribable } from "rxjs/Observable";


const endPoing='http://localhost:9000/api/'
export class Data{

 
    private httpOptions={
        headers:new HttpHeaders({'Content-Type':'application/json'})
    }

    private http;

    constructor(http:HttpClient){this.http=http}

    insertUser(user:User):Subscribable<boolean>{

        let url=endPoing+"insertUser";

       return this.http.post(url,user,this.httpOptions)
       
    }

    getUser(pageNumber):Subscribable<any>{

        let url=endPoing+"getUser/"+pageNumber;

       return this.http.get(url,this.httpOptions)
       
    }
}