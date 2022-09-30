import { useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';
import EditEntryForm from './components/EditEntryForm';
import ModalEdit from './components/ModalEdit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEntries } from './store/budget/budget.action';
import {
  selectBalance,
  selectEntries,
  selectExpense,
  selectIncome,
} from './store/budget/budget.selector';
import {
  selectEntryToUpdate,
  selectIsOpen,
} from './store/modal/modal.selector';
import { editEntryEnd } from './store/modal/modal.action';

function App() {
  const dispatch = useDispatch();
  const entries = useSelector(selectEntries);
  const income = useSelector(selectIncome);
  const expense = useSelector(selectExpense);
  const balance = useSelector(selectBalance);
  const isOpen = useSelector(selectIsOpen);
  const entryToUpdate = useSelector(selectEntryToUpdate);

  useEffect(() => {
    dispatch(fetchEntries());
  }, [dispatch]);

  const onClose = () => {
    dispatch(editEntryEnd(false, null));
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={balance} size="small" />
      <DisplayBalances income={income} expense={expense} />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm />

      <MainHeader type="h3" title="History" />
      {entries && <EntryLines entries={entries} />}

      <ModalEdit isOpen={isOpen} onClose={onClose}>
        <EditEntryForm entry={entryToUpdate} />
      </ModalEdit>
    </Container>
  );
}

export default App;
