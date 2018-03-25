const gulp = require('gulp');
const minify = require('gulp-uglify');
const cssmin = require('gulp-cssmin');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const {gulpSassError} = require('gulp-sass-error');
const throwError = true;

//Convert sass to css
gulp.task('sass', () => gulp.src('scss/**.scss')
.pipe(sass())
.on('error', gulpSassError(throwError))
.pipe(gulp.dest('css/'))
.pipe(browserSync.stream()));

//Minify javascript files
gulp.task('minify-js', () => gulp.src('js/index.js')
.pipe(minify())
.pipe(rename({suffix: '.min'}))
.pipe(gulp.dest('js')));

//Minify css files
gulp.task('minify-css', () => gulp.src('css/style.css')
.pipe(cssmin())
.pipe(rename({suffix: '.min'}))
.pipe(gulp.dest('css')));

//Minify
gulp.task('minify', ['minify-js','minify-css']);

//Watch tasks
gulp.task('serve', function(){
  browserSync.init({
        server: "./"
    });
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./css/*.css').on('change', browserSync.reload);
    gulp.watch('./js/*.js').on('change', browserSync.reload);
  });

//Default task
gulp.task('default', ['serve']);
