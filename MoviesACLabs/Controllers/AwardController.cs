using MoviesACLabs.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MoviesACLabs.Controllers
{
    public class AwardController : ApiController
    {
        private static int svar = 0;

        public static List<AwardModel> awardsList = new List<AwardModel>();

        

        public void PostAward(AwardModel am)
        {
            svar++;
            am.Id = svar;
            awardsList.Add(am);
        }
        [Route("myAwards/{Id}")]
        public AwardModel GetAwardById(int id)
        {
            foreach (AwardModel x in awardsList)
            {
                if (x.Id == id)
                {
                    return x;
                }
            }
            return null;
        }
        /*
        public AwardModel GetAward(string Title2)
        {
            foreach (AwardModel x in awardsList)
            {
                if (x.Title == Title2)
                {
                    return x;
                }
           
            }
            return null;
        }*/
        
        public List<AwardModel> GetAwards()
        {
            return awardsList;
        }
/*
        public void PutAward(int id, AwardModel am)
        {
            for (int i = 0; i < awardsList.Count; i++)

            
            if(am.ActorID != null)
            awardsList.Insert(abc.Id, am);
        }
*/
        public void DeleteAward(int id)
        {
            if (GetAwardById(id) != null)
            {
                awardsList.Remove(GetAwardById(id));
            }      
        }

    }        
}
