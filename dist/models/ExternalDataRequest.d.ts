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
/**
 *
 * @export
 * @interface ExternalDataRequest
 */
export interface ExternalDataRequest {
    /**
     *
     * @type {any}
     * @memberof ExternalDataRequest
     */
    id?: any | null;
    /**
     *
     * @type {any}
     * @memberof ExternalDataRequest
     */
    atType: any | null;
    /**
     *
     * @type {any}
     * @memberof ExternalDataRequest
     */
    resourceIdentifier?: any | null;
}
/**
 * Check if a given object implements the ExternalDataRequest interface.
 */
export declare function instanceOfExternalDataRequest(value: object): boolean;
export declare function ExternalDataRequestFromJSON(json: any): ExternalDataRequest;
export declare function ExternalDataRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExternalDataRequest;
export declare function ExternalDataRequestToJSON(value?: ExternalDataRequest | null): any;