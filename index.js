// Form Validation
document.getElementById("admissionForm").addEventListener("submit", function(e){
    e.preventDefault();

    document.getElementById("successMsg").innerText = "✅ Form Submitted Successfully!";
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 🔥 GSAP Hero Animation
gsap.from(".hero h1", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from(".hero p", {
  y: 30,
  opacity: 0,
  delay: 0.5,
  duration: 1
});

gsap.from(".btn", {
  scale: 0,
  opacity: 0,
  delay: 1,
  duration: 0.5,
  stagger: 0.2
});


document.querySelectorAll(".counter").forEach(counter => {
  counter.innerText = "0";

  const update = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const inc = target / 100;

    if(count < target){
      counter.innerText = Math.ceil(count + inc);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };

  update();
});

function login(){
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  // Demo student credentials
  const correctUser = "student123";
  const correctPass = "1234";

  if(user === correctUser && pass === correctPass){
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "❌ Invalid ID or Password";
  }
}

function logout(){
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

function toggleMenu(){
  document.getElementById("navMenu").classList.toggle("active");
}