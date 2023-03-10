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
 * @interface ObjectiveMembership
 */
export interface ObjectiveMembership {
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    elementId: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ObjectiveMembership
     */
    feature: Identified;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    isImplied: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ObjectiveMembership
     */
    memberElement: Identified;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    memberElementId: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    memberName: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    memberShortName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ObjectiveMembership
     */
    membershipOwningNamespace: Identified;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    ownedElement: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ObjectiveMembership
     */
    ownedMemberElement: Identified;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    ownedMemberElementId: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ObjectiveMembership
     */
    ownedMemberFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    ownedMemberName: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    ownedMemberShortName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ObjectiveMembership
     */
    ownedObjectiveRequirement: Identified;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    ownedRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    owningRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    owningRelationship: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ObjectiveMembership
     */
    owningType: Identified;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    qualifiedName: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    relatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    source: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    target: any | null;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    textualRepresentation: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ObjectiveMembership
     */
    type: Identified;
    /**
     *
     * @type {any}
     * @memberof ObjectiveMembership
     */
    visibility: any | null;
}
/**
 * Check if a given object implements the ObjectiveMembership interface.
 */
export declare function instanceOfObjectiveMembership(value: object): boolean;
export declare function ObjectiveMembershipFromJSON(json: any): ObjectiveMembership;
export declare function ObjectiveMembershipFromJSONTyped(json: any, ignoreDiscriminator: boolean): ObjectiveMembership;
export declare function ObjectiveMembershipToJSON(value?: ObjectiveMembership | null): any;
