const gulp = require("gulp");
const rename = require("gulp-rename");
const replace = require("gulp-replace");

var gulpMinifyCssNames = require("gulp-minify-cssnames");

// exports.defaultTask = defaultTask;
// exports.default = series(clean, build, defaultTask);

gulp.task("rename-css-classes", function () {
  // Define a regular expression to match CSS class names
  const classRegex = /\.[a-zA-Z_-]+/g;

  // Create a unique number for each class
  let counter = 1;

  // Gulp task to rename CSS classes
  return gulp
    .src("src/styles.css") // Update the path to your CSS file
    .pipe(
      replace(classRegex, function (match) {
        // Replace each matched class with a dynamic number
        return "." + counter++;
      })
    )
    .pipe(rename("dist/styles-renamed.css")) // Specify the output file name
    .pipe(gulp.dest("path/to/your/output")); // Update the output path
});

gulp.task("minify-css-names", function () {
  return gulp
    .src(["src/*.css"])
    .pipe(gulpMinifyCssNames())
    .pipe(gulp.dest("dist"));
});
// Define a default task
gulp.task("default", gulp.series("minify-css-names"));
