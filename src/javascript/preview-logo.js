let evInput=document.getElementById('inputLogo');


let btnSelect = document.getElementById('btnLogo');
btnSelect.addEventListener('click',function (e){
		if(evInput){
			evInput.click();
		}
	},false)

function  handleFiles(){
	const listImage = this.files
	
	const preview = document.getElementById('previewLogo');
	let tabLogo = document.getElementById('inputLogo').src
	console.log(tabLogo)
	for (let i = 0;i < listImage.length;i++){
		const file = listImage[i]
		
		if(!file.type.startsWith('image/')){continue}
	
		const img = document.createElement("img");
		img.classList.add('logo');
		img.file = file;
		let view = document.querySelector('.logo');
		
		
		if(view === null){
			btnSelect.appendChild(img);
		}
		if(view != null) {
			btnSelect.removeChild(view)
			btnSelect.appendChild(img);
		}
		
	
		const reader = new FileReader();
		
		reader.onload = (function(aImg){return function (e){
				aImg.src = e.target.result;
			}
		})(img);
		reader.readAsDataURL(file)
	}
		
	 
}


evInput.addEventListener('change',handleFiles,false);

