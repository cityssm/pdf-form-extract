import pdfJS from 'pdfjs-dist/legacy/build/pdf.js';
const DEFAULT_OPTIONS = Object.freeze({
    useFieldName: false
});
async function getPdfFieldObjects(sourcePDF) {
    const pdfDocument = await pdfJS.getDocument(sourcePDF).promise;
    const pdfFields = (await pdfDocument.getFieldObjects());
    return pdfFields;
}
export async function extractFormFields(sourcePDF, extractOptions) {
    const options = Object.assign({}, DEFAULT_OPTIONS, extractOptions);
    const fieldObjects = await getPdfFieldObjects(sourcePDF);
    const fields = {};
    for (const [fieldKey, fieldObject] of Object.entries(fieldObjects)) {
        const key = options.useFieldName ? fieldObject[0].name : fieldKey;
        fields[key] = fieldObject[0].value;
    }
    return fields;
}
export default extractFormFields;
