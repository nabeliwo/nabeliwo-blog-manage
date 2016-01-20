export const nodemonConfig = {
  script: './index.js',
  ext: 'js',
  ignore: ['./public/', 'node_modules'],
  nodeArgs: ['--harmony']
};

export const browserSyncConfig = {
  proxy: {
    target: 'http://localhost:3000'
  },
  port: 35729,
  files: [
    './public/index.html',
    './public/assets/css/app.css',
    './public/assets/img/sprite.png',
    './public/assets/js/bundle/app.js'
  ]
};

export const browserifyConfig = {
  // Enable source maps
  debug: true,
  // A separate bundle will be generated for each
  // bundle config in the list below
  bundleConfigs: [{
    entries: './public/assets/js/app/app.js',
    dest: './public/assets/js/bundle/',
    outputName: 'app.js'
  }],
  extensions: ['.jsx']
};

export const scssConfig = {
  ep: './public/assets/css/_scss/app.scss',
  dest: './public/assets/css',
  watch: './public/assets/css/_scss/**/*.scss',
  cssnext: {
    browsers: 'last 2 versions'
  }
};

export const spriteConfig = {
  spriteSmith: {
    imgName: 'sprite.png',
    cssName: '_mixin_sprite.scss',
    imgPath: '/public/assets/img/sprite.png'
  },
  files: './public/assets/img/sprite/*.png',
  watch: './public/assets/img/sprite/',
  dest: './public/assets/img/',
  scss: './public/assets/css/_scss/foundation/'
};
