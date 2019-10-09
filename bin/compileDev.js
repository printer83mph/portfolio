const sass = require('sass');
const fs = require('fs');

// TODO: fix this

var result = sass.renderSync({
    file: "scss/main.scss",
    outFile: "css/style.css",
    sourceMap: "css/style.css.map",
    outputStyle: "expanded"
});

fs.writeFileSync("public/css/styles.css", result.css);
fs.writeFileSync("public/css/style.scss.map", result.map);
