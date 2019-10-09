const sass = require('sass');
const fs = require('fs');

var result = sass.renderSync({
    file: "src/scss/main.scss",
    outputStyle: "compressed",
    outFile: "styles.css"
});

fs.writeFileSync("src/css/styles.css", result.css);
fs.writeFileSync("src/css/styles.css.map", result.map);
