/* tslint:disable */
/* eslint-disable */
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
import type {
  Query,
  QueryRequest,
} from '../models';
import {
    QueryFromJSON,
    QueryToJSON,
    QueryRequestFromJSON,
    QueryRequestToJSON,
} from '../models';

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
export class QueryApi extends runtime.BaseAPI {

    /**
     * Delete query by project and ID
     */
    async deleteQueryByProjectAndIdRaw(requestParameters: DeleteQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Query>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling deleteQueryByProjectAndId.');
        }

        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling deleteQueryByProjectAndId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/queries/{queryId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"queryId"}}`, encodeURIComponent(String(requestParameters.queryId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryFromJSON(jsonValue));
    }

    /**
     * Delete query by project and ID
     */
    async deleteQueryByProjectAndId(requestParameters: DeleteQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Query> {
        const response = await this.deleteQueryByProjectAndIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get queries by project
     */
    async getQueriesByProjectRaw(requestParameters: GetQueriesByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getQueriesByProject.');
        }

        const queryParameters: any = {};

        if (requestParameters.pageAfter !== undefined) {
            queryParameters['page[after]'] = requestParameters.pageAfter;
        }

        if (requestParameters.pageBefore !== undefined) {
            queryParameters['page[before]'] = requestParameters.pageBefore;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/queries`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get queries by project
     */
    async getQueriesByProject(requestParameters: GetQueriesByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getQueriesByProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get query by project and ID
     */
    async getQueryByProjectAndIdRaw(requestParameters: GetQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Query>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getQueryByProjectAndId.');
        }

        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getQueryByProjectAndId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/queries/{queryId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"queryId"}}`, encodeURIComponent(String(requestParameters.queryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryFromJSON(jsonValue));
    }

    /**
     * Get query by project and ID
     */
    async getQueryByProjectAndId(requestParameters: GetQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Query> {
        const response = await this.getQueryByProjectAndIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get query results by project and query definition
     */
    async getQueryResultsByProjectIdQueryRaw(requestParameters: GetQueryResultsByProjectIdQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getQueryResultsByProjectIdQuery.');
        }

        if (requestParameters.queryRequest === null || requestParameters.queryRequest === undefined) {
            throw new runtime.RequiredError('queryRequest','Required parameter requestParameters.queryRequest was null or undefined when calling getQueryResultsByProjectIdQuery.');
        }

        const queryParameters: any = {};

        if (requestParameters.commitId !== undefined) {
            queryParameters['commitId'] = requestParameters.commitId;
        }

        if (requestParameters.pageAfter !== undefined) {
            queryParameters['page[after]'] = requestParameters.pageAfter;
        }

        if (requestParameters.pageBefore !== undefined) {
            queryParameters['page[before]'] = requestParameters.pageBefore;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectId}/query-results`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
            body: QueryRequestToJSON(requestParameters.queryRequest),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get query results by project and query definition
     */
    async getQueryResultsByProjectIdQuery(requestParameters: GetQueryResultsByProjectIdQueryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getQueryResultsByProjectIdQueryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get query results by project and query
     */
    async getQueryResultsByProjectIdQueryIdRaw(requestParameters: GetQueryResultsByProjectIdQueryIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getQueryResultsByProjectIdQueryId.');
        }

        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling getQueryResultsByProjectIdQueryId.');
        }

        const queryParameters: any = {};

        if (requestParameters.commitId !== undefined) {
            queryParameters['commitId'] = requestParameters.commitId;
        }

        if (requestParameters.pageAfter !== undefined) {
            queryParameters['page[after]'] = requestParameters.pageAfter;
        }

        if (requestParameters.pageBefore !== undefined) {
            queryParameters['page[before]'] = requestParameters.pageBefore;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/projects/{projectId}/queries/{queryId}/results`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"queryId"}}`, encodeURIComponent(String(requestParameters.queryId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * Get query results by project and query
     */
    async getQueryResultsByProjectIdQueryId(requestParameters: GetQueryResultsByProjectIdQueryIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getQueryResultsByProjectIdQueryIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * For compatibility with clients that don\'t support GET requests with a body
     * Get query results by project and query definition via POST
     */
    async getQueryResultsByProjectIdQueryPostRaw(requestParameters: GetQueryResultsByProjectIdQueryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<any>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling getQueryResultsByProjectIdQueryPost.');
        }

        if (requestParameters.queryRequest === null || requestParameters.queryRequest === undefined) {
            throw new runtime.RequiredError('queryRequest','Required parameter requestParameters.queryRequest was null or undefined when calling getQueryResultsByProjectIdQueryPost.');
        }

        const queryParameters: any = {};

        if (requestParameters.commitId !== undefined) {
            queryParameters['commitId'] = requestParameters.commitId;
        }

        if (requestParameters.pageAfter !== undefined) {
            queryParameters['page[after]'] = requestParameters.pageAfter;
        }

        if (requestParameters.pageBefore !== undefined) {
            queryParameters['page[before]'] = requestParameters.pageBefore;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['page[size]'] = requestParameters.pageSize;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectId}/query-results`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: QueryRequestToJSON(requestParameters.queryRequest),
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * For compatibility with clients that don\'t support GET requests with a body
     * Get query results by project and query definition via POST
     */
    async getQueryResultsByProjectIdQueryPost(requestParameters: GetQueryResultsByProjectIdQueryPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<any> {
        const response = await this.getQueryResultsByProjectIdQueryPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Create query by project
     */
    async postQueryByProjectRaw(requestParameters: PostQueryByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Query>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling postQueryByProject.');
        }

        if (requestParameters.queryRequest === null || requestParameters.queryRequest === undefined) {
            throw new runtime.RequiredError('queryRequest','Required parameter requestParameters.queryRequest was null or undefined when calling postQueryByProject.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectId}/queries`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: QueryRequestToJSON(requestParameters.queryRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryFromJSON(jsonValue));
    }

    /**
     * Create query by project
     */
    async postQueryByProject(requestParameters: PostQueryByProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Query> {
        const response = await this.postQueryByProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Update project by project and ID
     */
    async putQueryByProjectAndIdRaw(requestParameters: PutQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Query>> {
        if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
            throw new runtime.RequiredError('projectId','Required parameter requestParameters.projectId was null or undefined when calling putQueryByProjectAndId.');
        }

        if (requestParameters.queryId === null || requestParameters.queryId === undefined) {
            throw new runtime.RequiredError('queryId','Required parameter requestParameters.queryId was null or undefined when calling putQueryByProjectAndId.');
        }

        if (requestParameters.queryRequest === null || requestParameters.queryRequest === undefined) {
            throw new runtime.RequiredError('queryRequest','Required parameter requestParameters.queryRequest was null or undefined when calling putQueryByProjectAndId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/projects/{projectId}/queries/{queryId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"queryId"}}`, encodeURIComponent(String(requestParameters.queryId))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: QueryRequestToJSON(requestParameters.queryRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => QueryFromJSON(jsonValue));
    }

    /**
     * Update project by project and ID
     */
    async putQueryByProjectAndId(requestParameters: PutQueryByProjectAndIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Query> {
        const response = await this.putQueryByProjectAndIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
