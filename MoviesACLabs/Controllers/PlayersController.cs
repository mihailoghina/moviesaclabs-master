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
    public class PlayersController : ApiController
    {
        private MoviesContext db = new MoviesContext();

        // GET: api/Movies
        public IList<PlayersModel> GetPlayers()
        {
            var awards = db.Players;
            var PlayersModel = Mapper.Map<IList<PlayersModel>>(awards);
            return PlayersModel;
        }

        public IHttpActionResult PostPlayer(PlayersModel playerModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            var player = Mapper.Map<Players>(playerModel);

            db.Players.Add(player);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = player.Id }, player);
        }

    }
}
