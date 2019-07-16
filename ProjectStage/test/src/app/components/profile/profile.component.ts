import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data-service';
import { IProfile } from 'src/app/models/profile';

@Component({
    selector: "profile",
    templateUrl: "./profile.component.html",
    styleUrls: [ "./profile.component.scss" ]
})
export class ProfileComponent {
    public profile: IProfile;

    constructor(private data: DataService) {
        this.profile = this.data.getProfile();
    }
}