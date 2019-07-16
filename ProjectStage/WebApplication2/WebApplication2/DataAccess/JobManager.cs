using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using WebApplication2.Models;

namespace WebApplication2.JobStructure
{
    public class JobManager : IJobModel
    {
        //static JobManager()
        //{
        //    Instance = new JobManager();
        //}
        //public static JobManager Instance { get; }
        private static JobManager instance;
        public static JobManager Instance
        {
            get
            {
                if (instance == null)
                    instance = new JobManager();
                return instance;
            }
        }

        internal JobManager() { }

        public string jobStatus { get; private set; }

        public string jobName { get; set; }

        public string jobDescription { get; set; }

        public int stepsCount { get; set; }

        public int currentStep { get; set; }

        public string jobStepName { get; private set; }

        public bool StartJob()
        {
            return true;
        }

        public void SetJobStatus()
        {
            jobStatus = "In corso...";
        }

        public void SetInfo()
        {
            jobDescription = "Questa job fa : ...";
            jobName = "Job 01";
            stepsCount = 10;
            currentStep = 0;
            jobStepName = "step name";
        }

        public void SetCurrentStep()
        {
            if (currentStep<stepsCount)
            {
                currentStep = currentStep + 1;
            }
        }
    }
}