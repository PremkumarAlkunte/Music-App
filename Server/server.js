const express=require ('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config()
const SongsModal=require('./Modals/SongsModal')
const cors=require('cors');
const ArtistModal = require('./Modals/ArtistModal');

const PORT=process.env.PORT || 3003
mongoose.connect(
    "mongodb+srv://Prem:Prem@cluster0.znli1u4.mongodb.net/?retryWrites=true&w=majority",
   
    (err) =>
      err ? console.log(err) : console.log(
        "Connected to your database")
  );

    app.use(express.json({limit: "30mb",extended:true}));
    app.use(express.urlencoded({extended:false}));

    app.use(cors());


app.listen(PORT,(err)=>{
    if(!err){
        console.log(`Server is running ${process.env.PORT}`)
    }else{
        console.log(err)
    }
})

app.post("/song", (req, res) => {
    console.log(req.body)

//   const date = new Date();
//   let finalDate = date + "";
//   finalDate = finalDate.split(" ");
//   finalDate = finalDate.splice(1, 3).join(" ");
  SongsModal.create({
    
    songname: req.body.songname,
    date:req.body.date,
    artwork: req.body.artwork,
    artist: req.body.artist,
}).then(() => {
      res.send("file and data uploaded successfully");
    })
    .catch((err) => {
      console.log(err.message);
    })
});

app.post("/artist",(req,res)=>{
    console.log(req.body)

    ArtistModal.create({
       artistname:req.body.artistname,
       date:req.body.date,
       bio:req.body.bio
    }).then(()=>{
        res.send("file and data uploaded sucessfully")
    })
    .catch((err)=>{
        console.log(err.message);
    })
})

app.get("/song",async(req,res)=>{
    try{
      const allData=await SongsModal.find();
    res.status(200).send(allData)
  }catch(err){
    res.status(400).send(err)
  }
  });

  app.get("/artist",async(req,res)=>{
    try{
      const allData=await ArtistModal.find();
    res.status(200).send(allData)
  }catch(err){
    res.status(400).send(err)
  }
  })
