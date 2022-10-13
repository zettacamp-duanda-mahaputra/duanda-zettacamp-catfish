let obj =[
  {
    title : "Mobil Balap",
    artist : "Naif",
    genre : "Pop",
    duration : 4 
  },
  {
    title : "Di Atas Normal",
    artist : "Noah",
    genre : "Pop",
    duration : 4
  },
  {
    title : "Mata Ke Hati",
    artist : "Hivi",
    genre : "Pop",
    duration : 3
  },
  {
    title : "Lantas",
    artist : "Juicy Luicy",
    genre : "Pop",
    duration : 4
  },
  {
    title : "Seperti Kisah",
    artist : "Rizky Febian",
    genre : "Pop",
    duration : 5
  },
  {
    title : "Fly Me To The Moon",
    artist : "Frank Sinatra",
    genre : "Jazz",
    duration : 5
  },
  {
    title : "Cant Take My Eyes Off You",
    artist : "Frank Sinatra",
    genre : "Jazz",
    duration : 4
  },
  {
    title : "Lullaby Of Birdland",
    artist : "Nikki Yanofsky",
    genre : "Jazz",
    duration : 3
  },
  {
    title : "Menghujam Jantungku",
    artist : "Tompi",
    genre : "Jazz",
    duration : 4
  },
  {
    title : "Sedari Dulu",
    artist : "Tompi",
    genre : "Jazz",
    duration : 5
  },
  {
    title : "Dari Matamu",
    artist : "Jaz",
    genre : "Jazz",
    duration : 5
  },
  {
    title : "Kasih Putih",
    artist : "Glenn",
    genre : "Jazz",
    duration : 5
  },
  {
    title : "Luluh",
    artist : "Jaz",
    genre : "Jazz",
    duration : 5
  },
  {
    title : "Glenn",
    artist : "Januari",
    genre : "Jazz",
    duration : 5
  },
] 

// let song = obj.sort(()=>Math.floor((Math.random() * 10) - 0.5))

const sortArtist = (song, artist) => {
  const artistList = song.filter(song => song.artist==artist)
  console.log(`Song List From ${artist}`)
  console.log(artistList);
}

// sortArtist(song, "Glenn")

const sortGenre = (song, genre) => {
  const genreList = song.filter(song => song.genre==genre)
  console.log("<==================================================================================>")
  console.log(`Song List Genre ${genre}`);
  console.log(genreList)
  console.log("<==================================================================================>")
}

// sortGenre(song, "Pop")

function yoi(){
  let song = obj.sort(()=>Math.random() - 0.5);
  sortDuration(song);
}

const sortDuration = (song) => {
   obj.sort(()=>Math.random() - 0.5)

    let totalDuration = 0

    let newListSong = []
    let newTotalDuration = 0


    for(const i of song){
      totalDuration += i.duration
      
      if(totalDuration < 60){
        newListSong.push(i)
      }
      else{
        break;
      }
    }

    for(const j of newListSong){
      newTotalDuration += j.duration
    }


    console.log(newListSong)
    console.log(`Total Duration this playlist: ${newTotalDuration}`)
  }

yoi();