       

    /****** version 04  **************************/
    /*  copia version 08-fetch.js                   */
    /*   Lectura cursos_2022.json y posterior carga           */               
    /*   del curso seleccionado                        */
    /*  2 fetch 

      function ver_curso para hacer el fetch al curso concreto
      hay que encapasular las funciones que usamos en el otro ejemplo
      (ficha_persona(), evolucion(), estrellas())
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
                tcursos += `<td onclick="ver_curso('${item}')">${item}</td>`;
                
                //ficha_curso(item);
                tcursos+='</tr>' ;
            
            }
            document.querySelector('#cursos').innerHTML=tcursos;
         
    
       
       
      })
      .catch(err => {
        console.error("ERROR: ", err.message)
      });
    

/************************/
function ver_curso(curso){
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

/*************   funciones a encapsular para importarlas e independizarlas de este script  */
 


























  
     /*  function ficha_curso (curso){
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

         
            
             
    
      } */
    
      
     