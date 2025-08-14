const projectImages = {
    project1: [
      "https://images4.alphacoders.com/135/1351823.jpeg",
      "https://marketplace.canva.com/EAFvmtv4mfw/1/0/1600w/canva-purple-and-pink-anime-playful-simple-desktop-wallpaper-Lnpa-mrfsaQ.jpg",
      "https://storage.ko-fi.com/cdn/useruploads/display/3c433601-f6cc-469c-912d-4a163cdcf642_tanjirolowerquality.png"
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
    project1: ["Caption 1 for Project 1", "Caption 2 for Project 1", "Caption 3 for Project 1"],
    project2: ["Caption 1 for Project 2", "Caption 2 for Project 2", "Caption 3 for Project 2"],
    project3: ["Caption 1 for Project 3", "Caption 2 for Project 3", "Caption 3 for Project 3"],
    project4: ["Caption 1 for Project 4", "Caption 2 for Project 4", "Caption 3 for Project 4"]
  };
  
  let currentSlide = 0;
  let currentProject = "project1";
  
  function openModal(index, project) {
    currentSlide = index;
    currentProject = project;
    document.getElementById("modal").style.display = "flex";
    updateSlide();
  }
  
  function closeModal() {
    document.getElementById("modal").style.display = "none";
  }
  
  function changeSlide(direction) {
    const images = projectImages[currentProject];
    currentSlide = (currentSlide + direction + images.length) % images.length;
    updateSlide();
  }
  
  function updateSlide() {
    const images = projectImages[currentProject];
    const captions = projectCaptions[currentProject];
    document.getElementById("slideshow-image").src = images[currentSlide];
    document.getElementById("slideshow-caption").innerText = captions[currentSlide];
  }
  