function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <li>
            <span className="player-name">플레이어 1</span>
            <span className="player-symbol">X</span>
          </li>
          <li>
            <span className="player-name">플레이어 2</span>
            <span className="player-symbol">O</span>
          </li>
        </ol>
        게임보드
      </div>
    </main>
  );
}

export default App;
