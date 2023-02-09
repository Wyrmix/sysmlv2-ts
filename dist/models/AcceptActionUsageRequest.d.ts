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
 * @interface AcceptActionUsageRequest
 */
export interface AcceptActionUsageRequest {
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    actionDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    behavior?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    chainingFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    definition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    differencingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    directedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    directedUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    direction?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    endFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    endOwningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    feature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    featureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    featuringType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    importedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    individualDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    inheritedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    inheritedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    input?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    intersectingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isAbstract?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isComposite?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isConjugated?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isDerived?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isEnd?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isIndividual?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isOrdered?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isPortion?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isReadOnly?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isReference?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isSufficient?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isUnique?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    isVariation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    member?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    membership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    multiplicity?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedAction?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedAllocation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedAttribute?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedCalculation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedConcern?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedConnection?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedConstraint?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedEnumeration?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedFlow?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedInterface?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedItem?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedMetadata?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedOccurrence?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedPart?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedPort?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedReference?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedRendering?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedRequirement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedState?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedTransition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedUseCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedVerificationCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedView?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    nestedViewpoint?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    occurrenceDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    output?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedConjugator?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedDifferencing?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedDisjoining?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedEndFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedImport?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedIntersecting?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedMember?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedRedefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedSpecialization?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedTyping?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    ownedUnioning?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    owningDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    owningFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    owningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    owningUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    parameter?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    payloadArgument?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof AcceptActionUsageRequest
     */
    payloadParameter?: Identified;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    portionKind?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    portioningFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    receiverArgument?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    type?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    unioningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    usage?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    variant?: any | null;
    /**
     *
     * @type {any}
     * @memberof AcceptActionUsageRequest
     */
    variantMembership?: any | null;
}
/**
 * Check if a given object implements the AcceptActionUsageRequest interface.
 */
export declare function instanceOfAcceptActionUsageRequest(value: object): boolean;
export declare function AcceptActionUsageRequestFromJSON(json: any): AcceptActionUsageRequest;
export declare function AcceptActionUsageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AcceptActionUsageRequest;
export declare function AcceptActionUsageRequestToJSON(value?: AcceptActionUsageRequest | null): any;