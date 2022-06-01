import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
    build:{
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        images: `${buildFolder}/img/`,
        html: `${buildFolder}/`,
        resources: `${buildFolder}/`,
        fonts: `${buildFolder}/fonts/`,
        svgicons: `${buildFolder}/img/`,
    },
    src:{
        js: `${srcFolder}/js/scripts.js`,
        scss: `${srcFolder}/scss/styles.scss`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg: `${srcFolder}/img/**/*.svg`,
        html: `${srcFolder}/*.html`,
        resources: `${srcFolder}/resources/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    watch:{
        js: `${srcFolder}/js/**/*.js`,  
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg}`,
        resources: `${srcFolder}/resources/**/*.*`,
        svgicons: `${srcFolder}/svgicons/*.svg`,
    },
    clean:buildFolder,
    buildFolder:buildFolder,
    srcFolder:srcFolder,
    rootFolder:rootFolder,
    ftp: `test`
}