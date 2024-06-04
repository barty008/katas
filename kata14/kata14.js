function areYouPlayingBanjo(name) {
  // Implement me
  if (name[0] === "r" || name[0] === "R") {
    return `${name}` + " plays banjo"
  } else {
    return `${name}` + " does not play banjo"
  }
  return name
}
console.log(areYouPlayingBanjo("james"))
console.log(areYouPlayingBanjo("ricky"))
module.exports = areYouPlayingBanjo
