const utterance = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
  const stopButton = document.querySelector('#stop');
  utterdance.text = document.querySelector('[name="text"]').value; //要被讀出的文字

  function populateVoices() {
    voices = this.getVoices(); //取得所有可用的語音
    voicesDropdown.innerHTML = voices
      .filter(voice => voice.lang.includes('en')) //過濾出想要發音的語音
      .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
      .join('');
  }

  function setVoice() {
    utterance.voice = voices.find(voice => voice.name === this.value);//將該語音加至 utterance.voice
    play();
  }

  function play() {
    stop()
    speechSynthesis.speak(utterance);
    }
  function stop() {
    speechSynthesis.cancel();
    
  }

  function setOption() {
    console.log(this.name, this.value);
    utterance[this.name] = this.value;
    play();
  }

  speechSynthesis.addEventListener('voiceschanged', populateVoices);
  voicesDropdown.addEventListener('change', setVoice);//切換語音

   options.forEach(option => option.addEventListener('change', setOption));//整合寫法
//   RateInput.addEventListener('change', function(){
//       utterance[this.name] = this.value
//   })
//   pitchInput.addEventListener('change', function(){
//     utterance[this.name] = this.value
//   })
//   textInput.addEventListener('change', function(){
//     utterance[this.name] = this.value
//   })    


  speakButton.addEventListener('click', play);
  stopButton.addEventListener('click', stop);
