var gulp = require('gulp');

gulp.task('copy-from-ag-grid', copyFromAgGrid);

function copyFromAgGrid() {
    return gulp.src(['../ag-grid-rx/*', '../ag-grid-rx/dist/**/*'], {base: '../ag-grid-rx'})
        .pipe(gulp.dest('./node_modules/ag-grid-rx'));
}
