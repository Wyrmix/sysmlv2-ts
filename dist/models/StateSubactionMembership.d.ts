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
 * @interface StateSubactionMembership
 */
export interface StateSubactionMembership {
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    atType: any | null;
    /**
     *
     * @type {Identified}
     * @memberof StateSubactionMembership
     */
    action: Identified;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    elementId: any | null;
    /**
     *
     * @type {Identified}
     * @memberof StateSubactionMembership
     */
    feature: Identified;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    isImplied: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    kind: any | null;
    /**
     *
     * @type {Identified}
     * @memberof StateSubactionMembership
     */
    memberElement: Identified;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    memberElementId: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    memberName: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    memberShortName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof StateSubactionMembership
     */
    membershipOwningNamespace: Identified;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    ownedElement: any | null;
    /**
     *
     * @type {Identified}
     * @memberof StateSubactionMembership
     */
    ownedMemberElement: Identified;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    ownedMemberElementId: any | null;
    /**
     *
     * @type {Identified}
     * @memberof StateSubactionMembership
     */
    ownedMemberFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    ownedMemberName: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    ownedMemberShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    ownedRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    owningRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    owningRelationship: any | null;
    /**
     *
     * @type {Identified}
     * @memberof StateSubactionMembership
     */
    owningType: Identified;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    qualifiedName: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    relatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    source: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    target: any | null;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {Identified}
     * @memberof StateSubactionMembership
     */
    type: Identified;
    /**
     *
     * @type {any}
     * @memberof StateSubactionMembership
     */
    visibility: any | null;
}
/**
 * Check if a given object implements the StateSubactionMembership interface.
 */
export declare function instanceOfStateSubactionMembership(value: object): boolean;
export declare function StateSubactionMembershipFromJSON(json: any): StateSubactionMembership;
export declare function StateSubactionMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): StateSubactionMembership;
export declare function StateSubactionMembershipToJSON(value?: StateSubactionMembership | null): any;
