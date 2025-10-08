import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Game.css' 

function Game(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://generator.netcentrx.net/apis/games.json')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
        {data.map(game => (
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
            ))}
        </div>
  );
}

export default Game;