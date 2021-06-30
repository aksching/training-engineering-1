const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const connect = require('gulp-connect');
const imagemin = require('gulp-imagemin');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");
sass.compiler = require('node-sass');


//JS Stuff
gulp.task('minify', () =>{
    return gulp.src('src/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename({ extname: '.min.js' }))
        .pipe(gulp.dest('dist'))
        done();
});


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
gulp.task('run',gulp.series(['copyHtml','minify','imageMin','sass','css']));

gulp.task('watch', done => {
gulp.watch('./src/sass/*.scss', gulp.series(['sass']));
gulp.watch('./css/*.css', gulp.series(['css']));
gulp.watch('./src/*', gulp.series(['imageMin']));
gulp.watch('./src/*.html', gulp.series(['copyHtml']));
gulp.watch('./src/*.js', gulp.series(['minify']));
done();
});
gulp.task('default', gulp.series(['run','webserver','watch']));