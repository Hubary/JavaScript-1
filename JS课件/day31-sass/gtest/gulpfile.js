//require 引入一个模块，参数是模块的名称
var gulp = require('gulp');

// 引入 gulp-uglify 模块  压缩js
var uglify = require('gulp-uglify');

var babel = require('gulp-babel');


//创建一个任务  压缩js
gulp.task('compress',function(){
	//通过src  拿到文件流  ，通过管道函数做处理
	gulp.src('./src/js/**/*.js')
	.pipe(babel({'presets':'es2015'}))
	.pipe(uglify())
	.pipe(gulp.dest('./dist/js'));
})
//创建一个任务   编译压缩sass

const sass = require('gulp-ruby-sass');
gulp.task('sass', () =>
    sass('./src/sass/*.scss',{'style':'compressed'})
        .on('error', sass.logError)
        .pipe(gulp.dest('./dist/css'))
);

gulp.task('watch',function(){
	
	gulp.watch('./src/js/**/*.js',['compress']);
	gulp.watch('./src/sass/*.scss',['sass']);
	
})





