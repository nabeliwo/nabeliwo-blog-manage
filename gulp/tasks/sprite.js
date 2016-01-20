import gulp from 'gulp';
import spritesmith from 'gulp.spritesmith';

import { spriteConfig } from '../config';

gulp.task('sprite', () => {
  const spriteData = gulp.src(spriteConfig.files)
    .pipe(spritesmith(spriteConfig.spriteSmith));

  spriteData.img.pipe(gulp.dest(spriteConfig.dest));
  spriteData.css.pipe(gulp.dest(spriteConfig.scss));
});
