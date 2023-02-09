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
 * @interface PortConjugationRequest
 */
export interface PortConjugationRequest {
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    aliasIds?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof PortConjugationRequest
     */
    conjugatedPortDefinition?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof PortConjugationRequest
     */
    conjugatedType?: Identified;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    declaredName?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    declaredShortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    documentation?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    elementId?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    isImplied?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    isImpliedIncluded?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    isLibraryElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    name?: any | null;
    /**
     *
     * @type {Identified}
     * @memberof PortConjugationRequest
     */
    originalPortDefinition?: Identified;
    /**
     *
     * @type {Identified}
     * @memberof PortConjugationRequest
     */
    originalType?: Identified;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    ownedAnnotation?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    ownedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    ownedRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    ownedRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    owner?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    owningMembership?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    owningNamespace?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    owningRelatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    owningRelationship?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    owningType?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    qualifiedName?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    relatedElement?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    shortName?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    source?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    target?: any | null;
    /**
     *
     * @type {any}
     * @memberof PortConjugationRequest
     */
    textualRepresentation?: any | null;
}
/**
 * Check if a given object implements the PortConjugationRequest interface.
 */
export declare function instanceOfPortConjugationRequest(value: object): boolean;
export declare function PortConjugationRequestFromJSON(json: any): PortConjugationRequest;
export declare function PortConjugationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PortConjugationRequest;
export declare function PortConjugationRequestToJSON(value?: PortConjugationRequest | null): any;
