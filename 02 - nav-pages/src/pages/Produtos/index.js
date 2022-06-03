import { useParams } from "react-router-dom";

function Produtos() {
  const { id } = useParams();
  return <div>Página de produto {id}</div>;
}

export default Produtos;
