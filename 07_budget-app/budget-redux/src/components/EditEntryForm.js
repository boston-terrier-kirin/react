import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react';
import { editEntry } from '../store/budget/budget.action';
import { editEntryEnd } from '../store/modal/modal.action';

const EditEntryForm = ({ entry }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState(entry.description);
  const [value, setValue] = useState(entry.value);
  const [isExpense, setIsExpense] = useState(entry.isExpense);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const entryToUpdate = { id: entry.id, description, value, isExpense };

    // TODO：ダブルディスパッチはどうなんだろうか？
    dispatch(editEntry(entryToUpdate));
    dispatch(editEntryEnd(false, null));
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
