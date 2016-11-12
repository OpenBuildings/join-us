var gulp = require('gulp')
var livereload = require('gulp-livereload')

gulp.task('livereload', function() {
    gulp.src('index.html')
        .pipe(livereload())
});

gulp.task('watch', function() {
    livereload.listen()
    gulp.watch('index.html', ['livereload'])
})

gulp.task('default', ['watch'])
