const express = require('express');
const app = express();
const port = 3000;
const path = require('path')


// app.use(express.static(path.join(__dirname, 'client/build')))

// app.use(express.static( __dirname + '/../app'));




// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '/../frontend/index.html'));
// });


app.get("/", (req, res) => {
  res.json({"hi": ["32"]});
});


// app.get('/', (req, res) => {
//   res.render(path.resolve(__dirname + '/..' + 'frontend/' + 'index'));
// });

app.get('/api', (req, res) => {
    res.json({"users": ["userone", "usertwo"]});
  });



app.listen(port, () => {
    console.log(`App listening on port http://localhost:3000`);

});
