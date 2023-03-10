"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class ProjectApi extends runtime.BaseAPI {
    /**
     * Delete project by ID
     */
    deleteProjectByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling deleteProjectById.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ProjectFromJSON)(jsonValue));
        });
    }
    /**
     * Delete project by ID
     */
    deleteProjectById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteProjectByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get project by ID
     */
    getProjectByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling getProjectById.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ProjectFromJSON)(jsonValue));
        });
    }
    /**
     * Get project by ID
     */
    getProjectById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProjectByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get projects
     */
    getProjectsRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            if (requestParameters.pageAfter !== undefined) {
                queryParameters['page[after]'] = requestParameters.pageAfter;
            }
            if (requestParameters.pageBefore !== undefined) {
                queryParameters['page[before]'] = requestParameters.pageBefore;
            }
            if (requestParameters.pageSize !== undefined) {
                queryParameters['page[size]'] = requestParameters.pageSize;
            }
            const headerParameters = {};
            const response = yield this.request({
                path: `/projects`,
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.TextApiResponse(response);
        });
    }
    /**
     * Get projects
     */
    getProjects(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getProjectsRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create project
     */
    postProjectRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/projects`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.ProjectRequestToJSON)(requestParameters.projectRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ProjectFromJSON)(jsonValue));
        });
    }
    /**
     * Create project
     */
    postProject(requestParameters = {}, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postProjectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Update project by ID
     */
    putProjectByIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling putProjectById.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
                method: 'PUT',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.ProjectRequestToJSON)(requestParameters.projectRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ProjectFromJSON)(jsonValue));
        });
    }
    /**
     * Update project by ID
     */
    putProjectById(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.putProjectByIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.ProjectApi = ProjectApi;
