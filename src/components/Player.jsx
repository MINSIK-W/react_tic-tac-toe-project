import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;
  // let btnCaption = '수정';
  if (isEditing === true) {
    playerName = <input type="text" required value={name} />;
    // btnCaption = '저장';
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? '저장' : '수정'}</button>
    </li>
  );
}
