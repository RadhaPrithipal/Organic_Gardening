Router.configure({
  layoutTemplate: 'layout'
});
Router.route('/', function () {
  this.render('home');
});
Router.route('/news', function () {
  this.render('news');
});
Router.route('/veg', function () {
  this.render('veg');
});
Router.route('/about', function () {
  this.render('about');
});
