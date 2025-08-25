document.addEventListener("DOMContentLoaded", () => {
  // Projects
  const projectImages = {
    project1: [
      "assets/netflix-demo.mp4", // direct path
      "assets/MongoDB.png",
      "assets/TMDB.png"
    ],
    project2: [
      "https://img.freepik.com/free-photo/lifestyle-scene-anime-style-with-person-doing-daily-tasks_23-2151002606.jpg",
      "https://images.hdqwalls.com/wallpapers/anime-girl-dreamy-skies-3n.jpg",
      "https://thumbs.dreamstime.com/b/cute-cartoon-anime-wallpaper-boy-aesthetic-image-342273314.jpg"
    ],
    project3: [
      "https://img.freepik.com/free-photo/lifestyle-scene-anime-style-with-person-doing-daily-tasks_23-2151002606.jpg",
      "https://images.hdqwalls.com/wallpapers/anime-girl-dreamy-skies-3n.jpg",
      "https://thumbs.dreamstime.com/b/cute-cartoon-anime-wallpaper-boy-aesthetic-image-342273314.jpg"
    ],
    project4: [
      "https://img.freepik.com/free-photo/lifestyle-scene-anime-style-with-person-doing-daily-tasks_23-2151002606.jpg",
      "https://images.hdqwalls.com/wallpapers/anime-girl-dreamy-skies-3n.jpg",
      "https://thumbs.dreamstime.com/b/cute-cartoon-anime-wallpaper-boy-aesthetic-image-342273314.jpg"
    ]
  };

  const projectCaptions = {
    project1: ["Building a Netflix-inspired MERN application for browsing, streaming, and managing movies with a responsive UI and secure user authentication", "Building a Netflix-inspired MERN application for browsing, streaming, and managing movies with a responsive UI and secure user authentication", "Building a Netflix-inspired MERN application for browsing, streaming, and managing movies with a responsive UI and secure user authentication"],
    project2: ["Image 1", "Image 2", "Image 3"],
    project3: ["Image 1", "Image 2", "Image 3"],
    project4: ["Image 1", "Image 2", "Image 3"]
  };

  let currentSlide = 0;
  let currentProject = "project1";

  const modal = document.getElementById("modal");
  const slideshowMedia = document.getElementById("slideshow-media");
  const slideshowCaption = document.getElementById("slideshow-caption");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");
  const closeBtn = document.querySelector(".close-btn");

  // Open modal
  function openModal(index, project) {
    currentSlide = index;
    currentProject = project;
    modal.style.display = "flex";
    updateSlide();
  }

  // Close modal
  function closeModal() {
    modal.style.display = "none";
    slideshowMedia.innerHTML = "";
  }

  // Update slide
  function updateSlide() {
    slideshowMedia.innerHTML = "";
    const current = projectImages[currentProject][currentSlide];
    const caption = projectCaptions[currentProject][currentSlide] || "";

    if (current.endsWith(".mp4")) {
      const video = document.createElement("video");
      video.src = current;
      video.autoplay = true; // autoplay automatically
      video.loop = true;     // loop continuously
      video.muted = true;    // required for autoplay in most browsers
      video.controls = false; // remove the controls
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "contain"; // fit inside modal box
      slideshowMedia.appendChild(video);
    } else {
      const img = document.createElement("img");
      img.src = current;
      img.className = "slideshow-image";
      slideshowMedia.appendChild(img);
    }

    slideshowCaption.textContent = caption;
  }

  // Change slide
  function changeSlide(direction) {
    const items = projectImages[currentProject];
    currentSlide = (currentSlide + direction + items.length) % items.length;
    updateSlide();
  }

  // Attach events
  prevBtn.addEventListener("click", () => changeSlide(-1));
  nextBtn.addEventListener("click", () => changeSlide(1));
  closeBtn.addEventListener("click", closeModal);

  // Attach click to each project box
  document.querySelectorAll(".project-box").forEach((box, idx) => {
    box.addEventListener("click", () => openModal(0, `project${idx + 1}`));
  });
});
