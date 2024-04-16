/*
const d=document,
    n=navigator;

export function webCam(id){
    const cam= d.querySelector(`#${id}`);
    console.log(n.mediaDevices.getUserMedia);

    if(n.mediaDevices.getUserMedia){
        n.mediaDevices.getUserMedia({video:true, audio:true})
        .then(stream =>{
            console.log(stream);
            cam.srcObject= stream;
            cam.play();
        })
        .catch(err=>{
            console.log(`el error es: ${err}`);
        })
    }  
}*/
export function webCam(){
const Blink = require('../node-blink-security-master/lib/blink');
 
var blink = new Blink('jccaste1002@gmail.com', 'Camilo1002@@', 'Camilo-G8V1');
console.log(blink.cameras);
blink.setupSystem()
  .then(() => {
    blink.setArmed()
      .then(() => {
        // see the object dump for details
        console.log(blink);
      });
  }, (error) => {
    console.log(`El error es: ${error}`);
});
}