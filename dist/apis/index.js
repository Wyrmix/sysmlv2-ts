"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable */
/* eslint-disable */
__exportStar(require("./BranchApi"), exports);
__exportStar(require("./CommitApi"), exports);
__exportStar(require("./DiffMergeApi"), exports);
__exportStar(require("./ElementApi"), exports);
__exportStar(require("./MetaApi"), exports);
__exportStar(require("./ProjectApi"), exports);
__exportStar(require("./QueryApi"), exports);
__exportStar(require("./RelationshipApi"), exports);
__exportStar(require("./TagApi"), exports);
