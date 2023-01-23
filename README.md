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
// para landing page
http://127.0.0.1:8000/

// user get
http://127.0.0.1:8000/api/v1/users

// user post
http://127.0.0.1:8000/api/v1/users

// login
http://127.0.0.1:8000/api/v1/users/login

// song get all
http://127.0.0.1:8000/api/v1/songs

// song get by id
http://127.0.0.1:8000/api/v1/songs/:id

// playlist get with relations
http://127.0.0.1:8000/api/v1/playlists

// playlist post
http://127.0.0.1:8000/api/v1/playlists
```

>**Importante: Las rutas excepto login requieren un token**

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
