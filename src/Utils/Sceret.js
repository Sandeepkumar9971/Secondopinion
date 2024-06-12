const crypto = require('crypto');
const secretKey = '@@@((**##)))^^^^##%%#^*6^&@Y&#@*#@&#';
export const decryptData = (data) => {
    try {
        const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
        let decryptedData = decipher.update(data, 'hex', 'utf-8');
        decryptedData += decipher.final('utf-8');
        return decryptedData;
    } catch (error) {
        console.error('Error decrypting data:', error);
        return null; // Or handle the error appropriately
    }
};
export const encryptData = (data) => { 
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    let encryptedData = cipher.update(data, 'utf-8', 'hex');
    encryptedData += cipher.final('hex');
    return encryptedData;
};