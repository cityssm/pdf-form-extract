# PDF Form Extract

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/pdf-form-extract)](https://www.npmjs.com/package/@cityssm/pdf-form-extract)
[![Codacy grade](https://img.shields.io/codacy/grade/233ab487462d4133aa5313fa1a61660b)](https://app.codacy.com/gh/cityssm/pdf-form-extract/dashboard)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/cityssm/pdf-form-extract)](https://codeclimate.com/github/cityssm/pdf-form-extract)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/cityssm/pdf-form-extract)](https://codeclimate.com/github/cityssm/pdf-form-extract)
[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/cityssm/pdf-form-extract/coverage.yml)](https://github.com/cityssm/pdf-form-extract/actions/workflows/coverage.yml)
[![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/cityssm/pdf-form-extract)](https://app.snyk.io/org/cityssm/project/78ebff99-06fc-4153-a2c8-ccededba162e)

Extracts PDF form fields into a Javascript object.

## Installation

    npm install @cityssm/pdf-form-extract

## Usage

![PDF Screenshot](test/testForm.png)

```javascript
import extractFormFields from "@cityssm/pdf-form-extract"

const data = await extractFormFields('test/testForm.pdf')
console.log(data)

const dataWithOptions = await extractFormFields('test/testForm.pdf', { useFieldName: true })
```

```json
{
  "Contractor Firm Name": "The City of Sault Ste. Marie",
  "Address": "https://github.com/cityssm/pdf-form-extract",
  "Contractor Representative Print Name": "Dan Gowans",
  "Date": "2023-01-13"
}
```

### Optional Options

**useFieldName**<br />
_Default = false_<br />
Uses the field name (provided by the Form API) as the Object key
instead of the field key.

## Notes

For the best results, the form fields in the PDF should be properly labelled.
