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
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: ');
        $('p[id=memoriaRam]').text('Memória RAM: ');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: ');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: ');
        $('p[id=tela]').text('Tela: ');
        $('p[id=tipoChip]').text('Tipo de chip: ');
        $('p[id=conectividade]').text('Conectividade: ');
        $('p[id=cameraFrontal]').text('Câmera frontal: ');
        $('p[id=cameraTraseira]').text('Câmera Traseira: ');
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
        $('p[id=sistemaOperacional]').text('Sistema Operacional: ');
        $('p[id=processador]').text('Processador: ');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: ');
        $('p[id=memoriaRam]').text('Memória RAM: ');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: ');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: ');
        $('p[id=tela]').text('Tela: ');
        $('p[id=tipoChip]').text('Tipo de chip: ');
        $('p[id=conectividade]').text('Conectividade: ');
        $('p[id=cameraFrontal]').text('Câmera frontal: ');
        $('p[id=cameraTraseira]').text('Câmera Traseira: ');
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
        $('p[id=sistemaOperacional]').text('Sistema Operacional: ');
        $('p[id=processador]').text('Processador: ');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: ');
        $('p[id=memoriaRam]').text('Memória RAM: ');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: ');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: ');
        $('p[id=tela]').text('Tela: ');
        $('p[id=tipoChip]').text('Tipo de chip: ');
        $('p[id=conectividade]').text('Conectividade: ');
        $('p[id=cameraFrontal]').text('Câmera frontal: ');
        $('p[id=cameraTraseira]').text('Câmera Traseira: ');
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
        $('p[id=sistemaOperacional]').text('Sistema Operacional: ');
        $('p[id=processador]').text('Processador: ');
        $('p[id=velocidadeProcessador]').text('Velocidade do processador: ');
        $('p[id=memoriaRam]').text('Memória RAM: ');
        $('p[id=armazenamentoInterna]').text('Armazenamento interno: ');
        $('p[id=armazenamentoExpansivo]').text('Armazenamento Expansivo: ');
        $('p[id=tela]').text('Tela: ');
        $('p[id=tipoChip]').text('Tipo de chip: ');
        $('p[id=conectividade]').text('Conectividade: ');
        $('p[id=cameraFrontal]').text('Câmera frontal: ');
        $('p[id=cameraTraseira]').text('Câmera Traseira: ');
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
