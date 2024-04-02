import { Typography } from "@mui/material";
import DataTable from "./components/DataTable";
import Container from '@mui/material/Container';

function App() {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          variant="h1"
          gutterBottom
          sx={{
            marginTop: '2rem',
            textAlign: 'center',
            fontSize: {
              lg: '5rem',
              md: '4rem',
              sm: '3rem',
              xs: '2rem',
            }
          }}
        >
          Przeglądarka tagów
        </Typography>
        <DataTable />
      </Container>
    </>
  );
}

export default App;
