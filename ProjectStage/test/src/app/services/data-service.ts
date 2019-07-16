import { IProfile } from '../models/profile';
import { Location } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
    constructor() {
    }

    public getList(): Array<string> {
        return [
            "item 1",
            "item 2",
            "item 3",
            "item 4",
            "item 5",
            "item 6"
        ];
    }
    
    public getProfile(): IProfile {
        return {
            name: "Piero",
            lastName: "De Tomi"
        };
    }
}