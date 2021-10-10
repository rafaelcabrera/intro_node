const gulp = require('gulp');

gulp.task(build, function (cb) {
    console.log('construyendo el sitio');
    setTimeout(cb,1200);
})