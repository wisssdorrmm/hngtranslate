var DetectLanguage = require('../lib/');

var detectlanguage = new DetectLanguage(process.env.DETECTLANGUAGE_API_KEY);

detectlanguage.languages().then(function(result) {
  console.log(JSON.stringify(result, null, 2));
});
