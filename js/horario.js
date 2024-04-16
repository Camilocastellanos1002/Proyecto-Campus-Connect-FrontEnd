const urlHorario="http://localhost:4001/horario";

export function horario(){
    /*  inicio calendario */

   /* referenciar etiqueta calendario */
   var calendarEl = document.getElementById('horario');

   var calendar = new FullCalendar.Calendar(calendarEl, {
       
       /* forma de ver el calendario */
       initialView: 'dayGridWeek',

       /* Crear los eventos  */
       events:function(info,successCallback, failureCallback){
           fetch(urlHorario)
           .then(response=>{
               return response.json();
           })
           .then(data=>{
               let events = data.map(ev=>{
                   return {
                       start : new Date(ev.eventStartDate),
                       end :new Date(ev.eventEndDate),
                       title : ev.eventTitle,
                       url : ev.eventUrl,
                       location: ev.eventLocation,
                       timeStart: ev.eventStartTime,
                       timeEnd: ev.eventEndTime,
                   }
               })
               successCallback(events);
           })
           .catch(error=>{
               failureCallback(error);
           })
       },

       /* Mostrar el evento */
       eventContent: function(info){
 
           return {
               html:`
               <section id="evento_por_fecha"
                   <section id="evento_locacion1">
                       <strong>${info.event.title}</strong>
                   </section>
               </section>     
               `
           }
       },
       /* despliegue de recuadro haciendo hoover sobre el evento */
       eventMouseEnter: function(mouseEnterInfo){
           let el = mouseEnterInfo.el;
           el.classList.add("relative");
           let newEl = document.createElement('section');
           // console.log(newEl);
           let newElTitle = mouseEnterInfo.event.title;
           let newElLocation = mouseEnterInfo.event.extendedProps.location;
           let newElTimeStart = mouseEnterInfo.event.extendedProps.timeStart ;
           let newElTimeEnd = mouseEnterInfo.event.extendedProps.timeEnd;
           newEl.innerHTML=`
               <section id="evento_1" style="position: absolute; bottom :100%; width: 180px; height: auto; cursor:pointer; z-index:50; padding: 0.75rem; background-color: white; border: 2px solid #e2e8f0;">
                   <section id="evento_por_fecha2">
                       inicio: ${newElTimeStart}
                       final: ${newElTimeEnd}
                       lugar: ${newElLocation}
                   </section>
               </section>  
           `;
           el.after(newEl)
       },
       /* eliminar recuadro al momento quitar el hoover */
       eventMouseLeave: function(){
           // console.log(mouseLeaveInfo);
           let el = document.querySelector('#evento_1');
           el.remove();
       }
   });
   calendar.render();
   /* final calendario */
}

document.addEventListener('DOMContentLoaded',()=>{
    horario();
})