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
 * @interface ReturnParameterMembershipRequest
 */
export interface ReturnParameterMembershipRequest {
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    feature?: Identified;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    memberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    memberElementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    memberName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    memberShortName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberElementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberFeature?: Identified;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberParameter?: Identified;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedMemberShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    owningType?: Identified;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    source?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReturnParameterMembershipRequest
     */
    type?: Identified;
    /**
     *
     * @type {any}
     * @memberof ReturnParameterMembershipRequest
     */
    visibility?: any | null;
}
/**
 * Check if a given object implements the ReturnParameterMembershipRequest interface.
 */
export declare function instanceOfReturnParameterMembershipRequest(value: object): boolean;
export declare function ReturnParameterMembershipRequestFromJSON(json: any): ReturnParameterMembershipRequest;
export declare function ReturnParameterMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReturnParameterMembershipRequest;
export declare function ReturnParameterMembershipRequestToJSON(value?: ReturnParameterMembershipRequest | null): any;
