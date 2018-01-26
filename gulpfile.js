const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const expectFile = require('gulp-expect-file');
const sass = require('gulp-sass');

gulp.task('watch', ['default'], () => {
    gulp.watch('private/**', ['default']);
});

gulp.task('default', () => {
    gulp.src('private/js/libs/*.js')
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('public'));

    gulp.src('private/js/client/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('ggj18.js'))
        .pipe(gulp.dest('public'))
});
