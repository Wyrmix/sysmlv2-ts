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
 * @interface TriggerInvocationExpressionRequest
 */
export interface TriggerInvocationExpressionRequest {
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    argument?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    behavior?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    chainingFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    differencingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    directedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    direction?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    endFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    endOwningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    feature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    featureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    featuringType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    _function?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    importedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    inheritedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    inheritedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    input?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    intersectingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isAbstract?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isComposite?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isConjugated?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isDerived?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isEnd?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isModelLevelEvaluable?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isOrdered?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isPortion?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isReadOnly?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isSufficient?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    isUnique?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    kind?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    member?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    membership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    multiplicity?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    output?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedConjugator?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedDifferencing?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedDisjoining?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedEndFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedImport?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedIntersecting?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedMember?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedRedefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedSpecialization?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedTyping?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    ownedUnioning?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    owningFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    owningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    parameter?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof TriggerInvocationExpressionRequest
     */
    result?: Identified;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    type?: any | null;
    /**
     *
     * @type {any}
     * @memberof TriggerInvocationExpressionRequest
     */
    unioningType?: any | null;
}
/**
 * Check if a given object implements the TriggerInvocationExpressionRequest interface.
 */
export declare function instanceOfTriggerInvocationExpressionRequest(value: object): boolean;
export declare function TriggerInvocationExpressionRequestFromJSON(json: any): TriggerInvocationExpressionRequest;
export declare function TriggerInvocationExpressionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): TriggerInvocationExpressionRequest;
export declare function TriggerInvocationExpressionRequestToJSON(value?: TriggerInvocationExpressionRequest | null): any;
