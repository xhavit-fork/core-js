require('../../modules/es.object.to-string');
require('../../modules/es.string.iterator');
require('../../modules/esnext.iterator.constructor');
require('../../modules/esnext.iterator.some');
require('../../modules/web.dom-collections.iterator');

var entryUnbind = require('../../internals/entry-unbind');

module.exports = entryUnbind('Iterator', 'some');
