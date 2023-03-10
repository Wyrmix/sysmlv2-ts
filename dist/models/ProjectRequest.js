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
exports.ProjectRequestToJSON = exports.ProjectRequestFromJSONTyped = exports.ProjectRequestFromJSON = exports.instanceOfProjectRequest = void 0;
const runtime_1 = require("../runtime");
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the ProjectRequest interface.
 */
function instanceOfProjectRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "name" in value;
    return isInstance;
}
exports.instanceOfProjectRequest = instanceOfProjectRequest;
function ProjectRequestFromJSON(json) {
    return ProjectRequestFromJSONTyped(json, false);
}
exports.ProjectRequestFromJSON = ProjectRequestFromJSON;
function ProjectRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'atType': !(0, runtime_1.exists)(json, '@type') ? undefined : json['@type'],
        'defaultBranch': !(0, runtime_1.exists)(json, 'defaultBranch') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['defaultBranch']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'name': json['name'],
    };
}
exports.ProjectRequestFromJSONTyped = ProjectRequestFromJSONTyped;
function ProjectRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@type': value.atType,
        'defaultBranch': (0, Identified_1.IdentifiedToJSON)(value.defaultBranch),
        'description': value.description,
        'name': value.name,
    };
}
exports.ProjectRequestToJSON = ProjectRequestToJSON;
