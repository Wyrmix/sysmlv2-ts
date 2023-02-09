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
 * @interface FeatureValueRequest
 */
export interface FeatureValueRequest {
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof FeatureValueRequest
     */
    featureWithValue?: Identified;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    isDefault?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    isInitial?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof FeatureValueRequest
     */
    memberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    memberElementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    memberName?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    memberShortName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof FeatureValueRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof FeatureValueRequest
     */
    ownedMemberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    ownedMemberElementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    ownedMemberName?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    ownedMemberShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    source?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof FeatureValueRequest
     */
    value?: Identified;
    /**
     *
     * @type {any}
     * @memberof FeatureValueRequest
     */
    visibility?: any | null;
}
/**
 * Check if a given object implements the FeatureValueRequest interface.
 */
export declare function instanceOfFeatureValueRequest(value: object): boolean;
export declare function FeatureValueRequestFromJSON(json: any): FeatureValueRequest;
export declare function FeatureValueRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeatureValueRequest;
export declare function FeatureValueRequestToJSON(value?: FeatureValueRequest | null): any;