var gulp = require('gulp')
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var connect = require('gulp-connect');
var imagemin = require('gulp-imagemin');

sass.compiler = require('node-sass');
//SASS
gulp.task('sass',  done => {
  return gulp.src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
    done();
});

//min CSS
gulp.task('css', done => {
  gulp.src('./css/*.css')
    .pipe(uglifycss({
      "uglyComments": true
    }))
    .pipe(gulp.dest('./dist/css/'));
    done();
});


//WebServer
gulp.task('webserver', done => {
  connect.server({
    livereload: true
  });
  done();
});

//HTML
gulp.task('copyHtml', done => {
    gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));done();

});
  
//Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);

// gulp.task('run',gulp.series(['sass','css','imageMin','copyHtml']));
gulp.task('run',gulp.series(['copyHtml','imageMin','sass','css']));

gulp.task('watch', done => {
gulp.watch('./src/sass/*.scss', gulp.series(['sass']));
gulp.watch('./css/*.css', gulp.series(['css']));
// gulp.watch('./css/*.css', gulp.series(['css']));
gulp.watch('./src/*.html', gulp.series(['copyHtml']));
done();
});
gulp.task('default', gulp.series(['run','webserver','watch']));