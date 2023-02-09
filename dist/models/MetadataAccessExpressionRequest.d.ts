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
 * @interface MetadataAccessExpressionRequest
 */
export interface MetadataAccessExpressionRequest {
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    behavior?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    chainingFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    differencingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    directedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    direction?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    endFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    endOwningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    feature?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    featureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    featuringType?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    _function?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    importedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    inheritedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    inheritedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    input?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    intersectingType?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isAbstract?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isComposite?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isConjugated?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isDerived?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isEnd?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isModelLevelEvaluable?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isOrdered?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isPortion?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isReadOnly?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isSufficient?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    isUnique?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    member?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    membership?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    multiplicity?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    output?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedConjugator?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedDifferencing?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedDisjoining?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedEndFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedFeature?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedFeatureChaining?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedFeatureInverting?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedImport?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedIntersecting?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedMember?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedRedefinition?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedReferenceSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedSpecialization?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedSubsetting?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedTypeFeaturing?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedTyping?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    ownedUnioning?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    owningFeatureMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    owningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    parameter?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof MetadataAccessExpressionRequest
     */
    referencedElement?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof MetadataAccessExpressionRequest
     */
    result?: Identified;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    type?: any | null;
    /**
     *
     * @type {any}
     * @memberof MetadataAccessExpressionRequest
     */
    unioningType?: any | null;
}
/**
 * Check if a given object implements the MetadataAccessExpressionRequest interface.
 */
export declare function instanceOfMetadataAccessExpressionRequest(value: object): boolean;
export declare function MetadataAccessExpressionRequestFromJSON(json: any): MetadataAccessExpressionRequest;
export declare function MetadataAccessExpressionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataAccessExpressionRequest;
export declare function MetadataAccessExpressionRequestToJSON(value?: MetadataAccessExpressionRequest | null): any;
