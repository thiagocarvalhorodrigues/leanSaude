# Lean Saúde
**Uma Nova Forma de Fazer Gestão de Saúde**

## Agradecimentos...

**Quero agradecer principalmente ao Vinícios por dar a oportunidade de estar desenvolendo esse teste, e onde me agregou muito valor
Muito obrigado** 

## Instruções...

**Por favor, leia o readme completo, possui informação importantes.

## Instalar as dependências
```
npm install
```
## Subir o docker
```
docker compose up
obs: Irá iniciar o banco de dados postgres e keycloak.
```
## .env
```
Caso de fato deseja subir a aplicação completa, ajustar as configs do keycloak, bando de dados e S3.
```
##  Observação
```
Existem 3 minis projetos distintos dentro do diretório ./SRC, irei descrever cada um abaixo.

CORE: Aqui realizei um projeto com o core de uma aplicação de cadastro de usuário de acordo com DDD.
LEAN: Projeto realizado a fim do teste aplicado pelo Vinícius.
USERS: Um mini projeto pessoal para cadastro de usuários, aonde existem algumas validações para cadastro do usuário e persistência no banco de dados.
```

## Rotas

## User registration
**Endpoint**: ```/createuser```

**Method**:``` POST```

**Request Body**:

```
{
    "name": "GIZELLI",
    "email": "gizelli@gmail.com",
    "password": "Be@triz000000",
    "birthday": "26/02/2099",
    "lastName": "santos carvalho rodrigues"
}

```
**Response Body (Status 201)**:

```
{
"status": 201 Created

}

```

## Login / Keycloak
**Endpoint**: ```/login```

**Method**: ```POST```

**Request Body**:

```
{
    "email": "gizelli@gmail.com",
    "password": "Be@triz000000"
}
```

**Response Body (Status 200)**:

```
{
   "access_token": "JWT token do Keycloak "

}

```

**Endpoint**: ```/test-auth```

**Method**: ```GET```

**Response Body (Status 200)**:

```
{
   "name": "Thiago Carvalho Rodrigues"

}

```

## Bucket S3
Envia somente um arquivo

**Endpoint**: ```/file```

**Method**: ```POST```

## Bucket S3
Envia múltiplos arquivos

**Endpoint**: ```/files```

**Method**: ```POST```
