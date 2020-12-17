
const interval = setInterval(()=>{
    const header = document.querySelector(".LhZF7");
    if(header){
      console.log(header);
      clearInterval(interval);

      //Create buttons
      const button2x = document.createElement("button")
      button2x.innerHTML = " 2x "
      button2x.classList.add("twoTimesButton")
      header.appendChild(button2x)

      const button125x = document.createElement("button")
      button125x.innerHTML = " 1.25x "
      button125x.classList.add("PointTwoFiveTimesButton")
      header.appendChild(button125x)

      //create functions
      button2x.addEventListener("click",()=>{
        const audios = document.querySelectorAll("audio");
        audios.forEach((audio)=>{
          console.log(audio)
          audio.playbackRate = 2;
        })
      })

      button125x.addEventListener("click",()=>{
        const audios = document.querySelectorAll("audio");
        audios.forEach((audio)=>{
          console.log(audio)
          audio.playbackRate = 1.25;
        })
      })

    }
  }, 1000)
