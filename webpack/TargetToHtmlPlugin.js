const requireFromString = require('require-from-string');

class TargetToHtmlPlugin {
	apply(compiler) {
		compiler.plugin('emit', function(compilation, callback) {
			compilation.chunks.forEach(function(chunk) {
				chunk.files.filter(function(filename) {
					if (filename.includes('.js')) {
						var src = compilation.assets[filename].source();
						const m = requireFromString(src);
						compilation.assets[filename.replace('.js', '.html')] = {
							source: () => m.default,
							size: () => m.default.length,
						};
						delete compilation.assets[filename];
						return false;
					}
					return true;
				});
			});

			callback();
		});
	}
}

TargetToHtmlPlugin.loader = __dirname + '/loader.js';

module.exports = TargetToHtmlPlugin;
