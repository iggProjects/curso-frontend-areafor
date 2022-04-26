       

    /****** version 04  **************************/
    /*  copia version 08-fetch.js                */
    /*   Lectura cursos_2022.json                */                     
    /*                                          */
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
                tcursos += `<td>${item}</td>`;
                
                //ficha_curso(item);
                tcursos+='</tr>' ;
            
            }
            document.querySelector('#cursos').innerHTML=tcursos;
         
    
       
       
      })
      .catch(err => {
        console.error("ERROR: ", err.message)
      });
    
    
          
      
     