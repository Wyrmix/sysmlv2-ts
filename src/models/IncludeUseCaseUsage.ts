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
 * @interface IncludeUseCaseUsage
 */
export interface IncludeUseCaseUsage {
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    id: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    atType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    actionDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    actorParameter: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    aliasIds: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    behavior: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    calculationDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    caseDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    chainingFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    declaredName: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    declaredShortName: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    definition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    differencingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    directedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    directedUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    direction: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    documentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    elementId: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    endFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    endOwningType: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof IncludeUseCaseUsage
     */
    eventOccurrence: Identified;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    feature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    featureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    featuringType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    _function: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    importedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    includedUseCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    individualDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    inheritedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    inheritedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    input: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    intersectingType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isAbstract: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isComposite: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isConjugated: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isDerived: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isEnd: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isImpliedIncluded: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isIndividual: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isLibraryElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isModelLevelEvaluable: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isOrdered: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isPortion: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isReadOnly: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isReference: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isSufficient: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isUnique: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    isVariation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    member: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    membership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    multiplicity: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    name: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedAction: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedAllocation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedAnalysisCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedAttribute: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedCalculation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedConcern: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedConnection: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedConstraint: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedEnumeration: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedFlow: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedInterface: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedItem: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedMetadata: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedOccurrence: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedPart: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedPort: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedReference: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedRendering: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedRequirement: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedState: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedTransition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedUseCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedVerificationCase: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedView: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    nestedViewpoint: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    objectiveRequirement: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    occurrenceDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    output: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedAnnotation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedConjugator: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedDifferencing: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedDisjoining: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedElement: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedEndFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedFeatureChaining: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedFeatureInverting: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedImport: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedIntersecting: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedMember: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedRedefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedReferenceSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedSpecialization: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedSubsetting: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedTypeFeaturing: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedTyping: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    ownedUnioning: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    owner: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    owningDefinition: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    owningFeatureMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    owningMembership: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    owningNamespace: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    owningRelationship: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    owningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    owningUsage: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    parameter: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof IncludeUseCaseUsage
     */
    performedAction: Identified;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    portionKind: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    portioningFeature: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    qualifiedName: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof IncludeUseCaseUsage
     */
    result: Identified;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    shortName: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof IncludeUseCaseUsage
     */
    subjectParameter: Identified;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    textualRepresentation: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
     type: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    unioningType: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    usage: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    useCaseDefinition: any | null;
    /**
     * 
     * @type {Identified}
     * @memberof IncludeUseCaseUsage
     */
    useCaseIncluded: Identified;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    variant: any | null;
    /**
     * 
     * @type {any}
     * @memberof IncludeUseCaseUsage
     */
    variantMembership: any | null;
}

/**
 * Check if a given object implements the IncludeUseCaseUsage interface.
 */
export function instanceOfIncludeUseCaseUsage(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "actionDefinition" in value;
    isInstance = isInstance && "actorParameter" in value;
    isInstance = isInstance && "aliasIds" in value;
    isInstance = isInstance && "behavior" in value;
    isInstance = isInstance && "calculationDefinition" in value;
    isInstance = isInstance && "caseDefinition" in value;
    isInstance = isInstance && "chainingFeature" in value;
    isInstance = isInstance && "declaredName" in value;
    isInstance = isInstance && "declaredShortName" in value;
    isInstance = isInstance && "definition" in value;
    isInstance = isInstance && "differencingType" in value;
    isInstance = isInstance && "directedFeature" in value;
    isInstance = isInstance && "directedUsage" in value;
    isInstance = isInstance && "direction" in value;
    isInstance = isInstance && "documentation" in value;
    isInstance = isInstance && "elementId" in value;
    isInstance = isInstance && "endFeature" in value;
    isInstance = isInstance && "endOwningType" in value;
    isInstance = isInstance && "eventOccurrence" in value;
    isInstance = isInstance && "feature" in value;
    isInstance = isInstance && "featureMembership" in value;
    isInstance = isInstance && "featuringType" in value;
    isInstance = isInstance && "_function" in value;
    isInstance = isInstance && "importedMembership" in value;
    isInstance = isInstance && "includedUseCase" in value;
    isInstance = isInstance && "individualDefinition" in value;
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
    isInstance = isInstance && "isIndividual" in value;
    isInstance = isInstance && "isLibraryElement" in value;
    isInstance = isInstance && "isModelLevelEvaluable" in value;
    isInstance = isInstance && "isOrdered" in value;
    isInstance = isInstance && "isPortion" in value;
    isInstance = isInstance && "isReadOnly" in value;
    isInstance = isInstance && "isReference" in value;
    isInstance = isInstance && "isSufficient" in value;
    isInstance = isInstance && "isUnique" in value;
    isInstance = isInstance && "isVariation" in value;
    isInstance = isInstance && "member" in value;
    isInstance = isInstance && "membership" in value;
    isInstance = isInstance && "multiplicity" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "nestedAction" in value;
    isInstance = isInstance && "nestedAllocation" in value;
    isInstance = isInstance && "nestedAnalysisCase" in value;
    isInstance = isInstance && "nestedAttribute" in value;
    isInstance = isInstance && "nestedCalculation" in value;
    isInstance = isInstance && "nestedCase" in value;
    isInstance = isInstance && "nestedConcern" in value;
    isInstance = isInstance && "nestedConnection" in value;
    isInstance = isInstance && "nestedConstraint" in value;
    isInstance = isInstance && "nestedEnumeration" in value;
    isInstance = isInstance && "nestedFlow" in value;
    isInstance = isInstance && "nestedInterface" in value;
    isInstance = isInstance && "nestedItem" in value;
    isInstance = isInstance && "nestedMetadata" in value;
    isInstance = isInstance && "nestedOccurrence" in value;
    isInstance = isInstance && "nestedPart" in value;
    isInstance = isInstance && "nestedPort" in value;
    isInstance = isInstance && "nestedReference" in value;
    isInstance = isInstance && "nestedRendering" in value;
    isInstance = isInstance && "nestedRequirement" in value;
    isInstance = isInstance && "nestedState" in value;
    isInstance = isInstance && "nestedTransition" in value;
    isInstance = isInstance && "nestedUsage" in value;
    isInstance = isInstance && "nestedUseCase" in value;
    isInstance = isInstance && "nestedVerificationCase" in value;
    isInstance = isInstance && "nestedView" in value;
    isInstance = isInstance && "nestedViewpoint" in value;
    isInstance = isInstance && "objectiveRequirement" in value;
    isInstance = isInstance && "occurrenceDefinition" in value;
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
    isInstance = isInstance && "owningDefinition" in value;
    isInstance = isInstance && "owningFeatureMembership" in value;
    isInstance = isInstance && "owningMembership" in value;
    isInstance = isInstance && "owningNamespace" in value;
    isInstance = isInstance && "owningRelationship" in value;
    isInstance = isInstance && "owningType" in value;
    isInstance = isInstance && "owningUsage" in value;
    isInstance = isInstance && "parameter" in value;
    isInstance = isInstance && "performedAction" in value;
    isInstance = isInstance && "portionKind" in value;
    isInstance = isInstance && "portioningFeature" in value;
    isInstance = isInstance && "qualifiedName" in value;
    isInstance = isInstance && "result" in value;
    isInstance = isInstance && "shortName" in value;
    isInstance = isInstance && "subjectParameter" in value;
    isInstance = isInstance && "textualRepresentation" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "unioningType" in value;
    isInstance = isInstance && "usage" in value;
    isInstance = isInstance && "useCaseDefinition" in value;
    isInstance = isInstance && "useCaseIncluded" in value;
    isInstance = isInstance && "variant" in value;
    isInstance = isInstance && "variantMembership" in value;

    return isInstance;
}

export function IncludeUseCaseUsageFromJSON(json: any): IncludeUseCaseUsage {
    return IncludeUseCaseUsageFromJSONTyped(json, false);
}

export function IncludeUseCaseUsageFromJSONTyped(json: any, ignoreDiscriminator: boolean): IncludeUseCaseUsage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['@id'],
        'atType': json['@type'],
        'actionDefinition': json['actionDefinition'],
        'actorParameter': json['actorParameter'],
        'aliasIds': json['aliasIds'],
        'behavior': json['behavior'],
        'calculationDefinition': json['calculationDefinition'],
        'caseDefinition': json['caseDefinition'],
        'chainingFeature': json['chainingFeature'],
        'declaredName': json['declaredName'],
        'declaredShortName': json['declaredShortName'],
        'definition': json['definition'],
        'differencingType': json['differencingType'],
        'directedFeature': json['directedFeature'],
        'directedUsage': json['directedUsage'],
        'direction': json['direction'],
        'documentation': json['documentation'],
        'elementId': json['elementId'],
        'endFeature': json['endFeature'],
        'endOwningType': json['endOwningType'],
        'eventOccurrence': IdentifiedFromJSON(json['eventOccurrence']),
        'feature': json['feature'],
        'featureMembership': json['featureMembership'],
        'featuringType': json['featuringType'],
        '_function': json['function'],
        'importedMembership': json['importedMembership'],
        'includedUseCase': json['includedUseCase'],
        'individualDefinition': json['individualDefinition'],
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
        'isIndividual': json['isIndividual'],
        'isLibraryElement': json['isLibraryElement'],
        'isModelLevelEvaluable': json['isModelLevelEvaluable'],
        'isOrdered': json['isOrdered'],
        'isPortion': json['isPortion'],
        'isReadOnly': json['isReadOnly'],
        'isReference': json['isReference'],
        'isSufficient': json['isSufficient'],
        'isUnique': json['isUnique'],
        'isVariation': json['isVariation'],
        'member': json['member'],
        'membership': json['membership'],
        'multiplicity': json['multiplicity'],
        'name': json['name'],
        'nestedAction': json['nestedAction'],
        'nestedAllocation': json['nestedAllocation'],
        'nestedAnalysisCase': json['nestedAnalysisCase'],
        'nestedAttribute': json['nestedAttribute'],
        'nestedCalculation': json['nestedCalculation'],
        'nestedCase': json['nestedCase'],
        'nestedConcern': json['nestedConcern'],
        'nestedConnection': json['nestedConnection'],
        'nestedConstraint': json['nestedConstraint'],
        'nestedEnumeration': json['nestedEnumeration'],
        'nestedFlow': json['nestedFlow'],
        'nestedInterface': json['nestedInterface'],
        'nestedItem': json['nestedItem'],
        'nestedMetadata': json['nestedMetadata'],
        'nestedOccurrence': json['nestedOccurrence'],
        'nestedPart': json['nestedPart'],
        'nestedPort': json['nestedPort'],
        'nestedReference': json['nestedReference'],
        'nestedRendering': json['nestedRendering'],
        'nestedRequirement': json['nestedRequirement'],
        'nestedState': json['nestedState'],
        'nestedTransition': json['nestedTransition'],
        'nestedUsage': json['nestedUsage'],
        'nestedUseCase': json['nestedUseCase'],
        'nestedVerificationCase': json['nestedVerificationCase'],
        'nestedView': json['nestedView'],
        'nestedViewpoint': json['nestedViewpoint'],
        'objectiveRequirement': json['objectiveRequirement'],
        'occurrenceDefinition': json['occurrenceDefinition'],
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
        'owningDefinition': json['owningDefinition'],
        'owningFeatureMembership': json['owningFeatureMembership'],
        'owningMembership': json['owningMembership'],
        'owningNamespace': json['owningNamespace'],
        'owningRelationship': json['owningRelationship'],
        'owningType': json['owningType'],
        'owningUsage': json['owningUsage'],
        'parameter': json['parameter'],
        'performedAction': IdentifiedFromJSON(json['performedAction']),
        'portionKind': json['portionKind'],
        'portioningFeature': json['portioningFeature'],
        'qualifiedName': json['qualifiedName'],
        'result': IdentifiedFromJSON(json['result']),
        'shortName': json['shortName'],
        'subjectParameter': IdentifiedFromJSON(json['subjectParameter']),
        'textualRepresentation': json['textualRepresentation'],
        'type': json['type'],
        'unioningType': json['unioningType'],
        'usage': json['usage'],
        'useCaseDefinition': json['useCaseDefinition'],
        'useCaseIncluded': IdentifiedFromJSON(json['useCaseIncluded']),
        'variant': json['variant'],
        'variantMembership': json['variantMembership'],
    };
}

export function IncludeUseCaseUsageToJSON(value?: IncludeUseCaseUsage | null): any {
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
        'eventOccurrence': IdentifiedToJSON(value.eventOccurrence),
        'feature': value.feature,
        'featureMembership': value.featureMembership,
        'featuringType': value.featuringType,
        'function': value._function,
        'importedMembership': value.importedMembership,
        'includedUseCase': value.includedUseCase,
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
        'performedAction': IdentifiedToJSON(value.performedAction),
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
        'useCaseDefinition': value.useCaseDefinition,
        'useCaseIncluded': IdentifiedToJSON(value.useCaseIncluded),
        'variant': value.variant,
        'variantMembership': value.variantMembership,
    };
}

