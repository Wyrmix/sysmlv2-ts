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
 * @interface EndFeatureMembershipRequest
 */
export interface EndFeatureMembershipRequest {
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    feature?: Identified;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    memberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    memberElementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    memberName?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    memberShortName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberElementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberFeature?: Identified;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberName?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedMemberShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    owningType?: Identified;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    source?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof EndFeatureMembershipRequest
     */
    type?: Identified;
    /**
     *
     * @type {any}
     * @memberof EndFeatureMembershipRequest
     */
    visibility?: any | null;
}
/**
 * Check if a given object implements the EndFeatureMembershipRequest interface.
 */
export declare function instanceOfEndFeatureMembershipRequest(value: object): boolean;
export declare function EndFeatureMembershipRequestFromJSON(json: any): EndFeatureMembershipRequest;
export declare function EndFeatureMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EndFeatureMembershipRequest;
export declare function EndFeatureMembershipRequestToJSON(value?: EndFeatureMembershipRequest | null): any;