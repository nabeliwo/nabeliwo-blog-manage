import gulp from 'gulp';
import sass from 'gulp-sass';
import cssnext from 'gulp-cssnext';

import { scssConfig } from '../config';

gulp.task('scss', () => {
  gulp.src(scssConfig.ep)
  .pipe(sass())
  .on('error', err => {
    console.log(`Error : ${err.message}`);
  })
  .pipe(cssnext(scssConfig.cssnext))
  .pipe(gulp.dest(scssConfig.dest));
});
