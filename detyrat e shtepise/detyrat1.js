const passwordSakte = "1234";
const maxTentativa = 2;

const lockedScreen = document.getElementById("lockedScreen");
const loadingScreen = document.getElementById("loadingScreen");
const nikePage = document.getElementById("nikePage");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
  let tentativa = 0;
  let hyri = false;

  while (tentativa < maxTentativa && !hyri) {
    const input = prompt(`Shkruaj passwordin (${tentativa + 1}/${maxTentativa}):`);
    if (input === null) {
      break;
    }

    if (input === passwordSakte) {
      hyri = true;
    } else {
      tentativa += 1;
      if (tentativa < maxTentativa) {
        alert("Password gabim. Provo perseri.");
      }
    }
  }

  if (!hyri) {
    message.textContent = "Password gabim. Hyrja u bllokua.";
    return;
  }

  message.textContent = "";
  lockedScreen.classList.add("hidden");
  loadingScreen.classList.remove("hidden");

  setTimeout(() => {
    loadingScreen.classList.add("hidden");
    nikePage.classList.remove("hidden");
  }, 5000);
});
