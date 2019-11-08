API Unimet

# Bienvenido a la documentación de API-Unimet!

Actualmente este API obtiene datos de la base de datos de CEDECA, esta información se considera la más relevante que se encuentra sobre la misma. A continuación se listan las rutas y sus parametros necesarios para obtener la información:

## Obtener todos los estudiantes

La ruta `/students` permite obtener los siguientes datos de todos los estudiantes registrados en la base de datos:

*  nombre
*  apellido
*  cedula
*  numero_carnet 
*  fecha_nacimiento
*  nacionalidad
*  email

Se obtiene un arreglo de objetos en formato JSON como se muestra a continuación:
![Obtener todos los estudiantes](https://i.ibb.co/NT2tcTk/image.png)


## Obtener un estudiante por ID (Número de carnet)

La ruta `/students/:id` permite obtener los siguientes datos del estudiante especificado por parametros:

*  nombre
*  apellido
*  cedula
*  numero_carnet 
*  fecha_nacimiento
*  nacionalidad
*  email

Se obtiene un objeto en formato JSON como se muestra a continuación:

![Obtener un estudiante en especifico](https://i.ibb.co/qYKCZpc/image.png)

Si no existe un estudiante con ese número de carnet se muestra el siguiente error:

![Error mostrado cuando no se encuentra un estudiante con el ID especificado](https://i.ibb.co/3TJtfTH/image.png)

Si se especifica un id que no es de numeros enteros se muestra el siguiente error:

![Error mostrado cuando el ID especificado no corresponde a numeros enteros](https://i.ibb.co/VqMRxKh/image.png)

## Obtener estudiantes de por carrera

La ruta `/studentsByCareer/:career` permite obtener los siguientes datos de los estudiantes pertencientes a la carrera especificada por parametros:

*  nombre
*  apellido
*  cedula
*  numero_carnet 
*  fecha_nacimiento
*  nacionalidad
*  email

Se obtiene un arreglo de objetos en formato JSON como se muestra a continuación:
![Obtener todos los estudiantes de una carrera en especifico](https://i.ibb.co/yskQDkL/image.png)

A continuación se muestran los valores aceptados como parametro:
 *  CIENCIAS ADMINISTRATIVAS
 * ESPECIALIZACION GCIA. DE COMUNICACIONES INTEGRADAS
 * INGENIERIA ELECTRICA
 * CONTADURIA PUBLICA
 * DERECHO
 * ECONOMIA EMPRESARIAL
 * ESTUDIOS LIBERALES
 * IDIOMAS MODERNOS
 * INGENIERIA CIVIL
 * INGENIERIA MECANICA
 * INGENIERIA QUIMICA
 * INGENIERIA DE PRODUCCION
 * INGENIERIA DE SISTEMAS
 * MATEMATICAS INDUSTRIALES
 * EDUCACION
 * AREA INICIAL TECNOLOGICA
 * CIENCIAS ADMINISTRATIVAS MENCIÓN GERENCIA
 * CIENCIAS ADMINISTRATIVAS MENCIÓN BANCA Y FINANZAS
 * LICENCIATURA EN EDUCACION
 * AREA INICIAL HUMANISTICA
 * MAESTRIA EN ADMINISTRACION GERENCIA DE EMPRESAS
 * TECNICO EN PREESCOLAR
 * IDIOMAS MODERNOS MENCION DOCENCIA
 * MAESTRIA EN ADMINISTRACION GERENCIA DE FINANZAS
 * ESPECIALIZACION EN DERECHO CORPORATIVO
 * LICENCIATURA EN EDUCACION PRESCOLAR
 * MAESTRIA EN INGENIERIA GERENCIAL
 * PSICOLOGIA
 * MAESTRIA EN GERENCIA TRIBUTARIA DE LA EMPRESA
 * ESPECIALIZACIÓN EN GCIA. DE INSTITUCIONES EDUCATIVAS
 * MAESTRIA EN FINANZAS
 * DIPLOMADO EN MERCADEO
 * ESPECIALIZACION EN RECURSOS HUMANOS
 * ESPECIALIZACION EN FINANZAS INTERNACIONALES
 * ESPECIALIZACION EN NEGOCIOS INTERNACIONALES
 * ESPECIALIZACION EN GERENCIA PUBLICA
 * MATEMATICA
 * MAESTRIA EN GERENCIA DE SISTEMAS
 * TECNICO SUPERIOR EN EDUCACION MENCION PREESCOLAR
 * LICENCIATURA EN EDUCACIÓN MENCIÓN INICIAL
 * ESPECIALIZACIÓN EN GERENCIA, TECNOLOGÍA DE TELECOMUNICACIONE
 * ESPECIALIZACIÓN EN PROPIEDAD INTELECTUAL
 * ESPECIALIZACION EN ECONOMIA Y POLITICA ENERGETICA
 * MAESTRIA EN DISEÑO URBANO
 * ESPECIALIZACIÓN: GCIA Y TECNOLOGÍA DE LAS TELECOMUNICACIONES
 * INGENIERÍA INDUSTRIAL
 * PLAN DE ESTUDIOS DE EXTENSION
 * ESPECIALIZ. EN NEGOCIOS INTERNACIONALES
 * DIPLOMADO EN TECNOLOG. GEST. CONSTRUCC.
 * LICENCIATURA  DERECHO / ESTUDIOS LIBERALES
 * MAESTRIA  ADM. GCIA. DE EMPRESAS PTO LC
 * MAESTRIA EN ADM. GERENCIA DE EMPRESAS
 * MAESTRIA EN ADM. GERENCIA DE FINANZAS
 * CONTADURÍA PÚBLICA
 * EDUCACIÓN  INICIAL
 * INGENIERÍA CIVIL
 * INGENIERÍA MECÁNICA
 * INGLES INTENSIVO
 * DIPLOMADO EN TRADUCCION
 * ESPECIALIZ. EN FINANZAS INTERNACIONALES
 * INGENÍERIA QUÍMICA
 * INGENIERÍA ELÉCTRICA
 * DIPLOMADO EN MÚSICA ELECTRÓNICA
 * DIPLOMADO EN ADMINISTRACION Y GERENCIA
 * ESP. EN RESPONSABIL. SOCIAL EMPRESARIAL
 * ESP. GCIA. Y TECNOLOGIA DE TELECOMUNICAC
 * DIPLOMADO EN ANÁLISIS QUIMÍCO
 * DIPLOMADO EN ESTUDIOS INTERNACIONALES
 * DIPLOMADO EN INGLES COMO LENG. EXTRANJER
 * DIPLOMADO EN POLITICA INTERNACIONAL
 * DA EN EMPRENDIMIENTO Y GEST. DE EMPRESAS
 * DIPLOMADO EN TELECOMUNICACIONES
 * ESPECIALIZACIÓN EN DERECHO CORPORATIVO
 * EXTENSION PREGRADO
 * DA EN GERENCIA INTERNACIONAL
 * MAESTRIA EN EST. POLITICOS Y DE GOBIERNO
 * DIPLOMADO EN INGENIERIA FINANCIERA
 * ESPEC.  EN GESTION AMBIENTAL EMPRESARIAL
 * DA EN FORM. TUTORES PARA EDUC. A DISTAN.
 * ESP. EN TECNOLOGÍA, APRENDIZAJE  Y CONOC
 * DIPLOMADO DE MERCADEO
 * DA EN GESTIÓN DE MERCADEO
 * 2011
 * ESPEC. EN GCIA. DE INSTITUC. EDUCATIVAS
 * EDUCACIÓN INTEGRAL
 * EDUCACIÓN-PROF
 * TÉCNICO  EDUCACIÓN INTEGRAL
 * DA EN GERENCIA DE PRODUCCIÓN
 * DA EN MERCADEO Y VENTAS
 * MATEMÁTICAS INDUSTRIALES
 * DA EN TECNOLOGÍA DE ALIMENTOS
 * DA EN TERAPIA COG.CLÍNICA Y SALUD MENTAL
 * SC ADMISIONES
 * DIPLOMADO EN ESTRATEGIA Y ANALISIS POLIT
 * DIPLOMADO EN ENSEÑANZA DE LENGUAS EXTRAN

Si se coloca un parametro que no sea ninguno de los anteriores muestra un error y todas las opciones posibles.

## Obtener todos los estudiantes graduados

La ruta `/graduates` permite obtener los siguientes datos de todos los estudiantes graduados registrados en la base de datos:

*  nombre
*  apellido
*  cedula
*  numero_carnet 
*  fecha_nacimiento
*  nacionalidad
*  email

Se obtiene un arreglo de objetos en formato JSON como se muestra a continuación:
![Obtener todos los estudiantes](https://i.ibb.co/pWgRWzQ/image.png)

## Obtener un estudiante graduado por ID (Número de carnet)

La ruta `/graduates/:id` permite obtener los siguientes datos del estudiante graduado especificado por parametros:

*  nombre
*  apellido
*  cedula
*  numero_carnet 
*  fecha_nacimiento
*  nacionalidad
*  email

Se obtiene un objeto en formato JSON como se muestra a continuación:

![Obtener un estudiante graduado en especifico](https://i.ibb.co/JyCTYMC/image.png)

Si no existe un estudiante graduado con ese número de carnet se muestra el siguiente error:

![Error mostrado cuando no se encuentra un estudiante con el ID especificado](https://i.ibb.co/6gf8NjH/image.png)

Si se especifica un id que no es de numeros enteros se muestra el siguiente error:

![Error mostrado cuando el ID especificado no corresponde a numeros enteros](https://i.ibb.co/VqMRxKh/image.png)

## Obtener todos las compañías registradas

La ruta `/companies` permite obtener los siguientes datos de todos los compañías registradas en la base de datos:

* nombre
* rif
* descripcion
* numero_empleados 
* url
* telefono
* email

Se obtiene un arreglo de objetos en formato JSON como se muestra a continuación:
![Obtener todas las compañías](https://i.ibb.co/nfQnGRZ/image.png)

## Obtener una compañía por RIF 

La ruta `/companies/:rif` permite obtener los siguientes datos de la compañía especificada por parametros:

* nombre
* rif
* descripcion
* numero_empleados 
* url
* telefono
* email

Se obtiene un objeto en formato JSON como se muestra a continuación:

![Obtener una compañía en especifico](https://i.ibb.co/4SwnNqV/image.png)

Si no existe un estudiante graduado con ese número de carnet se muestra el siguiente error:

![Error mostrado cuando no se encuentra un estudiante con el ID especificado](https://i.ibb.co/vdZWxXz/image.png)

Si se especifica un id que no es de numeros enteros se muestra el siguiente error:

![Error mostrado cuando el ID especificado no corresponde a numeros enteros](https://i.ibb.co/VqMRxKh/image.png)

## Obtener todos las carreras

La ruta `/careers` permite obtener los siguientes datos de todos las carreras registradas en la base de datos:

*  id
*  nombre

Se obtiene un arreglo de objetos en formato JSON como se muestra a continuación:
![Obtener todos los estudiantes](https://i.ibb.co/jgrkxQv/image.png)
