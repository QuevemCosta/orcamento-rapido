function removeItem(ev){
  let tr_list =document.querySelectorAll('tr')
    //console.log(tr_list)
    for(i=1;i<tr_list.length;i++)
    tr_list[1].remove(ev)
    cauculaTotalOrcamento()
}
function listButtons(){
    let list_buttons = document.querySelectorAll('.btn_delet')
    
    for(i=0;i<list_buttons.length;i++){
        //console.log(list_buttons[i].id)
        let btn_id = list_buttons[i].id
        btn_ev = "'linha-tr"+btn_id+"'"
        //console.log(btn_ev)
        document.getElementById(btn_id).setAttribute('onclick','removeItem('+btn_ev+')')
    }
}