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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionsPageData = getTransactionsPageData;
const getNormalTransactions_1 = require("./getNormalTransactions");
const decodeSendRequest_1 = require("./decodeSendRequest");
// // Example usage:
function fetchAndStoreTransactions(url, address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield (0, getNormalTransactions_1.getTransactions)(url, address);
            return data; // You can return the data if needed
        }
        catch (error) {
            console.error(error); // This will handle any errors
        }
    });
}
function getTransactionsPageData(url, address) {
    return __awaiter(this, void 0, void 0, function* () {
        let finalData = null;
        yield fetchAndStoreTransactions(url, address).then((transactions) => __awaiter(this, void 0, void 0, function* () {
            finalData = yield (0, decodeSendRequest_1.decodeSendRequests)(transactions);
        }));
        return finalData;
    });
}
