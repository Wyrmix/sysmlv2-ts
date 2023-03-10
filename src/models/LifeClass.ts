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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LifeClass
 */
export interface LifeClass {
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    differencingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    directedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    elementId: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    endFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    feature: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    featureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    importedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    inheritedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    inheritedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    input: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    intersectingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    isAbstract: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    isConjugated: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    isSufficient: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    member: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    membership: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    multiplicity: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    output: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedConjugator: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedDifferencing: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedDisjoining: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedEndFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedImport: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedIntersecting: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedMember: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedSpecialization: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedSubclassification: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    ownedUnioning: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof LifeClass
     */
    unioningType: any | null;
}

/**
 * Check if a given object implements the LifeClass interface.
 */
export function instanceOfLifeClass(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "differencingType" in value;
    isInstance = isInstance && "directedFeature" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "endFeature" in value;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "featureMembership" in value;
    isInstance = isInstance && "importedMembership" in value;
    isInstance = isInstance && "inheritedFeature" in value;
    isInstance = isInstance && "inheritedMembership" in value;
    isInstance = isInstance && "input" in value;
    isInstance = isInstance && "intersectingType" in value;
    isInstance = isInstance && "isAbstract" in value;
    isInstance = isInstance && "isConjugated" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "isSufficient" in value;
    isInstance = isInstance && "member" in value;
    isInstance = isInstance && "membership" in value;
    isInstance = isInstance && "multiplicity" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "output" in value;
    isInstance = isInstance && "ownedAnnotation" in value;
    isInstance = isInstance && "ownedConjugator" in value;
    isInstance = isInstance && "ownedDifferencing" in value;
    isInstance = isInstance && "ownedDisjoining" in value;
    isInstance = isInstance && "ownedElement" in value;
    isInstance = isInstance && "ownedEndFeature" in value;
    isInstance = isInstance && "ownedFeature" in value;
    isInstance = isInstance && "ownedFeatureMembership" in value;
    isInstance = isInstance && "ownedImport" in value;
    isInstance = isInstance && "ownedIntersecting" in value;
    isInstance = isInstance && "ownedMember" in value;
    isInstance = isInstance && "ownedMembership" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "ownedSpecialization" in value;
    isInstance = isInstance && "ownedSubclassification" in value;
    isInstance = isInstance && "ownedUnioning" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "unioningType" in value;

    return isInstance;
}

export function LifeClassFromJSON(json: any): LifeClass {
    return LifeClassFromJSONTyped(json, false);
}

export function LifeClassFromJSONTyped(json: any, ignoreDiscriminator: boolean): LifeClass {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'differencingType': json['differencingType'],
        'directedFeature': json['directedFeature'],
        'documentation': json['documentation'],
        'elementId': json['elementId'],
        'endFeature': json['endFeature'],
        'feature': json['feature'],
        'featureMembership': json['featureMembership'],
        'importedMembership': json['importedMembership'],
        'inheritedFeature': json['inheritedFeature'],
        'inheritedMembership': json['inheritedMembership'],
        'input': json['input'],
        'intersectingType': json['intersectingType'],
        'isAbstract': json['isAbstract'],
        'isConjugated': json['isConjugated'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'isSufficient': json['isSufficient'],
        'member': json['member'],
        'membership': json['membership'],
        'multiplicity': json['multiplicity'],
        'name': json['name'],
        'output': json['output'],
        'ownedAnnotation': json['ownedAnnotation'],
        'ownedConjugator': json['ownedConjugator'],
        'ownedDifferencing': json['ownedDifferencing'],
        'ownedDisjoining': json['ownedDisjoining'],
        'ownedElement': json['ownedElement'],
        'ownedEndFeature': json['ownedEndFeature'],
        'ownedFeature': json['ownedFeature'],
        'ownedFeatureMembership': json['ownedFeatureMembership'],
        'ownedImport': json['ownedImport'],
        'ownedIntersecting': json['ownedIntersecting'],
        'ownedMember': json['ownedMember'],
        'ownedMembership': json['ownedMembership'],
        'ownedRelationship': json['ownedRelationship'],
        'ownedSpecialization': json['ownedSpecialization'],
        'ownedSubclassification': json['ownedSubclassification'],
        'ownedUnioning': json['ownedUnioning'],
        'owner': json['owner'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelationship': json['owningRelationship'],
        'qualifiedName': json['qualifiedName'],
        'shortName': json['shortName'],
        'textualRepresentation': json['textualRepresentation'],
        'unioningType': json['unioningType'],
    };
}

export function LifeClassToJSON(value?: LifeClass | null): any {
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
        'differencingType': value.differencingType,
        'directedFeature': value.directedFeature,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'endFeature': value.endFeature,
        'feature': value.feature,
        'featureMembership': value.featureMembership,
        'importedMembership': value.importedMembership,
        'inheritedFeature': value.inheritedFeature,
        'inheritedMembership': value.inheritedMembership,
        'input': value.input,
        'intersectingType': value.intersectingType,
        'isAbstract': value.isAbstract,
        'isConjugated': value.isConjugated,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'isSufficient': value.isSufficient,
        'member': value.member,
        'membership': value.membership,
        'multiplicity': value.multiplicity,
        'name': value.name,
        'output': value.output,
        'ownedAnnotation': value.ownedAnnotation,
        'ownedConjugator': value.ownedConjugator,
        'ownedDifferencing': value.ownedDifferencing,
        'ownedDisjoining': value.ownedDisjoining,
        'ownedElement': value.ownedElement,
        'ownedEndFeature': value.ownedEndFeature,
        'ownedFeature': value.ownedFeature,
        'ownedFeatureMembership': value.ownedFeatureMembership,
        'ownedImport': value.ownedImport,
        'ownedIntersecting': value.ownedIntersecting,
        'ownedMember': value.ownedMember,
        'ownedMembership': value.ownedMembership,
        'ownedRelationship': value.ownedRelationship,
        'ownedSpecialization': value.ownedSpecialization,
        'ownedSubclassification': value.ownedSubclassification,
        'ownedUnioning': value.ownedUnioning,
        'owner': value.owner,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelationship': value.owningRelationship,
        'qualifiedName': value.qualifiedName,
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
        'unioningType': value.unioningType,
    };
}

