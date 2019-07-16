using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace WebApplication2.Models
{
    [DataContract]
    public class ModuleInfo
    {
        [DataMember]
        [Required]
        public string Name { get; set; }

        [DataMember]
        [Required]
        public string FullName { get; set; }

        [DataMember]
        [Required]
        public string Description { get; set; }

    }
}