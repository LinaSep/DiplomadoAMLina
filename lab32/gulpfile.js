var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),//el nombre de las variables lo puedo cambiar
    rename = require('gulp-rename'),//lo que no puedo cambiar es el nombre del require, es decir siempre el archivo se va llamar 'gulp-cssmin', 'gulp-rename', 'gulp-concat-css' 
    concatCss = require('gulp-concat-css');


gulp.task('concat-css', function(){//en este caso el orden de los archivos si altera el resultado, se va a concatenar todos los css 
    return gulp.src(['source/normalize.css', 'source/skeleton.css', 'source/styles.css'])//primero concatena normalize, luego skeleton y por último styles
        .pipe(concatCss('bundle.css'))//el pipe cocatCss me va a renombrar el nuevo archivo
        .pipe(gulp.dest('source/css/'));//el pipe gulp.dest me va a llamar la carpeta en donde se va a guardar el css final, en este caso bundle.css
});

gulp.task('minify-css', ['concat-css'], function(){
  return gulp.src('source/css/bundle.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))//lo renombra agregandole el sufijo .min
    .pipe(gulp.dest('dist/'));
});