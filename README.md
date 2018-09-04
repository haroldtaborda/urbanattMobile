# lineaBase
Linea base para el codigo fuente del proyecto Mobile para Urbanatt

En este proyecto utilizamos tecnologias como:
Node Js
Ionic Framework
Cordova
Angular
etc.
NOTA: para información de versiones se puede consultar el archivo ...\lineaBase\faceleApp\package.json 

Herramientas:
Visual Studio Code o editor de preferencia.
Git(GitHub Desktop, GitBash o el editor de git de preferencia para manejo de commits,etc)


Como arrancar el proyecto:
Una vez descargado el proyecto de https://github.com/haroldtaborda/lineaBase seguir los pasos:
1. Instalar el NodeJs https://nodejs.org/es/ el que dice recomendado para la mayoria
2. En una consola de comandos ejecutar npm install -g ionic cordova
3. En una consola de comandos pararce en la carpeta ...\lineaBase\faceleApp y ejecutar ionic serve
   esto les abre el proyecto en un explorador web con vista de pagina por lo cual sep uede cuadrar para q sea vista mobile con f12,
   esta vista se refresca automaticamente realizando cualquier cambio en el codigo por lo q es mas agil para el desarrollo, ya en su momento
   lo instalaremos en un celular para pruebas.

Como arrancar a desarrolar
1. abrir la carpeta lineaBase con su editor preferido. yo estoy usando visualStudio. File->Open Folder...seleccionar lineaBase
	1.1. Estructura del proyecto:
	     node_modules: dependencias del proyecto
		 resources: iconos y plataformas del proyecto (Ios, Android)
		 src: codigo de la aplicacion (pantallas, css, ts, etc)
		 www: carpeta generada por el ionic al crear el proyecto
	1.2 Estructura de una pantalla:
	    Cada pantalla tiene su html, su ts y su posible css
			HTML contiene etiquetas, botones y demas para la pantalla.
			Ts el archivo ts es el q contiene la logica typeScript para el manejo de la pantalla.
			Scss arhivo que contiene el codigo css para dicha pantalla, este se debe usar si deseamos
			  sobreeescribir el comportamiento de algun elemento unicamente para la pantalla, de ser necesario se puede dejar vacio el archivo.
		NOTA: los 3 archivos se deben llamar igual solo cambiando la extencion.	  
		

Primera asignacion para familiarización de elemtos:
Arnold hacer la pestaña de Acerca de. ya existe la estructura about solo debe cuadrar el html y estilos necesarios para q se vea visualmente bonita y
tenga la informacion del proyecto, tecnologias, etc.

Edwin hacer le contactenos la estructura ya existe contact solo debe cuadrar html y estilos para que tenga la info de nosotros, nombres, telefonos, correos 
y lo q vea necesario.

LOS DOS PUEDEN JUGAR CON LA PANTALLA COMO QUIERAN, PONER BOTON de + para desplegar una lista a modo acordeon o como consideren necesario apra q sea atractiva
si ponen funciones recuerden agregar la logica al ts.

 

