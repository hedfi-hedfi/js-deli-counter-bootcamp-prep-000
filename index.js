function takeANumber(peopleLine, newName) {
  peopleLine.push(newName);
  return `Welcome, ${newName}. You are number ${peopleLine.length} in line.`
}