module.exports = {
  extends: require.resolve('./base.js'),
  rules: {
    'nuxt/no-globals-in-created': 'warn',
    'nuxt/no-timing-in-fetch-data': 'warn'
  }
}