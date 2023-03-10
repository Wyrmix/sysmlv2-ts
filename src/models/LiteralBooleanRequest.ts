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
 * @interface LiteralBooleanRequest
 */
export interface LiteralBooleanRequest {
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    behavior?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    chainingFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    direction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    endOwningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    featuringType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    _function?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isComposite?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isDerived?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isModelLevelEvaluable?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isOrdered?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isPortion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isReadOnly?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    isUnique?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedRedefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedTyping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    owningFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    owningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    parameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof LiteralBooleanRequest
     */
    result?: Identified;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof LiteralBooleanRequest
     */
    value?: any | null;
}

/**
 * Check if a given object implements the LiteralBooleanRequest interface.
 */
export function instanceOfLiteralBooleanRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function LiteralBooleanRequestFromJSON(json: any): LiteralBooleanRequest {
    return LiteralBooleanRequestFromJSONTyped(json, false);
}

export function LiteralBooleanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiteralBooleanRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'behavior': !exists(json, 'behavior') ? undefined : json['behavior'],
        'chainingFeature': !exists(json, 'chainingFeature') ? undefined : json['chainingFeature'],
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'differencingType': !exists(json, 'differencingType') ? undefined : json['differencingType'],
        'directedFeature': !exists(json, 'directedFeature') ? undefined : json['directedFeature'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'endFeature': !exists(json, 'endFeature') ? undefined : json['endFeature'],
        'endOwningType': !exists(json, 'endOwningType') ? undefined : json['endOwningType'],
        'feature': !exists(json, 'feature') ? undefined : json['feature'],
        'featureMembership': !exists(json, 'featureMembership') ? undefined : json['featureMembership'],
        'featuringType': !exists(json, 'featuringType') ? undefined : json['featuringType'],
        '_function': !exists(json, 'function') ? undefined : json['function'],
        'importedMembership': !exists(json, 'importedMembership') ? undefined : json['importedMembership'],
        'inheritedFeature': !exists(json, 'inheritedFeature') ? undefined : json['inheritedFeature'],
        'inheritedMembership': !exists(json, 'inheritedMembership') ? undefined : json['inheritedMembership'],
        'input': !exists(json, 'input') ? undefined : json['input'],
        'intersectingType': !exists(json, 'intersectingType') ? undefined : json['intersectingType'],
        'isAbstract': !exists(json, 'isAbstract') ? undefined : json['isAbstract'],
        'isComposite': !exists(json, 'isComposite') ? undefined : json['isComposite'],
        'isConjugated': !exists(json, 'isConjugated') ? undefined : json['isConjugated'],
        'isDerived': !exists(json, 'isDerived') ? undefined : json['isDerived'],
        'isEnd': !exists(json, 'isEnd') ? undefined : json['isEnd'],
        'isImpliedIncluded': !exists(json, 'isImpliedIncluded') ? undefined : json['isImpliedIncluded'],
        'isLibraryElement': !exists(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'isModelLevelEvaluable': !exists(json, 'isModelLevelEvaluable') ? undefined : json['isModelLevelEvaluable'],
        'isOrdered': !exists(json, 'isOrdered') ? undefined : json['isOrdered'],
        'isPortion': !exists(json, 'isPortion') ? undefined : json['isPortion'],
        'isReadOnly': !exists(json, 'isReadOnly') ? undefined : json['isReadOnly'],
        'isSufficient': !exists(json, 'isSufficient') ? undefined : json['isSufficient'],
        'isUnique': !exists(json, 'isUnique') ? undefined : json['isUnique'],
        'member': !exists(json, 'member') ? undefined : json['member'],
        'membership': !exists(json, 'membership') ? undefined : json['membership'],
        'multiplicity': !exists(json, 'multiplicity') ? undefined : json['multiplicity'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'output': !exists(json, 'output') ? undefined : json['output'],
        'ownedAnnotation': !exists(json, 'ownedAnnotation') ? undefined : json['ownedAnnotation'],
        'ownedConjugator': !exists(json, 'ownedConjugator') ? undefined : json['ownedConjugator'],
        'ownedDifferencing': !exists(json, 'ownedDifferencing') ? undefined : json['ownedDifferencing'],
        'ownedDisjoining': !exists(json, 'ownedDisjoining') ? undefined : json['ownedDisjoining'],
        'ownedElement': !exists(json, 'ownedElement') ? undefined : json['ownedElement'],
        'ownedEndFeature': !exists(json, 'ownedEndFeature') ? undefined : json['ownedEndFeature'],
        'ownedFeature': !exists(json, 'ownedFeature') ? undefined : json['ownedFeature'],
        'ownedFeatureChaining': !exists(json, 'ownedFeatureChaining') ? undefined : json['ownedFeatureChaining'],
        'ownedFeatureInverting': !exists(json, 'ownedFeatureInverting') ? undefined : json['ownedFeatureInverting'],
        'ownedFeatureMembership': !exists(json, 'ownedFeatureMembership') ? undefined : json['ownedFeatureMembership'],
        'ownedImport': !exists(json, 'ownedImport') ? undefined : json['ownedImport'],
        'ownedIntersecting': !exists(json, 'ownedIntersecting') ? undefined : json['ownedIntersecting'],
        'ownedMember': !exists(json, 'ownedMember') ? undefined : json['ownedMember'],
        'ownedMembership': !exists(json, 'ownedMembership') ? undefined : json['ownedMembership'],
        'ownedRedefinition': !exists(json, 'ownedRedefinition') ? undefined : json['ownedRedefinition'],
        'ownedReferenceSubsetting': !exists(json, 'ownedReferenceSubsetting') ? undefined : json['ownedReferenceSubsetting'],
        'ownedRelationship': !exists(json, 'ownedRelationship') ? undefined : json['ownedRelationship'],
        'ownedSpecialization': !exists(json, 'ownedSpecialization') ? undefined : json['ownedSpecialization'],
        'ownedSubsetting': !exists(json, 'ownedSubsetting') ? undefined : json['ownedSubsetting'],
        'ownedTypeFeaturing': !exists(json, 'ownedTypeFeaturing') ? undefined : json['ownedTypeFeaturing'],
        'ownedTyping': !exists(json, 'ownedTyping') ? undefined : json['ownedTyping'],
        'ownedUnioning': !exists(json, 'ownedUnioning') ? undefined : json['ownedUnioning'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
        'owningFeatureMembership': !exists(json, 'owningFeatureMembership') ? undefined : json['owningFeatureMembership'],
        'owningMembership': !exists(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !exists(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelationship': !exists(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'owningType': !exists(json, 'owningType') ? undefined : json['owningType'],
        'parameter': !exists(json, 'parameter') ? undefined : json['parameter'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'result': !exists(json, 'result') ? undefined : IdentifiedFromJSON(json['result']),
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function LiteralBooleanRequestToJSON(value?: LiteralBooleanRequest | null): any {
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
        'result': IdentifiedToJSON(value.result),
        'shortName': value.shortName,
        'textualRepresentation': value.textualRepresentation,
        'type': value.type,
        'unioningType': value.unioningType,
        'value': value.value,
    };
}

