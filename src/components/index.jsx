import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import '../styles/styles.css';

function Index() {
  return (
    <>
      <div className="m-1 p-1">
        <div className="m-1 p-1 flex flex-col">
          <span className="m-1 p-1 font-semibold text-3xl">Formulario</span>
          <Badge className="m-1 p-1 flex flex-row justify-center items-center" bg="primary" as={Button}>
            <small className="m-1.5 p-1.5">Nuevo Usuario</small>
          </Badge>
        </div>
      </div>
    </>
  );
}

export default Index;