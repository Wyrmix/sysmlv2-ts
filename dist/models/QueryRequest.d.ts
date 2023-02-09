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
 * @interface QueryRequest
 */
export interface QueryRequest {
    /**
     *
     * @type {any}
     * @memberof QueryRequest
     */
    atType?: any | null;
    /**
     *
     * @type {any}
     * @memberof QueryRequest
     */
    select?: any | null;
    /**
     *
     * @type {any}
     * @memberof QueryRequest
     */
    where?: any | null;
}
/**
 * Check if a given object implements the QueryRequest interface.
 */
export declare function instanceOfQueryRequest(value: object): boolean;
export declare function QueryRequestFromJSON(json: any): QueryRequest;
export declare function QueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): QueryRequest;
export declare function QueryRequestToJSON(value?: QueryRequest | null): any;
