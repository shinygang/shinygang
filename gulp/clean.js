'use strict'

import del from 'del';
import gulp from 'gulp';

gulp.task('clean-server',() => {
	del('server');
});