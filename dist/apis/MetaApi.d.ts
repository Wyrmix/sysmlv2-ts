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
import * as runtime from '../runtime';
import type { GetDatatypeById200Response, GetDatatypes200Response } from '../models';
export interface GetDatatypeByIdRequest {
    datatypeId: any;
}
export interface GetDatatypesRequest {
    pageAfter?: any;
    pageBefore?: any;
    pageSize?: any;
}
/**
 *
 */
export declare class MetaApi extends runtime.BaseAPI {
    /**
     * Get datatype by ID
     */
    getDatatypeByIdRaw(requestParameters: GetDatatypeByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDatatypeById200Response>>;
    /**
     * Get datatype by ID
     */
    getDatatypeById(requestParameters: GetDatatypeByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDatatypeById200Response>;
    /**
     * Get datatypes
     */
    getDatatypesRaw(requestParameters: GetDatatypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetDatatypes200Response>>;
    /**
     * Get datatypes
     */
    getDatatypes(requestParameters?: GetDatatypesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetDatatypes200Response>;
}