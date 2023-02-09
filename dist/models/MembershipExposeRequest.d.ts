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
 * @interface MembershipExposeRequest
 */
export interface MembershipExposeRequest {
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof MembershipExposeRequest
     */
    importOwningNamespace?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof MembershipExposeRequest
     */
    importedElement?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof MembershipExposeRequest
     */
    importedMembership?: Identified;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    isImportAll?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    isRecursive?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    name?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    source?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    textualRepresentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof MembershipExposeRequest
     */
    visibility?: any | null;
}
/**
 * Check if a given object implements the MembershipExposeRequest interface.
 */
export declare function instanceOfMembershipExposeRequest(value: object): boolean;
export declare function MembershipExposeRequestFromJSON(json: any): MembershipExposeRequest;
export declare function MembershipExposeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipExposeRequest;
export declare function MembershipExposeRequestToJSON(value?: MembershipExposeRequest | null): any;