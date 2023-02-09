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
exports.FeatureValueRequestToJSON = exports.FeatureValueRequestFromJSONTyped = exports.FeatureValueRequestFromJSON = exports.instanceOfFeatureValueRequest = void 0;
const runtime_1 = require("../runtime");
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the FeatureValueRequest interface.
 */
function instanceOfFeatureValueRequest(value) {
    let isInstance = true;
    isInstance = isInstance && "type" in value;
    return isInstance;
}
exports.instanceOfFeatureValueRequest = instanceOfFeatureValueRequest;
function FeatureValueRequestFromJSON(json) {
    return FeatureValueRequestFromJSONTyped(json, false);
}
exports.FeatureValueRequestFromJSON = FeatureValueRequestFromJSON;
function FeatureValueRequestFromJSONTyped(json, ignoreDiscriminator) {
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
        'featureWithValue': !(0, runtime_1.exists)(json, 'featureWithValue') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['featureWithValue']),
        'isDefault': !(0, runtime_1.exists)(json, 'isDefault') ? undefined : json['isDefault'],
        'isImplied': !(0, runtime_1.exists)(json, 'isImplied') ? undefined : json['isImplied'],
        'isImpliedIncluded': !(0, runtime_1.exists)(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isInitial': !(0, runtime_1.exists)(json, 'isInitial') ? undefined : json['isInitial'],
        'isLibraryElement': !(0, runtime_1.exists)(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'memberElement': !(0, runtime_1.exists)(json, 'memberElement') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['memberElement']),
        'memberElementId': !(0, runtime_1.exists)(json, 'memberElementId') ? undefined : json['memberElementId'],
        'memberName': !(0, runtime_1.exists)(json, 'memberName') ? undefined : json['memberName'],
        'memberShortName': !(0, runtime_1.exists)(json, 'memberShortName') ? undefined : json['memberShortName'],
        'membershipOwningNamespace': !(0, runtime_1.exists)(json, 'membershipOwningNamespace') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['membershipOwningNamespace']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'ownedAnnotation': !(0, runtime_1.exists)(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedElement': !(0, runtime_1.exists)(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedMemberElement': !(0, runtime_1.exists)(json, 'ownedMemberElement') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['ownedMemberElement']),
        'ownedMemberElementId': !(0, runtime_1.exists)(json, 'ownedMemberElementId') ? undefined : json['ownedMemberElementId'],
        'ownedMemberName': !(0, runtime_1.exists)(json, 'ownedMemberName') ? undefined : json['ownedMemberName'],
        'ownedMemberShortName': !(0, runtime_1.exists)(json, 'ownedMemberShortName') ? undefined : json['ownedMemberShortName'],
        'ownedRelatedElement': !(0, runtime_1.exists)(json, 'ownedRelatedElement') ? undefined : json['ownedRelatedElement'],
        'ownedRelationship': !(0, runtime_1.exists)(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'owner': !(0, runtime_1.exists)(json, 'owner') ? undefined : json['owner'],
        'owningMembership': !(0, runtime_1.exists)(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !(0, runtime_1.exists)(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelatedElement': !(0, runtime_1.exists)(json, 'owningRelatedElement') ? undefined : json['owningRelatedElement'],
        'owningRelationship': !(0, runtime_1.exists)(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'qualifiedName': !(0, runtime_1.exists)(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'relatedElement': !(0, runtime_1.exists)(json, 'relatedElement') ? undefined : json['relatedElement'],
        'shortName': !(0, runtime_1.exists)(json, 'shortName') ? undefined : json['shortName'],
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : json['source'],
        'target': !(0, runtime_1.exists)(json, 'target') ? undefined : json['target'],
        'textualRepresentation': !(0, runtime_1.exists)(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'value': !(0, runtime_1.exists)(json, 'value') ? undefined : (0, Identified_1.IdentifiedFromJSON)(json['value']),
        'visibility': !(0, runtime_1.exists)(json, 'visibility') ? undefined : json['visibility'],
    };
}
exports.FeatureValueRequestFromJSONTyped = FeatureValueRequestFromJSONTyped;
function FeatureValueRequestToJSON(value) {
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
        'featureWithValue': (0, Identified_1.IdentifiedToJSON)(value.featureWithValue),
        'isDefault': value.isDefault,
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isInitial': value.isInitial,
        'isLibraryElement': value.isLibraryElement,
        'memberElement': (0, Identified_1.IdentifiedToJSON)(value.memberElement),
        'memberElementId': value.memberElementId,
        'memberName': value.memberName,
        'memberShortName': value.memberShortName,
        'membershipOwningNamespace': (0, Identified_1.IdentifiedToJSON)(value.membershipOwningNamespace),
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedMemberElement': (0, Identified_1.IdentifiedToJSON)(value.ownedMemberElement),
        'ownedMemberElementId': value.ownedMemberElementId,
        'ownedMemberName': value.ownedMemberName,
        'ownedMemberShortName': value.ownedMemberShortName,
        'ownedRelatedElement': value.ownedRelatedElement,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelatedElement': value.owningRelatedElement,
        'owningRelationship': value.owningRelationship,
        'qualifiedName': value.qualifiedName,
        'relatedElement': value.relatedElement,
        'shortName': value.shortName,
        'source': value.source,
        'target': value.target,
        'textualRepresentation': value.textualRepresentation,
        'value': (0, Identified_1.IdentifiedToJSON)(value.value),
        'visibility': value.visibility,
    };
}
exports.FeatureValueRequestToJSON = FeatureValueRequestToJSON;