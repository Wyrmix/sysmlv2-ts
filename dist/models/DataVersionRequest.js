"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Systems Modeling API and Services
 * REST/HTTP platform specific model (PSM) for the Systems Modeling API and Services
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataVersionRequestToJSON = exports.DataVersionRequestFromJSONTyped = exports.DataVersionRequestFromJSON = exports.instanceOfDataVersionRequest = void 0;
const runtime_1 = require("../runtime");
const DataIdentityRequest_1 = require("./DataIdentityRequest");
/**
 * Check if a given object implements the DataVersionRequest interface.
 */
function instanceOfDataVersionRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "payload" in value;
    return isInstance;
}
exports.instanceOfDataVersionRequest = instanceOfDataVersionRequest;
function DataVersionRequestFromJSON(json) {
    return DataVersionRequestFromJSONTyped(json, false);
}
exports.DataVersionRequestFromJSON = DataVersionRequestFromJSON;
function DataVersionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'atType': !(0, runtime_1.exists)(json, '@type') ? undefined : json['@type'],
        'identity': !(0, runtime_1.exists)(json, 'identity') ? undefined : (0, DataIdentityRequest_1.DataIdentityRequestFromJSON)(json['identity']),
        'payload': json['payload'],
    };
}
exports.DataVersionRequestFromJSONTyped = DataVersionRequestFromJSONTyped;
function DataVersionRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@type': value.atType,
        'identity': (0, DataIdentityRequest_1.DataIdentityRequestToJSON)(value.identity),
        'payload': value.payload,
    };
}
exports.DataVersionRequestToJSON = DataVersionRequestToJSON;
