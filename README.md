# facile-challenge

Esse repositório é referente a entre ao desafio técnico e criativo feito pela FACILE - Soluções em Sistemas. Em meu computador eu consegui fazê-lo funcionar, porém quando subo
para ambiente de produção no servidor (heroku) dá algum erro que não consegui descobrir. Talvez a biblioteca crypto não funcione no heroku. Além disso, foi cadastrado
por meio de uma seed um registro no banco de dados com id = 1.


## Tecnologias Usadas:

<p align="center">
  <img src="https://pplware.sapo.pt/wp-content/uploads/2016/05/nodejs_04.jpg" width="150" title="NodeJS" align="center">
  <p>NodeJS foi usado para o backend, uma ferramenta poderosa inspirado no motor do navegador útil e bastante eficaz. Porém essa parte ficou de ser estudada pro futuro segurança para API a qual foi desenvolvida.</p>
 </p>

 <p align="center">
  <img src="https://expressjs.com/images/express-facebook-share.png" width="150" alt="Express" align="center">
  <p>Express, um micro framework para tratar das rotas da aplicação</p>
</p>


 <p align="center">
  <img src="https://miro.medium.com/max/800/0*z58cqZWxu2_4q5-g.jpg" width="150" alt="PostgreSQL" align="center">
  <p>PostgreSQL foi utilizado como banco de dados relacionável para guardar os dados da aplicação no Heroku</p>

 <p align="center">
  <img src="https://miro.medium.com/max/2000/1*kGSO3V_p93Ic69Uh9Q505A.png" width="150" alt="Knex" align="center">
  <p>Knex foi utilizado como um query builder para o banco de dados</p>
</p>

### Pacotes que se deve instalar

 - cors
 - crypto
 - dotenv
 - express
 - knex
 - pg
 - yarn
 - nodemon (dependencia de desenvolvimento)

### Features 

- Função create faz a encriptação do name auxiliado pela função encrypted e retorna o input cifrado ao usuário junto com seu id ou um erro em json (https://facile-challenge2021.herokuapp.com/create)
- Função show faz a desencriptação do name vindo do bancod de dados auxiliado pela função decrypted e retorna o dado puro ao usuário junto com seu id ou um erro em json (https://facile-challenge2021.herokuapp.com/show/1)
 
## Pretensões Futuras:

Pretendo continuar os estudos e crescer nessa stack pois além de ser divertido possibilita criar muitos projetos interessantes. Gostaria de ter documentado melhor porém a correria impediu nessas situações melhor feito do que não feito.

  <a href = "https://facile-challenge2021.herokuapp.com/"><img src="https://img.shields.io/badge/-heroku-%230077B5?color=blueviolet&style=for-the-badge&logo=heroku&logoColor=blueviolet" target="_blank"></a>

