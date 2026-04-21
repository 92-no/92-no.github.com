
const images = document.querySelectorAll('#gallery img');
const modals = document.querySelectorAll('.featured');

const logo = document.getElementById('logo');
const logos = ['images/92no_vector.png', 'images/92no_neon.png']; // your two logos
  let index = 0;

  setInterval(() => {
    index = (index + 1) % logos.length;
    logo.src = logos[index];
  }, 750); // change every 1000ms = 1s



images.forEach(img => {
  img.addEventListener('click', () => {
    const id = img.dataset.id;

    // hide all
    modals.forEach(m => m.classList.remove('active'));

    // show matching
    document.getElementById(id).classList.add('active');
  });
});

// close buttons
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.target.closest('.featured').classList.remove('active');
  });
});

// optional: click outside to close
modals.forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
});


document.querySelectorAll(".faq-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    console.log(content);

    console.log(content.style.display);

    // header.classList.toggle("active");

    if (content.style.display === "block") {
      // console.log(content);
      console.log("block");
      content.style.display = "none";
    } else {
      content.style.display = "block";
      console.log("else");
    }
  });
});



document.querySelectorAll(".alt-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    console.log(content);

    console.log(content.style.display);

    // header.classList.toggle("active");

    if (content.style.display === "block") {
      // console.log(content);
      console.log("block");
      content.style.display = "none";
    } else {
      content.style.display = "block";
      console.log("else");
    }
  });
});

