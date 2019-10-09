const sass = require('sass');
const fs = require('fs');

var result = sass.renderSync({
    file: "scss/main.scss",
    sourceMap: true,
    outputStyle: "expanded"
});

fs.writeFileSync("public/css/styles.css", result.css);
fs.writeFileSync("public/css/main.scss.map", result.map);
