using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication2.Models
{
    interface IJobModel
    {
        string jobStatus { get; }
        string jobName { get; }
        string jobDescription { get; }
        string jobStepName { get; }
        int stepsCount { get; }
        int currentStep { get; }
    }
}
