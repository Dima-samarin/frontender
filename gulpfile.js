import gulp from 'gulp'

import { path } from './gulp/config/path.js'

import { plugins } from './gulp/config/plugins.js'

global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path:path,
    gulp:gulp,
    plugins:plugins,
}
import { copy } from './gulp/tasks/copy.js'
import { clean } from './gulp/tasks/clean.js'
import { html } from './gulp/tasks/html.js'
import { server } from './gulp/tasks/server.js'
import { scss } from './gulp/tasks/scss.js'
import { js } from './gulp/tasks/js.js'
import { images } from './gulp/tasks/images.js'
import { svgSprite } from './gulp/tasks/svgSprite.js'
import { otfToTtf, ttfToWoff, fontStyle } from './gulp/tasks/fonts.js'
import { zip } from './gulp/tasks/zip.js'
import { ftp } from './gulp/tasks/ftp.js'


function watcher() {
  gulp.watch(path.watch.resources, copy);
    gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}
const fonts = gulp.series(otfToTtf,ttfToWoff,fontStyle)
const mainTasks = gulp.series(fonts, gulp.parallel(copy,html,scss,js,images,fonts,svgSprite))

const dev = gulp.series(clean,mainTasks,gulp.parallel (watcher,server));
const build = gulp.series(clean,mainTasks);
const deployZIP = gulp.series(clean, mainTasks, zip);
const deployFTP = gulp.series(clean, mainTasks, ftp);

export {dev}
export {build}
export {deployZIP}
export {deployFTP}

gulp.task('default', dev)