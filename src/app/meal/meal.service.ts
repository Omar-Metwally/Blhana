import { Injectable } from "@angular/core";
import { CreateMealRequest } from "../api/models";
import { HttpClient, HttpContext } from "@angular/common/http";
import { Observable } from "rxjs";
import { mealsPost } from "../api/fn/meals/meals-post";
import { StrictHttpResponse } from "../api/strict-http-response";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
  })
  export class MealService {
    
    constructor(private http: HttpClient, private router: Router, private cookieService: CookieService) { }


    addMeal(params: any) {
         return this.http.post(`${environment.appUrl}Meals`, params, {withCredentials: true});
      }
  }