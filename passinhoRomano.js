var escolher = document.querySelector('#escolher');
var campo = document.querySelector('#campo');
var cod = document.querySelector('#cod');
var deco = document.querySelector('#deco')


escolher.addEventListener("change", function (e){
    e.preventDefault();
    if(escolher.selectedIndex == 2){
        campo.innerHTML = 
            `<label for="mensagem">Mensagem a ser codificada</label>
            <input type="text"  id="mensagem" >`;
        //  alert('khd')   
    }
        
})
cod.addEventListener("click", function(e){
    mensagem.innerHTML =
        `Codificar mensagem!`;
        
})
deco.addEventListener("click", function(e){
    mensagem.innerHTML =
        `Decodificar mensagem!`;
        
})