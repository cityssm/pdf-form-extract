import pdfJS from 'pdfjs-dist/legacy/build/pdf.js';
async function getPdfFieldObjects(sourcePDF) {
    const pdfDocument = await pdfJS.getDocument(sourcePDF).promise;
    const pdfFields = (await pdfDocument.getFieldObjects());
    return pdfFields;
}
export async function extractFormFields(sourcePDF) {
    const fieldObjects = await getPdfFieldObjects(sourcePDF);
    const fields = {};
    for (const fieldObject of Object.values(fieldObjects)) {
        fields[fieldObject[0].name] = fieldObject[0].value;
    }
    return fields;
}
export default extractFormFields;
