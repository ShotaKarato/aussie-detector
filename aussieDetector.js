function aussieDetector(text) {
  const wordCollection = [
    "m8",
    "mate",
    "maccas",
    "sweet as",
    "oi cunt",
    "fucken auth",
    "lg",
    "ganger",
    "she'll be right",
  ];
  const isMatched = wordCollection.some((word) =>
    new RegExp(`${text}`, "gi").test(word)
  );
  return isMatched
    ? "🇦🇺🦘🐨🐊 WELCOME HOME M8 🐊🐨🦘🇦🇺"
    : "M8 you came to the wrong place";
}

module.exports = { aussieDetector };