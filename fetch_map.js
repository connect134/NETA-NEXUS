const https = require('https');
https.get('https://maps.app.goo.gl/2rJ1haeofvcMVE2C6', (res) => {
  console.log(res.headers.location);
});
