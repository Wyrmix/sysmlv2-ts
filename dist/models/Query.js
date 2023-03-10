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
exports.QueryToJSON = exports.QueryFromJSONTyped = exports.QueryFromJSON = exports.instanceOfQuery = void 0;
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the Query interface.
 */
function instanceOfQuery(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "owningProject" in value;
    isInstance = isInstance && "select" in value;
    isInstance = isInstance && "where" in value;
    return isInstance;
}
exports.instanceOfQuery = instanceOfQuery;
function QueryFromJSON(json) {
    return QueryFromJSONTyped(json, false);
}
exports.QueryFromJSON = QueryFromJSON;
function QueryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['@id'],
        'atType': json['@type'],
        'owningProject': (0, Identified_1.IdentifiedFromJSON)(json['owningProject']),
        'select': json['select'],
        'where': json['where'],
    };
}
exports.QueryFromJSONTyped = QueryFromJSONTyped;
function QueryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@id': value.id,
        '@type': value.atType,
        'owningProject': (0, Identified_1.IdentifiedToJSON)(value.owningProject),
        'select': value.select,
        'where': value.where,
    };
}
exports.QueryToJSON = QueryToJSON;
