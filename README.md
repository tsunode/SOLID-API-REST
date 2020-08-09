# SOLID-API-REST

[![node version](https://img.shields.io/node/v/express)](https://img.shields.io/node/v/express)


Princípios SOLID em uma API REST com Node.js e TypeScript

## Conceito

S = Single responsibility principlie: cada classe deve ter uma única responsabilidade <br>
O = Open closed principle: Uma classe deve ser aberta para extensões mas não para modificações <br>
L = Liskov substitution principle: pode substituir implementações que a classe depende <br>
I = Interface Segregation Principle: Muitas interfaces específicas são melhores do que uma interface única. <br>
D = Dependency iversion principlie: As classes de ações (useCases, Controller), devem depender de interfaces <br>

## Requisitos de instalação
- npm >= 6.0.0
- node >= 10

## Como utilizar

### Servidor 

#### Execute o comando para instalações de dependências do servidor:

```
npm install
```

#### Insira os dados referente ao NodeMailer para teste do disparo de e-mail

```
./src/implementations/MailtrapMailProvider.ts
```

#### Iniciar o servidor:

```
npm start
```

## Rota

Request

```
"url": "localhost:3000/api/usuers",
"method": "POST",
"headers": {
    "content-type": "application/json"
},
"data": {
    "name": {name},
    "email": {email},
    "password": {password},
}
```
