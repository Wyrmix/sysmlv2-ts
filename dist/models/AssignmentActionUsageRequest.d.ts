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
 * @interface AssignmentActionUsageRequest
 */
export interface AssignmentActionUsageRequest {
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    actionDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    behavior?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    chainingFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    definition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    differencingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    directedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    directedUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    direction?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    endFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    endOwningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    feature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    featureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    featuringType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    importedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    individualDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    inheritedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    inheritedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    input?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    intersectingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isAbstract?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isComposite?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isConjugated?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isDerived?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isEnd?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isIndividual?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isOrdered?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isPortion?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isReadOnly?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isReference?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isSufficient?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isUnique?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    isVariation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    member?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    membership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    multiplicity?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedAction?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedAllocation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedAnalysisCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedAttribute?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedCalculation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedConcern?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedConnection?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedConstraint?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedEnumeration?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedFlow?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedInterface?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedItem?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedMetadata?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedOccurrence?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedPart?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedPort?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedReference?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedRendering?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedRequirement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedState?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedTransition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedUseCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedVerificationCase?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedView?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    nestedViewpoint?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    occurrenceDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    output?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedConjugator?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedDifferencing?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedDisjoining?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedEndFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedImport?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedIntersecting?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedMember?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedRedefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedSpecialization?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedTyping?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    ownedUnioning?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    owningDefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    owningFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    owningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    owningUsage?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    parameter?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    portionKind?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    portioningFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof AssignmentActionUsageRequest
     */
    referent?: Identified;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof AssignmentActionUsageRequest
     */
    targetArgument?: Identified;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    type?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    unioningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    usage?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof AssignmentActionUsageRequest
     */
    valueExpression?: Identified;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    variant?: any | null;
    /**
     *
     * @type {any}
     * @memberof AssignmentActionUsageRequest
     */
    variantMembership?: any | null;
}
/**
 * Check if a given object implements the AssignmentActionUsageRequest interface.
 */
export declare function instanceOfAssignmentActionUsageRequest(value: object): boolean;
export declare function AssignmentActionUsageRequestFromJSON(json: any): AssignmentActionUsageRequest;
export declare function AssignmentActionUsageRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssignmentActionUsageRequest;
export declare function AssignmentActionUsageRequestToJSON(value?: AssignmentActionUsageRequest | null): any;
