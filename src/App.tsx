import { APITester } from "./APITester";
import "./index.css";
import { Container } from "./components/Container";

export function App() {
  return (
    <>
      <div id="bar" className="flex fixed bg-black w-50 min-h-screen">
        <h1 id="logo" className="text-3xl p-5 text-center">TalkoClone</h1>
      </div>
      <div id="content" className="flex ml-50">
        <Container>
          <h1 className="text-3xl">Channels</h1>
        </Container>
      </div>
    </>
  );
}

export default App;
