AFRAME.registerComponent("bullets", {

    init: function () {

      this.shootBullet();

    },
    shootBullet: function () {

      window.addEventListener("keydown", (e) => {

        if (e.key === "z") {

          var bullet = document.createElement("a-entity");
  
          bullet.setAttribute("geometry", {
            primitive: "sphere",
            radius: 0.1,
            
          });
  
          bullet.setAttribute("material", "color", "black");
  
          var cam = document.querySelector("#cameraIRG");
          var pos = cam.getAttribute("position");
  
          bullet.setAttribute("position", {
            x: pos.x - 80.5,
            y: pos.y + 40,
            z: pos.z -10,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          bullet.setAttribute("velocity", direction.multiplyScalar(-50));
  
          var main = document.querySelector("#main");
  
          //set the bullet as the dynamic entity
          bullet.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "0",
          });
  
          //add the collide event listener to the bullet
          bullet.addEventListener("collide", this.removeBullet);
  
          main.appendChild(bullet);
  
        }
      });
    }
  });
  