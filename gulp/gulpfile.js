let project_folder = "dist"; //folder for client
let source_folder = "#src"; //my work folder


let path = { //contains paths to different folders
	build: { //containts paths of ready files that are processed by gulp
		html: project_folder + "/",
		css: project_folder + "/css/",
		js: project_folder + "/js/",
		img: project_folder + "/img/",
		fonts: project_folder + "/fonts/",
	},
	src: { //my working folder
		html: [source_folder + "/*.html", "!" + source_folder + "/_*.html"],
		css: source_folder + "/scss/style.scss",
		js: source_folder + "/js/srcipt.js",
		img: source_folder + "/img/**/*.{jpg, png, gif, svg, webp}",
		fonts: source_folder + "/fonts/*.{ttf, eot, woff, woff2}",
	},
	watch: {//every time watching for folders
		html: source_folder + "/**/*.html",
		css: source_folder + "/scss/**/*.scss",
		js: source_folder + "/js/**/*.js",
		img: source_folder + "/img/**/*.{jpg, png, gif, svg, webp}"
	},
	clean: "./" + project_folder + "/"
}


// variables for the working with plugins
let { src, dest } = require('gulp'),
	gulp = require('gulp'),
	browsersync = require("browser-sync").create(), //variable for reboot web page
	fileinclude = require("gulp-file-include"), //variable for including
	del = require("del"),
	scss = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	group_media = require("gulp-group-css-media-queries"),
	clean_css = require("gulp-clean-css"),
	rename = require("gulp-rename");
	
	//create function that will update our page (namr of the function must be different from variable)
	// for browsersync
	function browserSync(params) {
		browsersync.init({
			server: {
				baseDir: "./" + project_folder + "/"
			},
			port: 3000
			// notify: true
		})
	}
	
	// for fileinclude
	// create new function for the working of HTML files
	function html() {
		return src(path.src.html) // we choose all html files in folder src/html
		.pipe(fileinclude()) //collect different HTML files that we want to include in our main one
		.pipe(dest(path.build.html)) // function, where we can write different code for GULP - the folder must contain new folder (client's folder)
		.pipe(browsersync.stream())
	}
	
	// for css files
	// create new function for the working of css files
	function css() {
		return src(path.src.css) // we choose all css files in folder src/css
		.pipe(
			scss({ //options
				outputStyle: "expanded"
			})
		)
		.pipe( //include our variable
			group_media()
		)
		.pipe( //options
			autoprefixer({
				overrideBrowserslist: ["last 5 versions"],
				cascade: true
			})
		)
		.pipe(dest(path.build.css)) // we want to show 2 files - compress and uncompress files? for this reason we must invoke 2 same functions (before and after compressing)
		.pipe(clean_css()) //compredded file
		.pipe( //after compressing we rename the file
			rename({
				extname: ".min.css"
			})
		)
		.pipe(dest(path.build.css)) // function, where we can write different code for GULP - the folder must contain new folder (client's folder) - showing our file
		.pipe(browsersync.stream())
	}
	
	// create new function for live tracking our updated files (html, css ...)
	function watchfiles(params) {
		gulp.watch([path.watch.html], html); //tracking folder with our html updated files
		gulp.watch([path.watch.css], css); //tracking folder with our css updated files
	}
	
	// create new function for deleting old folder dist before every gulp's starting
	// for del
	function clean(params) {
		return del(path.clean); //return our del plugin
	}
	
	
	let build = gulp.series(clean, gulp.parallel(css, html)); //variable for function html(), and then we must add this variable into the  variable "watch" - there will be our series of executed functions + css and html are executed in parellel way
	
	let watch = gulp.parallel(build, watchfiles, browserSync);
	
	
	// to connect GULP with new variables - we use "exports" for everyone
	exports.css = css;
	exports.html = html;
	exports.build = build;
	
	exports.watch = watch;
	exports.default = watch; // when we launch gulp - it will be executed this variable WATCH that in its turn it will launch our function browserSync() 