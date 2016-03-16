var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var imagemin = require('imagemin');
var browserSync = require('browser-sync').create();

//Mensaje de error en terminal
var beep = require('beepbeep');
var colors = require('colors');

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

//Convertir el SCSS a CSS
gulp.task('css',function() {
	return gulp.src('./src/scss/main.scss')
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
	.pipe(gulp.dest('./dist/css'));
});

//Copiar el HTML de SRC a DIST
gulp.task('html', function() {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

//Copiar las IMG de SRC a DIST
gulp.task('imagemin', function() {
    return gulp.src('./src/img/*.png')
    .pipe(gulp.dest('./dist/img'));
});

//Tarea por defecto GULP que muestra los cambios en tiempo real
gulp.task('default', ['css','html','imagemin'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        files: ['./dist/css/main.css']
    });
    gulp.watch('./src/scss/*.png', ['imagemin']);
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./dist/*.html').on('change',browserSync.reload);
});

// cortar proceso ctrl+C