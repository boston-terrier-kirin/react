import SortableTable from '../components/SortableTable';

const TablePage = () => {
  const keyFn = (row) => row.name;

  const config = [
    {
      label: 'Name',
      sortValue: (row) => row.name,
      render: (row) => row.name,
    },
    {
      label: 'Color',
      render: (row) => <div className={`p-3 m-2 ${row.color}`}></div>,
    },
    {
      label: 'Score',
      sortValue: (row) => row.score,
      render: (row) => row.score,
    },
  ];

  const data = [
    { name: 'Orange', color: 'bg-orange-500', score: 5 },
    { name: 'Apple', color: 'bg-red-500', score: 3 },
    { name: 'Banana', color: 'bg-yellow-500', score: 1 },
    { name: 'Lime', color: 'bg-green-500', score: 4 },
  ];

  return (
    <div>
      <SortableTable keyFn={keyFn} data={data} config={config} />
    </div>
  );
};

export default TablePage;
