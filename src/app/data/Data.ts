import {HttpClient,HttpHeaders} from "@angular/common/http";
import { User } from "../model/User";
import { Subscribable } from "rxjs/Observable";



export class Data{

 
    private httpOptions={
        headers:new HttpHeaders({'Content-Type':'application/json'})
    }

    private http;

    constructor(http:HttpClient){this.http=http}

    insertUser(user:User):Subscribable<boolean>{

        let url="http://192.168.0.100:900/api/InsertUser";

       return this.http.post(url,user,this.httpOptions)
       
    }
}