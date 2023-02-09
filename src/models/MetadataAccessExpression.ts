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
import type { Identified } from './Identified';
import {
    IdentifiedFromJSON,
    IdentifiedFromJSONTyped,
    IdentifiedToJSON,
} from './Identified';

/**
 * 
 * @export
 * @interface MetadataAccessExpression
 */
export interface MetadataAccessExpression {
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    behavior: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    chainingFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    differencingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    directedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    direction: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    elementId: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    endFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    endOwningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    feature: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    featureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    featuringType: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    _function: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    importedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    inheritedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    inheritedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    input: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    intersectingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isAbstract: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isComposite: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isConjugated: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isDerived: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isEnd: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isModelLevelEvaluable: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isOrdered: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isPortion: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isReadOnly: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isSufficient: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    isUnique: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    member: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    membership: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    multiplicity: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    output: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedConjugator: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedDifferencing: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedDisjoining: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedEndFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedFeatureChaining: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedFeatureInverting: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedImport: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedIntersecting: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedMember: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedRedefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedReferenceSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedSpecialization: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedTypeFeaturing: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedTyping: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    ownedUnioning: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    owningFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    owningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    parameter: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof MetadataAccessExpression
     */
    referencedElement: Identified;
    /**
     * 
     * @type {Identified}
     * @memberof MetadataAccessExpression
     */
    result: Identified;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    shortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
     type: any | null;
    /**
     * 
     * @type {any}
     * @memberof MetadataAccessExpression
     */
    unioningType: any | null;
}

/**
 * Check if a given object implements the MetadataAccessExpression interface.
 */
export function instanceOfMetadataAccessExpression(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "behavior" in value;
    isInstance = isInstance && "chainingFeature" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "differencingType" in value;
    isInstance = isInstance && "directedFeature" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "endFeature" in value;
    isInstance = isInstance && "endOwningType" in value;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "featureMembership" in value;
    isInstance = isInstance && "featuringType" in value;
    isInstance = isInstance && "_function" in value;
    isInstance = isInstance && "importedMembership" in value;
    isInstance = isInstance && "inheritedFeature" in value;
    isInstance = isInstance && "inheritedMembership" in value;
    isInstance = isInstance && "input" in value;
    isInstance = isInstance && "intersectingType" in value;
    isInstance = isInstance && "isAbstract" in value;
    isInstance = isInstance && "isComposite" in value;
    isInstance = isInstance && "isConjugated" in value;
    isInstance = isInstance && "isDerived" in value;
    isInstance = isInstance && "isEnd" in value;
    isInstance = isInstance && "isImpliedIncluded" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "isModelLevelEvaluable" in value;
    isInstance = isInstance && "isOrdered" in value;
    isInstance = isInstance && "isPortion" in value;
    isInstance = isInstance && "isReadOnly" in value;
    isInstance = isInstance && "isSufficient" in value;
    isInstance = isInstance && "isUnique" in value;
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
    isInstance = isInstance && "ownedFeatureChaining" in value;
    isInstance = isInstance && "ownedFeatureInverting" in value;
    isInstance = isInstance && "ownedFeatureMembership" in value;
    isInstance = isInstance && "ownedImport" in value;
    isInstance = isInstance && "ownedIntersecting" in value;
    isInstance = isInstance && "ownedMember" in value;
    isInstance = isInstance && "ownedMembership" in value;
    isInstance = isInstance && "ownedRedefinition" in value;
    isInstance = isInstance && "ownedReferenceSubsetting" in value;
    isInstance = isInstance && "ownedRelationship" in value;
    isInstance = isInstance && "ownedSpecialization" in value;
    isInstance = isInstance && "ownedSubsetting" in value;
    isInstance = isInstance && "ownedTypeFeaturing" in value;
    isInstance = isInstance && "ownedTyping" in value;
    isInstance = isInstance && "ownedUnioning" in value;
    isInstance = isInstance && "owner" in value;
    isInstance = isInstance && "owningFeatureMembership" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "owningType" in value;
    isInstance = isInstance && "parameter" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "referencedElement" in value;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "unioningType" in value;

    return isInstance;
}

export function MetadataAccessExpressionFromJSON(json: any): MetadataAccessExpression {
    return MetadataAccessExpressionFromJSONTyped(json, false);
}

export function MetadataAccessExpressionFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataAccessExpression {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'aliasIds': json['aliasIds'],
        'behavior': json['behavior'],
        'chainingFeature': json['chainingFeature'],
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'differencingType': json['differencingType'],
        'directedFeature': json['directedFeature'],
        'direction': json['direction'],
        'documentation': json['documentation'],
        'elementId': json['elementId'],
        'endFeature': json['endFeature'],
        'endOwningType': json['endOwningType'],
        'feature': json['feature'],
        'featureMembership': json['featureMembership'],
        'featuringType': json['featuringType'],
        '_function': json['function'],
        'importedMembership': json['importedMembership'],
        'inheritedFeature': json['inheritedFeature'],
        'inheritedMembership': json['inheritedMembership'],
        'input': json['input'],
        'intersectingType': json['intersectingType'],
        'isAbstract': json['isAbstract'],
        'isComposite': json['isComposite'],
        'isConjugated': json['isConjugated'],
        'isDerived': json['isDerived'],
        'isEnd': json['isEnd'],
        'isImpliedIncluded': json['isImpliedIncluded'],
        'isLibraryElement': json['isLibraryElement'],
        'isModelLevelEvaluable': json['isModelLevelEvaluable'],
        'isOrdered': json['isOrdered'],
        'isPortion': json['isPortion'],
        'isReadOnly': json['isReadOnly'],
        'isSufficient': json['isSufficient'],
        'isUnique': json['isUnique'],
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
        'ownedFeatureChaining': json['ownedFeatureChaining'],
        'ownedFeatureInverting': json['ownedFeatureInverting'],
        'ownedFeatureMembership': json['ownedFeatureMembership'],
        'ownedImport': json['ownedImport'],
        'ownedIntersecting': json['ownedIntersecting'],
        'ownedMember': json['ownedMember'],
        'ownedMembership': json['ownedMembership'],
        'ownedRedefinition': json['ownedRedefinition'],
        'ownedReferenceSubsetting': json['ownedReferenceSubsetting'],
        'ownedRelationship': json['ownedRelationship'],
        'ownedSpecialization': json['ownedSpecialization'],
        'ownedSubsetting': json['ownedSubsetting'],
        'ownedTypeFeaturing': json['ownedTypeFeaturing'],
        'ownedTyping': json['ownedTyping'],
        'ownedUnioning': json['ownedUnioning'],
        'owner': json['owner'],
        'owningFeatureMembership': json['owningFeatureMembership'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelationship': json['owningRelationship'],
        'owningType': json['owningType'],
        'parameter': json['parameter'],
        'qualifiedName': json['qualifiedName'],
        'referencedElement': IdentifiedFromJSON(json['referencedElement']),
        'result': IdentifiedFromJSON(json['result']),
        'shortName': json['shortName'],
        'textualRepresentation': json['textualRepresentation'],
        'type': json['type'],
        'unioningType': json['unioningType'],
    };
}

export function MetadataAccessExpressionToJSON(value?: MetadataAccessExpression | null): any {
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
        'behavior': value.behavior,
        'chainingFeature': value.chainingFeature,
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'differencingType': value.differencingType,
        'directedFeature': value.directedFeature,
        'direction': value.direction,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'endFeature': value.endFeature,
        'endOwningType': value.endOwningType,
        'feature': value.feature,
        'featureMembership': value.featureMembership,
        'featuringType': value.featuringType,
        'function': value._function,
        'importedMembership': value.importedMembership,
        'inheritedFeature': value.inheritedFeature,
        'inheritedMembership': value.inheritedMembership,
        'input': value.input,
        'intersectingType': value.intersectingType,
        'isAbstract': value.isAbstract,
        'isComposite': value.isComposite,
        'isConjugated': value.isConjugated,
        'isDerived': value.isDerived,
        'isEnd': value.isEnd,
        'isImpliedIncluded': value.isImpliedIncluded,
        'isLibraryElement': value.isLibraryElement,
        'isModelLevelEvaluable': value.isModelLevelEvaluable,
        'isOrdered': value.isOrdered,
        'isPortion': value.isPortion,
        'isReadOnly': value.isReadOnly,
        'isSufficient': value.isSufficient,
        'isUnique': value.isUnique,
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
        'ownedFeatureChaining': value.ownedFeatureChaining,
        'ownedFeatureInverting': value.ownedFeatureInverting,
        'ownedFeatureMembership': value.ownedFeatureMembership,
        'ownedImport': value.ownedImport,
        'ownedIntersecting': value.ownedIntersecting,
        'ownedMember': value.ownedMember,
        'ownedMembership': value.ownedMembership,
        'ownedRedefinition': value.ownedRedefinition,
        'ownedReferenceSubsetting': value.ownedReferenceSubsetting,
        'ownedRelationship': value.ownedRelationship,
        'ownedSpecialization': value.ownedSpecialization,
        'ownedSubsetting': value.ownedSubsetting,
        'ownedTypeFeaturing': value.ownedTypeFeaturing,
        'ownedTyping': value.ownedTyping,
        'ownedUnioning': value.ownedUnioning,
        'owner': value.owner,
        'owningFeatureMembership': value.owningFeatureMembership,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelationship': value.owningRelationship,
        'owningType': value.owningType,
        'parameter': value.parameter,
        'qualifiedName': value.qualifiedName,
        'referencedElement': IdentifiedToJSON(value.referencedElement),
        'result': IdentifiedToJSON(value.result),
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
        'type': value.type,
        'unioningType': value.unioningType,
    };
}
