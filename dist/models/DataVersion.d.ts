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
import type { DataIdentity } from './DataIdentity';
/**
 *
 * @export
 * @interface DataVersion
 */
export interface DataVersion {
    /**
     *
     * @type {any}
     * @memberof DataVersion
     */
    id: any | null;
    /**
     *
     * @type {any}
     * @memberof DataVersion
     */
    atType: any | null;
    /**
     *
     * @type {DataIdentity}
     * @memberof DataVersion
     */
    identity: DataIdentity;
    /**
     *
     * @type {any}
     * @memberof DataVersion
     */
    payload: any | null;
}
/**
 * Check if a given object implements the DataVersion interface.
 */
export declare function instanceOfDataVersion(value: object): boolean;
export declare function DataVersionFromJSON(json: any): DataVersion;
export declare function DataVersionFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataVersion;
export declare function DataVersionToJSON(value?: DataVersion | null): any;
