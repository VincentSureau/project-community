"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports.default = fetchJsonLd;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Sends a JSON-LD request to the API.
 *
 * @param {string} url
 * @param {object} options
 * @return {Promise.<object>} An object with a response key (the original HTTP response) and an optional body key (the parsed JSON-LD body)
 */
function fetchJsonLd(url) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var jsonLdMimeType = "application/ld+json";

  if ("undefined" === typeof options.headers) {
    options.headers = new Headers();
  }

  if (null === options.headers.get("Accept")) {
    options.headers.set("Accept", jsonLdMimeType);
  }

  if ("undefined" !== options.body && !(typeof FormData !== "undefined" && options.body instanceof FormData) && null === options.headers.get("Content-Type")) {
    options.headers.set("Content-Type", jsonLdMimeType);
  }

  return fetch(url, options).then(function (response) {
    var headers = response.headers,
        status = response.status;

    if (204 === status) {
      return _promise2.default.resolve({ response: response });
    }
    if (500 <= status || !headers.has("Content-Type") || !headers.get("Content-Type").includes(jsonLdMimeType)) {
      return _promise2.default.reject({ response: response });
    }

    return _promise2.default.resolve(response.json().then(function (body) {
      return { response: response, body: body, document: body };
    }));
  });
}