const projectLinks = [
  "./pages/m1.html", // 첫 번째 li
  "./pages/zip.html", // 첫 번째 li
  "./pages/p02.html", // 첫 번째 li
  "./pages/a01.html", // 첫 번째 li
  "./pages/p04.html", // 첫 번째 li
  "./pages/a02.html", // 첫 번째 li
  "./pages/p03.html", // 첫 번째 li
  "./pages/a04.html", // 첫 번째 li
];

const projectItems = document.querySelectorAll("#selectedProjects li");

projectItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    window.location.href = projectLinks[index]; // 해당하는 링크로 이동
  });
});

//
const video = document.querySelector("video");
// video.playbackRate = 0.7; // 70% 속도로 재생

video.addEventListener("play", () => {
  video.classList.add("fade-in");
});

// 끝나기 직전에 페이드 아웃 → 다시 처음으로
video.addEventListener("timeupdate", () => {
  if (video.duration - video.currentTime < 1) {
    // 끝나기 1초 전
    video.classList.remove("fade-in");
  }
});

video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.play();
});

//

let currentRate = 0.8; // 시작은 정상 속도
let targetRate = 0.7; // 원하는 느린 속도
let easing = 0.01; // 변화 속도 (값이 작을수록 더 부드럽게)

function animateRate() {
  currentRate += (targetRate - currentRate) * easing;
  video.playbackRate = currentRate;
  requestAnimationFrame(animateRate);
}

animateRate();
