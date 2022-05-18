# Pure React Form

This form was developed applying validation rules and good practices using only React, HTML and CSS, not implementing any fancy library, just pure and simple react.

Libraries are very useful but it’s quite important to learn to code without them first, so then you can comprehend how they even work.

### React Setup

- npx create-react-app

### What do we need to implement in a form?

- Autocomplete
- Info about what kind of input and how this input is expected to be formatted
- Error message when the input is in a wrong format
- Error message to requested inputs that had not been filled

### Validate with HTML and CSS

- Use required attribute for essential inputs
- Use pattern attribute to determine input format (regex code)
- Validation error messages should appear only when attempting to fill an input, and then clicking anywhere outside the input without properly filling it