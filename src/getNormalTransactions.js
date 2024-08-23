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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactions = getTransactions;
const axios_1 = __importDefault(require("axios"));
function getTransactions(url_1, address_1) {
    return __awaiter(this, arguments, void 0, function* (url, address, startblock = 0, endblock = 99999999, page = 1, offset = 1000, sort = 'asc') {
        try {
            const response = yield axios_1.default.get(url, {
                params: {
                    module: 'account',
                    action: 'txlist',
                    address: address,
                    startblock: startblock,
                    endblock: endblock,
                    page: page,
                    offset: offset,
                    sort: sort,
                    apikey: process.env.EXPLORER_API_KEY
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Error fetching transactions:', error);
            throw error;
        }
    });
}
