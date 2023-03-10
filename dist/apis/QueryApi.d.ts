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
import type { Query, QueryRequest } from '../models';
export interface DeleteQueryByProjectAndIdRequest {
    projectId: any;
    queryId: any;
}
export interface GetQueriesByProjectRequest {
    projectId: any;
    pageAfter?: any;
    pageBefore?: any;
    pageSize?: any;
}
export interface GetQueryByProjectAndIdRequest {
    projectId: any;
    queryId: any;
}
export interface GetQueryResultsByProjectIdQueryRequest {
    projectId: any;
    queryRequest: QueryRequest;
    commitId?: any;
    pageAfter?: any;
    pageBefore?: any;
    pageSize?: any;
}
export interface GetQueryResultsByProjectIdQueryIdRequest {
    projectId: any;
    queryId: any;
    commitId?: any;
    pageAfter?: any;
    pageBefore?: any;
    pageSize?: any;
}
export interface GetQueryResultsByProjectIdQueryPostRequest {
    projectId: any;
    queryRequest: QueryRequest;
    commitId?: any;
    pageAfter?: any;
    pageBefore?: any;
    pageSize?: any;
}
export interface PostQueryByProjectRequest {
    projectId: any;
    queryRequest: QueryRequest;
}
export interface PutQueryByProjectAndIdRequest {
    projectId: any;
    queryId: any;
    queryRequest: QueryRequest;
}
/**
 *
 */
export declare class QueryApi extends runtime.BaseAPI {
    /**
     * Delete query by project and ID
     */
    deleteQueryByProjectAndIdRaw(requestParameters: DeleteQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Query>>;
    /**
     * Delete query by project and ID
     */
    deleteQueryByProjectAndId(requestParameters: DeleteQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Query>;
    /**
     * Get queries by project
     */
    getQueriesByProjectRaw(requestParameters: GetQueriesByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * Get queries by project
     */
    getQueriesByProject(requestParameters: GetQueriesByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
    /**
     * Get query by project and ID
     */
    getQueryByProjectAndIdRaw(requestParameters: GetQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Query>>;
    /**
     * Get query by project and ID
     */
    getQueryByProjectAndId(requestParameters: GetQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Query>;
    /**
     * Get query results by project and query definition
     */
    getQueryResultsByProjectIdQueryRaw(requestParameters: GetQueryResultsByProjectIdQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * Get query results by project and query definition
     */
    getQueryResultsByProjectIdQuery(requestParameters: GetQueryResultsByProjectIdQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
    /**
     * Get query results by project and query
     */
    getQueryResultsByProjectIdQueryIdRaw(requestParameters: GetQueryResultsByProjectIdQueryIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * Get query results by project and query
     */
    getQueryResultsByProjectIdQueryId(requestParameters: GetQueryResultsByProjectIdQueryIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
    /**
     * For compatibility with clients that don\'t support GET requests with a body
     * Get query results by project and query definition via POST
     */
    getQueryResultsByProjectIdQueryPostRaw(requestParameters: GetQueryResultsByProjectIdQueryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>>;
    /**
     * For compatibility with clients that don\'t support GET requests with a body
     * Get query results by project and query definition via POST
     */
    getQueryResultsByProjectIdQueryPost(requestParameters: GetQueryResultsByProjectIdQueryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any>;
    /**
     * Create query by project
     */
    postQueryByProjectRaw(requestParameters: PostQueryByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Query>>;
    /**
     * Create query by project
     */
    postQueryByProject(requestParameters: PostQueryByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Query>;
    /**
     * Update project by project and ID
     */
    putQueryByProjectAndIdRaw(requestParameters: PutQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Query>>;
    /**
     * Update project by project and ID
     */
    putQueryByProjectAndId(requestParameters: PutQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Query>;
}
