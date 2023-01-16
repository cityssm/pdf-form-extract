import type * as types from './types';
export declare function extractFormFields(sourcePDF: string, extractOptions?: types.ExtractFormFieldOptions): Promise<Record<string, string>>;
export default extractFormFields;
