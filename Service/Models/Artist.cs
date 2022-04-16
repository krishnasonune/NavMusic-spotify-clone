using System;
using System.Collections.Generic;

namespace Service.Models
{
    public partial class Artist
    {
        public int Id { get; set; }
        public string ArtistName { get; set; }
        public string Genre { get; set; }
        public string ArtCover { get; set; }
    }
}
