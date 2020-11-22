var Twit = require('twit');

module.exports = function(res){
  const apikey = '9BhFJ0JECnwv5D3rSzIvDr4oR';
  const apiSecretKey = 'OcdI0RQ7grgQ4S1VzbUKsRnO5mEAFmz0RD46cwv8COoX4daRTI';
  const access_token = '1328870449774792704-eSw3YkOXTTm0m06BRAWoyrBtPez2TD';
  const access_token_secret = 'e22AdEV2wktBvT1p0o5GteeHjitACTNLPEJsoB3b0o74X';


  var T = new Twit({
    consumer_key:         apikey,
    consumer_secret:      apiSecretKey,
    access_token:         access_token,
    access_token_secret:  access_token_secret,
    timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
    strictSSL:            true,     // optional - requires SSL certificates to be valid.
  })

  var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]

  var stream = T.stream('statuses/filter', { locations: sanFrancisco , track: '#covid', language: 'en'})
  var users_to_display = [];
  stream.on('tweet', function (tweet) {
          var userObject = {
            screen_name: tweet.user.screen_name,
            date: tweet.created_at,
            text: tweet.text}
          
          users_to_display.push(userObject);
          console.log(users_to_display)
          res.render('list', {users: users_to_display})
  });
}