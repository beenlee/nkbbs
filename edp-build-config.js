/**
 * @file config edp-build
 * @author EFE
 */

/* globals LessCompiler, CssCompressor, JsCompressor, PathMapper, AddCopyright, ModuleCompiler, TplMerge */

exports.input = __dirname;

var path = require('path');
exports.output = path.resolve(__dirname, 'output');

// var moduleEntries = 'html,htm,phtml,tpl,vm,js';
// var pageEntries = 'html,htm,phtml,tpl,vm';

exports.getProcessors = function () {
    var Versioning = require('edp-build-versioning');
    var cssFiles = ['src/css/*.less', 'src/css/*.css'];

    var LessPluginEst = require('less-plugin-est');
    var est = new LessPluginEst();
    var lessProcessor = new LessCompiler({
        less: require('less'),
        files: cssFiles,
        compileOptions: {
            plugins: [est]
        }
    });

    var cssProcessor = new CssCompressor();
    var moduleProcessor = new ModuleCompiler();
    var jsProcessor = new JsCompressor();
    var pathMapperProcessor = new PathMapper();
    var addCopyright = new AddCopyright();

    var versionProcessor = new Versioning({
        rename: true,
        require: {
            combine: true,
            outputByPage: true
        },
        cssURL: true,
        filePaths: ['src/css/index.less']
    });

    return {
        'default': [
            lessProcessor, moduleProcessor, versionProcessor, pathMapperProcessor
        ],

        'release': [
            lessProcessor, cssProcessor, moduleProcessor,
            jsProcessor, versionProcessor, pathMapperProcessor, addCopyright
        ]
    };
};

exports.exclude = [
    'tool',
    'doc',
    'test',
    'project',
    'module.conf',
    'dep/packages.manifest',
    'dep/*/*/test',
    'dep/*/*/doc',
    'dep/*/*/demo',
    'dep/*/*/tool',
    'dep/*/*/*.md',
    'dep/*/*/package.json',
    'edp-*',
    '.edpproj',
    '.svn',
    '.git',
    '.gitignore',
    '.idea',
    '.project',
    'Desktop.ini',
    'Thumbs.db',
    '.DS_Store',
    '*.tmp',
    '*.bak',
    '*.swp',
    '*.sh',
    'package.json',
    'README.md',
    'node_modules'
];

/* eslint-disable guard-for-in */
exports.injectProcessor = function (processors) {
    for (var key in processors) {
        global[key] = processors[key];
    }
};
