Package.describe({
  name: 'cwohlman:materialize-modal',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');

  api.use('templating');
  api.use('ui');

  api.addFiles('cwohlman:materialize-modal.js', ['client']);
  api.addFiles([
    '_modalLayoutOk.html'
    , '_modalLayoutForm.html'
    , '_modalAlert.html'
  ], ['client']);
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cwohlman:materialize-modal');
  api.addFiles('cwohlman:materialize-modal-tests.js');
});
