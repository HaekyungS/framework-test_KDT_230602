import  express  from "express";
import path from 'path'


const app:express.Express = express();

app.get('/',(req:express.Request,res:express.Response)=>{
  res.sendFile(path.join(__dirname,'..','dist','index.html'))
})

// static : 정적인.
app.use(express.static(path.join(__dirname,'..','dist'))).listen(2080)