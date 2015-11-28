
'use srict'

import gutil from 'gulp-util';

exports.paths = {
	src:'src',
	server:'server',
	dist:'dist'
}

/**
 * 记录gulp报错
 * 
 */ 
exports.errorLog = info => {
	return err => {
		gutil.log(gutil.colors.red('['+info+']'),err.toString());
		this.emit('end');
	}
}