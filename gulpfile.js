var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');

var beep = require('beepbeep');
var colors = require('colors');

var browserSync = require('browser-sync').create();


var onError = function(err) {
  beep([200, 200]);
  console.log(
    '\n\n****************************************************\n'.bold.gray +
    '*****************'.bold.gray + ' \(╯°□°)╯'.bold.red + ' ︵ '.bold.gray +'ɹoɹɹǝ '.bold.blue + '*****************'.bold.gray +
    '\n****************************************************\n\n'.bold.gray +
    String(err) +
    '\n\n*******************************************************\n\n'.bold.gray );
  this.emit('end');
};

gulp.task('css',function(){
	return gulp.src('src/scss/main.scss')
	.pipe(plumber({
		erorHandler: onError
	}))
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: [
			'last 2 versions',
			'> 1%'
		]
	}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('default', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        files: ['./dist/css/main.css']
    });
    gulp.watch('./src/scss/**/*.scss', ['css']);
});

// cortar proceso ctrl+C