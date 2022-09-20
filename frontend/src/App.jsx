import "./App.css";
import { Form } from "./components";
import { InputProvider } from "./contexts/inputContext";

const App = () => {
  return (
    <div>
      <InputProvider>
        <Form />
      </InputProvider>
    </div>
  );
};

export default App;
