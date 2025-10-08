import './Game.css' 

// import games from './games.json'
// import LoadData from './LoadData';

async function LoadData() { 
  const url = 'https://raw.githubusercontent.com/realto619/chicago-bears-schedule/refs/heads/main/games.json'; 
   const result = await fetch(url)
     .then((response) => {
         if (response.ok) {
             return response.json()
         }
         throw new Error("Unable to fetch data")
     });
     
 // you can do anything with the result
console.log(result.games)

 return result;

} 

function Game(props) {
  return (
    <>
    
    { LoadData()
    result.map((game) =>
       game.season === props.which_season &&

    <section key={game.id}  className={`game game_${game.location}_color ${game.team}`}>
      <div className="header">
        <div className="game-week"><small className="week">Week</small>{game.week}</div>
        <div className="center details">
            <div className="game-date">{game.date.replace('2026-','').replace('2025-','').replace('-','/')}</div>
            <div className="game-day">{game.day}</div>
            <div className="game-time">{game.time.replace(' CST','').replace(' CDT','').replace('12:00 PM','NOON').replace(' ','').replace('PM','PM').replace(':00','')}</div>
        </div>
        <div className="vs">{game.opponent}</div>
      </div>
      <div className="game-opponent">
        <div className={game.result ? "score Bears_score" : "score"}>{game.result && game.chicago_bears}</div>
        <div className={game.result ? `opponent ${game.result}` : `opponent ${game.opponent}`}  title={game.opponent}></div>
        <div className={game.result ? `score Opp_score_${game.opponent}` : "score Opp_score"}>{game.result && game.opponent_score}</div>
      </div>
    </section>
    )}
    </>
  )
}

export default Game;