/**
 * 启动serve服务或者构建生产环境
 * @Author:shinygang
 */

'use strict'

import path from 'path';
import gulp from 'gulp';
import browserSync from 'browser-sync';
import conf from './conf';

let browserServer = browserSync.create('shinygang');

/**
 * browser 服务配置
 * @param baseDir
 */
let browserInit = baseDir => {
	//启动服务
	// browserServer.init({
	// 	startPath:'/',
	// 	baseDir: baseDir,
	// 	index: 'index.html',
	// 	browser:'default',
	// 	port:'8070'
	// });
	browserServer.init({
        startPath: '/',
        server: {
			baseDir:baseDir
		},
        browser: 'default',
        port: 8070
    });
}

/**
 * 启动开发环境
 */ 
gulp.task('server',['watch'],() => {
	browserInit(conf.paths.server);
})