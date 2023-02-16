import { useContagem } from "./hooks/contagem";

const App = () => {
  const [contagem, contagemDispatch] = useContagem()

  return (
    <div className="p-5">
      <p>contagem: {contagem.count}</p>
      <hr className="my-3"/>
      <button className="p-2 border-solid border-2 border-indigo-600 rounded-lg mr-3 " onClick={() => contagemDispatch({type: 'ADD'})}>Adicionar</button>
      <button className="p-2 border-solid border-2 border-indigo-600 rounded-lg mr-3" onClick={() => contagemDispatch({ type: 'DEL' })}>Remover</button>
      <button className="p-2 border-solid border-2 border-indigo-600 rounded-lg mr-3" onClick={() => contagemDispatch({type: 'RESET'})}>Resetar</button>
    </div>
  );
}

export default App
