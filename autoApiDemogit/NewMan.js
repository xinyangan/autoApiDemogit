const newman = require('newman');
newman.run({
    collection: require('learning.postman_collection.json'),
    environment: require('baidu.postman_environment.json'),
    reporters: 'html'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
