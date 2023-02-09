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
exports.VariantMembershipToJSON = exports.VariantMembershipFromJSONTyped = exports.VariantMembershipFromJSON = exports.instanceOfVariantMembership = void 0;
const Identified_1 = require("./Identified");
/**
 * Check if a given object implements the VariantMembership interface.
 */
function instanceOfVariantMembership(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "isImplied" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "memberElement" in value;
    isInstance = isInstance && "memberElementId" in value;
    isInstance = isInstance && "memberName" in value;
    isInstance = isInstance && "memberShortName" in value;
    isInstance = isInstance && "membershipOwningNamespace" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedMemberElement" in value;
    isInstance = isInstance && "ownedMemberElementId" in value;
    isInstance = isInstance && "ownedMemberName" in value;
    isInstance = isInstance && "ownedMemberShortName" in value;
    isInstance = isInstance && "ownedRelatedElement" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "ownedVariantUsage" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelatedElement" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "relatedElement" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "source" in value;
    isInstance = isInstance && "target" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "visibility" in value;
    return isInstance;
}
exports.instanceOfVariantMembership = instanceOfVariantMembership;
function VariantMembershipFromJSON(json) {
    return VariantMembershipFromJSONTyped(json, false);
}
exports.VariantMembershipFromJSON = VariantMembershipFromJSON;
function VariantMembershipFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'documentation': json['documentation'],
        'elementId': json['elementId'],
        'isImplied': json['isImplied'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'memberElement': (0, Identified_1.IdentifiedFromJSON)(json['memberElement']),
        'memberElementId': json['memberElementId'],
        'memberName': json['memberName'],
        'memberShortName': json['memberShortName'],
        'membershipOwningNamespace': (0, Identified_1.IdentifiedFromJSON)(json['membershipOwningNamespace']),
        'name': json['name'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedElement': json['ownedElement'],
        'ownedMemberElement': (0, Identified_1.IdentifiedFromJSON)(json['ownedMemberElement']),
        'ownedMemberElementId': json['ownedMemberElementId'],
        'ownedMemberName': json['ownedMemberName'],
        'ownedMemberShortName': json['ownedMemberShortName'],
        'ownedRelatedElement': json['ownedRelatedElement'],
        'ownedRelationship': json['ownedRelationship'],
        'ownedVariantUsage': (0, Identified_1.IdentifiedFromJSON)(json['ownedVariantUsage']),
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelatedElement': json['owningRelatedElement'],
        'owningRelationship': json['owningRelationship'],
        'qualifiedName': json['qualifiedName'],
        'relatedElement': json['relatedElement'],
        'shortName': json['shortName'],
        'source': json['source'],
        'target': json['target'],
        'textualRepresentation': json['textualRepresentation'],
        'visibility': json['visibility'],
    };
}
exports.VariantMembershipFromJSONTyped = VariantMembershipFromJSONTyped;
function VariantMembershipToJSON(value) {
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
        'isImplied': value.isImplied,
        'isImpliedIncluded': value.isImpliedIncluded,
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
        'ownedVariantUsage': (0, Identified_1.IdentifiedToJSON)(value.ownedVariantUsage),
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
        'visibility': value.visibility,
    };
}
exports.VariantMembershipToJSON = VariantMembershipToJSON;
