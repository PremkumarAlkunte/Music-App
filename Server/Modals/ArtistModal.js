const mongoose=require("mongoose")

const ArtistSchema=new mongoose.Schema({
    artistname:{
        type:String,
    },
    date:{
        type:String,
    },
    bio:{
        type:String,
    },
    songs:[]
});

const ArtistModal=mongoose.model("Artist",ArtistSchema);
module.exports=ArtistModal;