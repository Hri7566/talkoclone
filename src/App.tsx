import "./index.css";
import { Container } from "./components/Container";

export function App() {
  return (
    <>
      <div id="bar" className="fixed bg-black w-50 min-h-screen">
        <h1 id="logo" className="text-3xl p-5 text-center">TalkoClone</h1>
        <div id="channels">
          <h1 className="text-2xl px-5 py-3">Channels</h1>
        </div>
      </div>
      <div id="content" className="flex ml-50">
        <Container>
        </Container>
      </div>
    </>
  );
}

export default App;
