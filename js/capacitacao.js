function initCapacitacao() {
  console.log("Capacitacao.js inicializado");

  const video = document.getElementById("videoPedreiro");
  const audio = document.getElementById("audioCapacitacao");
  const mensagem = document.getElementById("mensagemVideo");

  const btnPlayVideo = document.getElementById("playVideo");
  const btnPauseVideo = document.getElementById("pauseVideo");
  const btnRestartVideo = document.getElementById("restartVideo");

  const btnPlayAudio = document.getElementById("playAudio");
  const btnPauseAudio = document.getElementById("pauseAudio");
  const btnRestartAudio = document.getElementById("restartAudio");

  if (mensagem) {
    mensagem.textContent = "Assista ao tutorial do pedreiro e aprenda novas habilidades!";
  }

  function playMedia(media) {
    if (!media) return;
    media.play().catch(err => console.warn("Erro ao tentar reproduzir:", err));
  }

  function setupVideoControls() {
    btnPlayVideo?.addEventListener("click", () => playMedia(video));
    btnPauseVideo?.addEventListener("click", () => video?.pause());
    btnRestartVideo?.addEventListener("click", () => {
      if (video) {
        video.currentTime = 0;
        playMedia(video);
      }
    });

    video?.addEventListener("play", () => {
      console.log("Vídeo está sendo reproduzido");
    });
  }

  function setupAudioControls() {
    btnPlayAudio?.addEventListener("click", () => playMedia(audio));
    btnPauseAudio?.addEventListener("click", () => audio?.pause());
    btnRestartAudio?.addEventListener("click", () => {
      if (audio) {
        audio.currentTime = 0;
        playMedia(audio);
      }
    });

    audio?.addEventListener("play", () => {
      console.log("Áudio está sendo reproduzido");
    });
  }

  setupVideoControls();
  setupAudioControls();
}