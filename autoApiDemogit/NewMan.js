const newman = require('newman');
newman.run({
    collection: require('/Users/xinyang.an/Documents/autoApiDemogit/autoApiDemogit/learning.postman_collection.json'),
    environment: require('/Users/xinyang.an/Documents/autoApiDemogit/autoApiDemogit/baidu.postman_environment.json'),
    reporters: 'html'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
