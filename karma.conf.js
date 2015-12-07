// Karma configuration
// Generated on Wed Jan 22 2014 09:56:41 GMT-0200 (BRST)

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'lib/angular.js',
      'lib/angular-mocks.js',
      'js/*.js',
      'test/*.js'
    ],
    exclude: [],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    captureTimeout: 60000,
    singleRun: false
  });
};
