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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Transaction_1 = require("./Transaction");
var TransactionTypes_1 = require("./TransactionTypes");
/**
 * The mode. Possible values are:
 * 1: Activate remote harvesting.
 * 2: Deactivate remote harvesting.
 */
var ImportanceMode;
(function (ImportanceMode) {
    ImportanceMode[ImportanceMode["Activate"] = 1] = "Activate";
    ImportanceMode[ImportanceMode["Deactivate"] = 2] = "Deactivate";
})(ImportanceMode = exports.ImportanceMode || (exports.ImportanceMode = {}));
/**
 * NIS has the ability to transfer the importance of one account to another account for harvesting.
 * The account receiving the importance is called the remote account.
 * Importance transfer transactions are part of the secure harvesting feature of NEM.
 * Once an importance transaction has been included in a block it needs 6 hours to become active.
 */
var ImportanceTransferTransaction = /** @class */ (function (_super) {
    __extends(ImportanceTransferTransaction, _super);
    /**
     * @internal
     * @param timeWindow
     * @param version
     * @param mode
     * @param remoteAccount
     * @param fee
     * @param signature
     * @param sender
     * @param transactionInfo
     */
    function ImportanceTransferTransaction(timeWindow, version, mode, remoteAccount, fee, signature, sender, transactionInfo) {
        var _this = _super.call(this, TransactionTypes_1.TransactionTypes.IMPORTANCE_TRANSFER, version, timeWindow, signature, sender, transactionInfo) || this;
        _this.mode = mode;
        _this.remoteAccount = remoteAccount;
        _this.fee = fee;
        return _this;
    }
    /**
     * Create DTO of ImportanceTransferTransaction
     */
    ImportanceTransferTransaction.prototype.toDTO = function () {
        var version = this.networkVersion ? this.networkVersion : this.version;
        return this.serializeDTO({
            signer: this.signer ? this.signer.publicKey : undefined,
            deadline: this.timeWindow.deadlineToDTO(),
            timeStamp: this.timeWindow.timeStampToDTO(),
            type: this.type,
            fee: this.fee,
            signature: this.signature,
            version: version,
            remoteAccount: this.remoteAccount.publicKey,
            mode: this.mode
        });
    };
    /**
     * Create a ImportanceTransferTransaction object
     * @param timeWindow
     * @param mode
     * @param remoteAccount
     * @returns {ImportanceTransferTransaction}
     */
    ImportanceTransferTransaction.create = function (timeWindow, mode, remoteAccount) {
        var fee = Math.floor(3.0 * 0.05 * 1000000.0);
        return new ImportanceTransferTransaction(timeWindow, 1, mode, remoteAccount, fee);
    };
    return ImportanceTransferTransaction;
}(Transaction_1.Transaction));
exports.ImportanceTransferTransaction = ImportanceTransferTransaction;
