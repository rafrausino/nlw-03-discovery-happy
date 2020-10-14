const options = {
  dragging: false,
  touchZoom: false,
  doubleClickZoom: false,
  scrollwheelZoom: false,
  zoomControl: false
}
// create map
const map = L.map("mapid", options).setView([-30.1087957, -51.3172272], 12);

// create and add tileLayer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "./public/images/map-marker.svg",
  iconSite: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

// create and adn marker
L.marker([-30.1087957, -51.3172272], { icon }).addTo(map);

// image gallery

function selectImage(event){
  const button = event.currentTarget

  console.log(button.children)

  //remover todas as classes .active
  const buttons = document.querySelectorAll(".images button")
  buttons.forEach(removeActiveClasse);

  function removeActiveClasse(button){
    button.classList.remove('active');
  }

  // selecionar a image clicada
  const image = button.children[0]
  const imageContainer = document.querySelector(".orphanage-details > img");

  //atualizar o container de image
  imageContainer.src = image.src
  //adicionar a classe .active para este botao
  button.classList.add('active');
}