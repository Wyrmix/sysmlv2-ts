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
exports.LibraryPackageToJSON = exports.LibraryPackageFromJSONTyped = exports.LibraryPackageFromJSON = exports.instanceOfLibraryPackage = void 0;
/**
 * Check if a given object implements the LibraryPackage interface.
 */
function instanceOfLibraryPackage(value) {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "filterCondition" in value;
    isInstance = isInstance && "importedMembership" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "isStandard" in value;
    isInstance = isInstance && "member" in value;
    isInstance = isInstance && "membership" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedImport" in value;
    isInstance = isInstance && "ownedMember" in value;
    isInstance = isInstance && "ownedMembership" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    return isInstance;
}
exports.instanceOfLibraryPackage = instanceOfLibraryPackage;
function LibraryPackageFromJSON(json) {
    return LibraryPackageFromJSONTyped(json, false);
}
exports.LibraryPackageFromJSON = LibraryPackageFromJSON;
function LibraryPackageFromJSONTyped(json, ignoreDiscriminator) {
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
        'filterCondition': json['filterCondition'],
        'importedMembership': json['importedMembership'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'isStandard': json['isStandard'],
        'member': json['member'],
        'membership': json['membership'],
        'name': json['name'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedElement': json['ownedElement'],
        'ownedImport': json['ownedImport'],
        'ownedMember': json['ownedMember'],
        'ownedMembership': json['ownedMembership'],
        'ownedRelationship': json['ownedRelationship'],
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelationship': json['owningRelationship'],
        'qualifiedName': json['qualifiedName'],
        'shortName': json['shortName'],
        'textualRepresentation': json['textualRepresentation'],
    };
}
exports.LibraryPackageFromJSONTyped = LibraryPackageFromJSONTyped;
function LibraryPackageToJSON(value) {
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
        'filterCondition': value.filterCondition,
        'importedMembership': value.importedMembership,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'isStandard': value.isStandard,
        'member': value.member,
        'membership': value.membership,
        'name': value.name,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedElement': value.ownedElement,
        'ownedImport': value.ownedImport,
        'ownedMember': value.ownedMember,
        'ownedMembership': value.ownedMembership,
        'ownedRelationship': value.ownedRelationship,
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelationship': value.owningRelationship,
        'qualifiedName': value.qualifiedName,
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
    };
}
exports.LibraryPackageToJSON = LibraryPackageToJSON;
