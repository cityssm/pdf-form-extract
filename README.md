# PDF Form Extract

Extracts PDF form fields into a Javascript object.

## Installation

    npm install @cityssm/pdf-form-extract

## Usage

![PDF Screenshot](test/testForm.png)

```javascript
import extractFormFields from "@cityssm/pdf-form-extract"

const data = await extractFormFields('test/testForm.pdf')

console.log(data)
```

```json
{
  "Contractor Firm Name": "The City of Sault Ste. Marie",
  "Address": "https://github.com/cityssm/pdf-form-extract",
  "Contractor Representative Print Name": "Dan Gowans",
  "Date": "2023-01-13"
}
```

## Notes

For the best results, the form fields in the PDF should be properly labelled.
