import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { API } from "../config/endpoint";
import { pokemonResponse } from "../models/pokemonModel";


@Injectable({ providedIn: 'root'})
export class pokemonService {


 
    constructor(private http:HttpClient){}

 

    getPakemon(pokemon:string): Observable<pokemonResponse>{   
        return this.http.get<pokemonResponse>(`${API.pokemon}/${pokemon}`);
    }

    getHabilidades(name:string):Observable<any>{
        return this.http.get<any>(`${API.habilidades}/${name}`);
    }




}