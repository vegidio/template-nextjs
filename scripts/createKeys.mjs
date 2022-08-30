import * as jose from 'jose';

const { privateKey, publicKey } = await jose.generateKeyPair('ES256');
const exportedPrivate = await jose.exportPKCS8(privateKey);
const exportedPublic = await jose.exportSPKI(publicKey);

console.log(`PRIVATE KEY:\n\n${exportedPrivate}`);
console.log(`PUBLIC KEY:\n\n${exportedPublic}`);
