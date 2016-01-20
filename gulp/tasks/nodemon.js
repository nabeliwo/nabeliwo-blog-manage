import gulp from 'gulp';
import nodemon from 'gulp-nodemon';
import { nodemonConfig } from '../config';

gulp.task('nodemon', cb => {
  let started = false;

  return nodemon(nodemonConfig)
  .on('start', () => {
    if (!started) {
      started = true;
      cb();
    }
  })
  .on('restart', () => {
    setTimeout(() => {
      console.log('hoge');
    }, 600);
  });
});
