const ghPages = require('gh-pages');

ghPages.publish('src', {
    push: true,
    src: "**/*.!(scss|map)",
    message: "Build and deploy to pages"
}, function(err) {});