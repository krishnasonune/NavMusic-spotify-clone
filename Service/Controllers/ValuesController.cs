using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DataExtract.Models;
using DataExtract;
using Microsoft.AspNetCore.Cors;

namespace Service.Controllers
{
    [EnableCors("allow")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ValuesController : Controller
    {
        repository repo;


        public ValuesController()
        {
            repo = new repository();
        }

        [HttpGet]
        public JsonResult Get()
        {

            var c = repo.Get();

            return Json(c);
        }

        [HttpPost]
        public JsonResult login(User userObj)
        {
            string result;
            try
            {
                result = repo.login(userObj.Username, userObj.Password);

               
            }
            catch (Exception e)
            {

                result = e.Message;
            }

            return Json(result);
        }

        [HttpPost]
        public JsonResult Register(User userObj)
        {
            string result;
            try
            {
                result = repo.Register(userObj.Name ,userObj.Username, userObj.Password);


            }
            catch (Exception e)
            {

                result = e.Message;
            }

            return Json(result);
        }


        [HttpPost]
        public JsonResult GetAllSongByArtist(Songs userObj)
        {

            var c = repo.GetAllsongByArtist(userObj.Artist, userObj.SongName);

            return Json(c);
        }


        [HttpPost]
        public JsonResult Allcomp(Songs userObj)
        {

            var c = repo.Allcomp(userObj.SongName);

            return Json(c);
        }

        [HttpPost]
        public JsonResult GetselectedSong( Songs userObj )
        {

            var c = repo.GetSelectedSong( userObj.SongName );

            return Json(c);
        }

        [HttpGet]
        public JsonResult GetAllArtist()
        {

            var c = repo.GetArtists();

            return Json(c);
        }


        [HttpGet]
        public JsonResult rt()
        {

            var c = repo.rt();

            return Json(c);
        }

    }
}
