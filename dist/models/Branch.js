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
exports.BranchToJSON = exports.BranchFromJSONTyped = exports.BranchFromJSON = exports.instanceOfBranch = void 0;
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the Branch interface.
 */
function instanceOfBranch(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "created" in value;
    isInstance = isInstance && "head" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "owningProject" in value;
    isInstance = isInstance && "referencedCommit" in value;
    return isInstance;
}
exports.instanceOfBranch = instanceOfBranch;
function BranchFromJSON(json) {
    return BranchFromJSONTyped(json, false);
}
exports.BranchFromJSON = BranchFromJSON;
function BranchFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['@id'],
        'atType': json['@type'],
        'created': json['created'],
        'head': json['head'],
        'name': json['name'],
        'owningProject': (0, Identified_1.IdentifiedFromJSON)(json['owningProject']),
        'referencedCommit': (0, Identified_1.IdentifiedFromJSON)(json['referencedCommit']),
    };
}
exports.BranchFromJSONTyped = BranchFromJSONTyped;
function BranchToJSON(value) {
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
        'head': value.head,
        'name': value.name,
        'owningProject': (0, Identified_1.IdentifiedToJSON)(value.owningProject),
        'referencedCommit': (0, Identified_1.IdentifiedToJSON)(value.referencedCommit),
    };
}
exports.BranchToJSON = BranchToJSON;
