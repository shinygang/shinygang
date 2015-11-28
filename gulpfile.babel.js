/**
 * 唐岗个人网站工程构建主配置文件
 * @Author: shinygang
 * 所有子任务放置在gulp目录内
 */

'use strict'

import gulp from 'gulp';
import wrench from 'wrench';

wrench.readdirSyncRecursive('./gulp').filter(file => {
	return (/\.(js)$/i).test(file)
}).map((file) => {
	require('./gulp/'+file);
});

gulp.task('default',['clean'],() => {
	gulp.start('server');
})
