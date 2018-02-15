const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();
const path           = require('path');
const port           = 8080;
const router           = require('./js/routes'); 



// установка генератора шаблонов 
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

// подгрузка статических файлов из папки pages 
app.use(express.static(path.join(__dirname, 'public')));

// middleware для обработки данных 
app.use(bodyParser.json()); 
app.use(bodyParser.text()); 
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/projects', router.display); 
app.get('/', router.helloworld);
app.get('/projects/add', router.add);
app.post('/projects/add/create', router.create)

// обработка ошибок 
app.use(function(err, req, res, next) {
  if (err) console.log(err.stack); 
  res.status(500).send('oops...something went wrong'); 
}); 

app.listen(port, () => {
  console.log('We are live on ' + port);
});

