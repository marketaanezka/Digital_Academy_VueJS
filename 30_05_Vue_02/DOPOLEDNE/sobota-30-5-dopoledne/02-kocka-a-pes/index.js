'use strict';

/*
1) Vytvoř základní Vue aplikaci

2) Do šablony přidej obrázek, který zobrazuje fotku ovce.

3) Do šablony přidej dvě tlačítka, "Kočka" a "Pes".
	 Když se klikne na tlačítko, zavolá se metoda, která
	 změní obrázek na kočku nebo psa.

4) Nezapomeň, že obrázek má i povinný atribut alt, takže
	 musíš měnit i ten.

5) Do šablony přidej pod obrázek ještě odstavec, do kterého
	 při kliknutí na tlačítko vepíšes vymyšlený krátký popis
	 zvířátka.

	 V textu vypíchni některá slova tučně - např. u kočky zvýrazni
	 všechny její hrozné vlastnosti. Kočky jsou záludná stvoření,
	 se sepsáním jejích špatných vlastností bys neměla mít problém.

	 Záporné vlastnosti budeš u psa hledat těžko, tak
	 zdůrazni ty hezké. Např. že je to miloučké stvoření a nejlepší
	 přítel člověka.
*/

new Vue ({
	el: "#app",
	data: {
		imgSrc: "ovce",
		imgAlt: "picture of a sheep",
		about: "Sheep are fluffy and loud"
	},
	methods: {
		showCat() {
			this.imgSrc = "kocka",
			this.imgAlt = "a picture of a cat"
			this.about = "Cats are <strong>lovely, independent and intelligent<strong>."
		},
		showDog() {
			this.imgSrc = "pes",
			this.imgAlt = "a picture of a dog"
			this.about = "Dogs are <strong>clingy, annoying and time consuming<strong>."
		}
	}
})


