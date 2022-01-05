const newman = require('newman');
newman.run({
    collection: require('/Users/xinyang.an/.jenkins/workspace/autoApiDemo/learning.postman_collection.json'),
    environment: require('/Users/xinyang.an/.jenkins/workspace/autoApiDemo/baidu.postman_environment.json'),
    reporters: 'html'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
