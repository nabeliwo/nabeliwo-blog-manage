/* Notes:
   - gulp/tasks/browserify.js handles js recompiling with watchify
   - gulp/tasks/browserSync.js watches and reloads compiled files
*/

import gulp from 'gulp';

import { scssConfig, spriteConfig } from '../config';

gulp.task('watch', ['setWatch', 'browserSync'], () => {
  gulp.watch(scssConfig.watch, ['scss']);
  gulp.watch(spriteConfig.watch, ['sprite']);
});
