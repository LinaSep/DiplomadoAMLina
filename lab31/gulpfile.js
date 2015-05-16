/*
* Dependencias
*/
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify');

/*
* Configuración de la tarea 'demo'
*/
gulp.task('concat-files', function(){
	gulp.src('source/*.js')
		.pipe(concat('lab31.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/'))//en la carpeta build se va a alojar mi archivo .min; esta carpeta se crea automáticamente
});