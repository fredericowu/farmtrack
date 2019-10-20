
>Esse é um arquivo de template e tem como o intuito prover uma breve apresentação de seu projeto para avaliadores e mentores. Sinta-se à vontade para editar os tópicos e títulos de acordo com seu gosto ou até mesmo para deletá-lo ou sobrescreve-lo caso o queira. Cheque também o arquivo [repositorio.md](https://github.com/hackingrio/template/blob/master/repositorio.md) para saber o que acontecerá com esse repositório depois que o evento acabar.  
  
# Farm Track  
### Nome do grupo / Nome do cluster  
  
#### Apresentação   
  
Use essa seção para falar sobre as motivações de seu time e de forma breve qual o produto que estão trabalhando. Se possível forneça **o que** seu produto é, por exemplo: Um app, uma aplicação web, gadget, dentre outros.  
  
#### O Produto  
  
Entre em mais detalhes sobre seu produto, levantando pontos positivos, o porquê dele ser inovador, relevante para o mercado nacional e para a cidade do Rio de Janeiro.  
  
#### Instalação
  
```sh
$ git clone http://github.com/hackingrio/alimentacao-2019-farm.git
$ cd alimentacao-2019-farm
$ cp envs/docker .env
$ docker-compose up
```
#### Carregando Dados Iniciais do Banco de Dados

```sh
docker exec plataforma /scripts/load_data.sh
```

#### Acessando a Plataforma
Abra no navegador a URL: http://localhost:8888/admin/
Utilize as credenciais:
```
Usuário: admin
Senha: admin
```