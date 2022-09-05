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
});

const ArtistModal=mongoose.model("Artist",ArtistSchema);
module.exports=ArtistModal;