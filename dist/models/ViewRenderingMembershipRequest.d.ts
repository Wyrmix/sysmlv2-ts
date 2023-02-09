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
 * @interface ViewRenderingMembershipRequest
 */
export interface ViewRenderingMembershipRequest {
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ViewRenderingMembershipRequest
     */
    feature?: Identified;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ViewRenderingMembershipRequest
     */
    memberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    memberElementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    memberName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    memberShortName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ViewRenderingMembershipRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedMemberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedMemberElementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedMemberFeature?: Identified;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedMemberName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedMemberShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ViewRenderingMembershipRequest
     */
    ownedRendering?: Identified;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ViewRenderingMembershipRequest
     */
    owningType?: Identified;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ViewRenderingMembershipRequest
     */
    referencedRendering?: Identified;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    source?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ViewRenderingMembershipRequest
     */
    type?: Identified;
    /**
     *
     * @type {any}
     * @memberof ViewRenderingMembershipRequest
     */
    visibility?: any | null;
}
/**
 * Check if a given object implements the ViewRenderingMembershipRequest interface.
 */
export declare function instanceOfViewRenderingMembershipRequest(value: object): boolean;
export declare function ViewRenderingMembershipRequestFromJSON(json: any): ViewRenderingMembershipRequest;
export declare function ViewRenderingMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ViewRenderingMembershipRequest;
export declare function ViewRenderingMembershipRequestToJSON(value?: ViewRenderingMembershipRequest | null): any;
