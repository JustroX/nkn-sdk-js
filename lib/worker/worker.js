'use strict';

var _tweetnacl = _interopRequireDefault(require("tweetnacl"));

var _ed2curve = _interopRequireDefault(require("ed2curve"));

var crypto = _interopRequireWildcard(require("../common/crypto"));

var util = _interopRequireWildcard(require("../common/util"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (self) {
  let key, curveSecretKey;

  self.onmessage = function (e) {
    try {
      let result = null;

      switch (e.data.action) {
        case 'setSeed':
          if (!key) {
            key = _tweetnacl.default.sign.keyPair.fromSeed(util.hexToBytes(e.data.seed));
            curveSecretKey = _ed2curve.default.convertSecretKey(key.secretKey);
          }

          break;

        case 'computeSharedKey':
          if (key) {
            result = crypto.computeSharedKey(curveSecretKey, e.data.otherPubkey);
          } else {
            throw 'worker key not created';
          }

          break;

        case 'sign':
          if (key) {
            result = crypto.sign(key.secretKey, e.data.message);
          } else {
            throw 'worker key not created';
          }

          break;

        default:
          throw 'unknown action: ' + e.data.action;
      }

      self.postMessage({
        id: e.data.id,
        result
      });
    } catch (err) {
      self.postMessage({
        id: e.data.id,
        error: err
      });
    }
  };
};