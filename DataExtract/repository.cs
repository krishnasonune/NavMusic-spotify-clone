using System;
using System.Collections.Generic;
using System.Text;
using System.Linq;
using DataExtract.Models;
using DataExtract;

namespace DataExtract
{
    public class repository
    {
        spotifyContext context;
        public repository()
        {
            context = new spotifyContext();
        }

        public List<User> Get()
        {
            List<User> c = new List<User>();
            c = (from e in context.User
                 select e).ToList();
            return c;
        }

        public string login(string username, string password)
        {
            string msg;
            try
            {
                var c = (from e in context.User
                         where e.Username == username && e.Password == password
                         select e.Name).FirstOrDefault();
                if (c != null)
                {
                    msg = c;
                }
                else
                {
                    msg = "invalid credentials";
                }
            }
            catch (Exception)
            {

                msg = "server down";
            }

            return msg;
        }


        public string Register(string name, string username, string password) 
        {
            string msg;
            try
            {
                User newuser = new User();
                newuser.Name = name;
                newuser.Username = username;
                newuser.Password = password;

                if (newuser != null)
                {
                    context.User.Add(newuser);
                    context.SaveChanges();
                    msg = "user added";
                }
                else
                {
                    msg = "try again later";
                }
            }
            catch (Exception e)
            {

                msg = e.InnerException.Message;
            }

            return msg;
        }



        public IQueryable GetAllsongByArtist(string name, string sname)
        {
            IQueryable a;
            try
            {
                var c = (from e in context.Songs
                         where e.Artist == name || e.SongName == sname
                         select new { e.SongName, e.Artist, e.SongCover, e.Genre });
                a = c;
            }
            catch (Exception ex)
            {

                a = null;
            }

            return a;
        }

        public string GetSelectedSong( string name)
        {
            string res;
            try
            {
                
                var c = (from e in context.Songs
                         where e.SongName == name
                         select e.Songurl).FirstOrDefault();
                    
                res = c;
                
                
            }
            catch (Exception ex)
            {

                res = ex.Message;
            }

            return res;
        }

        public Songs Allcomp(string name) {

            var c = (from e in context.Songs
                     where e.SongName == name
                     select e).FirstOrDefault();

            return c;
        }

        public List<Songs> GetArtists() {

            

            var c = (from e in context.Songs
                     select e).ToList();

            return c;
        }


        public IQueryable rt() {

            var c = from e in context.Songs
                    select new { e.Artist, e.SongName, e.Genre };

            return c;
        }

    }
}
