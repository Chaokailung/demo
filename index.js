var express = require('express');
var loki = require('lokijs');
var bodyParser = require('body-parser');
var shortid = require('shortid');

// express 設定

var app = express();


// 設定靜態資源資料夾
app.use(express.static(__dirname + '/www'));

// 接收表單資料
app.use(bodyParser.urlencoded({
    extended: true
}));

// 設定模板引擎
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


// 初始化資料庫
var db = new loki('blog.json', {
    autosave: true,
    autosaveInterval: 5000,
    autoload: true,
    autoloadCallback: initializeCollections
});

var users, articles, categories, comments;


function initializeCollection(name) {
    var collection = db.getCollection(name);
    if (!collection)
        collection = db.addCollection(name);
    return collection;
}

function initializeCollections() {
    users = initializeCollection('users');
    articles = initializeCollection('articles');
    categories = initializeCollection('categories');
    comments = initializeCollection('comments');
}

app.get('/', function (req, res) {
    res.render('home');
    res.end();
});


// router 定義路由

var adminRouter = express.Router();

adminRouter.get('/', function (req, res) {
    res.render('admin/dashboard.ejs');
    res.end();
});

adminRouter.get('/articles', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.get('/articles/add', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.post('/articles/add', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.get('/articles/edit/:id', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.post('/articles/edit/:id', function (req, res) {
    res.render('home');
    res.end();
});

adminRouter.get('/categories', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.get('/categories/add', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.post('/categories/add', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.get('/categories/edit/:id', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.post('/categories/edit/:id', function (req, res) {
    res.render('home');
    res.end();
});

adminRouter.get('/users', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.get('/users/add', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.post('/users/add', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.get('/users/edit/:id', function (req, res) {
    res.render('home');
    res.end();
});
adminRouter.post('/users/edit/:id', function (req, res) {
    res.render('home');
    res.end();
});


app.use('/admin', adminRouter);

app.listen(1234);