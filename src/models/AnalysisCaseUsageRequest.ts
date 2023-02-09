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
 * @interface AnalysisCaseUsageRequest
 */
export interface AnalysisCaseUsageRequest {
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    id?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    actionDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    actorParameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    aliasIds?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    analysisAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    analysisCaseDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    behavior?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    calculationDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    caseDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    chainingFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    declaredName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    declaredShortName?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    definition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    differencingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    directedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    directedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    direction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    documentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    elementId?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    endFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    endOwningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    feature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    featureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    featuringType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    _function?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    importedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    individualDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    inheritedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    inheritedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    input?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    intersectingType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isAbstract?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isComposite?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isConjugated?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isDerived?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isEnd?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isImpliedIncluded?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isIndividual?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isLibraryElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isModelLevelEvaluable?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isOrdered?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isPortion?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isReadOnly?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isSufficient?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isUnique?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    isVariation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    member?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    membership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    multiplicity?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    name?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedAction?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedAllocation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedAttribute?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedCalculation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedConcern?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedConnection?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedConstraint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedEnumeration?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedFlow?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedInterface?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedItem?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedMetadata?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedOccurrence?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedPart?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedPort?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedReference?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedRendering?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedState?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedTransition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedUseCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedVerificationCase?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedView?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    nestedViewpoint?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    objectiveRequirement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    occurrenceDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    output?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedAnnotation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedConjugator?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedDifferencing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedDisjoining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedElement?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedEndFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedImport?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedIntersecting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedMember?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedRedefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedSpecialization?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedSubsetting?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedTyping?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    ownedUnioning?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    owner?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    owningDefinition?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    owningFeatureMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    owningMembership?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    owningNamespace?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    owningRelationship?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    owningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    owningUsage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    parameter?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    portionKind?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    portioningFeature?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    qualifiedName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof AnalysisCaseUsageRequest
     */
    result?: Identified;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    resultExpression?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    shortName?: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof AnalysisCaseUsageRequest
     */
    subjectParameter?: Identified;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    textualRepresentation?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    type?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    unioningType?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    usage?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    variant?: any | null;
    /**
     * 
     * @type {any}
     * @memberof AnalysisCaseUsageRequest
     */
    variantMembership?: any | null;
}

/**
 * Check if a given object implements the AnalysisCaseUsageRequest interface.
 */
export function instanceOfAnalysisCaseUsageRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "type" in value;

    return isInstance;
}

export function AnalysisCaseUsageRequestFromJSON(json: any): AnalysisCaseUsageRequest {
    return AnalysisCaseUsageRequestFromJSONTyped(json, false);
}

export function AnalysisCaseUsageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnalysisCaseUsageRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, '@id') ? undefined : json['@id'],
        'atType': json['@type'],
        'actionDefinition': !exists(json, 'actionDefinition') ? undefined : json['actionDefinition'],
        'actorParameter': !exists(json, 'actorParameter') ? undefined : json['actorParameter'],
        'aliasIds': !exists(json, 'aliasIds') ? undefined : json['aliasIds'],
        'analysisAction': !exists(json, 'analysisAction') ? undefined : json['analysisAction'],
        'analysisCaseDefinition': !exists(json, 'analysisCaseDefinition') ? undefined : json['analysisCaseDefinition'],
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
        'resultExpression': !exists(json, 'resultExpression') ? undefined : json['resultExpression'],
        'shortName': !exists(json, 'shortName') ? undefined : json['shortName'],
        'subjectParameter': !exists(json, 'subjectParameter') ? undefined : IdentifiedFromJSON(json['subjectParameter']),
        'textualRepresentation': !exists(json, 'textualRepresentation') ? undefined : json['textualRepresentation'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'unioningType': !exists(json, 'unioningType') ? undefined : json['unioningType'],
        'usage': !exists(json, 'usage') ? undefined : json['usage'],
        'variant': !exists(json, 'variant') ? undefined : json['variant'],
        'variantMembership': !exists(json, 'variantMembership') ? undefined : json['variantMembership'],
    };
}

export function AnalysisCaseUsageRequestToJSON(value?: AnalysisCaseUsageRequest | null): any {
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
        'analysisAction': value.analysisAction,
        'analysisCaseDefinition': value.analysisCaseDefinition,
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
        'resultExpression': value.resultExpression,
        'shortName': value.shortName,
        'subjectParameter': IdentifiedToJSON(value.subjectParameter),
        'textualRepresentation': value.textualRepresentation,
        'type': value.type,
        'unioningType': value.unioningType,
        'usage': value.usage,
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}

