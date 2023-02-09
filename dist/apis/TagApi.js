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
exports.TagApi = void 0;
const runtime = require("../runtime");
const models_1 = require("../models");
/**
 *
 */
class TagApi extends runtime.BaseAPI {
    /**
     * Delete tag by project and ID
     */
    deleteTagByProjectAndIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling deleteTagByProjectAndId.');
            }
            if (requestParameters.tagId === null || requestParameters.tagId === undefined) {
                throw new runtime.RequiredError('tagId', 'Required parameter requestParameters.tagId was null or undefined when calling deleteTagByProjectAndId.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/projects/{projectId}/tags/{tagId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"tagId"}}`, encodeURIComponent(String(requestParameters.tagId))),
                method: 'DELETE',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TagFromJSON)(jsonValue));
        });
    }
    /**
     * Delete tag by project and ID
     */
    deleteTagByProjectAndId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.deleteTagByProjectAndIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get tag by project and ID
     */
    getTagByProjectAndIdRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling getTagByProjectAndId.');
            }
            if (requestParameters.tagId === null || requestParameters.tagId === undefined) {
                throw new runtime.RequiredError('tagId', 'Required parameter requestParameters.tagId was null or undefined when calling getTagByProjectAndId.');
            }
            const queryParameters = {};
            const headerParameters = {};
            const response = yield this.request({
                path: `/projects/{projectId}/tags/{tagId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))).replace(`{${"tagId"}}`, encodeURIComponent(String(requestParameters.tagId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TagFromJSON)(jsonValue));
        });
    }
    /**
     * Get tag by project and ID
     */
    getTagByProjectAndId(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTagByProjectAndIdRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Get tags by project
     */
    getTagsByProjectRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling getTagsByProject.');
            }
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
                path: `/projects/{projectId}/tags`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
                method: 'GET',
                headers: headerParameters,
                query: queryParameters,
            }, initOverrides);
            return new runtime.TextApiResponse(response);
        });
    }
    /**
     * Get tags by project
     */
    getTagsByProject(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.getTagsByProjectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
    /**
     * Create tag by project
     */
    postTagByProjectRaw(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            if (requestParameters.projectId === null || requestParameters.projectId === undefined) {
                throw new runtime.RequiredError('projectId', 'Required parameter requestParameters.projectId was null or undefined when calling postTagByProject.');
            }
            if (requestParameters.tagRequest === null || requestParameters.tagRequest === undefined) {
                throw new runtime.RequiredError('tagRequest', 'Required parameter requestParameters.tagRequest was null or undefined when calling postTagByProject.');
            }
            const queryParameters = {};
            const headerParameters = {};
            headerParameters['Content-Type'] = 'application/json';
            const response = yield this.request({
                path: `/projects/{projectId}/tags`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters.projectId))),
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: (0, models_1.TagRequestToJSON)(requestParameters.tagRequest),
            }, initOverrides);
            return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.TagFromJSON)(jsonValue));
        });
    }
    /**
     * Create tag by project
     */
    postTagByProject(requestParameters, initOverrides) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this.postTagByProjectRaw(requestParameters, initOverrides);
            return yield response.value();
        });
    }
}
exports.TagApi = TagApi;