"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAddressAndZip = void 0;
function extractAddressAndZip(address1) {
    const parts1 = address1.split(/[\s,-]+/);
    let streetAddress1 = parts1.slice(0, 3).join(' ');
    let postalCode1 = "";
    for (let i = parts1.length - 1; i >= 0; i--) {
        if (/^\d+$/.test(parts1[i])) {
            postalCode1 = parts1[i];
            break;
        }
    }
    if (postalCode1 !== null) {
        streetAddress1 = streetAddress1.replace(/\bStreet\b/, 'St');
    }
    const addressInfo1 = { streetAddress: streetAddress1, postalCode: postalCode1 };
    const addressParts1 = addressInfo1.streetAddress.split(' ');
    const street1 = addressParts1.slice(1).join(' ').toUpperCase();
    const city1 = addressParts1[addressParts1.length - 1];
    const state1 = addressParts1[addressParts1.length - 2];
    const formattedAddress1 = addressParts1[0] + " " + street1 + ', ' + city1 + ', ' + state1 + " " + addressInfo1.postalCode;
    return [formattedAddress1, addressInfo1.streetAddress, addressInfo1.postalCode];
}
exports.extractAddressAndZip = extractAddressAndZip;
