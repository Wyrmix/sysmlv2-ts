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
 * @interface PortConjugation
 */
export interface PortConjugation {
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    aliasIds: any | null;
    /**
     *
     * @type {Identified}
     * @memberof PortConjugation
     */
    conjugatedPortDefinition: Identified;
    /**
     *
     * @type {Identified}
     * @memberof PortConjugation
     */
    conjugatedType: Identified;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    documentation: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    elementId: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    isImplied: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    name: any | null;
    /**
     *
     * @type {Identified}
     * @memberof PortConjugation
     */
    originalPortDefinition: Identified;
    /**
     *
     * @type {Identified}
     * @memberof PortConjugation
     */
    originalType: Identified;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    ownedRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    owningRelatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    owningType: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    qualifiedName: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    relatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    source: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    target: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugation
     */
    textualRepresentation: any | null;
}
/**
 * Check if a given object implements the PortConjugation interface.
 */
export declare function instanceOfPortConjugation(value: object): boolean;
export declare function PortConjugationFromJSON(json: any): PortConjugation;
export declare function PortConjugationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortConjugation;
export declare function PortConjugationToJSON(value?: PortConjugation | null): any;
