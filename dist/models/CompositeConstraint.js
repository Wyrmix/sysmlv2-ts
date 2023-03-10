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
exports.CompositeConstraintToJSON = exports.CompositeConstraintFromJSONTyped = exports.CompositeConstraintFromJSON = exports.instanceOfCompositeConstraint = exports.CompositeConstraintOperatorEnum = void 0;
/**
 * @export
 */
exports.CompositeConstraintOperatorEnum = {
    And: 'and',
    Or: 'or'
};
/**
 * Check if a given object implements the CompositeConstraint interface.
 */
function instanceOfCompositeConstraint(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "constraint" in value;
    isInstance = isInstance && "operator" in value;
    return isInstance;
}
exports.instanceOfCompositeConstraint = instanceOfCompositeConstraint;
function CompositeConstraintFromJSON(json) {
    return CompositeConstraintFromJSONTyped(json, false);
}
exports.CompositeConstraintFromJSON = CompositeConstraintFromJSON;
function CompositeConstraintFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'atType': json['@type'],
        'constraint': json['constraint'],
        'operator': json['operator'],
    };
}
exports.CompositeConstraintFromJSONTyped = CompositeConstraintFromJSONTyped;
function CompositeConstraintToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@type': value.atType,
        'constraint': value.constraint,
        'operator': value.operator,
    };
}
exports.CompositeConstraintToJSON = CompositeConstraintToJSON;
