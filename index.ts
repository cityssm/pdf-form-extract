import pdfJS from 'pdfjs-dist/legacy/build/pdf.js'

interface PdfFieldObjects {
  [field: string]: {
    name: string
    value: string
    [property: string]: unknown
  }[]
}

async function getPdfFieldObjects(sourcePDF: string): Promise<PdfFieldObjects> {
  const pdfDocument = await pdfJS.getDocument(sourcePDF).promise
  const pdfFields = (await pdfDocument.getFieldObjects()) as PdfFieldObjects
  return pdfFields
}

export async function extractFormFields(
  sourcePDF: string
): Promise<Record<string, string>> {
  const fieldObjects = await getPdfFieldObjects(sourcePDF)

  const fields: Record<string, string> = {}

  for (const fieldObject of Object.values(fieldObjects)) {
    fields[fieldObject[0].name] = fieldObject[0].value
  }

  return fields
}

export default extractFormFields
