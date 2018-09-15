"use strict";
/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2017 NEM
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
exports.__esModule = true;
var Node_1 = require("./Node");
/**
 * A NodeCollection object holds arrays of nodes with different statuses.
 */
var NisNodeInfo = /** @class */ (function () {
    /**
     * @internal
     * @param node
     * @param nisInfo
     */
    function NisNodeInfo(node, nisInfo) {
        this.node = node;
        this.nisInfo = nisInfo;
    }
    /**
     * @internal
     * @param dto
     * @returns {NisNodeInfo}
     */
    NisNodeInfo.createFromNisNodeInfoDTO = function (dto) {
        return new NisNodeInfo(Node_1.Node.createFromNodeDTO(dto.node), ApplicationMetaData.createFromApplicationMetaDataDTO(dto.nisInfo));
    };
    return NisNodeInfo;
}());
exports.NisNodeInfo = NisNodeInfo;
/**
 * The application meta data object supplies additional information about the application running on a node.
 */
var ApplicationMetaData = /** @class */ (function () {
    /**
     * @internal
     * @param currentTime
     * @param application
     * @param startTime
     * @param version
     * @param signer
     */
    function ApplicationMetaData(currentTime, application, startTime, version, signer) {
        this.currentTime = currentTime;
        this.application = application;
        this.startTime = startTime;
        this.version = version;
        this.signer = signer;
    }
    /**
     * @internal
     * @param dto
     * @returns {ApplicationMetaData}
     */
    ApplicationMetaData.createFromApplicationMetaDataDTO = function (dto) {
        return new ApplicationMetaData(dto.currentTime, dto.application, dto.startTime, dto.version, dto.signer);
    };
    return ApplicationMetaData;
}());
exports.ApplicationMetaData = ApplicationMetaData;
