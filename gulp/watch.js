/**
 * 坚挺文件变化
 * @Author shinygang
 */

import path from 'path';
import gulp from 'gulp';
import browser from 'browser-sync';
import conf from './conf';

let browserSync = browser.get('shinygang');
let isOnlyChange = e => e.type === 'changed';


gulp.task('reload', () => {
	browserSync.reload();
});

gulp.task('watch', ['styles', 'others', 'scripts', 'htmls'], () => {
	/**
	 * 监听样式文件变化
	 */
	gulp.watch([path.join(conf.paths.src, '/**/*.{scss,css}')], event => {
		if (isOnlyChange(event)) {
			gulp.start('styles');
		}
		else {
			gulp.start('htmls');
		}
	});
	
	/**
	 * 监听html变化 
	 */
	gulp.watch(['./index.html', path.join(conf.paths.src, '/**/*.html')], () => {
		gulp.start('reload');
	});
});