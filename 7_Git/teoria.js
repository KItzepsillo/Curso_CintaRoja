/* 
Github 
        *Es un sistema de control de versiones (VCS)
        *Que cambios se hicieron, quien los hizo, cuando se hicieron y porque fueron requeridos
    tipos:
    -Local          -> solo una persona
    -Centralizado   -> el mismo comparten ambos
    -Distribuido    -> Todos con todos


    Crear nuevo repositorio
    -git init       -> inicializar un nuevo repositorio
    -git status     -> Informacion del estado del repositorio

    Configuracion de git
    -git config -l                              -> perfil de git
    -git config --global user.name "nombre"     -> Ingresar el nombre de usuario
    -git config --global user.email "correo"    -> Ingresar el correo
    -git add "nombre_Archivo"                   -> dar seguimiento
    -git add .                                  -> sube todos los archivos 
    -git status                                 -> si los archivos estan el stagig area
    -git commit -m "valor del commit"           -> Porque se estan haciendo los cambios 
    -git status                                 -> verificar si ya se hicieron cambiosori

    -git remote -v                          -> ver los repositorios compartidos
    -git remote -rm "nombre"                    -> eliminar
    

    Agregarlo a Github
    -git remote add origin "link_repositorio"   -> le indicamos cual sera el repositorio
    -git push -u origin master                  -> se sube al repositorio por primera vez

    -git push origin master                     -> se realiza un commit
    
    Crear una rama
    -git checkout -b feature/arreglo            -> se genera una nueva rama "-b"

    Mover de rama
    -git checkout master                        -> se regresa a la rama existente


    **Comandos basicos de Git
    -git clone (url)                            -> Clonar repositorio existente
    -git pull                                   -> obtenemos cambios mas recientes de la rama

    working directory   -> estado donde estamos escribiendo
    stagig area         -> control de calidad
    repository          ->

    merch                                       -> se agrega una rama alterna a la rama principal
    -echo           -> genera un archivo

*/