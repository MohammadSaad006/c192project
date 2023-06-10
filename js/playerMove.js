AFRAME.registerComponent('playermover',{

    init:function(){

        this.playerMove()

    },
    playerMove:function(){

        multiply=10

            var cameraR=document.querySelector("#cameraIRG")

            var camRotation=cameraR.getAttribute("rotation")
            var camPos=cameraR.getAttribute("position")
            var camMovement=cameraR.getAttribute("movement-controls")

            var camDirection= new THREE.Vector3()
                cameraR.object3D.getWorldDirection(camDirection)

            console.log(camMovement.speed)

        window.addEventListener("keydown",function (e){
            
            
            if (e.code=="ArrowUp"){
                
                multiply+=500

                if (multiply<=100 ){

                    cameraR.setAttribute("movement-controls",{"speed":camMovement.speed+0.05})
                   console.log(camMovement.speed)

                }
            }

            if (e.code=="ArrowRight"){
                
                camRotation.y-=1
                cameraR.setAttribute("rotation",{x:0 ,y:camRotation.y , z:0})
            }

            if (e.code=="ArrowLeft"){

                camRotation.y+=1
                cameraR.setAttribute("rotation",{x:0 ,y:camRotation.y , z:0})

                console.log(camRotation.y)
            }
            
        })
        window.addEventListener("keyup",function (e){
            
                    if (e.code=="ArrowUp"){
                    if (multiply>10){

                        multiply-=0.5
                        cameraR.setAttribute("movement-controls",{"speed":camMovement.speed-0.05})
                        
                    }
                    }

        })

    }
})