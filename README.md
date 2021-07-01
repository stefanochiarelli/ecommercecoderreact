##README##

COMO FUNCIONA??

-App.js tiene un browserRouter. Si uno cliquea en home y en el brand eso redirecciona a ItemListContainer, que es el home.
Catalogo, tiene tambien rutas pero para sus diferentes categorias que son suave fuerte y medio. Use el hook "useParams" propio de 
ReactRouter, para darme cuenta que categoria esta siendo clickeada, asi se actualiza ItemListContainer con los elementos de esa 
respectiva Categoria.

Cuando uno clickea en "Ver Detalla" pasa algo similar a Catalogo, solo que lleva a la vista previa, el ItemDetailContainer, del
Cafe clickeado.
