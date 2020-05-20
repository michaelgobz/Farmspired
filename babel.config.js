module.exports = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/presets-env', '@babel/presets-react'],
    plugins: [
      [
        'transform-class-properties',
        {
          spec: true
        }
      ]
    ]
  }
};
