import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import { addEntry } from '../store/budget/budget.action';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const entry = { id: uuidv4(), description, value, isExpense };
    dispatch(addEntry(entry));

    resetForm();
  };

  const onCancel = (event) => {
    event.preventDefault();
    resetForm();
  };

  const resetForm = () => {
    setDescription('');
    setValue('');
    setIsExpense(false);
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
      <ButtonSaveOrCancel onCancel={onCancel} onOk={onFormSubmit} />
    </Form>
  );
};

export default NewEntryForm;
