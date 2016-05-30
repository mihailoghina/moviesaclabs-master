using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using MoviesACLabs.Data;
using MoviesACLabs.Models;
using AutoMapper;
using MoviesACLabs.Entities;

namespace MoviesACLabs.Controllers
{
    public class FootballController : ApiController
    {
        private MoviesContext db = new MoviesContext();

        // GET: api/Movies
        public IList<FootballModel> GetFootball()
        {
            var fot = db.Football;
            var footballModel = Mapper.Map<IList<FootballModel>>(fot);
            return footballModel;
        }

        public IHttpActionResult PostFootball(FootballModel footballModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var fot2 = Mapper.Map<Football>(footballModel);

            db.Football.Add(fot2);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = fot2.Id }, fot2);
        }

    }
}
