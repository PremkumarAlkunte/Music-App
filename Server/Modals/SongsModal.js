const mongoose=require("mongoose");

const SongsSchema=new mongoose.Schema({
      songname:{
        type:String,
      },
      date:{
        type:String,
      },
      artwork:{
        type:String,
      },
      artist:{
        type:String,
      },
});

const SongsModal=mongoose.model("songs",SongsSchema);
module.exports=SongsModal;