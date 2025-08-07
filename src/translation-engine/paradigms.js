const PARADIGM_TRANSLATIONS = {
  creative: {
    reality: "your canvas",
    consciousness: "creative flow",
    transformation: "artistic breakthrough",
    perspective: "unique style"
  },
  business: {
    reality: "market position",
    consciousness: "strategic awareness",
    transformation: "pivot",
    perspective: "competitive advantage"
  },
  developer: {
    reality: "runtime environment",
    consciousness: "system state",
    transformation: "refactoring",
    perspective: "implementation pattern"
  },
  child: {
    reality: "your game world",
    consciousness: "superpower",
    transformation: "level up",
    perspective: "special ability"
  },
  psychonaut: {
    reality: "consensus trance",
    consciousness: "awareness",
    transformation: "breakthrough",
    perspective: "lens"
  }
}

// VLAD feature: Auto-translate any perspective into user's paradigm
function translatePerspective(content, fromParadigm, toParadigm) {
  // AI translates the essence while keeping the meaning
  return quantumTranslate(content, PARADIGM_TRANSLATIONS[toParadigm]);
}
