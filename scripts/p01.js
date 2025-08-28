// lenis 라이브러리 (있다면 사용)
if (typeof Lenis === "function") {
  const lenis = new Lenis();

  lenis.on("scroll", (e) => {});

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

const header = document.querySelector("header");
const headerInner = `
      <h1>
        <a href="../index.html" title="Home">
          <img src="../imgs/logo.png" alt="Home" />
        </a>
      </h1>
      <button id="toggleBtn">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav id="gnb">
        <ul>
          <li>
            <a href="category.html" title="Promotion">Promotion</a>
          </li>
          <li>
            <a href="beauty.html" title="Developer">Developer</a>
          </li>
          <li>
            <a href="fashion.html" title="Artwork">Artwork</a>
          </li>
          <li>
            <a href="fashion.html" title="Artwork">About Me</a>
          </li>
        </ul>
        <p></p>
      </nav>
`;
header.innerHTML = headerInner;

const footer = document.querySelector("footer");
const footerInner = `
<div>
        <p>let's work <br />together</p>
        <div>
          <div>
            <span
              ><i class="fab fa-behance-square"></i><i class="fab fa-github-square"></i><i class="fab fa-linkedin"></i
            ></span>
          </div>
          <div>
            <span><i class="fas fa-face-smile-wink"></i>KIM SO YEON</span>
            <span><i class="fas fa-phone"></i>+82(0)10 8475 6176</span>
            <span><i class="fas fa-envelope"></i>sosoyeon98@naver.com</span>
          </div>
        </div>
      </div>
      <span>© 2025. Kim so yeon All Rights Reserved</span>
`;
footer.innerHTML = footerInner;
