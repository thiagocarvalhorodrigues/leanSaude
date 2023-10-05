![image](https://github.com/thiagocarvalhorodrigues/leanSaude/assets/23345809/53ee0d43-364f-4e82-8921-34f062f452e8)

# Lean Saúde
**Uma Nova Forma de Fazer Gestão de Saúde**

##  :v: Agradecimentos :relieved:

**Quero agradecer principalmente ao Vinícios por dar a oportunidade de estar desenvolendo esse teste, a onde me agregou muito valor. Muito obrigado** 

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
![image](https://github.com/thiagocarvalhorodrigues/leanSaude/assets/23345809/78362b53-6892-476c-a7e1-250aee7d43aa)
```
Existem 3 minis projetos distintos dentro do diretório ./SRC, irei descrever cada um abaixo.

CORE: Aqui realizei um projeto de uma aplicação de cadastro de usuário apenas para demonstrar a arquitetura com DDD .
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

## :tada: Muito obrigado, espero que gostem :airplane:

