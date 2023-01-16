interface PdfFieldObject {
  name: string
  value: string
  [property: string]: unknown
}

export type PdfFieldObjects = Record<string, PdfFieldObject[]>

export interface ExtractFormFieldOptions {
  useFieldName?: boolean
}
