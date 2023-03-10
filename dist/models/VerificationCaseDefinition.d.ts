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
import type { Identified } from './Identified';
/**
 *
 * @export
 * @interface VerificationCaseDefinition
 */
export interface VerificationCaseDefinition {
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    action: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    actorParameter: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    calculation: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    differencingType: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    directedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    directedUsage: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    elementId: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    endFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    expression: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    feature: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    featureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    importedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    inheritedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    inheritedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    input: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    intersectingType: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    isAbstract: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    isConjugated: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    isIndividual: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    isModelLevelEvaluable: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    isSufficient: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    isVariation: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    lifeClass: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    member: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    membership: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    multiplicity: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    objectiveRequirement: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    output: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedAction: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedAllocation: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedAnalysisCase: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedAttribute: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedCalculation: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedCase: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedConcern: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedConjugator: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedConnection: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedConstraint: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedDifferencing: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedDisjoining: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedEndFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedEnumeration: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedFeature: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedFeatureMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedFlow: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedImport: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedInterface: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedIntersecting: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedItem: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedMember: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedMetadata: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedOccurrence: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedPart: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedPort: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedReference: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedRendering: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedRequirement: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedSpecialization: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedState: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedSubclassification: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedTransition: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedUnioning: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedUsage: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedUseCase: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedVerificationCase: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedView: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    ownedViewpoint: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    parameter: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    qualifiedName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof VerificationCaseDefinition
     */
    result: Identified;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    step: any | null;
    /**
     *
     * @type {Identified}
     * @memberof VerificationCaseDefinition
     */
    subjectParameter: Identified;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    unioningType: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    usage: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    variant: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    variantMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof VerificationCaseDefinition
     */
    verifiedRequirement: any | null;
}
/**
 * Check if a given object implements the VerificationCaseDefinition interface.
 */
export declare function instanceOfVerificationCaseDefinition(value: object): boolean;
export declare function VerificationCaseDefinitionFromJSON(json: any): VerificationCaseDefinition;
export declare function VerificationCaseDefinitionFromJSONTyped(json: any, ignoreDiscriminator: boolean): VerificationCaseDefinition;
export declare function VerificationCaseDefinitionToJSON(value?: VerificationCaseDefinition | null): any;
