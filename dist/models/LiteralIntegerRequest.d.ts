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
 * @interface LiteralIntegerRequest
 */
export interface LiteralIntegerRequest {
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    behavior?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    chainingFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    differencingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    directedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    direction?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    endFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    endOwningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    feature?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    featureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    featuringType?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    _function?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    importedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    inheritedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    inheritedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    input?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    intersectingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isAbstract?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isComposite?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isConjugated?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isDerived?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isEnd?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isModelLevelEvaluable?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isOrdered?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isPortion?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isReadOnly?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isSufficient?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    isUnique?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    member?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    membership?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    multiplicity?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    output?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedConjugator?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedDifferencing?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedDisjoining?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedEndFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedImport?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedIntersecting?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedMember?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedRedefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedSpecialization?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedTyping?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    ownedUnioning?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    owningFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    owningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    parameter?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof LiteralIntegerRequest
     */
    result?: Identified;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    type?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    unioningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof LiteralIntegerRequest
     */
    value?: any | null;
}
/**
 * Check if a given object implements the LiteralIntegerRequest interface.
 */
export declare function instanceOfLiteralIntegerRequest(value: object): boolean;
export declare function LiteralIntegerRequestFromJSON(json: any): LiteralIntegerRequest;
export declare function LiteralIntegerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LiteralIntegerRequest;
export declare function LiteralIntegerRequestToJSON(value?: LiteralIntegerRequest | null): any;
