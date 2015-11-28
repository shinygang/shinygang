/**
 * 处理图片构建
 * @Author:shinygang
 */ 

'use strict'


import gulp from 'gulp';
import path from 'path';
import loadPlugins from 'gulp-load-plugins';
import conf from './conf';

let $ = loadPlugins();

gulp.task('others', () => {
	var prePath = conf.paths.src;
	return gulp.src([
			path.join(prePath,'**/fonts/*'),
			path.join(prePath,'**/images/*'),
			path.join(prePath,'**/*.htc')
		])
		.pipe(gulp.dest('./server'));
});