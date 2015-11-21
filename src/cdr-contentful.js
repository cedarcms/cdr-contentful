import * as contentful from 'contentful';
import * as config from '../config/application.json';

class CedarContentful {
  constructor() {
    this.client = contentful.createClient({
      // ID of Space
      space: config.contentful.space, //

      // A valid access token within the Space
      accessToken: config.contentful.accessToken,

      // Enable or disable SSL. Enabled by default.
      secure: true,

      // Set an alternate hostname, default shown.
      host: 'preview.contentful.com',

      // Resolve links to entries and assets
      resolveLinks: true
    });
  }

  greet() {
    this.client.space()
      .then(function(space) {
        alert(space.name);
      });
  }
}

export default CedarContentful;
