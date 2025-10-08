// import { Game } from './Game'
import Game from './Game'

function App() {
  return (
    <>
      <h1>Chicago Bears <br className="rwd" /><div className="logo"></div> <br className="rwd" />Schedule 2025</h1>
      <div className="home_away_wrapper">
        <div className="home_away game_home_color home_bg">Home</div>
        <div className="home_away game_road_color road_bg">Away</div>
      </div>
       <h3>Preseason</h3>
        <Game which_season="pre" />
       <h3>Regular Season</h3>
        <Game which_season="reg" />

    </> 
  );
}

export default App;