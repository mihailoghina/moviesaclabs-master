using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MoviesACLabs.Models
{
    public class AwardModel
    {
        public int Id { get; set; }

        public int ActorID { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

    }
}