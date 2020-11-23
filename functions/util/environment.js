const {
    COLLECTION_ENVIRONMENT,
    FREFIX_ROOT_DOCUMENT
} = require('./constant.js');
const { environment } = require('./index.js');

const getRootCollectionPath = function (environment) {
    const definedCollectionName = COLLECTION_ENVIRONMENT[environment];
    const collectionName = definedCollectionName ? definedCollectionName : COLLECTION_ENVIRONMENT.local;

    const definedDocumentPath = FREFIX_ROOT_DOCUMENT[environment];
    const documentPath = definedDocumentPath ? definedDocumentPath : FREFIX_ROOT_DOCUMENT.local;
    return `${definedDocumentPath}/${collectionName}`
};

module.exports = {
    getRootCollectionPath
};