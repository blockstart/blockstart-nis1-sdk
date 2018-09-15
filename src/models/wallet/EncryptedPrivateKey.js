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
var nemSdk = require("nem-sdk");
/**
 * EncryptedPrivateKey model
 */
var EncryptedPrivateKey = /** @class */ (function () {
    /**
     * @internal
     * @param encryptedKey
     * @param iv
     */
    function EncryptedPrivateKey(encryptedKey, iv) {
        this.encryptedKey = encryptedKey;
        this.iv = iv;
    }
    /**
     * @internal
     * Decrypt an encrypted private key
     * @param password
     */
    EncryptedPrivateKey.prototype.decrypt = function (password) {
        var common = nemSdk["default"].model.objects.create("common")(password.value, "");
        var wallet = {
            encrypted: this.encryptedKey,
            iv: this.iv
        };
        nemSdk["default"].crypto.helpers.passwordToPrivatekey(common, wallet, "pass:bip32");
        return common.privateKey;
    };
    return EncryptedPrivateKey;
}());
exports.EncryptedPrivateKey = EncryptedPrivateKey;
