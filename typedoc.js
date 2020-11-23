module.exports = {
  src: [
    './src',
  ],
  mode: 'file',
  includeDeclarations: true,
  tsconfig: 'tsconfig.json',
  out: './docs',
  excludePrivate: true,
  excludeProtected: true,
  excludeExternals: true,
  readme: 'README.md',
  name: 'faz-um-pix',
  ignoreCompilerErrors: true,
  plugin: 'none',
  listInvalidSymbolLinks: true,
};
