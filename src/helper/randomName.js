function getRandomName() {
    const names = [
      'Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank', 'Grace', 'Hannah', 'Isaac', 'Jasmine',
      'Kevin', 'Laura', 'Mike', 'Nina', 'Oliver', 'Paul', 'Quincy', 'Rachel', 'Steve', 'Tina',
      'Uma', 'Victor', 'Wendy', 'Xander', 'Yvonne', 'Zachary', 'Aaron', 'Bella', 'Chris', 'Diana',
      'Edward', 'Fiona', 'George', 'Helen', 'Ian', 'Julia', 'Kyle', 'Lily', 'Megan', 'Nathan',
      'Oscar', 'Penny', 'Quinn', 'Rebecca', 'Sam', 'Tara', 'Ursula', 'Vince', 'Will', 'Zoe'
    ];
    
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }
  export default getRandomName
  