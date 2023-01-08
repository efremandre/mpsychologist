import fileInclude from 'gulp-file-include';
import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import htmlbeautify from 'gulp-html-beautify';
import pug from 'gulp-pug';

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(fileInclude())
		// .pipe(pug({
		// 	// сжатие HTML файла
		// 	pretty: true,
		// 	// показывать в терминале какой файл обработан
		// 	verbose: true,
		// }))
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpHtmlNosvg()
			)
		)
		.pipe(htmlbeautify({indentSize: 2}))
		.pipe(app.plugins.replace(/\.\.\/\.\.\/assets\//g, "./assets/"))
		.pipe(app.plugins.replace(/\.\.\/\.\.\/files\//g, "./files/"))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
}