const sass = require('sass');
const fs = require('fs');

var result = sass.renderSync({
    file: "src/scss/main.scss",
    outputStyle: "compressed"
});

fs.writeFileSync("src/css/styles.css", result.css);
