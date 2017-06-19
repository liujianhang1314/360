//引入功能
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    imagemin=require('gulp-imagemin'),          //图片压缩
    webserver = require("gulp-webserver"),
    htmlmin = require("gulp-htmlmin"),
    uglify=require('gulp-uglify');               //js压缩


//注册任务
gulp.task('sass',function(){
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});

gulp.task('webserver', function () {
    gulp.src('./dist/')
        .pipe(webserver({
            livereload:true,
            open:true
        }));
});

gulp.task("htmlmin", function () {
    gulp.src('src/**/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('dist'))
});
gulp.task('script',function () {
     gulp.src('src/js/**/*.*')      //指明源文件路径，并进行文件匹配
        // .pipe(uglify())
        .pipe(gulp.dest('dist/js'));        //输出路径
});
gulp.task('images',function () {
    return gulp.src('src/images/*.{png,jpg,gif,svg}')
        .pipe(imagemin({
            progressive:true,
            svgoplugins:[{removeViewBox:false}]
        }))
        .pipe(gulp.dest('dist/images'))
});
gulp.task('watch', function () {
    gulp.watch('src/**/*.html',["htmlmin"]);
    gulp.watch('src/sass/*.scss',["sass"]);
    gulp.watch('src/js/**/*.*',["script"]);
});
//执行任务
gulp.task('default', ['sass','webserver','htmlmin','watch','images','script']);