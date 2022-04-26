export function ver_curso(curso){
  console.log('ver curso ' + curso);
   fetch(curso)
   .then(response => {
     if (response.ok)
       return response.text()
     else
       throw new Error(response.status);
   })
   .then(data => {
       console.log("Datos: " + data);
       const clase=JSON.parse(data);
       console.log("Clase: " + clase);
       // datos curso a h1
     document.querySelector('#itemcurso').innerHTML=`${clase.curso} ${clase.fecha_inicio}`;
       // datos profesor a #profesor
     document.querySelector('#profesor').innerHTML=` ${ficha_persona(clase.tutor)}`;
     // datos alumnos a  #alumnos
     //let talumnos = '<h2>Alumnos</h2>';
     let talumnos ='';
     for (const item of clase.alumnos)
     {
       talumnos += '<article>';
       talumnos += ficha_persona(item);
       talumnos += evolucion(item);
       talumnos += '</article>';

     }
     document.querySelector('#alumnos').innerHTML=talumnos;
     

   
   
   })
   .catch(err => {
     console.error("ERROR: ", err.message)
   });


} 

