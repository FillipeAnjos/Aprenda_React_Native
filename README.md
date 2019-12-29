<h1>Aprenda React-Native</h1>

O React-Native é uma biblioteca de desenvolvimento do Facebook de aplicativos mobile IOS-ANDROID que usa apenas Javascript 
como linguagem, o React-Native é um framework baseado em React e vem tendo como seu principal desenvolvedor a equipe do Facebook.
<br/>
React-Native é diferente dos demais frameworks em questão pois todo seu código programado é convertido em código nativo 
do sistema operacional.
<br/>
Nesse pequeno projeto onde o título é <i>Aprenda React-Native</i> foi mostrado as funcionalidades mais básicas, 
dando uma breve explicação de cada bibliotecas utilizada e enfatizando as principais, a fim de iniciar uma aplicação 

<h2>Instalação</h2>

Foram executados os seguintes comandos abaixo na linha de comando (Prompt - cmd) na pasta do projeto.
<br/><br/>
Vale a pena se atentar para os comandos abaixo e verificar a versão do React-Native instalado em sua maquina, 
a versão atual em que o meu sistema foi instalado é a <i><b>react-native: 0.61.5</b></i>
<br/>
Comando para instalar o React-Native na versão atual: <i><b>react-native init {NomeDoProjeto}</b></i>
<br/>
Comando para instalar o React-Native em uma versão específica: <i><b>react-native init {NomeDoProjeto} --version 0.58.6</b></i>
<br/>
Comando para verificar a versão instalada: <i><b>react-native -v</b></i>
<br/><br/>
Dito isto então Go Go!!!
<br/><br/>
Iniciando o projeto <i><b>react-native init {NomeDoProjeto}</b></i>
<br/>
ou se preferir instalar uma versão específica 
<i><b>react-native init {NomeDoProjeto} --version 0.58.6</b></i>
<br/><br/>
Foi instalado o Gesture Handler <i><b>npm add react-native-gesture-handler</b></i>
<br/>
O React Native Gesture Handler fornece APIs de gerenciamento de gestos nativas para criar as 
melhores experiências possíveis baseadas em toque no React Native.
<br/><br/>
React Navigation <i><b>npm add react-navigation</b></i>
<br/>
O React Navigation é responsavel por rotear a navegação da nossa aplicação de forma rápida, direta e muito robusta.
<br/>
Temos três formar diferenter de navegação no React-Native que são elas:
<br/>
&nbsp;&nbsp; &#9679; <i>StackNavigator</i> para navegarmos entre telas por botões dentro da tela.
<br/>
&nbsp;&nbsp; &#9679; <i>TabNavigator</i> para navegarmos através de abas.
<br/>
&nbsp;&nbsp; &#9679; <i>DrawerNavigator</i> para navegarmos através um menu lateral.
<br/><br/>
Em nosso projeto utilizaremos dois deles.
<br/><br/>
Instalamos o <i><b>npm add react-navigation-stack</b></i>
<br/>
Que é a navegação de telas feita por botões
<br/><br/>
Instalação de navegação por tabs <i><b>npm add react-native-reanimated</b></i> e 
<i><b>npm add react-navigation-tabs</b></i>
<br/>
Como podemos ver na minha versão é necessário também instalar o 'reanimated' para que a tabs funcione.
<br/><br/>
Adicionar icones <i><b>npm add react-native-vector-icons</b></i>
<br/>
Em nosso projeto utilizamos a família de icones 'FontAwesome5 icons'
<br/><br/>
Armazenamento assíncrono com AsyncStorage <i><b>npm add @react-native-community/async-storage</b></i>
<br/>
O AsyncStorage é uma espécie de Mini banco de dados a grosso modo falando, serve para gravar pequenas quantidade de dados.
<br/><br/>
E por ultimo é só rodar o comando <i><b>react-native run-android</b></i> para Android ou <i><b>react-native run-ios</b></i> para IOS
<br/>
Tendo em vista que é necessário ter um emulador ou um celular conectado ao USB.
<br/><br/>
<b>Congratulations!!!<b/>
