//Caso atualizar a pagina

window.addEventListener("beforeunload",(event)=>{
	  // Cancel the event as stated by the standard.
	  event.preventDefault();
	  // Chrome requires returnValue to be set.
	  event.returnValue = '';
})
//fimc caso atualizar a tela

//caucula valor total do item
function caulaValorTotalItem(){

	let quantidade = document.getElementById('quantidade').value
	let vunitario = document.getElementById('vunitario').value


	if(isNaN(vunitario)){
		document.getElementById('vunitario').style.backgroundColor="#F78181"
		document.getElementById('btn-add').setAttribute('disabled','')
		document.getElementById('btn-add').style.backgroundColor="#eee"
	}else{
		document.getElementById('btn-add').removeAttribute('disabled','')
		document.getElementById('btn-add').style.backgroundColor="#9dcf6b"
		document.getElementById('vunitario').style.backgroundColor="#CEF6CE"
		
		vtotal = (quantidade * vunitario)
		return vtotal.toFixed(2)//toLocaleString('pt-BR',{style:'currency',currency:'BRL'})
	}
		

}
// fim caucula valor total do item

document.getElementById('quantidade').addEventListener('keyup',function(){

	document.getElementById('vtotal').value= caulaValorTotalItem()
})

document.getElementById('vunitario').addEventListener('keyup',function(){
	document.getElementById('vtotal').value= caulaValorTotalItem()

})
document.getElementById('quantidade').addEventListener('blur',function(){

	document.getElementById('vtotal').value= caulaValorTotalItem()
})
document.getElementById('vtotal').addEventListener('blur',function(){

	document.getElementById('vtotal').value= caulaValorTotalItem()
})
//Adiciona item a tabela
function adicionaItem(){
	let input = document.querySelectorAll('input')

	let valor_totalId = document.getElementById('vtotal')
	let descrcaoId = document.getElementById('descricao')
	let quantidadeId = document.getElementById('quantidade')  
	let valorUnitarioId = document.getElementById('vunitario')

	if(valor_totalId.value=="" || descrcaoId.value=="" ||quantidadeId.value=="" || valorUnitarioId.value==""){
		document.getElementById("msg-erro").style.display="block"
		
	}
	else{

		document.getElementById("msg-erro").style.display="none"
			
		console.log(input)
		for(i=0;i<input.length;i++){
			//console.log(input[i].value)

			var dataQuantidade = document.createElement('td')
			var dataDescricao = document.createElement('td')
			var dataVunitario = document.createElement('td')
			var dataVtoal = document.createElement('td')
			var btn_delet = document.createElement('button')

			let quantidade = document.createTextNode(input[0].value)
			let descricao = document.createTextNode(input[1].value)
			let vunitario = document.createTextNode(input[2].value)
			let vtotal = document.createTextNode(input[3].value)
			let btn_text = document.createTextNode('X')


			btn_delet.setAttribute('type','button')
			btn_delet.setAttribute('class','btn_delet')
			btn_delet.setAttribute('title','Remover item')

			dataDescricao.appendChild(descricao)
			dataQuantidade.appendChild(quantidade)
			dataVunitario.appendChild(vunitario)
			dataVtoal.appendChild(vtotal)
			dataVtoal.setAttribute('class','totalItem')
			btn_delet.appendChild(btn_text)

		
		}
			let tr = document.createElement('tr')

			tr.appendChild(dataDescricao)
			tr.appendChild(dataQuantidade)
			tr.appendChild(dataVunitario)
			tr.appendChild(dataVtoal)
			tr.appendChild(btn_delet)

			document.getElementById('data-table').appendChild(tr)
			document.getElementById('quantidade').value=''
			document.getElementById('descricao').value=''
			document.getElementById('vunitario').value=''
			document.getElementById('vtotal').value=''

			cauculaTotalOrcamento()
			geraIdItem()
			listButtons()
	}
}
function geraIdItem(){
	let listTr =  document.querySelectorAll('tr')
	
	for(let i=0;i<listTr.length;i++){
		//console.log(listTr[i].rowIndex)
		listTr[i].setAttribute('id','linha-tr'+i)
		let btn = listTr[i].lastElementChild;

		btn.setAttribute('id','btn'+i)
		
	}
}
