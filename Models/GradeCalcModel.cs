using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace LaytonBarneyMission3Assignment.Models
{
    public class GradeCalcModel
    {
        public int Assignements { get; set; }
        public int Quizzes { get; set; }
        public int Intex { get; set; }
        public int Extracredit { get; set; }
    }
}
