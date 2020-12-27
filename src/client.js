/* eslint no-console: off */

import App from '$routes/index.svelte';

try {
  const Client = new App({
    target: document.body,
    hydrate: true,
  });
} catch (err) {
  console.error(err);
}
