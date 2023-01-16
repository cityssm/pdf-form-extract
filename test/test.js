import * as assert from 'node:assert';
import { extractFormFields } from '../index.js';
describe('pdf-form-extract', () => {
    it('Extracts form fields', async () => {
        const data = await extractFormFields('test/testForm.pdf');
        console.log(data);
        assert.strictEqual(Object.keys(data).length, 6);
    });
    it('Extracts form fields with options', async () => {
        const data = await extractFormFields('test/testForm.pdf', {
            useFieldName: true
        });
        console.log(data);
        assert.strictEqual(Object.keys(data).length, 6);
    });
});
