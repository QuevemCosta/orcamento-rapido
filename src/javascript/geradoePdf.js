let btnGeraPdf = document.getElementById('geraPdf')
let btnCancelaDadosEmpresa =  document.getElementById('cancelaDadosEmpresa');
let btnFinalizar = document.getElementById('btnFinalizar');
var setDadosEmpresa = document.getElementById('cabecalio');
let btnLimpaEmpresa = document.getElementById('limpaEmpresa');
//

function cancelaDadosEmpresa(){
    document.getElementById('dados-empresa').style.display="none"
  }
function fechar(view){
	document.getElementById(view).style.visibility=0;
	
}



function getDdados(){
    document.getElementById('dados-empresa').style.display="block"
}
function limpaEmpresa(){
  let filho = document.getElementById("dados-impresa")
  setDadosEmpresa.removeChild(filho)
}

function IncereDadosImpresa(){
   let dadosInputs = document.querySelectorAll('#dados-empresa form input');
  
  const nome = dadosInputs[1].value
  const telefone = dadosInputs[2].value
  const email = dadosInputs[3].value
  const cnpj = dadosInputs[4].value
  const cep = dadosInputs[5].value
  const rua = dadosInputs[6].value
  const numero = dadosInputs[7].value
  const bairro = dadosInputs[8].value
  const cidade = dadosInputs[9].value
  const uf = dadosInputs[10].value
   
   //
   
  let container = document.createElement('div');
  
  let logo = document.querySelector('.logo')
  
  console.log(logo)
  
  let nome_contato = document.createElement('h2');
  
  let contatoEmail = document.createElement('h3');

  let cpf_cnpj = document.createElement('h3');
  
  let endereco = document.createElement('h3');

  let cidade_estado_cep = document.createElement('h3');
  
  let hr = document.createElement('hr');
  
  let tituloDocumneto = document.createElement('h2');
 
  
  let setnome_contato = document.createTextNode(nome +' - '+ telefone,'/r\n')
  let setcontatoEmail = document.createTextNode(email )
  let setcpf_cnpj =  document.createTextNode("CPF/CNPJ: "+cnpj);
  let setendereco = document.createTextNode(rua+', '+numero + '-'+bairro)
  let setcidade_estado_cep = document.createTextNode(cep+', '+cidade + '-'+uf)
  let settituloDocumneto = document.createTextNode('Orçamento')
   
  //
  
  nome_contato.appendChild(setnome_contato);
  contatoEmail.appendChild(setcontatoEmail);
  cpf_cnpj.appendChild(setcpf_cnpj);
  endereco.appendChild(setendereco);
  cidade_estado_cep.appendChild(setcidade_estado_cep)
  tituloDocumneto.appendChild(settituloDocumneto)
  //
  
  container.setAttribute('id','dados-impresa');
  
  container.appendChild(logo)
  container.appendChild(nome_contato);
  container.appendChild(contatoEmail);
  container.appendChild(cpf_cnpj);
  container.appendChild(endereco);
  container.appendChild(cidade_estado_cep);
  container.appendChild(hr);
  container.appendChild(tituloDocumneto);
  
  //

  
  
  setDadosEmpresa.appendChild(container)
  
  cancelaDadosEmpresa();
  
}
  
btnFinalizar.addEventListener('click',IncereDadosImpresa); 
btnCancelaDadosEmpresa.addEventListener('click',cancelaDadosEmpresa)
btnGeraPdf.addEventListener('click',getDdados) 
btnLimpaEmpresa.addEventListener('click',limpaEmpresa);
