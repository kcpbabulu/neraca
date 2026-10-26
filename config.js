/*
 * PRIME Ledger deployment configuration.
 * Set API_URL to your own Google Apps Script Web App /exec URL.
 * Never place passwords, API secrets, or private tokens in this file: GitHub Pages is public.
 */
window.PRIME_CONFIG = Object.freeze({
  API_URL: "https://script.google.com/macros/s/AKfycbx9mfkcqNMMzFXGqHo-UeW76dsgNqtu4XUsQyHF6AHbmZ3WspjNjcafeUUTkJtJehvH/exec", // Paste your verified, access-restricted Apps Script /exec URL here before deployment.
  APP_VERSION: "1.0.0",
  CACHE_TTL_MS: 60000,
  ENABLE_MUTATIONS: true
});
