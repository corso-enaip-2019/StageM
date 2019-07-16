import { Component, Injectable } from '@angular/core';
import {JobService} from 'src/app/services/job-service'
import { IJobModel } from 'src/app/models/job.model';

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss']
})

@Injectable()
export class JobComponent {
  
  private job:IJobModel;

  public isButtonDisabled: boolean;

  public start: boolean;

  private interval;

  public counter: number;

  public content:string;


  constructor(private data: JobService) {
    this.job = this.data.getJob();
    this.isButtonDisabled = true;
    this.start = false;
    this.counter = 0;
    this.content = "Start Job"
  }
    
  public startJob():void{
    var self: JobComponent = this;
    self.content = "Job in corso"
    this.data.startJob(function(item:boolean):void{
      self.start = item;
      if(self.start === true){
        self.startProgressBar();
        self.isButtonDisabled = false;
      }
    })
  }
  
  public updateProgressBar():void{
    var self: JobComponent = this;
    self.job.currentStep;
    // this.data.setCurrentStep(function(items:string):void{
    //   self.job.currentStep = items
    // });
  }

  public startProgressBar():void{
    var self: JobComponent = this;
    if(self.counter === 0){
    self.interval = setInterval(() => this.updateProgressBar(),500);
    self.counter = 1;
    }
  }
  
  public getJobInfo():void{
    var self : JobComponent = this;
    this.data.getJobInfo(function(items:IJobModel):void{
      self.job = items
    });
  }
  
  public getJobStatus():void{
    var self: JobComponent = this;
    this.data.getJobStatus(function(item:string):void{
      self.job.jobStatus = item;
    })
  }
}