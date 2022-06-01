import svgSprites from "gulp-svg-sprite"

export const svgSprite = () => {
    return app.gulp.src(app.path.src.svgicons)
    .pipe(svgSprites({
        mode: {
          stack: {
            sprite: "../sprite.svg"
          }
        },
      }))
      .pipe(app.gulp.dest(app.path.build.svgicons))
  }