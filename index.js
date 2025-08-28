const projectLinks = [
  "./pages/p01.html", // 첫 번째 li
  "./pages/zip.html", // 첫 번째 li
  "./pages/zip.html", // 첫 번째 li
  "./pages/zip.html", // 첫 번째 li
  "./pages/zip.html", // 첫 번째 li
  "./pages/zip.html", // 첫 번째 li
  "./pages/zip.html", // 첫 번째 li
  "./pages/zip.html", // 첫 번째 li
];

const projectItems = document.querySelectorAll("#selectedProjects li");

projectItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    window.location.href = projectLinks[index]; // 해당하는 링크로 이동
  });
});
