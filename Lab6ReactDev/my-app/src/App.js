import Hello from './Hello'; 
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';
function App() { 
return ( 
<div> 
<Hello /> 
<ToggleDetails/>
<h2>Ćwiczenie 2: ScoreDisplay</h2> 
<ScoreDisplay score={45} /> 
<ScoreDisplay score={65} />
 <ScoreDisplay score={90} />
<TaskList/>
<UserList/>
<TimerCounter/>
</div> 
); 
} 
export default App;