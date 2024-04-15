import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import '../styles/styles.css';

function App() {
  return (
    <>
      <Stack id="stack" direction="horizontal" className="m-0 p-1 flex flex-col" gap={2.5}>
        <Button className="m-1 p-1" as="a" variant="primary">
          Button as link
        </Button>
        <Button className="m-1 p-1" as="a" variant="primary">
          Button as link
        </Button>
        <Button className="m-1 p-1" as="b" variant="secondary">Enviar</Button>
      </Stack>
    </>
  );
}

export default App;
