let evInput=document.getElementById('inputLogo')

function  handleFiles(){
	const listImage = this.files
	
	const preview = document.getElementById('previewLogo');
	
	for (let i = 0;i < listImage.length;i++){
		const file = listImage[i]
		
		if(!file.type.startsWith('image/')){continue}
	
		const img = document.createElement("img");
		img.classList.add('logo');
		img.file = file;
		let view = document.querySelector('.logo');
		
		
		if(view === null){
			preview.appendChild(img);
		}
		if(view != null) {
			preview.removeChild(view)
			preview.appendChild(img);
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

