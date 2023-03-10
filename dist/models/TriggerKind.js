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
exports.TriggerKindToJSON = exports.TriggerKindFromJSONTyped = exports.TriggerKindFromJSON = exports.instanceOfTriggerKind = void 0;
/**
 * Check if a given object implements the TriggerKind interface.
 */
function instanceOfTriggerKind(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTriggerKind = instanceOfTriggerKind;
function TriggerKindFromJSON(json) {
    return TriggerKindFromJSONTyped(json, false);
}
exports.TriggerKindFromJSON = TriggerKindFromJSON;
function TriggerKindFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.TriggerKindFromJSONTyped = TriggerKindFromJSONTyped;
function TriggerKindToJSON(value) {
    return value;
}
exports.TriggerKindToJSON = TriggerKindToJSON;
