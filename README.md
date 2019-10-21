# THIS IS A HACKATHON PROJECT 

# Farm Track

#### Apresentação

Farm Track é uma plataforma que integra a cadeia de produção e transformação de produtos desde sua origem na fazenda até sua chegada ao consumidor final.
Sua missão é gerar mais transparência sobre os processos que transformam produto, contando um pouco de sua história.

Para conhecer mais acesse: http://www.farmtrack.com.br/

#### O Produto

Para entender um pouco mais de como o consumidor final tem acesso às informações, acesse: http://www.farmtrack.com.br/app/?nome=Spoleto
![picture](project/site/qr_code.png)

Para entender como o sistema da plataforma funciona, acesse: http://www.farmtrack.com.br/admin/

Utilize essas credenciais:
```
Usuário: admin
Senha: admin
```
Entre em mais detalhes sobre seu produto, levantando pontos positivos, o porquê dele ser inovador, relevante para o mercado nacional e para a cidade do Rio de Janeiro.

#### Instalação

```sh
$ git clone http://github.com/fredericowu/farmtrack.git
$ cd farmtrack
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
