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
 * @interface ReferenceSubsetting
 */
export interface ReferenceSubsetting {
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    elementId: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    general: Identified;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    isImplied: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    ownedRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owner: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    owningFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    owningType: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    qualifiedName: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    referencedFeature: Identified;
    /**
     *
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    referencingFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    relatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    source: any | null;
    /**
     *
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    specific: Identified;
    /**
     *
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    subsettedFeature: Identified;
    /**
     *
     * @type {Identified}
     * @memberof ReferenceSubsetting
     */
    subsettingFeature: Identified;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    target: any | null;
    /**
     *
     * @type {any}
     * @memberof ReferenceSubsetting
     */
    textualRepresentation: any | null;
}
/**
 * Check if a given object implements the ReferenceSubsetting interface.
 */
export declare function instanceOfReferenceSubsetting(value: object): boolean;
export declare function ReferenceSubsettingFromJSON(json: any): ReferenceSubsetting;
export declare function ReferenceSubsettingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferenceSubsetting;
export declare function ReferenceSubsettingToJSON(value?: ReferenceSubsetting | null): any;
