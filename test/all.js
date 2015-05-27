// Google Maps tests
exports['test Google Maps .exp completion'] = require('./gmaps/test_completion.exp');
exports['test Google Maps .ref completion'] = require('./gmaps/test_completion.ref');

// Google Charts tests
exports['test Google Charts completion'] = require('./gcharts/test_completion');

if (require.main === module) require("test").run(exports);