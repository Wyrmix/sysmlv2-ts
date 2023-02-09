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
exports.RedefinitionRequestToJSON = exports.RedefinitionRequestFromJSONTyped = exports.RedefinitionRequestFromJSON = exports.instanceOfRedefinitionRequest = void 0;
const runtime_1 = require("../runtime");
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the RedefinitionRequest interface.
 */
function instanceOfRedefinitionRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfRedefinitionRequest = instanceOfRedefinitionRequest;
function RedefinitionRequestFromJSON(json) {
    return RedefinitionRequestFromJSONTyped(json, false);
}
exports.RedefinitionRequestFromJSON = RedefinitionRequestFromJSON;
function RedefinitionRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !(0, runtime_1.exists)(json, 'aliasIds') ? undefined : json['aliasIds'],
        'declaredName': !(0, runtime_1.exists)(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !(0, runtime_1.exists)(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'documentation': !(0, runtime_1.exists)(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !(0, runtime_1.exists)(json, 'elementId') ? undefined : json['elementId'],
        'general': !(0, runtime_1.exists)(json, 'general') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['general']),
        'isImplied': !(0, runtime_1.exists)(json, 'isImplied') ? undefined : json['isImplied'],
        'isImpliedIncluded': !(0, runtime_1.exists)(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isLibraryElement': !(0, runtime_1.exists)(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'ownedAnnotation': !(0, runtime_1.exists)(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedElement': !(0, runtime_1.exists)(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedRelatedElement': !(0, runtime_1.exists)(json, 'ownedRelatedElement') ? undefined : json['ownedRelatedElement'],
        'ownedRelationship': !(0, runtime_1.exists)(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : json['owner'],
        'owningFeature': !(0, runtime_1.exists)(json, 'owningFeature') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['owningFeature']),
        'owningMembership': !(0, runtime_1.exists)(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !(0, runtime_1.exists)(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelatedElement': !(0, runtime_1.exists)(json, 'owningRelatedElement') ? undefined : json['owningRelatedElement'],
        'owningRelationship': !(0, runtime_1.exists)(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'owningType': !(0, runtime_1.exists)(json, 'owningType') ? undefined : json['owningType'],
        'qualifiedName': !(0, runtime_1.exists)(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'redefinedFeature': !(0, runtime_1.exists)(json, 'redefinedFeature') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['redefinedFeature']),
        'redefiningFeature': !(0, runtime_1.exists)(json, 'redefiningFeature') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['redefiningFeature']),
        'relatedElement': !(0, runtime_1.exists)(json, 'relatedElement') ? undefined : json['relatedElement'],
        'shortName': !(0, runtime_1.exists)(json, 'shortName') ? undefined : json['shortName'],
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : json['source'],
        'specific': !(0, runtime_1.exists)(json, 'specific') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['specific']),
        'subsettedFeature': !(0, runtime_1.exists)(json, 'subsettedFeature') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['subsettedFeature']),
        'subsettingFeature': !(0, runtime_1.exists)(json, 'subsettingFeature') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['subsettingFeature']),
        'target': !(0, runtime_1.exists)(json, 'target') ? undefined : json['target'],
        'textualRepresentation': !(0, runtime_1.exists)(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
    };
}
exports.RedefinitionRequestFromJSONTyped = RedefinitionRequestFromJSONTyped;
function RedefinitionRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        '@id': value.id,
        '@type': value.atType,
        'aliasIds': value.aliasIds,
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'general': (0, Identified_1.IdentifiedToJSON)(value.general),
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningFeature': (0, Identified_1.IdentifiedToJSON)(value.owningFeature),
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'owningType': value.owningType,
        'qualifiedName': value.qualifiedName,
        'redefinedFeature': (0, Identified_1.IdentifiedToJSON)(value.redefinedFeature),
        'redefiningFeature': (0, Identified_1.IdentifiedToJSON)(value.redefiningFeature),
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'specific': (0, Identified_1.IdentifiedToJSON)(value.specific),
        'subsettedFeature': (0, Identified_1.IdentifiedToJSON)(value.subsettedFeature),
        'subsettingFeature': (0, Identified_1.IdentifiedToJSON)(value.subsettingFeature),
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
    };
}
exports.RedefinitionRequestToJSON = RedefinitionRequestToJSON;