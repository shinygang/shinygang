/**
 * 处理js构建
 * @Author shinygang
 */

'use strict'

import path from 'path';
import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import conf from './conf';

let $ = loadPlugins();

gulp.task('scripts', () => {
	return gulp.src([path.join(conf.paths.src,'**/*.js')])
        //.pipe($.uglify({mangle: false}))
		.pipe(gulp.dest(conf.paths.server));
});