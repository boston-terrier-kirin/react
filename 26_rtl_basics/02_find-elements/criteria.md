# Querying for Elements With Different Criteria

React Testing Library provides many different query functions. Each begins with a name like `getBy`, `findBy`, etc. The names also have common endings. The different name endings indicate how the query for an element will be performed.

| End of Function Name | Search Criteria                                                    |
| -------------------- | ------------------------------------------------------------------ |
| ByRole               | Finds elements based on their implicit or explicit ARIA role       |
| ByLabelText          | Find form elements based upon the text their paired labels contain |
| ByPlaceholderText    | Find form elements based upon their placeholder text               |
| ByText               | Find elements based upon the text they contain                     |
| ByDisplayValue       | Find elements based upon their current value                       |
| ByAltText            | Find elements based upon their `alt` attribute                     |
| ByTitle              | Find elements based upon their `title` attribute                   |
| ByTestId             | Find elements based upon their `data-testid` attribute             |

## When to Use Each

Always prefer using query functions ending with `ByRole`. Only use others if `ByRole` is not an option.
