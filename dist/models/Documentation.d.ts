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
 * @interface Documentation
 */
export interface Documentation {
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    aliasIds: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    annotatedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    annotation: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    body: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    declaredName: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    declaredShortName: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    documentation: any | null;
    /**
     *
     * @type {Identified}
     * @memberof Documentation
     */
    documentedElement: Identified;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    elementId: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    isImpliedIncluded: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    isLibraryElement: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    locale: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    name: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    ownedAnnotation: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    ownedElement: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    ownedRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    owner: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    owningMembership: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    owningNamespace: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    owningRelationship: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    qualifiedName: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    shortName: any | null;
    /**
     *
     * @type {any}
     * @memberof Documentation
     */
    textualRepresentation: any | null;
}
/**
 * Check if a given object implements the Documentation interface.
 */
export declare function instanceOfDocumentation(value: object): boolean;
export declare function DocumentationFromJSON(json: any): Documentation;
export declare function DocumentationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Documentation;
export declare function DocumentationToJSON(value?: Documentation | null): any;