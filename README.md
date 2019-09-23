npm install --global gulp-cli
npm init
npm install --save-dev gulp
gulp -v

Create gulpfile.js

Go to the Plugins and looking for "gulp-sass" plugin
npm install gulp-sass --save-dev

gulp scss - It execute the task that have name "scss"
gulp watch

https://www.browsersync.io/docs/gulp     - live reload plugin
npm install browser-sync --save-dev
gulp - now it's comand for everything

   Local: http://localhost:3000
    External: http://192.168.20.196:3000  - url for external devices

npm packeges:
    normalize.css
    slick-carousel
    magnific-popup

Видалити slick.scss із node_modules бо не пойме що брати slick.css чи slick.scss  !!!It was FIXED

plugins for js:
    gulp uglify for min
    gulp cumcut - for concat

npm i gulp-uglify gulp-concat --save-dev

npm i gulp-rename --save-dev When we compress the css file it'll rename this one adding suffics .min

npm i del --save-dev  Its removes all files from dist before refresh

gulp dist
gulp clean
