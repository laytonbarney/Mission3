using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaytonBarneyMission3Assignment.Models
{
    public class GradeCalcModel
    {
        [Required]
        [Range(0, 99)]
        public int Assignements { get; set; }

        [Required]
        [Range(0, 99)]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 99)]
        public int Intex { get; set; }

        [Required]
        [Range(0, 99)]
        public int Extracredit { get; set; }
    }
}
