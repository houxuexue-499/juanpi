//导入模块
const gulp = require('gulp');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
// //发布任务
// function fnTest(){
//     console.log('测试成功');
// }
//html
function fnHTML(){
    return gulp.src('./src/pages/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist/pages'));
}
//
//复制首页到dist
function fnCopyIndex(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'));
}
//css
function fnCss(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    // .pipe(gulp.cssnano())
    .pipe(rename({suffix : '.min'}))
    .pipe(gulp.dest('./dist/css'));
}
// json
function fnJson(){
    return gulp.src('./src/json/*.json')
    .pipe(gulp.dest('./dist/json'));
}
//js
function fnJs(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    // .pipe(concat('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}
//img
function fnImg(){
    return gulp.src('./src/image/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/image'));
}

//监听
function fnWatch(){
    gulp.watch('./src/pages/*.html',fnHTML);
    gulp.watch('./src/index.html',fnCopyIndex);
    gulp.watch('./src/sass/*.scss',fnCss);
    gulp.watch('./src/js/*.js',fnJs);
    gulp.watch('./src/json/*.json',fnJson);
}
// 导出模块
exports.html = fnHTML;
exports.copeIndex = fnCopyIndex;
exports.css =  fnCss;
exports.js = fnJs;
exports.image = fnImg;
exports.json = fnJson;
exports.default = fnWatch;