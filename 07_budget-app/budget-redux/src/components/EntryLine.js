import { useDispatch } from 'react-redux';
import { Grid, Icon, Segment } from 'semantic-ui-react';
import { deleteEntry } from '../store/budget/budget.action';
import { editEntryStart } from '../store/modal/modal.action';

const EntryLine = ({ entry }) => {
  const dispatch = useDispatch();
  const { id, description, value, isExpense = false } = entry;

  const onModalOpen = () => {
    dispatch(editEntryStart(true, entry));
  };

  const onDeleteEntry = () => {
    dispatch(deleteEntry(id));
  };

  return (
    <>
      <Segment color={isExpense ? 'red' : 'green'}>
        <Grid columns="3" textAlign="right">
          <Grid.Row>
            <Grid.Column width="10" textAlign="left">
              {description}
            </Grid.Column>
            <Grid.Column width="3">{value}</Grid.Column>
            <Grid.Column width="3">
              <Icon name="edit" onClick={() => onModalOpen(id)} />
              <Icon name="trash" onClick={onDeleteEntry} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
