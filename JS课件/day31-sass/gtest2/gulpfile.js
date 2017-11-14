var gulp = require('gulp');

//gulp.src gulp.dest  gulp.task  gulp.watch

//检测js语法
var pump = require('pump');
//压缩js插件
var uglify = require('gulp-uglify');

//获取babel插件  es6-》es5
var babel = require('gulp-babel');


//压缩js 的任务
gulp.task('compress', function (cb) {
  pump([
        gulp.src('./src/js/*.js'),
        babel({'presets':'es2015'}),
        uglify(),
        gulp.dest('./dist/js')
    ],
    cb
  );
});


// 引入gulp-ruby-sass 
var sass = require('gulp-ruby-sass');
gulp.task('sass', () =>
    sass('./src/sass/*.scss',{'style':'compressed'})
        .on('error', sass.logError)
        .pipe(gulp.dest('./dist/css'))
        .pipe(gulp.dest('./src/css'))
);


//gulp-htmlmin  压缩html
var htmlmin = require('gulp-htmlmin');
gulp.task('htmlmin', function() {
  return gulp.src('src/html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist/html'));
});


//合并js  gulp-concat
var concat = require('gulp-concat');
gulp.task('concat',function(cb){
	
	  pump([
        gulp.src(['./src/js/a.js', './src/js/b.js']),
        babel({'presets':'es2015'}),
        concat('all.js'),
        uglify(),
        gulp.dest('./dist/js'),
        gulp.dest('./src/js')
    ],
    cb
  );
	
//	
//	 gulp.src(['./src/js/a.js', './src/js/b.js'])
//  .pipe(concat('all.js'))
//  .pipe()
//  .pipe(gulp.dest('./src/js'))
//  .pipe(gulp.dest('./dist/js'))
	
})


//刷新
var connect = require('gulp-connect');

gulp.task('connect',function(){
	gulp.src('./src/html/*.html')
	.pipe(connect.reload())
})


gulp.task('watch',function(){
	connect.server({
		livereload:true
	});
	
	
	gulp.watch('./src/js/**/*.js',['concat','compress']);
	gulp.watch('./src/sass/*.scss',['sass']);
	gulp.watch('src/html/*.html',['htmlmin','connect']);
	
	
})
