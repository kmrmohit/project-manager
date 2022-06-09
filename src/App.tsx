import CardGroup from "./components/card-group";
import { useStore } from "./store";
import { CardGroupsContainer, Header } from "./styles";

function App() {
  const { data } = useStore();

  return (
    <div className="App">
      <Header>Dashboard</Header>
      <CardGroupsContainer>
        {data.map((obj, id) => (
          <CardGroup key={id} {...obj} id={id} />
        ))}
        <CardGroup id={data.length + 1} cards={[]} />
      </CardGroupsContainer>
    </div>
  );
}

export default App;
