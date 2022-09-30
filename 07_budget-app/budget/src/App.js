import { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import { v4 as uuidv4 } from 'uuid';
import { budgets } from './apis/budgets';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import NewEntryForm from './components/NewEntryForm';
import EntryLines from './components/EntryLines';
import EditEntryForm from './components/EditEntryForm';
import ModalEdit from './components/ModalEdit';

function App() {
  // サーバから最新の情報をGETEするステートと、新規/更新/削除した場合のステートを分けることでいったん落ち着く。
  const [latestEntries, setLatestEntries] = useState([]);
  const [entries, setEntries] = useState([]);

  const [entryToUpdate, setEntryToUpdate] = useState({});
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [balance, setBalance] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchBudgets = async () => {
      const res = await budgets.get('/budgets');
      setLatestEntries(res.data);
    };
    fetchBudgets();
  }, [entries]);

  useEffect(() => {
    const { calcIncome, calcExpense } = latestEntries.reduce(
      (acc, entry) => {
        if (entry.isExpense) {
          return { ...acc, calcExpense: acc.calcExpense + Number(entry.value) };
        }
        return { ...acc, calcIncome: acc.calcIncome + Number(entry.value) };
      },
      {
        calcIncome: 0,
        calcExpense: 0,
      }
    );

    setIncome(calcIncome);
    setExpense(calcExpense);
    setBalance(calcIncome - calcExpense);
  }, [latestEntries]);

  const addEntry = async (entry) => {
    const entryToUpdate = { ...entry, id: uuidv4() };
    await budgets.post('/budgets', entryToUpdate);

    setEntries({ ...entries, ...entryToUpdate });
  };

  const editEntry = (id) => {
    const entryToUpdate = latestEntries.find((entry) => entry.id === id);
    setEntryToUpdate(entryToUpdate);
    setIsOpen(true);
  };

  const editEntryAndCloseModal = async (entryToUpdate) => {
    await budgets.patch(`/budgets/${entryToUpdate.id}`, entryToUpdate);

    setEntries({ ...entries, ...entryToUpdate });
    setIsOpen(false);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const deleteEntry = async (id) => {
    await budgets.delete(`/budgets/${id}`);

    const entryToUpdate = latestEntries.find((entry) => entry.id === id);
    setEntries({ ...entries, ...entryToUpdate });
  };

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={balance} size="small" />
      <DisplayBalances income={income} expense={expense} />

      <MainHeader type="h3" title="Add New Transaction" />
      <NewEntryForm onAddEntry={addEntry} />

      <MainHeader type="h3" title="History" />
      <EntryLines
        entries={latestEntries}
        onEditEntry={editEntry}
        onDeleteEntry={deleteEntry}
      />

      <ModalEdit isOpen={isOpen} onClose={onClose}>
        <EditEntryForm
          entry={entryToUpdate}
          onEditEntry={editEntryAndCloseModal}
        />
      </ModalEdit>
    </Container>
  );
}

export default App;
