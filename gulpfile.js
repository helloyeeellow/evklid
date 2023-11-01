const { src, dest, parallel } = require("gulp");
const svgSprite = require("gulp-svg-sprite");
const plumber = require("gulp-plumber");
const svgmin = require("gulp-svgmin");
const cheerio = require("gulp-cheerio");
const replace = require("gulp-replace");

const config = {
  mode: {
    symbol: {
      sprite: "../sprite.svg",
    },
  },
};

function buildSvg() {
  return src("img/**/*.svg", { cwd: "" })
    .pipe(plumber())
    .pipe(
      svgmin({
        js2svg: {
          pretty: true,
        },
      })
    )
    .pipe(
      cheerio({
        run: function ($) {
          $("[style]").removeAttr("style");
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(replace("&gt", ">"))
    .pipe(svgSprite(config))
    .on("error", function (error) {
      console.log(error);
    })
    .pipe(dest("public"));
}

exports.default = parallel(buildSvg);
