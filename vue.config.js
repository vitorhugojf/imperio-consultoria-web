module.exports = {
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/imperio-consultoria-web/'
    : '/'
}