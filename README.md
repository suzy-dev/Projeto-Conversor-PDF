<h1>Conversor PDF</h1>

    
<h2>Objetivo</h2>
    <p>O objetivo principal do projeto Conversor PDF é proporcionar uma maneira simples e eficiente de converter dados contidos em um arquivo CSV em um documento PDF. Isso permite que os usuários tenham uma representação visual dos dados de forma mais organizada e legível, facilitando a análise e o compartilhamento das informações.</p>
    
  <h2>Tecnologias Utilizadas</h2>
    <p>O projeto utiliza as seguintes tecnologias e bibliotecas:</p>
    <ul>
        <li><code>csv-parser</code>: Versão ^3.0.0 - Utilizada para fazer o parsing dos dados contidos no arquivo CSV.</li>
        <li><code>ejs</code>: Versão ^3.1.9 - Utilizada para renderizar templates HTML.</li>
        <li><code>html-pdf</code>: Versão ^3.0.1 - Utilizada para converter o HTML gerado em um documento PDF.</li>
    </ul>
    
  <h2>Como Funciona</h2>
    <p>O projeto consiste em um script em Node.js que realiza as seguintes etapas:</p>
    <ol>
        <li><strong>Leitura do Arquivo CSV:</strong> Utiliza a classe <code>Reader</code> para ler os dados contidos no arquivo CSV.</li>
        <li><strong>Processamento dos Dados:</strong> Utiliza a classe <code>Processor</code> para processar os dados lidos do arquivo CSV.</li>
        <li><strong>Criação da Tabela:</strong> Utiliza a classe <code>Table</code> para criar uma representação tabular dos dados processados.</li>
        <li><strong>Geração do HTML:</strong> Utiliza o <code>HTMLParser</code> para gerar o HTML a partir da tabela criada.</li>
        <li><strong>Escrita do Arquivo HTML:</strong> Utiliza a classe <code>Writer</code> para escrever o HTML gerado em um arquivo.</li>
        <li><strong>Conversão para PDF:</strong> Utiliza a classe <code>PDFWriter</code> para converter o arquivo HTML em um documento PDF.</li>
    </ol>
    
   <h2>Execução</h2>
    <p>Para executar o projeto, basta rodar o script principal <code>app.js</code>. Certifique-se de ter instaladas todas as dependências especificadas no arquivo <code>package.json</code>. O arquivo CSV a ser convertido deve estar localizado no mesmo diretório do script principal ou deve-se fornecer o caminho correto como parâmetro para o método <code>Read()</code>.</p>
    <pre><code>node app.js</code></pre>
    <p>Após a execução, o projeto irá gerar um arquivo HTML e um arquivo PDF com os dados convertidos do arquivo CSV.</p>
