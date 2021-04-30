
traerDatos();

function traerDatos(){
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', './app/BD.json', true);
  xhttp.send();

  xhttp.onreadystatechange = function (){

    if(this.readyState == 4 && this.status == 200){
      let datos = JSON.parse(this.responseText);
      localStorage.setItem('productos', JSON.stringify(datos));
      let res = document.querySelector('#res');
      res.innerHTML = '';

      for(let item of datos){
        // console.log(item);
        res.innerHTML += `
            <div id="${item.id}" class="col-4 product-item" category="${item.Categoria}">
              <h4>${item.Nombre}</h4>
              <a href="product-detail.html?id=${item.id}"><img src="${item.Imagen}"></a>
            </div>
        `
      }
    }
  }
}
