  function scanBarcode() {
    window.plugins.barcodeScanner.scan(function(result){
     
      // verificação de codigos para exibição dos dados
      if(result.text == 280720550){
        alert("Produto encontrado\n" +
        "Código: " + result.text + "\n" +
        "Produto: " + 'iPad Mini');
        
        var image = document.getElementById('imagemProduto');
        image.src = ('img/ipadImg1.jpg');

        $("#display").css("display", "block");
        $("#display1").css("display", "block");
        $("#display2").css("display", "block");
        $("#display3").css("display", "block");
        $("#display4").css("display", "block");

        $('h2[id=nome]').text('iPad Mini');
        $('p[id=valor]').text('Valor: R$ 3.499,00');
        $('p[id=sistemaOperacional]').text('Sistema Operacional: iOS');
        $('p[id=processador]').text('Processador: A12 Bionic');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: 1.2Ghz');
        $('p[id=memoriaRam]').text('Memória RAM: 3GB');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: 64GB');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: 254GB');
        $('p[id=tela]').text('Tela: 7.9 Polegadas');
        $('p[id=tipoChip]').text('Tipo de chip: não possui');
        $('p[id=conectividade]').text('Conectividade: Wifi');
        $('p[id=cameraFrontal]').text('Câmera frontal: 1.2 MP');
        $('p[id=cameraTraseira]').text('Câmera Traseira: 8 MP');
      }
      else if(result.text == 989895555){
        alert("Produto encontrado\n" +
        "Código: " + result.text + "\n" +
        "Produto: " + 'Samsung Galaxy J8');

        var image = document.getElementById('imagemProduto');
        image.src = ('img/galaxyJ8Img1.jpg');
                
        $("#display").css("display", "block");
        $("#display1").css("display", "block");
        $("#display2").css("display", "block");
        $("#display3").css("display", "block");
        $("#display4").css("display", "block");

        $('h2[id=nome]').text('Samsung Galaxy J8');
        $('p[id=valor]').text('Valor: R$ 1.888,00');
        $('p[id=sistemaOperacional]').text('Sistema Operacional: Android');
        $('p[id=processador]').text('Processador: Octa-Core');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: 1.8Ghz');
        $('p[id=memoriaRam]').text('Memória RAM: 4GB');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: 64Gb');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: 512GB');
        $('p[id=tela]').text('Tela: 6.0');
        $('p[id=tipoChip]').text('Tipo de chip: Nano SIM');
        $('p[id=conectividade]').text('Conectividade: 2G, 3G, 4G');
        $('p[id=cameraFrontal]').text('Câmera frontal: 16MP');
        $('p[id=cameraTraseira]').text('Câmera Traseira: Dual Câmera 16MP');
      }else if(result.text == 85236987){
        alert("Produto encontrado\n" +
        "Código: " + result.text + "\n" +
        "Produto: " + 'Motorola One XT1941');

        var image = document.getElementById('imagemProduto');
        image.src = ('img/oneXt1941Img1.jpg');
                
        $("#display").css("display", "block");
        $("#display1").css("display", "block");
        $("#display2").css("display", "block");
        $("#display3").css("display", "block");
        $("#display4").css("display", "block");

        $('h2[id=nome]').text('Motorola One XT1941');
        $('p[id=valor]').text('Valor: R$ 1.189,15');
        $('p[id=sistemaOperacional]').text('Sistema Operacional: Android');
        $('p[id=processador]').text('Processador: Snapdragon 625');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: 2.0 GHz');
        $('p[id=memoriaRam]').text('Memória RAM: 4GB');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: 64GB');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: 256GB');
        $('p[id=tela]').text('Tela: 5.9');
        $('p[id=tipoChip]').text('Tipo de chip: Nano SIM');
        $('p[id=conectividade]').text('Conectividade: 2G, 3G, 4G');
        $('p[id=cameraFrontal]').text('Câmera frontal: 8MP');
        $('p[id=cameraTraseira]').text('Câmera Traseira: 13MP');
      }else if(result.text == 85369877444){
        alert("Produto encontrado\n" +
        "Código: " + result.text + "\n" +
        "Produto: " + 'Asus Zenfone Max Pro M1');

        var image = document.getElementById('imagemProduto');
        image.src = ('img/zenfoneMaxImg1.jpg');
                
        $("#display").css("display", "block");
        $("#display1").css("display", "block");
        $("#display2").css("display", "block");
        $("#display3").css("display", "block");
        $("#display4").css("display", "block");

        $('h2[id=nome]').text('Asus Zenfone Max Pro M1');
        $('p[id=valor]').text('Valor: R$ 1.199,00');
        $('p[id=sistemaOperacional]').text('Sistema Operacional: Android');
        $('p[id=processador]').text('Processador: Snapdragon 636');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: 1.8 Ghz');
        $('p[id=memoriaRam]').text('Memória RAM: 3GB');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: 32GB');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: 2000GB');
        $('p[id=tela]').text('Tela: 6.0');
        $('p[id=tipoChip]').text('Tipo de chip: Nano SIM');
        $('p[id=conectividade]').text('Conectividade: 2G, 3G, 4G');
        $('p[id=cameraFrontal]').text('Câmera frontal: 8MP');
        $('p[id=cameraTraseira]').text('Câmera Traseira: Dual 13+5 MP');
      }else{
        // alerta para códigos não cadastrados
        alert("Produto não cadastrado!\n" +
        "Aviso: " + 'Por favor, utilize um código de barras cadastrado');

        var image = document.getElementById('imagemProduto');
        image.src = ('img/block.png');
                
        $("#display").css("display", "none");
        $("#display2").css("display", "none");
        $("#display3").css("display", "none");
        $("#display4").css("display", "none");
      }

    }, function(error) {
    alert("Scanning failed: " + error);
    }
   );
  }
