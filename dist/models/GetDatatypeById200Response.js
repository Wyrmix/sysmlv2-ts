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
exports.GetDatatypeById200ResponseToJSON = exports.GetDatatypeById200ResponseFromJSONTyped = exports.GetDatatypeById200ResponseFromJSON = exports.instanceOfGetDatatypeById200Response = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the GetDatatypeById200Response interface.
 */
function instanceOfGetDatatypeById200Response(value) {
    let isInstance = true;
    isInstance = isInstance && "$schema" in value;
    isInstance = isInstance && "$id" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "properties" in value;
    return isInstance;
}
exports.instanceOfGetDatatypeById200Response = instanceOfGetDatatypeById200Response;
function GetDatatypeById200ResponseFromJSON(json) {
    return GetDatatypeById200ResponseFromJSONTyped(json, false);
}
exports.GetDatatypeById200ResponseFromJSON = GetDatatypeById200ResponseFromJSON;
function GetDatatypeById200ResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return Object.assign(Object.assign({}, json), { '$schema': json['$schema'], '$id': json['$id'], '$defs': !(0, runtime_1.exists)(json, '$defs') ? undefined : json['$defs'], 'title': json['title'], 'type': json['type'], 'properties': json['properties'], 'required': !(0, runtime_1.exists)(json, 'required') ? undefined : json['required'], 'additionalProperties': !(0, runtime_1.exists)(json, 'additionalProperties') ? undefined : json['additionalProperties'] });
}
exports.GetDatatypeById200ResponseFromJSONTyped = GetDatatypeById200ResponseFromJSONTyped;
function GetDatatypeById200ResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return Object.assign(Object.assign({}, value), { '$schema': value.$schema, '$id': value.$id, '$defs': value.$defs, 'title': value.title, 'type': value.type, 'properties': value.properties, 'required': value.required, 'additionalProperties': value.additionalProperties });
}
exports.GetDatatypeById200ResponseToJSON = GetDatatypeById200ResponseToJSON;