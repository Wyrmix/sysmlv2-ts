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
 * @interface ConcernDefinitionRequest
 */
export interface ConcernDefinitionRequest {
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    actorParameter?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    assumedConstraint?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    differencingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    directedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    directedUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    endFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    expression?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    feature?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    featureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    framedConcern?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    importedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    inheritedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    inheritedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    input?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    intersectingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    isAbstract?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    isConjugated?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    isIndividual?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    isModelLevelEvaluable?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    isSufficient?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    isVariation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    lifeClass?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    member?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    membership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    multiplicity?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    output?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedAction?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedAllocation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedAnalysisCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedAttribute?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedCalculation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedConcern?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedConjugator?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedConnection?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedConstraint?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedDifferencing?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedDisjoining?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedEndFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedEnumeration?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedFlow?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedImport?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedInterface?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedIntersecting?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedItem?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedMember?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedMetadata?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedOccurrence?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedPart?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedPort?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedReference?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedRendering?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedRequirement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedSpecialization?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedState?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedSubclassification?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedTransition?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedUnioning?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedUseCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedVerificationCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedView?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    ownedViewpoint?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    parameter?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    reqId?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    requiredConstraint?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ConcernDefinitionRequest
     */
    result?: Identified;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    stakeholderParameter?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    step?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ConcernDefinitionRequest
     */
    subjectParameter?: Identified;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    text?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    unioningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    usage?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    variant?: any | null;
    /**
     *
     * @type {any}
     * @memberof ConcernDefinitionRequest
     */
    variantMembership?: any | null;
}
/**
 * Check if a given object implements the ConcernDefinitionRequest interface.
 */
export declare function instanceOfConcernDefinitionRequest(value: object): boolean;
export declare function ConcernDefinitionRequestFromJSON(json: any): ConcernDefinitionRequest;
export declare function ConcernDefinitionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConcernDefinitionRequest;
export declare function ConcernDefinitionRequestToJSON(value?: ConcernDefinitionRequest | null): any;