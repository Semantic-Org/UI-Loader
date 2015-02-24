
Package.describe({
  name    : 'semantic:ui-loader',
  summary : 'Semantic UI - Loader: Single component release',
  version : '1.10.1',
  git     : 'git://github.com/Semantic-Org/UI-Loader.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    'loader.css'
  ], 'client');
});
