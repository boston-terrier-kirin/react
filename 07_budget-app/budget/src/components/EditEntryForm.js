import { useState } from 'react';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';

const EditEntryForm = ({ entry, onEditEntry }) => {
  const [description, setDescription] = useState(entry.description);
  const [value, setValue] = useState(entry.value);
  const [isExpense, setIsExpense] = useState(entry.isExpense);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onEditEntry({ id: entry.id, description, value, isExpense });
  };

  return (
    <Form unstackable onSubmit={onFormSubmit}>
      <Form.Group>
        <Form.Input
          icon="tags"
          width="12"
          label="Description"
          placeholder="New Shinny Thing"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></Form.Input>
        <Form.Input
          icon="dollar"
          iconPosition="left"
          width="4"
          label="Value"
          placeholder="100.00"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></Form.Input>
      </Form.Group>
      <Segment compact>
        <Checkbox
          toggle
          label="is expense"
          checked={isExpense}
          onChange={() => setIsExpense((current) => !current)}
        />
      </Segment>
      <Button primary onClick={onFormSubmit}>
        OK
      </Button>
    </Form>
  );
};

export default EditEntryForm;
