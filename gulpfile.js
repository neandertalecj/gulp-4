let gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('scss', function() {
    return gulp.src('app/scss/**/*.scss') //.(scss|sass)
        // .pipe(sass({outputStyle: 'compressed'}))
        .pipe(sass({outputStyle: 'expanded'}))
        .pipe(gulp.dest('app/css'))
});

gulp.task('watch', function() {
    gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'))
})