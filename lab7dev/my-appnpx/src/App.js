import './App.css';
import ClickCounter from './ClickCounter';
import PrimeCalculator from './PrimeCalculator';
import FormReducer from './FormReducer';
import { ThemeProvider } from './ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';
import LayoutEffectExample from './LayoutEffectExample';

function App() {
  return (
    <div className="App">
      <h2>Ćwiczenie 1 — useRef</h2>
      <ClickCounter />

      <h2>Ćwiczenie 2 — useMemo</h2>
      <PrimeCalculator />

      <h2>Ćwiczenie 3 — useReducer</h2>
      <FormReducer />

      <h2>Ćwiczenie 4 — useContext</h2>
      <ThemeProvider>
        <ThemeSwitcher />
      </ThemeProvider>

      <h2>Ćwiczenie 5 — useLayoutEffect</h2>
      <LayoutEffectExample />
    </div>
  );
}

export default App;
