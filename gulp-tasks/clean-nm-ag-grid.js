var gulp = require('gulp');
var del = require('del');

gulp.task('clean-nm-ag-grid', cleanNmAgGrid);

function cleanNmAgGrid() {
    del(['node_modules/ag-grid-rx', '!node_modules']);
}
