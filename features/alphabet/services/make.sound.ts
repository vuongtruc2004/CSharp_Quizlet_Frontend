export const speakText = (text: string) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP"; 
    speechSynthesis.speak(utterance);
  } else {
    alert("Trình duyệt không hỗ trợ phát âm thanh!");
  }
};