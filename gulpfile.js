// Import packages
const gulp = require('gulp')
const less = require('gulp-less')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const cleanCSS = require('gulp-clean-css')
const ts = require('gulp-typescript')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')
const sourcemaps = require('gulp-sourcemaps')
const autoprefixer = require('gulp-autoprefixer')
const imagemin = require('gulp-imagemin')
const htmlmin = require('gulp-htmlmin')
const size = require('gulp-size')
const gulppug = require('gulp-pug')
const newer = require('gulp-newer')
const browsersync = require('browser-sync').create()
const del = require('del')

// Objects with the paths of the "src" source files and the paths to the resulting "dest" files
const paths = {
    html: {
        src: ['src/*.html', 'src/*.pug'],
        dest: 'dist/'
    },
    styles: {
        src: ['src/styles/**/*.sass', 'src/styles/**/*.scss', 'src/styles/**/*.less'],
        dest: 'dist/css/'
    },
    scripts: {
        src: ['src/scripts/**/*.js', 'src/scripts/**/*.ts'],
        dest: 'dist/js/'
    },
    images: {
        src: 'src/img/**',
        dest: 'dist/img/'
    }
}

// Cleaning the "dist" directory, which deletes everything except the already processed images
function clean() {
    return del(['dist/*', '!dist/img'])
}

// Processing "html" and "pug". If you use "pug" uncomment the line with pipe inside
function html() {
    return gulp.src(paths.html.src)
    // .pipe(gulppug())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(size({
        showFiles: true
    }))
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browsersync.stream())
}

// Processing "css" and "style preprocessors". If you use "less" uncomment the line with pipe inside and comment out the line with pipe "sass"
function styles() {
    return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    // .pipe(less())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS({
        level: 2
    }))
    .pipe(rename({
        basename: 'main',
        suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(size({
        showFiles: true
    }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browsersync.stream())
}

// Processing "javascript" and "typescript". If you don't use typescript comment out the line with pipe "ts"
function scripts() {
    return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(ts({
        noImplicitAny: true,
        outFile: 'main.min.js'
    }))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(size({
        showFiles: true
    }))
    .pipe(gulp.dest(paths.scripts.dest))
    .pipe(browsersync.stream())
}

// Image compression
function img() {
    return gulp.src(paths.images.src)
    .pipe(newer(paths.images.dest))
    .pipe(imagemin({
        progressive: true
    }))
    .pipe(size({
        showFiles: true
    }))
    .pipe(gulp.dest(paths.images.dest))
}

// Tracking changes in files and launching a live server. To exit the "watch" mode in the terminal - press "ctrl + c"
function watch() {
    browsersync.init({
        server: {
            baseDir: "./dist/"
        }
    })
    gulp.watch(paths.html.dest).on('change', browsersync.reload)
    gulp.watch(paths.html.src, html)
    gulp.watch(paths.styles.src, styles)
    gulp.watch(paths.scripts.src, scripts)
    gulp.watch(paths.images.src, img)
}

// Tasks for manual launch using commands in the terminal "gulp clean", "gulp watch" and so on
exports.clean = clean
exports.html = html
exports.styles = styles
exports.scripts = scripts
exports.img = img
exports.watch = watch

// The main task, which is executed by the command "gulp" in the terminal and combines other tasks for automatic operation
exports.default = gulp.series(clean, html, gulp.parallel(styles, scripts, img), watch)