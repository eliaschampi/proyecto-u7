# Playmia unidad 7

Crud, express, prisma, buenas practicas y codigo limpio. Proyecto correspondiente a la unidad 7

# Integrantes

Elias Champi

Alvaro Chancafe

Emily Alva

# Pasos para actualizar la rama local


```sh
git checkout main
git fetch origin main
git merge origin/main
git checkout turama
git merge main
```

# Pasos correr el servidor

Luego de hacer un 

```sh
git clone git@github.com:eliaschampi/proyecto-u7.git

```
ejecute los siguientes comandos

```sh
npm install
npx prisma migrate dev --name init
touch .env
```

Copie el contenido de .env-example a .env
luego ejecute
```sh
npm run dev
```

# Endpoint disponibles


```sh
CREACION USER:   (POST)
http://localhost:5000/api/v1/users
No Authorization


CONSEGUIR USUARIOS    (GET)
http://localhost:5000/api/v1/users
No Authorization


LOGIN USER     (POST)
http://localhost:5000/api/v1/users/login
No Authorization


CREAR CANCION PUBLICA   (POST)
http://localhost:5000/api/v1/songs
Con Authorization


CREAR CANCION PRIVADA   (POST)
http://localhost:5000/api/v1/songs
Con Authorization


CONSEGUIR CANCIONES PUBLICAS   (GET)
http://localhost:5000/api/v1/songs
Sin Authorization


CONSEGUIR CANCIONES PRIVADAS   (GET)
http://localhost:5000/api/v1/songs/privates
Con Authorization


CONSEGUIR CANCIONES POR ID  (GET)
http://localhost:5000/api/v1/songs/1
Con Authorization


CREAR PLAYLIST    (POST)
http://localhost:5000/api/v1/playlist
Con Authorization


CONSEGUIR PLAYLIST   (GET)
http://localhost:5000/api/v1/playlist
Sin Authorization


AGREGAR CANCIONES A PLAYLIST   (POST)
http://localhost:5000/api/v1/playlist/add
Con Authorization
```


dicho token se genera al hacer login y puedes pasar al header 

```
headers: {
    "authorization": "token..."
}
```
# Pasos para subir y hacer pull request


```sh
// estando en tus rama
git add .
git commit -m "mensaje"
git push origin turama
```

> Despues debe crear pull request
> pull request tiene una estructura, verifique pull request anteriores


## Nota

Este repositorio y su contenido se proporcionan "tal cual" y sin garantía de ningún tipo, ya sea expresa o implícita. Utilice bajo su propio riesgo.

## Contribuciones
Este repositorio está abierto a contribuciones de la comunidad. Si desea contribuir, por favor envíe una solicitud de pull con sus cambios. Asegúrese
de seguir nuestras guías de estilo y de documentar adecuadamente sus cambios. Si encuentra algún error o tiene sugerencias para mejorar la función, por favor abra un issue para discutirlo.
