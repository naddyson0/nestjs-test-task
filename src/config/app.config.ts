export default () => ({
  shopifyStore: process.env.SHOPIFY_STORE,
  shopifyApiKey: process.env.SHOPIFY_API_KEY,
  shopifyAdminApiAccessToken: process.env.SHOPIFY_ACCESS_TOKEN,
  shopifyApiVersion: process.env.SHOPIFY_API_VERSION || '2024-04',
});
