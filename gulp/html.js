/**
 * 处理html构建
 * @Author shinygang
 */

'use strict'

import path from 'path';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import conf from './conf';

let $ = loadPlugins();

gulp.task('htmls', () => {
	return gulp.src([path.join(conf.paths.src,'**/*.html')])
		.pipe($.replace('scss', 'css'))
		.pipe(gulp.dest('./server'));
});