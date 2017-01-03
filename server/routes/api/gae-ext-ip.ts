import { Router } from 'express';
import * as request from 'request';

/**
 * https://github.com/GoogleCloudPlatform/nodejs-docs-samples/tree/master/appengine/websockets
 */

let gaeExtIP = 'N/A';

// [START external_ip]
// In order to use websockets on App Engine, you need to connect directly to
// application instance using the instance's public external IP. This IP can
// be obtained from the metadata server.
const METADATA_NETWORK_INTERFACE_URL = 'http://metadata/computeMetadata/v1/' +
  '/instance/network-interfaces/0/access-configs/0/external-ip';

const options = {
  url: METADATA_NETWORK_INTERFACE_URL,
  headers: {
    'Metadata-Flavor': 'Google'
  }
};

request(options, (err, resp, body) => {
  if (! err && resp.statusCode === 200) {
    gaeExtIP = body + ':' + process.env.PORT;
    console.log(`GAE external IP: ${gaeExtIP}`);
  } else {
    console.log('GAE external IP not available');
  }
});
// [END external_ip]

export default function (router: Router) {
  router.get('/gae-ext-ip', (req, res) => {
    res.send(gaeExtIP);
  });
};
