const express=require ('express');
const app=express();
const mongoose=require('mongoose');
require('dotenv').config()
const SongsModal=require('./Modals/SongsModal')
const cors=require('cors');
const ArtistModal = require('./Modals/ArtistModal');

const PORT=process.env.PORT || 3003
// mongoose.connect(
//     process.env.CONNECTION,
   
//     (err) =>
//       err ? console.log(err) : console.log(
//         "Connected to your database")
//   );
mongoose
  .connect(process.env.CONNECTION)
  .then(() => {
    console.log(`Database is connected`);
  })
  .catch((err) => {
    console.log(err);
  });

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
}).then((data) => {
  // console.log(data)
  ArtistModal.find({artistname:req.body.artist}).then((data)=>{
    console.log(data,"ss")
    data[0].songs.push(req.body.songname)
    ArtistModal.updateOne(
      {artistname:req.body.artist},{songs:data[0].songs}
    ).then((val)=>{
      // console.log(data[0].songs)
      
    })
  })
    // ArtistModal.updateOne(
    //   {artist:data.artist}, { $addToSet: { songs: { $each: req.body.songname } } }
    // ).then(()=>{res.send("file uploaded sucessfully")})
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
       bio:req.body.bio,
       songs:[]
    }).then((val)=>{
      console.log(val)
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
