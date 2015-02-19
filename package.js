var
  where = 'client' // Adds files only to the client
;

Package.describe({
  name    : 'semantic:ui-loader',
  summary : 'Semantic UI - Loader (official): Single component release of loader',
  version : '1.9.2',
  git     : 'git://github.com/Semantic-Org/UI-Loader.git',
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles([
    
  ], where);
});
