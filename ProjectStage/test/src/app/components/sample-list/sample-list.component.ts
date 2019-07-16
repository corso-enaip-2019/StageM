import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service';

@Component({
    selector: "sample-list",
    templateUrl: "./sample-list.component.html",
    styleUrls: [ "./sample-list.component.scss" ]
})
export class SampleList {
    public newElement: string;

    public list: Array<string>;

    public isButtonDisabled: boolean;

    constructor(data: DataService) {
        this.newElement = null;
        this.list = data.getList();
        this.isButtonDisabled = false;
    }

    public addItem(): void {
        if(this.newElement !== undefined && this.newElement !== null && this.newElement !== "")
            this.list.push(this.newElement);

        this.newElement = null;

        if(this.list.length == 10)
            this.isButtonDisabled = true;
    };
}