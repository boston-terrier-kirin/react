import { useState } from 'react';
import { Checkbox, Form, Segment } from 'semantic-ui-react';
import ButtonSaveOrCancel from './ButtonSaveOrCancel';

const NewEntryForm = ({ onAddEntry }) => {
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [isExpense, setIsExpense] = useState(false);

  const onFormSubmit = (event) => {
    event.preventDefault();
    onAddEntry({ description, value, isExpense });
    resetForm();
  };

  /**
   * ★ハマリどころ★
   * ButtonSaveOrCancelのCancelをtype=submitのままににしておくと、Enterキーで一番最初のsubmitがCancelになってしまうので、
   * Cancelが呼び出されてしまう。
   */
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
