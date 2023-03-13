function exercice1() {

	let fruits = ["chien", "chat", "poisson", "grenouille"];
	let suppr_last = fruits.pop();
	let add_first = fruits.unshift(suppr_last);	
	document.getElementById("exercice1Resultat").innerHTML = fruits;
}


function exercice2() {
	let texte = "Ici, on entre du texte qu'on va segmenter en "mot".";
	let mots = texte.split(" "); 
	let motsEnMajuscules = []; 

	for (let i = 0; i < mots.length; i++) 
	let motEnMajuscules = mots[i].toUpperCase(); 
  motsEnMajuscules.push(motEnMajuscules); 


	let resultat = motsEnMajuscules.join(" "); 
	document.getElementById("exercice2Resultat").innerHTML = resultat; 


}


function exercice3() {
	let text = document.getElementById("texteExercice3").value;
	text = text.replace(/[.,\"]/g,"");
	text = text.replace(/\'/g," ");
	let mots = text.split(" ");
	let resultat = "";
	for (let i = 0; i < mots.length; i++) 
  	let mot = mots[i];
 	 if (mot.length > 3) 
 	 	resultat += mot + " ";
	document.getElementById("exercice3Resultat").innerHTML = resultat;

}


function exercice4() {
}
