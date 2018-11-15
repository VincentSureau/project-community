'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _HttpError = require('ra-core/lib/util/HttpError');

var _HttpError2 = _interopRequireDefault(_HttpError);

var _fetchJsonLd = require('@api-platform/api-doc-parser/lib/hydra/fetchJsonLd');

var _fetchJsonLd2 = _interopRequireDefault(_fetchJsonLd);

var _parseHydraDocumentation = require('@api-platform/api-doc-parser/lib/hydra/parseHydraDocumentation');

var _jsonld = require('jsonld');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sends HTTP requests to a Hydra API.
 *
 * Adapted from react-admin
 *
 * @copyright Kévin Dunglas
 *
 * @param {string} url
 * @param {object} options
 * @return {object}
 */
exports.default = function (url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var requestHeaders = options.headers || new Headers();

  if (options.user && options.user.authenticated && options.user.token) {
    requestHeaders.set('Authorization', options.user.token);
  }

  return (0, _fetchJsonLd2.default)(url, (0, _extends3.default)({}, options, {
    headers: requestHeaders
  })).then(function (data) {
    var status = data.response.status;

    if (status < 200 || status >= 300) {
      return _jsonld.promises.expand(data.body, {
        base: (0, _parseHydraDocumentation.getDocumentationUrlFromHeaders)(data.response.headers)
      }).then(function (json) {
        return Promise.reject(new _HttpError2.default(json[0]['http://www.w3.org/ns/hydra/core#description'][0]['@value'], status));
      }).catch(function (e) {
        if (e instanceof _HttpError2.default) {
          return Promise.reject(e);
        }

        return Promise.reject(new _HttpError2.default(data.response.statusText, status));
      });
    }

    return {
      status: status,
      headers: data.response.headers,
      json: data.body
    };
  });
};