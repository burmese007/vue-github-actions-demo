module.exports = {
    // 选项...
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue-github-actions-demo/'
    : '/'
  }