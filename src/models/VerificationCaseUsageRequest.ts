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
 * @interface VerificationCaseUsageRequest
 */
export interface VerificationCaseUsageRequest {
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    actionDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    actorParameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    behavior?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    calculationDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    caseDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    chainingFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    definition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    direction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    endOwningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    featuringType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    _function?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    individualDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isComposite?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isDerived?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isModelLevelEvaluable?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isOrdered?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isPortion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isReadOnly?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isUnique?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    nestedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    objectiveRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    occurrenceDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedRedefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedTyping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    owningDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    owningFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    owningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    owningUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    parameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    portionKind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    portioningFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof VerificationCaseUsageRequest
     */
    result?: Identified;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof VerificationCaseUsageRequest
     */
    subjectParameter?: Identified;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    variantMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    verificationCaseDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof VerificationCaseUsageRequest
     */
    verifiedRequirement?: any | null;
}

/**
 * Check if a given object implements the VerificationCaseUsageRequest interface.
 */
export function instanceOfVerificationCaseUsageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function VerificationCaseUsageRequestFromJSON(json: any): VerificationCaseUsageRequest {
    return VerificationCaseUsageRequestFromJSONTyped(json, false);
}

export function VerificationCaseUsageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationCaseUsageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'actionDefinition': !exists(json, 'actionDefinition') ? undefined : json['actionDefinition'],
        'actorParameter': !exists(json, 'actorParameter') ? undefined : json['actorParameter'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'behavior': !exists(json, 'behavior') ? undefined : json['behavior'],
        'calculationDefinition': !exists(json, 'calculationDefinition') ? undefined : json['calculationDefinition'],
        'caseDefinition': !exists(json, 'caseDefinition') ? undefined : json['caseDefinition'],
        'chainingFeature': !exists(json, 'chainingFeature') ? undefined : json['chainingFeature'],
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
        'objectiveRequirement': !exists(json, 'objectiveRequirement') ? undefined : json['objectiveRequirement'],
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
        'qualifiedName': !exists(json, 'qualifiedName') ? undefined : json['qualifiedName'],
        'result': !exists(json, 'result') ? undefined : IdentifiedFromJSON(json['result']),
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'subjectParameter': !exists(json, 'subjectParameter') ? undefined : IdentifiedFromJSON(json['subjectParameter']),
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !exists(json, 'variantMembership') ? undefined : json['variantMembership'],
        'verificationCaseDefinition': !exists(json, 'verificationCaseDefinition') ? undefined : json['verificationCaseDefinition'],
        'verifiedRequirement': !exists(json, 'verifiedRequirement') ? undefined : json['verifiedRequirement'],
    };
}

export function VerificationCaseUsageRequestToJSON(value?: VerificationCaseUsageRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        '@id': value.id,
        '@type': value.atType,
        'actionDefinition': value.actionDefinition,
        'actorParameter': value.actorParameter,
        'aliasIds': value.aliasIds,
        'behavior': value.behavior,
        'calculationDefinition': value.calculationDefinition,
        'caseDefinition': value.caseDefinition,
        'chainingFeature': value.chainingFeature,
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
        'objectiveRequirement': value.objectiveRequirement,
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
        'qualifiedName': value.qualifiedName,
        'result': IdentifiedToJSON(value.result),
        'shortName': value.shortName,
        'subjectParameter': IdentifiedToJSON(value.subjectParameter),
        'textualRepresentation': value.textualRepresentation,
        'type': value.type,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
        'verificationCaseDefinition': value.verificationCaseDefinition,
        'verifiedRequirement': value.verifiedRequirement,
    };
}
