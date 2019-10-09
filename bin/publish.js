const ghPages = require('gh-pages');

ghPages.publish('public', {
    push: true,
    src: "**/*!.map",
    message: "Build and deploy to pages"
}, function(err) {});