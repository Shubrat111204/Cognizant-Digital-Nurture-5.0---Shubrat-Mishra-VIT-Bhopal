import './App.css';

import ListofPlayers from './Components/ListofPlayers';
import IndianPlayers, { OddPlayers, EvenPlayers } from './Components/IndianPlayers';

function App() {

  // Change to false to see Odd/Even Players + Merged Players
  const flag = true;

  const players = ['Sachin1', 'Dhoni2', 'Virat3', 'Rohit4', 'Yuvraj5', 'Raina6'];

  const [first, second, third, fourth, fifth, sixth] = players;

  if (flag) {

    return (
      <div>
        <ListofPlayers />
      </div>
    );

  } else {

    return (
      <div>

        <OddPlayers
          first={first}
          third={third}
          fifth={fifth}
        />

        <hr />

        <EvenPlayers
          second={second}
          fourth={fourth}
          sixth={sixth}
        />

        <hr />

        <IndianPlayers />

      </div>
    );

  }

}

export default App;