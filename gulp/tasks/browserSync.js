import gulp from 'gulp';
import browserSync from 'browser-sync';
import { browserSyncConfig } from '../config';

gulp.task('browserSync', ['build', 'nodemon'], () => {
  browserSync(browserSyncConfig);
});
