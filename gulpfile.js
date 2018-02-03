const gulp = require('gulp');
const gulpConcat = require('gulp-concat');
const gulpRename = require('gulp-rename');
const gulpUglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');

// Concat/Minify/Autoprefix CSS assets (Will never run w/o doing sass first)
gulp.task('css', ['sass'], () => gulp.src([

  './public/assets/css/bootstrap.min.css',
  './public/assets/css/animate.min.css',
  './public/assets/css/paper-dashboard.css',
  './public/assets/css/demo.css',

])
  .pipe(cleanCSS({ compatibility: 'ie8' }))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
  .pipe(gulpConcat('style.min.css'))
  .pipe(gulp.dest('./public/dist/css/')));

// Restore some relative file paths from the downloaded theme
gulp.task('copy', () => gulp.src([
  './public/assets/fonts/**',
])
  .pipe(gulp.dest('./public/build/fonts/')));

gulp.task('js', () => gulp.src([

  './public/assets/js/jquery-1.10.2.js',
  './public/assets/js/bootstrap.min.js',
  './public/assets/js/bootstrap-checkbox-radio.js',
  './public/assets/js/bootstrap-notify.js',
  './public/assets/js/paper-dashboard.js',
  './public/assets/js/demo.js',

])
  .pipe(gulpConcat('vendor.min.js'))
  .pipe(gulp.dest('./public/dist/js'))
  .pipe(gulpRename('vendor.min.js'))
  .pipe(gulpUglify())
  .pipe(gulp.dest('./public/dist/js')));

// Compile SASS -> CSS
gulp.task('sass', () => gulp.src([

  './public/assets/sass/paper-dashboard.scss',

])
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./public/assets/css')));

gulp.task('watch', () => {
  gulp.watch(
    // Watch these files
    [
      './src/**.js',
      './src/*/**.js',
      './src/*/*/**.js',
      './src/*/*/*/**.js',
    ],
    // And run these tasks
    [
      'css',
      'js',
    ],
  );
});

// Default task: (run these scripts, in order)
gulp.task('default', ['css', 'copy', 'js', 'watch'], () => {});
gulp.task('prod', ['css', 'copy', 'js'], () => {});
