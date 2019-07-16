import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppConfig} from '../config/app.config'
import { IJobModel } from '../models/job.model';

@Injectable()
export class JobService{
    constructor(private http:HttpClient){
    }

    public getJobInfo(callback:(items:IJobModel)=>void):void{
        this.http.get<IJobModel>(AppConfig.ApiBaseUrl +"/api/Job/getJobInfo")
        .subscribe(
            data => {callback(data)},
            error => {}
        );
    }

    // public setCurrentStep(callback:(items:number) => void):void{
    //     this.http.get<number>(AppConfig.ApiBaseUrl +"/api/Job/getCurrentJobStep")
    //     .subscribe(
    //         data => {callback(data)
    //         },
    //         error => {}
    //     );
    // }

    public getJobStatus(callback:(items:string) => void):void{
        this.http.get<string>(AppConfig.ApiBaseUrl + "/api/Job/getJobStatus")
        .subscribe(
            data => {
                callback(data)
            },
            error => {
            }
        );
    }

    public startJob(callback:(items:boolean) => void):void{
        this.http.get<boolean>(AppConfig.ApiBaseUrl + "/api/Job/startJob")
        .subscribe(
            data => { callback(data)
            },
            error => {
            }
        );
    }

    public getJob(): IJobModel{
        return{
            jobDescription: "Not started",
            jobName:"Not started",
            stepsCount: 0,
            currentStep: "0",
            jobStepName: "Not started",
            jobStatus: "",
            isStart: false,
        };
    }
}