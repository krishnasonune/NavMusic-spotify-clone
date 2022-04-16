using System;
using System.Collections.Generic;

namespace DataExtract.Models
{
    public partial class Songs
    {
        public int Id { get; set; }
        public string SongName { get; set; }
        public string Genre { get; set; }
        public string Artist { get; set; }
        public string SongCover { get; set; }
        public string Songurl { get; set; }
    }
}
