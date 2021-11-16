const newman = require('newman');
newman.run({
    collection: require('postman_collection.json'),
    environment: require('postman_environment.json'),
    reporters: 'html'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
