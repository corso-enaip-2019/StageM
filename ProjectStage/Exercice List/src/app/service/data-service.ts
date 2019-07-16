import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";



@ Injectable()
export class DataService {
    constructor(private http: HttpClient) {

    }
    public getList(callback: (items: Array<object>) => void): void {
        var item = this.http.get<Array<object>>("http://jsonplaceholder.typicode.com/users")
            .subscribe(
                data => {
                    // Ho i dati
                    callback(data);
                },
                error => {
                    // Gestire eventuali errori della chiamata
                }
            );
    }
}