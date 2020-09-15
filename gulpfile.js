var gulp = require('gulp'),
sass = require('gulp-sass'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify');

gulp.task('sass', function(){
return gulp.src('scss/*.scss')
 .pipe(sass())
   .pipe(gulp.dest('css'))
})

/*

gulp.task('script' , function(){
    return gulp.src('js/scripts/*.js')
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('js'))
})
*/

gulp.task('watch', function() {
    gulp.watch('scss/*.scss', gulp.series('sass'))
});