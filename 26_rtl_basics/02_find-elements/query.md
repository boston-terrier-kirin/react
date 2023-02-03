# Query Functions

All query functions are accessed through the `screen` object in a test. These query functions _always_ begin with one of the following names: `getBy`, `getAllBy`, `queryBy`, `queryAllBy`, `findBy`, `findAllBy`.

| Start of Function Name | Examples                             |
| ---------------------- | ------------------------------------ |
| getBy                  | getByRole, getByText                 |
| getAllBy               | getAllByText, getByDisplayValue      |
| queryBy                | queryByDisplayValue, queryByTitle    |
| queryAllBy             | queryAllByTitle, queryAllByText      |
| findBy                 | findByRole, findBytext               |
| findAllBy              | findAllByText, findAllByDisplayValue |

These names indicate the following:

1. Whether the function will return an element or an array of elements
2. What happens if the function finds 0, 1, or > 1 of the targeted element
3. Whether the function runs instantly (synchronously) or looks for an element over a span of time (asynchronously)

### Looking for a Single Element?

| Name    | 0 matches | 1 match | > 1 match | Notes                                          |
| ------- | --------- | ------- | --------- | ---------------------------------------------- |
| getBy   | Throw     | Element | Throw     |                                                |
| queryBy | null      | Element | Throw     |                                                |
| findBy  | Throw     | Element | Throw     | Looks for an element over the span of 1 second |

### Looking for Multiple Elements?

| Name       | 0 matches | 1 match   | > 1 match | Notes                                        |
| ---------- | --------- | --------- | --------- | -------------------------------------------- |
| getAllBy   | Throw     | []Element | []Element |                                              |
| queryAllBy | [ ]       | []Element | []Element |                                              |
| findAllBy  | Throw     | []Element | []Element | Looks for elements over the span of 1 second |

### When to use each

| Goal of test                           | Use                 |
| -------------------------------------- | ------------------- |
| Prove an element exists                | getBy, getAllBy     |
| Prove an element does **not** exist    | queryBy, queryAllBy |
| Make sure an element eventually exists | findBy, findAllBy   |
