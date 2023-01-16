import pdfJS from 'pdfjs-dist/legacy/build/pdf.js'

import type * as types from './types'

const DEFAULT_OPTIONS: types.ExtractFormFieldOptions = Object.freeze({
  useFieldName: false
})

async function getPdfFieldObjects(
  sourcePDF: string
): Promise<types.PdfFieldObjects> {
  const pdfDocument = await pdfJS.getDocument(sourcePDF).promise
  const pdfFields =
    (await pdfDocument.getFieldObjects()) as types.PdfFieldObjects
  return pdfFields
}

export async function extractFormFields(
  sourcePDF: string,
  extractOptions?: types.ExtractFormFieldOptions
): Promise<Record<string, string>> {
  const options = Object.assign({}, DEFAULT_OPTIONS, extractOptions)

  const fieldObjects = await getPdfFieldObjects(sourcePDF)

  const fields: Record<string, string> = {}

  for (const [fieldKey, fieldObject] of Object.entries(fieldObjects)) {
    const key = options.useFieldName! ? fieldObject[0].name : fieldKey

    fields[key] = fieldObject[0].value
  }

  return fields
}

export default extractFormFields
