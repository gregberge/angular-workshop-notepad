module.exports = function (config) {
  config.set({
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-firefox-launcher'
    ],
    frameworks: ['mocha'],
    browsers: ['Chrome'],
    files: [
      {pattern: 'bower_components/jquery/dist/jquery.js', watched: false},
      {pattern: 'bower_components/bootstrap/dist/js/bootstrap.js', watched: false},
      {pattern: 'bower_components/angular/angular.js', watched: false},
      {pattern: 'bower_components/angular-ui-router/release/angular-ui-router.js', watched: false},

      {pattern: 'bower_components/angular-mocks/angular-mocks.js', watched: false},
      {pattern: 'node_modules/chai/chai.js', watched: false},

      'client/app.js',
      'client/app/**/*.js',
      'test/client/**/*.js'
    ]
  });
};