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
exports.TagToJSON = exports.TagFromJSONTyped = exports.TagFromJSON = exports.instanceOfTag = void 0;
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the Tag interface.
 */
function instanceOfTag(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "owningProject" in value;
    isInstance = isInstance && "referencedCommit" in value;
    isInstance = isInstance && "taggedCommit" in value;
    return isInstance;
}
exports.instanceOfTag = instanceOfTag;
function TagFromJSON(json) {
    return TagFromJSONTyped(json, false);
}
exports.TagFromJSON = TagFromJSON;
function TagFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['@id'],
        'atType': json['@type'],
        'created': json['created'],
        'name': json['name'],
        'owningProject': (0, Identified_1.IdentifiedFromJSON)(json['owningProject']),
        'referencedCommit': (0, Identified_1.IdentifiedFromJSON)(json['referencedCommit']),
        'taggedCommit': (0, Identified_1.IdentifiedFromJSON)(json['taggedCommit']),
    };
}
exports.TagFromJSONTyped = TagFromJSONTyped;
function TagToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@id': value.id,
        '@type': value.atType,
        'created': value.created,
        'name': value.name,
        'owningProject': (0, Identified_1.IdentifiedToJSON)(value.owningProject),
        'referencedCommit': (0, Identified_1.IdentifiedToJSON)(value.referencedCommit),
        'taggedCommit': (0, Identified_1.IdentifiedToJSON)(value.taggedCommit),
    };
}
exports.TagToJSON = TagToJSON;
