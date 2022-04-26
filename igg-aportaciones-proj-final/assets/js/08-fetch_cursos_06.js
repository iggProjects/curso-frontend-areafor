       

    /****** version 06  **************************/
    /*  copia version 08-fetch-cursos_01.js      /
    /*  
    /*******************************************/
    const setTheme = theme => document.documentElement.className = theme;
    
    fetch("cursos_2022.json")
      .then(response => {
            if (response.ok)
            return response.text()
            else
            throw new Error(response.status);
      })
      .then(data => {
            console.log("Datos: " + data);
            const cursos_2022=JSON.parse(data);
            console.log("cursos: " + cursos_2022);
            // datos cursos a h1
            document.querySelector('h1').innerHTML=`${cursos_2022.titulo} ${cursos_2022.año}`;
            // datos de cada curso 
            let tcursos ='<table>'; 
             for (const item of cursos_2022.cursos)
            {
                console.log(item);
                tcursos += '<tr>';
               // tcursos += `<td onclick="ver_curso('${item}')" class="lanzarcurso" id="${item}">${item}</td>`;
               tcursos += `<td ><a class="lanzarcurso" onclick="ver_curso('${item}')"> ${item}</a></td>`;
                
                
                //ficha_curso(item);
                tcursos+='</tr>' ;
            
            }
            document.querySelector('#cursos').innerHTML=tcursos;
         
    
       
       
      })
      .catch(err => {
        console.error("ERROR: ", err.message)
      });


      
     /*  var btnCursos = document.querySelectorAll(".lanzarcurso");
      console.log('lannzar curso' + document.querySelectorAll(".lanzarcurso")+ '  - ' + btnCursos.length);
      const buttons = document.querySelectorAll(".lanzarcurso")
      for (const button of buttons) {
        button.addEventListener('click', function(event) {
          console.log(event);
        })
      } */
      /* btnCurso.addEvenListener('click', function (){
        ver_curso(this.getAttibute("id"))
      })
 */
/*************   funciones a encapsular para importarlas e independizarlas de este script  */



 











/* function ver_curso(curso){
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


}  */
















  
     function ficha_curso (curso){
          console.log("curso" + curso);
          var  ficha = ``;
          fetch(curso)
            .then(response => {
                if (response.ok)
                return response.text()
                else
                throw new Error(response.status);
            })
            .then(data => {
                console.log("Datos: " + data);
                curso = JSON.parse(data);
               
                ficha += `<td></td><td>${curso.fecha_inicio}</td><td>${curso.tutor.Nombre}</td>`;
                 console.log('curso : ' + ficha); 
                 document.querySelector('#cursos').insertAdjacentElement("beforeend",ficha);
            })
            .catch(err => {
              console.error("ERROR: ", err.message)
            }) 
            .finally(() => {
               return ficha;
            });  

         
            
             
    
      } 

   // import  {ver_curso} from './08-fetch_vercurso.js';
    import  {ficha_persona,evolucion,ver_curso} from './08-fetch_personas_export.js';
      
     