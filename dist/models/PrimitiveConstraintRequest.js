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
exports.PrimitiveConstraintRequestToJSON = exports.PrimitiveConstraintRequestFromJSONTyped = exports.PrimitiveConstraintRequestFromJSON = exports.instanceOfPrimitiveConstraintRequest = exports.PrimitiveConstraintRequestOperatorEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.PrimitiveConstraintRequestOperatorEnum = {
    Equal: '=',
    GreaterThan: '>',
    LessThan: '<'
};
/**
 * Check if a given object implements the PrimitiveConstraintRequest interface.
 */
function instanceOfPrimitiveConstraintRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "operator" in value;
    isInstance = isInstance && "property" in value;
    isInstance = isInstance && "value" in value;
    return isInstance;
}
exports.instanceOfPrimitiveConstraintRequest = instanceOfPrimitiveConstraintRequest;
function PrimitiveConstraintRequestFromJSON(json) {
    return PrimitiveConstraintRequestFromJSONTyped(json, false);
}
exports.PrimitiveConstraintRequestFromJSON = PrimitiveConstraintRequestFromJSON;
function PrimitiveConstraintRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'atType': json['@type'],
        'inverse': !(0, runtime_1.exists)(json, 'inverse') ? undefined : json['inverse'],
        'operator': json['operator'],
        'property': json['property'],
        'value': json['value'],
    };
}
exports.PrimitiveConstraintRequestFromJSONTyped = PrimitiveConstraintRequestFromJSONTyped;
function PrimitiveConstraintRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@type': value.atType,
        'inverse': value.inverse,
        'operator': value.operator,
        'property': value.property,
        'value': value.value,
    };
}
exports.PrimitiveConstraintRequestToJSON = PrimitiveConstraintRequestToJSON;
