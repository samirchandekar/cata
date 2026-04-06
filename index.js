// ✅ FORM (safe check)
const form = document.getElementById("admissionForm");
if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();
    document.getElementById("successMsg").innerText = "✅ Form Submitted Successfully!";
  });
}

// ✅ SMOOTH SCROLL (safe)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ✅ RUN AFTER PAGE LOAD
window.addEventListener("load", function(){

  // 🔥 GSAP Animation (safe)
  if(typeof gsap !== "undefined"){
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
  }

  // ✅ COUNTER (safe)
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

});

// ✅ LOGIN (safe)
function login(){
  const userField = document.getElementById("username");
  const passField = document.getElementById("password");
  const errorField = document.getElementById("error");

  if(!userField || !passField) return;

  const user = userField.value;
  const pass = passField.value;

  const correctUser = "student123";
  const correctPass = "1234";

  if(user === correctUser && pass === correctPass){
    localStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    if(errorField){
      errorField.innerText = "❌ Invalid ID or Password";
    }
  }
}

// ✅ LOGOUT
function logout(){
  localStorage.removeItem("loggedIn");
  window.location.href = "login.html";
}

// ✅ TOGGLE MENU (no change needed)
function toggleMenu(){
  const menu = document.getElementById("navMenu");
  if(menu){
    menu.classList.toggle("active");
  }
}













