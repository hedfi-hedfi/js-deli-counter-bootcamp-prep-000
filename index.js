function takeANumber(peopleLine, newName) {
  peopleLine.push(newName);
  return `Welcome, ${newName}. You are number ${peopleLine.length} in line.`
}

function nowServing(peopleLine) {
  if(peopleLine.length === 0) return 'There is nobody waiting to be served!'
  return `Currently serving ${peopleLine.shift()}.`;
}