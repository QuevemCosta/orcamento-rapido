function cauculaTotalOrcamento(){
    var colecao = document.querySelectorAll('.totalItem')

    let valorOrcamento = 0;
    
    if(colecao.length==0){
        document.getElementById('VtodalOrcamento').innerHTML=valorOrcamento.toFixed(2)
    }

    for(let i = 0;i<colecao.length;i++){

        let itemObj= colecao[i].firstChild
        let item = itemObj.nodeValue
        console.log('item '+item)
        //nsole.log(typeof(item))
        
        item = parseFloat(item)
        //console.log(typeof(item))

        valorOrcamento = valorOrcamento+item
    
        document.getElementById('VtodalOrcamento').innerHTML=valorOrcamento.toFixed(2)


    }

}