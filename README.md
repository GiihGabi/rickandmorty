
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rick and Morty</title>
  <style>
    body {
      background-color: #000;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .caixa {
      width: 300px;
      height: 400px;
      position: relative;
    }
    .imagem {
      width: 100%;
      height: auto;
      position: absolute;
      top: -100px;
      left: 0;
    }
    .texto {
      position: absolute;
      top: 50%;
      left: 5%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      text-shadow: 0px 0px 10px #fff, 0px 0px 20px #68ff58, 0px 0px 30px #69ff4e, 0px 0px 40px #fff, 0px 0px 50px #fff, 0px 0px 60px #fff, 0px 0px 70px #fff, 0px 0px 80px #fff, 0px 0px 90px #fff;
    }
    .efeito-luz {
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      /* border-radius: 50%; */
      box-shadow: inset -10px -10px 20px rgba(37, 255, 41, 0.5);
      animation: luz-animacao linear infinite alternate-reverse;
    }
    @keyframes luz-animacao {
      from {
        transform: scale(1);
        opacity: 1;
      }
    
      to {
        transform: scale(1.5);
        opacity: 0.5;
      }
    }
  </style>
</head>

<body>
    <div class="caixa">
      <img src="rick.png" alt="" class="imagem">
      <div class="texto">
          <p style="text-align: center;">
              API UTILIZADA
              <a style="text-decoration: none; color: #7bf51e;" href="https://rickandmortyapi.com/">RICK AND MORTY</a>
          </p>
      </div>
    </div>
      <div style="position: absolute; top: 20%; left: 10%; width: 200px; height: 200px; text-align: center; background-color: #7bf51e; border-radius: 100%;">
        <h2>CURSO</h2>
        <p>Análise e Desenvolvimento de Sistemas</p>
    </div>
      <div style="position: absolute; top: 80%; left: 30%;  width: 200px; height: 200px;  text-align: center; background-color: #7bf51e; border-radius: 50%;">
        <h2>MATÉRIA</h2>
        <p>Desenvolvimento de Aplicações para a Internet</p>
    </div>
      <div style="position: absolute; top: 60%; left: 50%; width: 200px; height: 200px;  text-align: center; background-color: #7bf51e; border-radius: 50%;">
        <h2>ALUNO</h2>
        <p>Giovanna Gabriele Costa Batista || RA: 193225-2</p>
    </div>
      <div style="position: absolute; top: 20%; left: 80%;  width: 200px; height: 400px;  text-align: center; background-color: #7bf51e; border-radius: 10px;">
        <h2>OBJETIVO</h2>
        <p>O objetivo de criar um website usando a API Rick and Morty é fornecer informações 
          detalhadas sobre os personagens, episódios e locais da série. Como uma lista de personagens 
          com informações detalhadas, uma página de pesquisa, uma seção de curiosidades sobre episódios, 
          um mapa interativo de locais e uma galeria de imagens.</p>
    </div>
  </body>
