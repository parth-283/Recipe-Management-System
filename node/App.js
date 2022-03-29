const express = require('express')
const cors = require('cors')
const app = express();
const port = 4500

var route =  require('./route')
app.use(cors())
app.use('/',route)


// create url for show image
app.use('/profile',express.static('pic'))

app.listen(port,()=>{
  console.log(`App is listing at http://localhost:${port}`);
})