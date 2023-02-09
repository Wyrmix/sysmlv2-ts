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
 * @interface SubjectMembershipRequest
 */
export interface SubjectMembershipRequest {
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    feature?: Identified;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    memberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    memberElementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    memberName?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    memberShortName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    membershipOwningNamespace?: Identified;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberElement?: Identified;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberElementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberFeature?: Identified;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberName?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberParameter?: Identified;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedMemberShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    ownedSubjectParameter?: Identified;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    owningType?: Identified;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    source?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof SubjectMembershipRequest
     */
    type?: Identified;
    /**
     *
     * @type {any}
     * @memberof SubjectMembershipRequest
     */
    visibility?: any | null;
}
/**
 * Check if a given object implements the SubjectMembershipRequest interface.
 */
export declare function instanceOfSubjectMembershipRequest(value: object): boolean;
export declare function SubjectMembershipRequestFromJSON(json: any): SubjectMembershipRequest;
export declare function SubjectMembershipRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubjectMembershipRequest;
export declare function SubjectMembershipRequestToJSON(value?: SubjectMembershipRequest | null): any;