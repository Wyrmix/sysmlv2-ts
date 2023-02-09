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
exports.GetDatatypes200ResponseToJSON = exports.GetDatatypes200ResponseFromJSONTyped = exports.GetDatatypes200ResponseFromJSON = exports.instanceOfGetDatatypes200Response = void 0;
/**
 * Check if a given object implements the GetDatatypes200Response interface.
 */
function instanceOfGetDatatypes200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "$schema" in value;
    isInstance = isInstance && "$defs" in value;
    return isInstance;
}
exports.instanceOfGetDatatypes200Response = instanceOfGetDatatypes200Response;
function GetDatatypes200ResponseFromJSON(json) {
    return GetDatatypes200ResponseFromJSONTyped(json, false);
}
exports.GetDatatypes200ResponseFromJSON = GetDatatypes200ResponseFromJSON;
function GetDatatypes200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, json), { '$schema': json['$schema'], '$defs': json['$defs'] });
}
exports.GetDatatypes200ResponseFromJSONTyped = GetDatatypes200ResponseFromJSONTyped;
function GetDatatypes200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return Object.assign(Object.assign({}, value), { '$schema': value.$schema, '$defs': value.$defs });
}
exports.GetDatatypes200ResponseToJSON = GetDatatypes200ResponseToJSON;