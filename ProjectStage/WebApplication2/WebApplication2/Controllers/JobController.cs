using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using WebApplication2.JobStructure;
using WebApplication2.Models;

namespace WebApplication2.Controllers
{
    [RoutePrefix("api/Job")]
    public class JobController : ApiController , IModule
    {
        JobManager _jobManager = JobManager.Instance;

        [HttpGet]
        [Route("getJobStatus")]
        [Authorize(Roles = "tutor")]
        public string GetJobStatus()
        {
            _jobManager.SetJobStatus();
            return _jobManager.jobStatus;
        }

        [HttpGet]
        [Route("startJob")]
        [Authorize(Roles = "tutor")]
        public bool StartJob()
        {
            return _jobManager.StartJob();
        }

        [HttpGet]
        [Route("getJobinfo")]
        public JobManager getJobInfo()
        {
            _jobManager.SetInfo();
            return _jobManager;
        }

        [HttpGet]
        [Route("getCurrentJobStep")]
        public int getCurrentJobStep()
        {
            _jobManager.SetCurrentStep();
            return _jobManager.currentStep;
        }

        [HttpGet]
        [Route("getInfo")]
        public ModuleInfo GetInfo()
        {
            return new ModuleInfo
            {
                Name = "Job",
                FullName = "Job Module Manager",
                Description = "Module written to manage the already existing Job in the database"
            };
        }
    }
}