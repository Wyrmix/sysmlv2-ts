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
exports.ExternalDataRequestToJSON = exports.ExternalDataRequestFromJSONTyped = exports.ExternalDataRequestFromJSON = exports.instanceOfExternalDataRequest = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ExternalDataRequest interface.
 */
function instanceOfExternalDataRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfExternalDataRequest = instanceOfExternalDataRequest;
function ExternalDataRequestFromJSON(json) {
    return ExternalDataRequestFromJSONTyped(json, false);
}
exports.ExternalDataRequestFromJSON = ExternalDataRequestFromJSON;
function ExternalDataRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'resourceIdentifier': !(0, runtime_1.exists)(json, 'resourceIdentifier') ? undefined : json['resourceIdentifier'],
    };
}
exports.ExternalDataRequestFromJSONTyped = ExternalDataRequestFromJSONTyped;
function ExternalDataRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@id': value.id,
        '@type': value.atType,
        'resourceIdentifier': value.resourceIdentifier,
    };
}
exports.ExternalDataRequestToJSON = ExternalDataRequestToJSON;
