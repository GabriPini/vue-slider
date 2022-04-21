/* MILE STONE 1
Creiamo un oggetto Movie, con le seguenti proprietà:
- images che conterra un lista di immagini 
-  title che conterra il titolo del film 
- category che contiene la categiria del film 
- lenght per la lunghezza del film in minuti
*/

/* Mile stone 2 
creare il markup ed utilizzare le direttive vue per stapare a schermo il film in una card.
mostando prima immagine poi titolo , categoria e lunghezza 
*/

/*Milestone 3
Aggiungiamo 2 freccie al markup e utilizzamole per rendere dinamico lo slider.
al click sulla freccia di destra si scorre all'immagine successiva 
al click sulla freccia di sinistra si scorre al'immagine precedente

*/

/* Milestone 4
Aggiungiamo Delle miniature delle altre immagini . evidenziamo l'immagine selezionata con un border . quando clicchiamo sulle freccie l'immagine evidenziata cambia 
*/


const app = new Vue(
    {
        el : '#app',
        data : {
            activeImage: 0,
            images:[
                {
                    image: 'assets/img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'assets/img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'assets/img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'assets/img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'assets/img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                },
            ],

            
            
            
        },
        methods: {
            
            prevImage(){
                if(this.activeImage === 0)
                this.activeImage = this.images.length
                console.log('prev image')
                  this.activeImage--
              },

              nextImage(){
                
                console.log('next image')
                this.activeImage++
                if(this.activeImage === this.images.length){ 
                    this.activeImage = 0
                }
              } 
        }
    },
);

   