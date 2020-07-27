const db = require('./server/db/db'); 
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require('./server/index');
const port = process.env.PORT || 3000;

db.sync()  // sync our database
  .then(function(){
    app.listen(port, function () {
      console.log("Knock, knock");
      console.log("Who's there?");
      console.log(`Your server, listening on port ${port}`);
    }) // then start listening with our express server once we have synced
  })