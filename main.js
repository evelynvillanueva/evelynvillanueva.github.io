let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #285268;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #4d8894; ">Estudiante en Licenciatura en Multimedia y Animación Digital.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
