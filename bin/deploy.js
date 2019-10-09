const sass = require('sass');
const ghPages = require('gh-pages');
const fs = require('fs');

var result = sass.renderSync({
    file: "src/scss/main.scss",
    outputStyle: "compressed",
    outFile: "src/css/styles.css"
});

fs.writeFileSync("src/css/styles.css", result.css);
fs.writeFileSync("src/css/styles.css.map", result.map);

ghPages.publish('src', {
    push: true,
    message: "Build and deploy to pages"
}, function(err) {});