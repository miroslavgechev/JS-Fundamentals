function songs(input){

    class Songs{
        constructor(typeList, name, time){
            this.typeList = typeList,
            this.name = name,
            this.time = time
        };
    }

    let songsArray = [];
    let totalSongs = input.shift();
    let typeListToPlay = input.pop();

    for(let element of input){
        let [currentTypeList, currentSongName, currentSongDuration] = element.split('_');
        let currentSong = new Songs(currentTypeList, currentSongName, currentSongDuration);
        songsArray.push(currentSong);
    }

    if (typeListToPlay === 'all'){
        songsArray.forEach(element => console.log(element.name));
    } else {
        let filteredSongs = songsArray.filter( el => el.typeList === typeListToPlay);
        filteredSongs.forEach( el => console.log(el.name))
    }
}
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    
    )