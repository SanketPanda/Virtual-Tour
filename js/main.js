
  const panoImage = document.querySelector(".pano-image");
  const livingroom = "images/livingroom.jpg";
  const kitchen = "images/kitchen.jpg";
  const tajMahal_1 = "Images/TajMahal_1.jpg";
  const tajMahal_2 = "Images/TajMahal_2.jpg";
  const tajMahal_3 = "Images/TajMahal_3.jpg";

  const panaroma1 = new PANOLENS.ImagePanorama(livingroom);
  const panaroma2 = new PANOLENS.ImagePanorama(kitchen);
  const panaroma3 = new PANOLENS.ImagePanorama(tajMahal_1);
  const panaroma4 = new PANOLENS.ImagePanorama(tajMahal_2);
  const panaroma5 = new PANOLENS.ImagePanorama(tajMahal_3);
  const viewer = new PANOLENS.Viewer({
    container: panoImage,
    // output: "console",
    autoHideInfospot: false,
    viewIndicator: true,
    indicatorSize: 50,
    controlBar: true,
    camerafov: 80,
  });

  var infospot1 = new PANOLENS.Infospot(1, "Images/infospot1.png");
  infospot1.position.set(-10, 0, 0);
  infospot1.addHoverText("Kitchen", 30);

  var infospot2 = new PANOLENS.Infospot(1, "Images/infospot2.png");
  infospot2.position.set(0, 0, -10);
  infospot2.addHoverText("Living Room", 30);

  var infospot3 = new PANOLENS.Infospot(10, "Images/infospot3.png");
  infospot3.position.set(100, 10, -20);

  var infospot4 = new PANOLENS.Infospot(1, "Images/infospot4.png");
  infospot4.position.set(-5, 0, 0);

  var infospot5 = new PANOLENS.Infospot(10, "Images/infospot5.png");
  infospot5.position.set(-100, 0, 40);

  var infospot6 = new PANOLENS.Infospot(25, "Images/infospot6.png");
  infospot6.position.set(-500, 0, 0);

  var infospot7 = new PANOLENS.Infospot(3, "Images/infospot7.png");
  infospot7.position.set(30, 0, 7);

  var infospot8 = new PANOLENS.Infospot(25, "Images/infospot8.png");
  infospot8.position.set(500, 0, 0);

  //var position = new THREE.Vector3(-2500.0, 100.72, 1200.72);

  panaroma1.add(infospot1);
  panaroma2.add(infospot2);
  panaroma3.add(infospot3);
  panaroma3.add(infospot4);
  panaroma4.add(infospot5);
  panaroma4.add(infospot6);
  panaroma5.add(infospot7);
  panaroma5.add(infospot8);

  viewer.add(panaroma3, panaroma4, panaroma5);
  // viewer.add(panaroma1, panaroma2);
  viewer.renderer.sortObjects = true;
  viewer.tweenControlCenter(new THREE.Vector3(4, -15, 0), 0);

  

  infospot1.addEventListener("click", function () {
    HideHotSpotTexts();
    viewer.setPanorama(panaroma2);
  });

  infospot2.addEventListener("click", function () {
    HideHotSpotTexts();
    viewer.setPanorama(panaroma1);
  });

  infospot3.addEventListener("click", function () {
    viewer.setPanorama(panaroma4);
    speed = 0.1;
    // LoadingBar();
  });

  infospot4.addEventListener("click", function () {
    viewer.setPanorama(panaroma5);
    speed = 0.1;
    // LoadingBar();
  });

  infospot5.addEventListener("click", function () {
    viewer.setPanorama(panaroma3);
    speed = 0.1;
    // LoadingBar();
  });

  infospot6.addEventListener("click", function () {
    viewer.setPanorama(panaroma5);
  });

  infospot7.addEventListener("click", function () {
    viewer.setPanorama(panaroma3);
  });

  infospot8.addEventListener("click", function () {
    viewer.setPanorama(panaroma4);
  });

  function HideHotSpotTexts() {
    var text = document.querySelectorAll(".panolens-infospot");
    for (let i = 0; i < text.length; i++) {
      text[i].style.display = "none";
    }
  }

  var speed = 0.1;
  panaroma3.addEventListener("progress",function(e){
    speed = 0.1;
    LoadingBar();
  });
  panaroma3.addEventListener("load",function(e){
    speed = 15;
  });
  panaroma4.addEventListener("progress",function(e){
    speed = 0.1;
    LoadingBar();
  });
  panaroma4.addEventListener("load",function(e){
    speed = 15;
  });
  panaroma5.addEventListener("progress",function(e){
    speed = 0.1;
    LoadingBar();
  });
  panaroma5.addEventListener("load",function(e){
    speed = 15;
  });
  panaroma6.addEventListener("progress",function(e){
    speed = 0.1;
    LoadingBar();
  });
  panaroma6.addEventListener("load",function(e){
    speed = 15;
  });
// panaroma3.addEventListener('load', function(e){
//   speed = 15;
// });
// panaroma4.addEventListener('load', function(e){
//   speed = 15;
// });
// panaroma5.addEventListener('load', function(e){
//   speed = 15;
// });


 function LoadingBar() {
  document.getElementById("loadingBar").style.display = "block";
  var elem = document.getElementById("myBar");   
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      document.getElementById("loadingBar").style.display = "none";
      clearInterval(id);
    } else {
      width = width+speed; 
      elem.style.width = width + '%'; 
    }
  }
}
