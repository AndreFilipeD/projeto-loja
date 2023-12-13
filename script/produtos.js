//window.document.getElementById('showProduct').style="display:none;"
var unitMonetaria = "R$ ";
var sliderPage = window.document.getElementById('mainSlider');
var filtro = "none";
var cont = 0; memory = 0; memoryB = 0;
var sizeSelected = -1;
var colorSelected = 0;
var storageSize
var storageColor
var antigoval = 0;
var atualval = 0;
var mostruarioIndice = -1;
var txtsend = ''
var telnumber = 19997597681
var carrinhoLoja = []
var produtosLoja = [

    //---------------------------------------------
    {nome:'Blusa de exemplo',
    indice:0,qnt:0,size:0,color:1,alt:'Camiseta',
    img_a:'produtos/roupas_Teste/blusa_exemplo.png',
    img_b:'produtos/roupas_Teste/conjunto_masculino_exemplo.png',
    img_c:'produtos/roupas_Teste/conjunto_unisex_exemplo.png',
    info:'Blusa branca padrão feita de algodão',
    peso:'198g',material:'algodão',
    cor:['branco','azul','preto'],
    tamanho:['P','M','G'],
    valorAntigo:0,
    valorAtual:39.99,
    categoria:['Camisa']}
    ,//---------------------------------------------
    {nome:'Super conjunto social de casal para festas de exemplo',
    indice:0,qnt:0,size:0,color:1,alt:'Conjunto',
    img_a:'produtos/roupas_Teste/conjunto_casal_exemplo.png',
    img_b:'produtos/roupas_Teste/conjunto_casal_exemplo.png',
    img_c:'produtos/roupas_Teste/conjunto_casal_exemplo.png',
    info:'Conjunto social de luxo para eventos de alto nivel',
    peso:'853g',material:'algodão, poliester e nanofibras',
    cor:['vermelho','preto'],
    tamanho:['M'],
    valorAntigo:599.90,
    valorAtual:129.90,
    categoria:['Camisa','Vestido','Calça']}
    ,//---------------------------------------------
    {nome:'Conjunto feminino de exemplo',
    indice:0,qnt:0,size:0,color:1,alt:'Conjunto',
    img_a:'produtos/roupas_Teste/conjunto_feminino_exemplo.png',
    img_b:'produtos/roupas_Teste/vestido_exemplo.png',
    img_c:'produtos/roupas_Teste/conjunto_feminino_exemplo.png',
    info:'Conjunto de peças feminina para o dia a dia',
    peso:'378g',material:'algodão e poliester',
    cor:['verde'],
    tamanho:['M'],
    valorAntigo:89.90,
    valorAtual:74.49,
    categoria:['Camisa','Vestido']}
    ,//---------------------------------------------
    {nome:'Conjunto masculino de exemplo',
    indice:0,qnt:0,size:0,color:1,alt:'Conjunto',
    img_a:'produtos/roupas_Teste/conjunto_masculino_exemplo.png',
    img_b:'produtos/roupas_Teste/conjunto_masculino_exemplo.png',
    img_c:'produtos/roupas_Teste/conjunto_masculino_exemplo.png',
    info:'Conjunto masculino leve e respirável para a prática de esporte',
    peso:'328g',material:'Poliester',
    cor:['branco'],
    tamanho:['PP','P','M','G','GG','XG'],
    valorAntigo:99.90,
    valorAtual:64.90,
    categoria:['Camisa','Calça']}
    ,//---------------------------------------------
    {nome:'Conjunto unisex de exemplo',
    indice:0,qnt:0,size:0,color:1,alt:'Conjunto',
    img_a:'produtos/roupas_Teste/conjunto_unisex_exemplo.png',
    img_b:'produtos/roupas_Teste/conjunto_unisex_exemplo.png',
    img_c:'produtos/roupas_Teste/conjunto_unisex_exemplo.png',
    info:'Camiseta branca e calça jeans unisex padrão para uso geral',
    peso:'521g',material:'algodão e Jeans',
    cor:['preto','azul'],
    tamanho:['33','36','41','47'],
    valorAntigo:74.99,
    valorAtual:69.90,
    categoria:['Camisa','Calça']}
    ,//---------------------------------------------
    {nome:'Vestido luxuoso de exemplo',
    indice:0,qnt:0,size:0,color:1,alt:'Vestido',
    img_a:'produtos/roupas_Teste/vestido_exemplo.png',
    img_b:'produtos/roupas_Teste/vestido_exemplo.png',
    img_c:'produtos/roupas_Teste/vestido_exemplo.png',
    info:'Vestido estilizado e embedado em joias para eventos de alto nivel',
    peso:'679g',material:'nanofibras e zircônio',
    cor:['rosa'],
    tamanho:['40','42','44'],
    valorAntigo:569.35,
    valorAtual:378.89,
    categoria:['Vestido']}
    ,//---------------------------------------------
    {nome:'Vestido casual de exemplo',
    indice:0,qnt:0,size:0,color:1,alt:'Vestido',
    img_a:'produtos/roupas_Teste/vestido_exemplo.png',
    img_b:'produtos/roupas_Teste/vestido_exemplo.png',
    img_c:'produtos/roupas_Teste/vestido_exemplo.png',
    info:'Vestido casual para o dia a dia',
    peso:'443g',material:'algodão',
    cor:['violeta'],
    tamanho:['M'],
    valorAntigo:49.90,
    valorAtual:45.90,
    categoria:['Vestido']}
    ,//---------------------------------------------
    {nome:'Blusa de exemplo',
    indice:0,qnt:0,size:0,color:1,alt:'Camiseta',
    img_a:'produtos/oficial/conjunto_calca.png',
    img_b:'produtos/oficial/conjunto_calca.webp',
    img_c:'produtos/oficial/conjunto_calca.png',
    info:'Blusa branca padrão feita de algodão',
    peso:'198g',material:'algodão',
    cor:['azul'],
    tamanho:['M'],
    valorAntigo:79.90,
    valorAtual:49.99,
    categoria:['Calça']}
    ,//---------------------------------------------
    {nome:'Blusa de exemplo',
    indice:0,qnt:0,size:0,color:1,alt:'Camiseta',
    img_a:'produtos/oficial/conjunto_calca2.png',
    img_b:'produtos/oficial/conjunto_calca2.png',
    img_c:'produtos/oficial/conjunto_calca2.png',
    info:'Blusa branca padrão feita de algodão',
    peso:'198g',material:'algodão',
    cor:['azul'],
    tamanho:['M'],
    valorAntigo:59.90,
    valorAtual:39.99,
    categoria:['Calça']}

]//||------||------|| FIM DOS PRODUTOS DA LOJA ||------||------||

function startIndice(){// ATRIBUI O INDICE DE CADA ITEM AUTOMATICAMENTE
    for(c in produtosLoja){
        produtosLoja[c].indice=Number(c)}
}startIndice()
function cleanProduct(){// REMOVE TODOS OS PRODUTOS DO SITE PARA ATUALIZAÇÃO
    window.document.querySelector(".shopItens").innerHTML="";cont=0;
    showProduct(-1);
}
function loadProduct(filtroSelecionado){// CARREGA E FILTRA PRODUTOS SE NECESSÁRIO
    filtro=filtroSelecionado; // LINHA DISPENSAVEL?
    cleanProduct();
    for(c in produtosLoja){
        if(filtro==="none"){//se não houver nenhum filtro
            cont++
            window.document.querySelector(".shopItens").innerHTML+=`
            <div class='shopProduct' onclick="showProduct(${produtosLoja[c].indice})"> 
            <img src="${produtosLoja[c].img_a}" alt="${produtosLoja[c].alt}">
            <div class='descProduto'>
            <h1 class='nomeProduto'>
            ${produtosLoja[c].nome}
            </h1>
            <p class='antigoProduto'>
            ${produtosLoja[c].valorAntigo > 0 ? "de: "+ unitMonetaria+produtosLoja[c].valorAntigo.toFixed(2).replace('.',',') : ""}
            </p>
            <p class='valorProduto'>
            <strong class="smallpricetext">por 
            </strong>${unitMonetaria+produtosLoja[c].valorAtual.toFixed(2).replace('.',',')} 
            <strong class="smallpricetext"> à vista
            </strong>
            </p>
            </div>
            </div>`
            window.document.querySelector("#msgIntro").innerHTML="Seja bem vindo!";
        }else if(produtosLoja[c].categoria.indexOf(filtro)!=-1){//caso selecione algum filtro
                cont++;
                window.document.querySelector(".shopItens").innerHTML+=`
                <div class='shopProduct' onclick="showProduct(${produtosLoja[c].indice})">
                <img src="${produtosLoja[c].img_a}" alt="${produtosLoja[c].alt}">
                <div class='descProduto'>
                <h1 class='nomeProduto'>
                ${produtosLoja[c].nome}
                </h1>
                <p class='antigoProduto'>
                ${produtosLoja[c].valorAntigo > 0 ? "de: "+unitMonetaria+produtosLoja[c].valorAntigo.toFixed(2).replace('.',',') : ""}
                </p>
                <p class='valorProduto'>
                <strong class="smallpricetext">por 
                </strong>${unitMonetaria+produtosLoja[c].valorAtual.toFixed(2).replace('.',',')} 
                <strong class="smallpricetext"> à vista
                </strong>
                </p>
                </div>
                </div>`

                window.document.querySelector("#msgIntro").innerHTML=`- Foram encontrado(s) ${cont} item(ns) da categoria '${filtro}'. <a href='#' onclick='loadProduct("none")'>remover filtros</a>`
        }
    }
    if(cont===0){// Caso não encontre nenhum item do filtro selecionado
        window.document.querySelector(".shopItens").innerHTML="<img src='images/icons/saderror.png' alt='nãoencontrado' style='width:48px;padding-top: 100px;'>";
        window.document.querySelector("#msgIntro").innerHTML=`No momento, estamos sem produtos da categoria '${filtro}' <a href='#' onclick='loadProduct("none")' style="padding:2px;">remover filtros</a>.`;
    }
}loadProduct("none");// padrão "none" Sem filtro

function showProduct(showIs){// APRESENTA PRODUTO SELECIONADO NO MOSTRUÁRIO
    if(showIs === -1){
        window.document.getElementById('showProduct').style="display:none;";
        window.document.querySelector("#mainSlider").style="display: block;";
        mostruarioIndice = -1;
    }else{
        //Resetando tamanho selecionado
        sizeSelected = -1
        //Resetando cor selecionada
        colorSelected = 0
        //Resetando cor do botão de adicionar
        window.document.querySelector(".cartButton").style=""
        window.document.querySelector(".cartButton").innerHTML="Adicionar ao carrinho"
        //Coletando Indice de Mostruário atual
        mostruarioIndice = showIs;
        //Coletando preço para atualização
        antigoval = produtosLoja[showIs].valorAntigo;
        atualval = produtosLoja[showIs].valorAtual;
        //Esconde Slider para mostrar o produto
        window.document.querySelector("#mainSlider").style="display: none;";
        //Rola pagina da tela até o topo
        window.scrollTo(0,0);
        //Altera a mensagem para Veja mais
        window.document.querySelector("#msgIntro").innerHTML="Veja mais";
        //Habilita visualização do mostruário
        window.document.getElementById('showProduct').style="display:grid;";
        //Atualiza PESO, COR, TAMANHO, MATERIAL e INFORMAÇÃO
        window.document.querySelector(".pshowDef").innerHTML=`<strong>Peso:</strong> ${produtosLoja[showIs].peso}<br><strong>Cor: </strong>${produtosLoja[showIs].cor}<strong><br>Tamanho:</strong> ${produtosLoja[showIs].tamanho}<br><strong>Material:</strong> ${produtosLoja[showIs].material}<br><br><hr><strong>Descrição do produto<br></strong>${produtosLoja[showIs].info}`;
        //Verificando se terá valorAntigo, Para assim atualizar corretamente
        if(antigoval>0){
        window.document.querySelector(".pshowCartadd").innerHTML=`<h2 class="pshowName">${produtosLoja[showIs].nome}</h2><strong class="olderPrice">de: ${unitMonetaria+produtosLoja[showIs].valorAntigo.toFixed(2).replace('.',',')}</strong><strong class="actualPrice"><strong class="smallpricetext">por </strong>R$ ${produtosLoja[showIs].valorAtual.toFixed(2).replace('.',',')}<strong class="smallpricetext"> à vista</strong></strong>`;
        }else{// /\ Valor anterior > 0 || \/ Valor anterior =< 0
        window.document.querySelector(".pshowCartadd").innerHTML=`<h2 class="pshowName">${produtosLoja[showIs].nome}</h2><br><strong class="actualPrice"><strong class="smallpricetext">por </strong>R$ ${produtosLoja[showIs].valorAtual.toFixed(2).replace('.',',')}<strong class="smallpricetext"> à vista</strong></strong>`;
        }
        //criando seletor de tamanho, caso haja mais de 1 - SELETOR DE TAMANHO
        if(produtosLoja[showIs].tamanho.length > 1){
            window.document.querySelector(".pshowCartadd").innerHTML+=`<br><div class="cartsizeSelect nselm" style="margin-top: auto;"><p style="font-size: .8em;">Selecione o tamanho</p></div>`
            for(c in produtosLoja[showIs].tamanho){
                window.document.querySelector(".cartsizeSelect").innerHTML+=`<div class="csizeButton" onclick="setSize(${c})">${produtosLoja[showIs].tamanho[c]}</div>`
            }
        }else{sizeSelected=0}
        //criando seletor de cor, caso haja mais de 1 - SELETOR DE COR
        
        if(produtosLoja[showIs].cor.length > 1){//Existe mais de 1 cor no produto?
            window.document.querySelector(".pshowCartadd").innerHTML+=`<div class="cartcolorSelect nselm"><p style="font-size: .8em;">Selecione a cor</p></div>`

            window.document.querySelector(".cartcolorSelect").style="margin-top: 0px;"
            for(c in produtosLoja[showIs].cor){//Criando botões de cor
                window.document.querySelector(".cartcolorSelect").innerHTML+=`<div class="ccolorButton" onclick="setColor(${c})">${produtosLoja[showIs].cor[c]}</div>`
            }
            storageColor = window.document.getElementsByClassName("ccolorButton")
            storageColor[colorSelected].style="border: 3px solid #883636; background-color: #883636;color: white;"
        }
        //Atualiza IMAGEM PRINCIPAL produto selecionado
        window.document.querySelector(".pshowMainimage").setAttribute('src',produtosLoja[showIs].img_a);
        //Atualiza IMAGENS SEGUNDARIAS prod.selecionado
        window.document.querySelector(".SecimgA").setAttribute('src',produtosLoja[showIs].img_a);
        window.document.querySelector(".SecimgB").setAttribute('src',produtosLoja[showIs].img_b);
        window.document.querySelector(".SecimgC").setAttribute('src',produtosLoja[showIs].img_c);
        //Atualiza DESCONTO PORCENTAGEM produto selecionado
        if(antigoval > atualval){
            window.document.querySelector(".pshowPromo").style="display: absolute;";
            window.document.querySelector(".pshowPromo").innerHTML=`${Math.round(((100/antigoval)*atualval)-100)}% OFF`;
        }else{// /\ Calcula e mostra Desconto em % na foto || \/ Esconde desconto
            window.document.querySelector(".pshowPromo").style="display: none;";
        }
    }
}

function setSize(sizeIs){
    window.document.querySelector(".cartButton").style=""
    window.document.querySelector(".cartButton").innerHTML="Adicionar ao carrinho"
    storageSize = window.document.getElementsByClassName("csizeButton")
    for(c in storageSize){
        storageSize[c].style=""
    }
    sizeSelected=sizeIs
    storageSize[sizeSelected].style="border: 3px solid #883636; background-color: #883636;color: white;"
}
function setColor(colorIs){
    storageColor = window.document.getElementsByClassName("ccolorButton")
    for(c in storageColor){
        storageColor[c].style=""
    }
    colorSelected=colorIs
    storageColor[colorSelected].style="border: 3px solid #883636; background-color: #883636;color: white;"
}

function changePicture(picIs){// MUDA A FOTO AO CLICAR NO MOSTRUÁRIO
    switch(picIs){
        case 1:
            window.document.querySelector(".pshowMainimage").setAttribute('src',produtosLoja[mostruarioIndice].img_a);
            break;
        case 2:
            window.document.querySelector(".pshowMainimage").setAttribute('src',produtosLoja[mostruarioIndice].img_b);
            break;
        case 3:
            window.document.querySelector(".pshowMainimage").setAttribute('src',produtosLoja[mostruarioIndice].img_c);
            break;
    }
}
function debugPage(){
    for(c in carrinhoLoja){
        window.alert(carrinhoLoja[c].size)
    }
}
function addCart(sel){// ADICIONA OU ACRESCENTA, ATUALIZA E ENVIA CARRINHO DE COMPRAS
if(sizeSelected!=-1){//Se um tamanho já foi selecionado
    clickthrow(2)//abre carrinho
    cont = 0;//zera contador
    window.document.querySelector(".cartList").innerHTML="";//limpa carrinho
    if(sel===1){//caso esteja adicionando algo ao carrinho
        
        for(c in carrinhoLoja){//verifique em todos os itens do carrinho
            //carrinhoLoja[c].indice===produtosLoja[mostruarioIndice].indice && 
            if(carrinhoLoja[c].size===sizeSelected){//antes tinha o indice acima
            //se o tamanho é o mesmo
                cont++;memory=c;
             //cont avisa se o item foi encontrado no carrinho atual
            }//memory armazena qual item deve receber aumento de quantidade caso seja igual
        }
        if(cont>0){//Acrescenta o item em +1 caso ele já esteja na loja
            carrinhoLoja[memory].qnt+=1;
        }else{//caso não encontre o mesmo item, cria um novo
            carrinhoLoja.push(produtosLoja[mostruarioIndice]);
            produtosLoja[mostruarioIndice].qnt = 1;
            
            //Possivel problema: Não se pode chamar objetos por indice
            // Logo não é possivel atribuir o valor de forma individual
            //Solução: indexar os objetos dentro do carrinho
            
            carrinhoLoja[Number(carrinhoLoja.length - 1)]["size"] = sizeSelected
            carrinhoLoja[Number(carrinhoLoja.length - 1)]["color"] = colorSelected
            
            //carrinhoLoja[0].size=999 PROVOU O PROBLEMA

            for(c in carrinhoLoja){
                window.alert("Objeto ["+c+"] size:"+carrinhoLoja[c]["size"]+"|| color:"+carrinhoLoja[c]["color"])
            }
        }
    }
    criarCarrinho()//cria o carrinho junto de seu texto para Whatsapp
}else{//Caso não tenha escolhido um tamanho
    //window.document.querySelector(".cartButton").setAttribute("onclick","addCart(1), clickthrow(0)")
    window.document.querySelector(".cartButton").style="background-color: #883636;box-shadow: 0px 2px 0px #602626;"
    window.document.querySelector(".cartButton").innerHTML="Escolha um tamanho!"
}
}

function criarCarrinho(){
    memory=0
    memoryB=0
    for(c in carrinhoLoja){
        window.document.querySelector(".cartList").innerHTML+=`<div class="cartElement"><img class="cartElementImg" src="${carrinhoLoja[c].img_a}" alt="${carrinhoLoja[c].alt}"><div class="cartElementName">${carrinhoLoja[c].nome}<br><br><strong>R$ ${carrinhoLoja[c].valorAtual.toFixed(2).replace('.',',')}</strong></div><div class="cartElementInfo"><strong>tamanho: </strong>${carrinhoLoja[c].tamanho[carrinhoLoja[c].size]}<br><strong>cor: </strong>${carrinhoLoja[c].cor[carrinhoLoja[c].color]}</div><div class="cartElementConfig"><div class="cartECplus nselm" onclick="changeCart(${c},2)">+</div><div class="cartQntValue nselm">${carrinhoLoja[c].qnt}</div><div class="cartECless nselm" onclick="changeCart(${c},1)">-</div><img class="cartECjunk nselm" onclick="changeCart(${c},0)" src="images/icons/delete.png" alt="${carrinhoLoja[c].alt}"></div></div>`
        memory+=(carrinhoLoja[c].valorAtual*carrinhoLoja[c].qnt)
        memoryB+=(carrinhoLoja[c].qnt)
    }
    window.document.querySelector(".cartResume").innerHTML=`<strong class="smallpricetext">Você possui <strong>${memoryB}</strong> produto(s) em seu carrinho.</strong><br><br><hr><br><strong>Total:</strong> <strong class="totalcartPrice">${unitMonetaria+memory.toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 3
      })}</strong> <strong>+ FRETE</strong>`;

      txtsend = encodeURIComponent(`🦒Olá, Império Francisca!
Acabei de montar meu carrinho! 💖
`)

      for(c in carrinhoLoja){
        txtsend+= encodeURIComponent(`
• ${carrinhoLoja[c].nome} [${carrinhoLoja[c].cor[carrinhoLoja[c].color]}] ${carrinhoLoja[c].tamanho[carrinhoLoja[c].size]} - ${carrinhoLoja[c].qnt} un x ${unitMonetaria+carrinhoLoja[c].valorAtual.toFixed(2).replace('.',',')}`)
      }
      txtsend+=encodeURIComponent(`
_________________________________
Total:
${unitMonetaria+memory.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 3
})} + FRETE
      
Fico no aguardo de seu atendimento.`)

      window.document.querySelector('.cartSendButton').setAttribute("href","https://api.whatsapp.com/send/?phone="+telnumber+"&text="+txtsend)

}
function changeCart(selected, action){// CONTROLA QUANTIDADE POR PRODUTO E NOTIFICA SITUAÇÃO
    switch(action){
        case 0://apague o item selecionado
            carrinhoLoja.splice(selected, 1);
            addCart(0);
            break;
        case 1://subtrai um do item selecionado
            carrinhoLoja[selected].qnt-=1
            //caso resultado seja menor que 1, apague o item
            if(carrinhoLoja[selected].qnt<1){
                carrinhoLoja.splice(selected, 1);
            }
            addCart(0);
            break;
        case 2://adiciona mais um ao item selecionado
            carrinhoLoja[selected].qnt+=1
            addCart(0);
            break;

            //o 1 de splice significa que a partir do elemento selected,
            //ele deve remover apenas 1 elemento.
    }
    if(carrinhoLoja.length<1){
        window.document.querySelector(".cartList").innerHTML=`<div class="cartListnone">Você ainda não tem nenhum item em seu carrinho</div><img src="images/icons/saderror.png" alt="nonecart">`
    }
}