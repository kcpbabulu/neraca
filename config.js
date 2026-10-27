/*
 * PRIME Ledger deployment configuration.
 * Set API_URL to your own Google Apps Script Web App /exec URL.
 * Never place passwords, API secrets, or private tokens in this file: GitHub Pages is public.
 */
window.PRIME_CONFIG = Object.freeze({
  API_URL: "https://script.google.com/macros/s/AKfycbzk13LKDjp_8CzGWiaRlBih9SL0HXmnq9Gh9PmgxKfKsGH0X4j1tpXT47DQjEXbnxoW/exec", // Paste the public Apps Script Web App /exec URL here before deployment.
  APP_VERSION: '1.8.0',
  CACHE_TTL_MS: 60000,
  ENABLE_MUTATIONS: true
});
