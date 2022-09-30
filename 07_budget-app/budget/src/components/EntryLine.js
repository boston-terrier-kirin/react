import { Grid, Icon, Segment } from 'semantic-ui-react';

const EntryLine = ({ entry, onEditEntry, onDeleteEntry }) => {
  const { id, description, value, isExpense = false } = entry;

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
              <Icon name="edit" onClick={() => onEditEntry(id)} />
              <Icon name="trash" onClick={() => onDeleteEntry(id)} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </>
  );
};

export default EntryLine;
