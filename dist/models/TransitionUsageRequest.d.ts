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
 * @interface TransitionUsageRequest
 */
export interface TransitionUsageRequest {
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    actionDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    behavior?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    chainingFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    definition?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    differencingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    directedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    directedUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    direction?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    effectAction?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    endFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    endOwningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    feature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    featureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    featuringType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    guardExpression?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    importedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    individualDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    inheritedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    inheritedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    input?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    intersectingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isAbstract?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isComposite?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isConjugated?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isDerived?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isEnd?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isIndividual?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isOrdered?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isPortion?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isReadOnly?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isReference?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isSufficient?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isUnique?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    isVariation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    member?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    membership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    multiplicity?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedAction?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedAllocation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedAttribute?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedCalculation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedConcern?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedConnection?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedConstraint?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedEnumeration?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedFlow?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedInterface?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedItem?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedMetadata?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedOccurrence?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedPart?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedPort?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedReference?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedRendering?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedRequirement?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedState?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedTransition?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedUseCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedVerificationCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedView?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    nestedViewpoint?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    occurrenceDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    output?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedConjugator?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedDifferencing?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedDisjoining?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedEndFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedImport?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedIntersecting?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedMember?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedRedefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedSpecialization?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedTyping?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    ownedUnioning?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    owningDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    owningFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    owningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    owningUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    parameter?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    portionKind?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    portioningFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof TransitionUsageRequest
     */
    source?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof TransitionUsageRequest
     */
    succession?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof TransitionUsageRequest
     */
    target?: Identified;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    triggerAction?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    type?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    unioningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    usage?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    variant?: any | null;
    /**
     *
     * @type {any}
     * @memberof TransitionUsageRequest
     */
    variantMembership?: any | null;
}
/**
 * Check if a given object implements the TransitionUsageRequest interface.
 */
export declare function instanceOfTransitionUsageRequest(value: object): boolean;
export declare function TransitionUsageRequestFromJSON(json: any): TransitionUsageRequest;
export declare function TransitionUsageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransitionUsageRequest;
export declare function TransitionUsageRequestToJSON(value?: TransitionUsageRequest | null): any;