/**
 * Created by Administrator on 2017/6/14.
 */
//引入gulp
var gulp=require('gulp'),       //基础库
    webserver=require('gulp-webserver'),        //本地服务器
    sass=require('gulp-sass'),
    imagemin=require('gulp-imagemin'),          //图片压缩
    pngquant=require('imagemin-pngquant'),           //深度压缩
    uglify=require('gulp-uglify');               //js压缩


//注册任务
    gulp.task('webserver',function () {
        gulp.src('./dist')          //服务器目录（./代表根目录）
            .pipe(webserver({     //运行gulp-webserver
                open:true
            }));
    });
//注册sass任务
gulp.task('sass',function(){
    return gulp.src('src/sass/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'))
});
//html处理注册任务
    gulp.task('html',function () {
        return gulp.src('src/*.html')        //指明源文件路径，并进行文件匹配
            .pipe(gulp.dest('dist'));               //输出路径
    });
//压缩js处理注册任务
    gulp.task('script',function () {
        return gulp.src('src/js/*.js')      //指明源文件路径，并进行文件匹配
            .pipe(uglify())
            .pipe(gulp.dest('dist/js'));        //输出路径
    });
//图片压缩处理注册任务
    gulp.task('images',function () {
        return gulp.src('src/images/*.{png,jpg,gif,svg}')
            .pipe(imagemin({
                progressive:true,
                svgoplugins:[{removeViewBox:false}],
                use:[pngquant()]
            }))
            .pipe(gulp.dest('dist/images'))
    });
//默认任务
    gulp.task('default',['sass','script','images','html','webserver']);