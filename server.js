const express = require('express');
let app = express();
app.set('port', process.env.PORT || 3000)
app.use(express.json());
const cam = require('./routes/Camaras');

//routes

app.use('/api',cam);


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});