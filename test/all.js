exports['test Google Maps .exp completion'] = require('./gmaps/test_completion.exp');
exports['test Google Maps .ref completion'] = require('./gmaps/test_completion.ref');

if (require.main === module) require("test").run(exports);