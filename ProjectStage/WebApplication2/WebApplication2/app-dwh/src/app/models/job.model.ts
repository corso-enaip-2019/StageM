export interface IJobModel{
    jobDescription:string;
    jobName: string;
    stepsCount: number;
    currentStep:string;
    jobStepName:string;
    jobStatus: string;
    isStart: boolean;
}