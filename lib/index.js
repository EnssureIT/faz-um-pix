"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pix = void 0;
var crcTable_1 = require("./crcTable");
var qrcode = require("yaqrcode");
/**
 *
 * @param {string} merchant_account
 * @param {string} merchant_name
 * @param {string} merchant_city
 * @param {number} transaction_amount
 * @param {string} info_adic
 * @param {boolean} return_qrcode
 */
function Pix(merchant_account, merchant_name, merchant_city, transaction_amount, info_adic, return_qrcode) {
    if (return_qrcode === void 0) { return_qrcode = false; }
    return __awaiter(this, void 0, void 0, function () {
        var format, gui, chave, info, account, category, currency, amount, country, name, city, additional, crc16, payload, crc, j, i, c, crcCalc, qrCodePix;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    format = "000201";
                    gui = "0014br.gov.bcb.pix";
                    chave = "01" +
                        (merchant_account.length < 10
                            ? "0" + merchant_account.length
                            : merchant_account.length) +
                        merchant_account;
                    info = info_adic.length > 0
                        ? "02" +
                            (info_adic.length < 10 ? "0" + info_adic.length : info_adic.length) +
                            (info_adic.length > 50 ? info_adic.substring(0, 50) : info_adic)
                        : "";
                    account = "26" + (gui.length + chave.length + info.length) + gui + chave + info;
                    category = "52040000";
                    currency = "5303986";
                    amount = ("" + transaction_amount).length > 0
                        ? "54" +
                            (("" + transaction_amount).length < 10
                                ? "0" + ("" + transaction_amount).length
                                : ("" + transaction_amount).length) +
                            transaction_amount
                        : "";
                    country = "5802BR";
                    name = merchant_name.length > 25 ? merchant_name.substring(0, 25) : merchant_name;
                    name = "59" + (name.length < 10 ? "0" + name.length : name.length) + name; // Merchant Name
                    city = merchant_city.length > 25 ? merchant_city.substring(0, 25) : merchant_city;
                    city = "60" + (city.length < 10 ? "0" + city.length : city.length) + city; // Merchant City
                    additional = "62070503***";
                    crc16 = "6304";
                    payload = format +
                        account +
                        category +
                        currency +
                        amount +
                        country +
                        name +
                        city +
                        additional +
                        crc16;
                    crc = 0xffff;
                    for (i = 0; i < payload.length; i++) {
                        c = payload.charCodeAt(i);
                        if (c > 255)
                            throw new RangeError();
                        j = (c ^ (crc >> 8)) & 0xff;
                        crc = crcTable_1.crcTable[j] ^ (crc << 8);
                    }
                    crcCalc = ((crc ^ 0) & 0xffff).toString(16).toUpperCase();
                    qrCodePix = payload +
                        (crcCalc.length == 4
                            ? ""
                            : crcCalc.length == 3
                                ? "0"
                                : crcCalc.length == 2
                                    ? "00"
                                    : "000") +
                        crcCalc;
                    if (!return_qrcode) return [3 /*break*/, 2];
                    return [4 /*yield*/, generateQrCode(qrCodePix)];
                case 1:
                    qrCodePix = _a.sent();
                    _a.label = 2;
                case 2: return [2 /*return*/, qrCodePix];
            }
        });
    });
}
exports.Pix = Pix;
/**
 *
 * @param {string} payload
 */
function generateQrCode(payload) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, qrcode(payload, {
                    size: 400
                })];
        });
    });
}
