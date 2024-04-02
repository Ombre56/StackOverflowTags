import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import InputNumber from './InputNumber';

const columns = [
  {
    field: 'name',
    headerName: 'Nazwa tagu',
    headerClassName: 'dataTable--header',
    flex: 1,
    headerAlign: 'center',
    align: 'center',
  },
  {
    field: 'count',
    headerName: 'Liczba powiązanych postów',
    type: 'number',
    headerClassName: 'dataTable--header',
    headerAlign: 'center',
    align: 'center',
    flex: 1
  },
];

export default function DataTable() {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [paginationModel, setPaginationModel] = useState({
    page: 0,
    pageSize: 5,
  });

  const handlePageSizeChange = (newPageSize) => {
    setPaginationModel({ ...paginationModel, pageSize: newPageSize });
  };

  const handlePageChange = (newPage) => {
    setPaginationModel({ ...paginationModel, page: newPage });
  };

  useEffect(() => {
    const fetchAndSetData = async () => {
      setIsLoading(true);
      const fetchedData = await fetchData();
      setRows(fetchedData.items);
      setIsLoading(false);
    };

    fetchAndSetData();
  }, []);

  const getRowId = (row) => `${row.name}-${row.count}`;

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.stackexchange.com/2.3/tags?site=stackoverflow');
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('There was an error', error);
    }
  };

  return (
    <>
      <InputNumber setNumberValue={setPaginationModel} />
      <Box sx={{
        height: 550,
        width: '100%',
        backgroundColor: '#2E9CCA',
        '& .dataTable--header': {
          backgroundColor: '#29648A',
          color: '#fff',
        },
      }}>
        {isLoading && <p>Ładowanie danych...</p>}
        {!isLoading &&
          <DataGrid
            rows={rows}
            columns={columns}
            getRowId={getRowId}
            loading={isLoading}
            paginationModel={paginationModel}
            onPageChange={handlePageChange}
            onPageSizeChange={handlePageSizeChange}
          />}
      </Box>
    </>
  );
}