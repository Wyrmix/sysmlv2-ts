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
 * @interface ViewpointUsageRequest
 */
export interface ViewpointUsageRequest {
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    actorParameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    assumedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    behavior?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    chainingFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    constraintDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    definition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    direction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    endOwningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    featuringType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    framedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    _function?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    individualDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isComposite?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isDerived?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isModelLevelEvaluable?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isOrdered?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isPortion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isReadOnly?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isUnique?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    nestedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    occurrenceDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedRedefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedTyping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    owningDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    owningFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    owningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    owningUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    parameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    portionKind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    portioningFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    predicate?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    reqId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    requiredConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    requirementDefinition?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ViewpointUsageRequest
     */
    result?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    stakeholderParameter?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof ViewpointUsageRequest
     */
    subjectParameter?: Identified;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    text?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    variantMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    viewpointDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof ViewpointUsageRequest
     */
    viewpointStakeholder?: any | null;
}

/**
 * Check if a given object implements the ViewpointUsageRequest interface.
 */
export function instanceOfViewpointUsageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function ViewpointUsageRequestFromJSON(json: any): ViewpointUsageRequest {
    return ViewpointUsageRequestFromJSONTyped(json, false);
}

export function ViewpointUsageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewpointUsageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'actorParameter': !exists(json, 'actorParameter') ? undefined : json['actorParameter'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'assumedConstraint': !exists(json, 'assumedConstraint') ? undefined : json['assumedConstraint'],
        'behavior': !exists(json, 'behavior') ? undefined : json['behavior'],
        'chainingFeature': !exists(json, 'chainingFeature') ? undefined : json['chainingFeature'],
        'constraintDefinition': !exists(json, 'constraintDefinition') ? undefined : json['constraintDefinition'],
        'declaredName': !exists(json, 'declaredName') ? undefined : json['declaredName'],
        'declaredShortName': !exists(json, 'declaredShortName') ? undefined : json['declaredShortName'],
        'definition': !exists(json, 'definition') ? undefined : json['definition'],
        'differencingType': !exists(json, 'differencingType') ? undefined : json['differencingType'],
        'directedFeature': !exists(json, 'directedFeature') ? undefined : json['directedFeature'],
        'directedUsage': !exists(json, 'directedUsage') ? undefined : json['directedUsage'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'documentation': !exists(json, 'documentation') ? undefined : json['documentation'],
        'elementId': !exists(json, 'elementId') ? undefined : json['elementId'],
        'endFeature': !exists(json, 'endFeature') ? undefined : json['endFeature'],
        'endOwningType': !exists(json, 'endOwningType') ? undefined : json['endOwningType'],
        'feature': !exists(json, 'feature') ? undefined : json['feature'],
        'featureMembership': !exists(json, 'featureMembership') ? undefined : json['featureMembership'],
        'featuringType': !exists(json, 'featuringType') ? undefined : json['featuringType'],
        'framedConcern': !exists(json, 'framedConcern') ? undefined : json['framedConcern'],
        '_function': !exists(json, 'function') ? undefined : json['function'],
        'importedMembership': !exists(json, 'importedMembership') ? undefined : json['importedMembership'],
        'individualDefinition': !exists(json, 'individualDefinition') ? undefined : json['individualDefinition'],
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
        'isIndividual': !exists(json, 'isIndividual') ? undefined : json['isIndividual'],
        'isLibraryElement': !exists(json, 'isLibraryElement') ? undefined : json['isLibraryElement'],
        'isModelLevelEvaluable': !exists(json, 'isModelLevelEvaluable') ? undefined : json['isModelLevelEvaluable'],
        'isOrdered': !exists(json, 'isOrdered') ? undefined : json['isOrdered'],
        'isPortion': !exists(json, 'isPortion') ? undefined : json['isPortion'],
        'isReadOnly': !exists(json, 'isReadOnly') ? undefined : json['isReadOnly'],
        'isReference': !exists(json, 'isReference') ? undefined : json['isReference'],
        'isSufficient': !exists(json, 'isSufficient') ? undefined : json['isSufficient'],
        'isUnique': !exists(json, 'isUnique') ? undefined : json['isUnique'],
        'isVariation': !exists(json, 'isVariation') ? undefined : json['isVariation'],
        'member': !exists(json, 'member') ? undefined : json['member'],
        'membership': !exists(json, 'membership') ? undefined : json['membership'],
        'multiplicity': !exists(json, 'multiplicity') ? undefined : json['multiplicity'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'nestedAction': !exists(json, 'nestedAction') ? undefined : json['nestedAction'],
        'nestedAllocation': !exists(json, 'nestedAllocation') ? undefined : json['nestedAllocation'],
        'nestedAnalysisCase': !exists(json, 'nestedAnalysisCase') ? undefined : json['nestedAnalysisCase'],
        'nestedAttribute': !exists(json, 'nestedAttribute') ? undefined : json['nestedAttribute'],
        'nestedCalculation': !exists(json, 'nestedCalculation') ? undefined : json['nestedCalculation'],
        'nestedCase': !exists(json, 'nestedCase') ? undefined : json['nestedCase'],
        'nestedConcern': !exists(json, 'nestedConcern') ? undefined : json['nestedConcern'],
        'nestedConnection': !exists(json, 'nestedConnection') ? undefined : json['nestedConnection'],
        'nestedConstraint': !exists(json, 'nestedConstraint') ? undefined : json['nestedConstraint'],
        'nestedEnumeration': !exists(json, 'nestedEnumeration') ? undefined : json['nestedEnumeration'],
        'nestedFlow': !exists(json, 'nestedFlow') ? undefined : json['nestedFlow'],
        'nestedInterface': !exists(json, 'nestedInterface') ? undefined : json['nestedInterface'],
        'nestedItem': !exists(json, 'nestedItem') ? undefined : json['nestedItem'],
        'nestedMetadata': !exists(json, 'nestedMetadata') ? undefined : json['nestedMetadata'],
        'nestedOccurrence': !exists(json, 'nestedOccurrence') ? undefined : json['nestedOccurrence'],
        'nestedPart': !exists(json, 'nestedPart') ? undefined : json['nestedPart'],
        'nestedPort': !exists(json, 'nestedPort') ? undefined : json['nestedPort'],
        'nestedReference': !exists(json, 'nestedReference') ? undefined : json['nestedReference'],
        'nestedRendering': !exists(json, 'nestedRendering') ? undefined : json['nestedRendering'],
        'nestedRequirement': !exists(json, 'nestedRequirement') ? undefined : json['nestedRequirement'],
        'nestedState': !exists(json, 'nestedState') ? undefined : json['nestedState'],
        'nestedTransition': !exists(json, 'nestedTransition') ? undefined : json['nestedTransition'],
        'nestedUsage': !exists(json, 'nestedUsage') ? undefined : json['nestedUsage'],
        'nestedUseCase': !exists(json, 'nestedUseCase') ? undefined : json['nestedUseCase'],
        'nestedVerificationCase': !exists(json, 'nestedVerificationCase') ? undefined : json['nestedVerificationCase'],
        'nestedView': !exists(json, 'nestedView') ? undefined : json['nestedView'],
        'nestedViewpoint': !exists(json, 'nestedViewpoint') ? undefined : json['nestedViewpoint'],
        'occurrenceDefinition': !exists(json, 'occurrenceDefinition') ? undefined : json['occurrenceDefinition'],
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
        'owningDefinition': !exists(json, 'owningDefinition') ? undefined : json['owningDefinition'],
        'owningFeatureMembership': !exists(json, 'owningFeatureMembership') ? undefined : json['owningFeatureMembership'],
        'owningMembership': !exists(json, 'owningMembership') ? undefined : json['owningMembership'],
        'owningNamespace': !exists(json, 'owningNamespace') ? undefined : json['owningNamespace'],
        'owningRelationship': !exists(json, 'owningRelationship') ? undefined : json['owningRelationship'],
        'owningType': !exists(json, 'owningType') ? undefined : json['owningType'],
        'owningUsage': !exists(json, 'owningUsage') ? undefined : json['owningUsage'],
        'parameter': !exists(json, 'parameter') ? undefined : json['parameter'],
        'portionKind': !exists(json, 'portionKind') ? undefined : json['portionKind'],
        'portioningFeature': !exists(json, 'portioningFeature') ? undefined : json['portioningFeature'],
        'predicate': !exists(json, 'predicate') ? undefined : json['predicate'],
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'reqId': !exists(json, 'reqId') ? undefined : json['reqId'],
        'requiredConstraint': !exists(json, 'requiredConstraint') ? undefined : json['requiredConstraint'],
        'requirementDefinition': !exists(json, 'requirementDefinition') ? undefined : json['requirementDefinition'],
        'result': !exists(json, 'result') ? undefined : IdentifiedFromJSON(json['result']),
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'stakeholderParameter': !exists(json, 'stakeholderParameter') ? undefined : json['stakeholderParameter'],
        'subjectParameter': !exists(json, 'subjectParameter') ? undefined : IdentifiedFromJSON(json['subjectParameter']),
        'text': !exists(json, 'text') ? undefined : json['text'],
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !exists(json, 'variantMembership') ? undefined : json['variantMembership'],
        'viewpointDefinition': !exists(json, 'viewpointDefinition') ? undefined : json['viewpointDefinition'],
        'viewpointStakeholder': !exists(json, 'viewpointStakeholder') ? undefined : json['viewpointStakeholder'],
    };
}

export function ViewpointUsageRequestToJSON(value?: ViewpointUsageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
        '@type': value.atType,
        'actorParameter': value.actorParameter,
        'aliasIds': value.aliasIds,
        'assumedConstraint': value.assumedConstraint,
        'behavior': value.behavior,
        'chainingFeature': value.chainingFeature,
        'constraintDefinition': value.constraintDefinition,
        'declaredName': value.declaredName,
        'declaredShortName': value.declaredShortName,
        'definition': value.definition,
        'differencingType': value.differencingType,
        'directedFeature': value.directedFeature,
        'directedUsage': value.directedUsage,
        'direction': value.direction,
        'documentation': value.documentation,
        'elementId': value.elementId,
        'endFeature': value.endFeature,
        'endOwningType': value.endOwningType,
        'feature': value.feature,
        'featureMembership': value.featureMembership,
        'featuringType': value.featuringType,
        'framedConcern': value.framedConcern,
        'function': value._function,
        'importedMembership': value.importedMembership,
        'individualDefinition': value.individualDefinition,
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
        'isIndividual': value.isIndividual,
        'isLibraryElement': value.isLibraryElement,
        'isModelLevelEvaluable': value.isModelLevelEvaluable,
        'isOrdered': value.isOrdered,
        'isPortion': value.isPortion,
        'isReadOnly': value.isReadOnly,
        'isReference': value.isReference,
        'isSufficient': value.isSufficient,
        'isUnique': value.isUnique,
        'isVariation': value.isVariation,
        'member': value.member,
        'membership': value.membership,
        'multiplicity': value.multiplicity,
        'name': value.name,
        'nestedAction': value.nestedAction,
        'nestedAllocation': value.nestedAllocation,
        'nestedAnalysisCase': value.nestedAnalysisCase,
        'nestedAttribute': value.nestedAttribute,
        'nestedCalculation': value.nestedCalculation,
        'nestedCase': value.nestedCase,
        'nestedConcern': value.nestedConcern,
        'nestedConnection': value.nestedConnection,
        'nestedConstraint': value.nestedConstraint,
        'nestedEnumeration': value.nestedEnumeration,
        'nestedFlow': value.nestedFlow,
        'nestedInterface': value.nestedInterface,
        'nestedItem': value.nestedItem,
        'nestedMetadata': value.nestedMetadata,
        'nestedOccurrence': value.nestedOccurrence,
        'nestedPart': value.nestedPart,
        'nestedPort': value.nestedPort,
        'nestedReference': value.nestedReference,
        'nestedRendering': value.nestedRendering,
        'nestedRequirement': value.nestedRequirement,
        'nestedState': value.nestedState,
        'nestedTransition': value.nestedTransition,
        'nestedUsage': value.nestedUsage,
        'nestedUseCase': value.nestedUseCase,
        'nestedVerificationCase': value.nestedVerificationCase,
        'nestedView': value.nestedView,
        'nestedViewpoint': value.nestedViewpoint,
        'occurrenceDefinition': value.occurrenceDefinition,
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
        'owningDefinition': value.owningDefinition,
        'owningFeatureMembership': value.owningFeatureMembership,
        'owningMembership': value.owningMembership,
        'owningNamespace': value.owningNamespace,
        'owningRelationship': value.owningRelationship,
        'owningType': value.owningType,
        'owningUsage': value.owningUsage,
        'parameter': value.parameter,
        'portionKind': value.portionKind,
        'portioningFeature': value.portioningFeature,
        'predicate': value.predicate,
        'qualifiedName': value.qualifiedName,
        'reqId': value.reqId,
        'requiredConstraint': value.requiredConstraint,
        'requirementDefinition': value.requirementDefinition,
        'result': IdentifiedToJSON(value.result),
        'shortName': value.shortName,
        'stakeholderParameter': value.stakeholderParameter,
        'subjectParameter': IdentifiedToJSON(value.subjectParameter),
        'text': value.text,
        'textualRepresentation': value.textualRepresentation,
        'type': value.type,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
        'viewpointDefinition': value.viewpointDefinition,
        'viewpointStakeholder': value.viewpointStakeholder,
    };
}

