const express = require('express');
const cors = require('cors');
const app = express();
// const indexRoutes = require('./routes/index');
const tasksRoutes = require('./routes/tasks');
const path = require('path');

// settings
app.set('port', process.env.PORT || 3000);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleawares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extend: false }));

// routes
// app.use(indexRoutes);
app.use('/api', tasksRoutes);

// static files
const pathAngular = path.join('dist', 'client');
app.use(express.static(path.join(__dirname, pathAngular)));

app.listen(app.get('port'), () => {
    console.log('prot', app.get('port'));
});