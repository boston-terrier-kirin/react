import { Grid, Segment } from 'semantic-ui-react';
import DisplayBalance from './DisplayBalance';

const DisplayBalances = ({ income, expense }) => {
  return (
    <Segment textAlign="center">
      <Grid columns="2" divided>
        <Grid.Row>
          <Grid.Column>
            <DisplayBalance title="Income" value={income} color="green" />
          </Grid.Column>
          <Grid.Column>
            <DisplayBalance title="Expense" value={expense} color="red" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default DisplayBalances;
