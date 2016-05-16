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
    public class AwardController : ApiController
    {

        private MoviesContext db = new MoviesContext();

        public IList<AwardModel> GetAwards()
        {
            var awards = db.Awards;
            var awardsModel = Mapper.Map<IList<AwardModel>>(awards);
            return awardsModel;
        }

        public IHttpActionResult PostAward(AwardModel awardModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var award = Mapper.Map<Award>(awardModel);

            db.Awards.Add(award);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = award.Id }, award);
        }

        public IHttpActionResult DeleteAward(int id)
        {
            Award award = db.Awards.Find(id);
            if (award == null)
            {
                return NotFound();
            }

            db.Awards.Remove(award);
            db.SaveChanges();

            return Ok();
        }

        public IHttpActionResult PutAward(int id, AwardModel awardModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != awardModel.Id)
            {
                return BadRequest();
            }

            var award = Mapper.Map<Award>(awardModel);

            db.Entry(award).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AwardExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        public IHttpActionResult GetAward(int id)
        {
            Award award = db.Awards.Find(id);
            if (award == null)
            {
                return NotFound();
            }

            var awardModel = Mapper.Map<AwardModel>(award);

            return Ok(awardModel);
        }

        [Route("~/filter/{name}")]
        public IHttpActionResult GetAwardByName(string name)
        {
            var awards = db.Awards;
            var filtered = awards.Where(e => e.Title == name).ToArray();
            if (filtered == null)
            {
                return NotFound();
            }
            if (!filtered.Any())
            {
                return NotFound();
            }
            var ret = Mapper.Map<AwardModel>(filtered[0]);
            return Ok(ret);
        }


        private bool AwardExists(int id)
        {
            return db.Awards.Any(e => e.Id == id);
        }
        


    }
}
