window.onload = function() {
    let fileInput = document.getElementById('fileInput');
    let fileDisplayArea = document.getElementById('fileDisplayArea');

    // On "écoute" si le fichier donné a été modifié.
    // Si on a donné un nouveau fichier, on essaie de le lire.
    fileInput.addEventListener('change', function(e) {
        // Dans le HTML (ligne 22), fileInput est un élément de tag "input" avec un attribut type="file".
        // On peut récupérer les fichiers données avec le champs ".files" au niveau du javascript.
        // On peut potentiellement donner plusieurs fichiers,
        // mais ici on n'en lit qu'un seul, le premier, donc indice 0.
        let file = fileInput.files[0];
        // on utilise cette expression régulière pour vérifier qu'on a bien un fichier texte.
        let textType = new RegExp("text.*");

        if (file.type.match(textType)) { // on vérifie qu'on a bien un fichier texte
            // lecture du fichier. D'abord, on crée un objet qui sait lire un fichier.
            var reader = new FileReader();

            // on dit au lecteur de fichier de placer le résultat de la lecture
            // dans la zone d'affichage du texte.
            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
            }

            // on lit concrètement le fichier.
            // Cette lecture lancera automatiquement la fonction "onload" juste au-dessus.
            reader.readAsText(file);    

            document.getElementById("logger").innerHTML = '<span class="infolog">Fichier chargé avec succès</span>';
        } else { // pas un fichier texte : message d'erreur.
            fileDisplayArea.innerText = "";
            document.getElementById("logger").innerHTML = '<span class="errorlog">Type de fichier non supporté !</span>';
        }
    });
}


window.onload = function segmentText() {
	let text = document.getElementByld("texte").value;
	const mots = text.split(new RegExp("[,\"'.]"));
	document.getElementByld("holder2).innerHTML=mots;
}

window.onload = function tokens() {
import nltk

text = text_segmentation
tokens = nltk.word_tokenize(text)
print(tokens)
}

window.onload = function globalTokens() {
	import nltk
	def tokenize_text(text):
    global global_tokens
    doc = nlp(text)
    global_tokens = [token.text for token in doc]
	tokenize_text(my_text)
	print(global_tokens)
}


window.onload = function globalTokens() {
def dictionnaire(tokens):
    token_counts = Counter(global_tokens)

    sorted_dict = dict(sorted(token_counts.items(), key=lambda x: x[1], reverse=True))
    return sorted_dict

my_dict = dictionnaire(global_tokens)
print(my_dict)

def Dictionnaire_click():
    global tokens_entry, results_text
    tokens = tokens_entry.get().split()
	 results_text.delete("1.0", tk.END)
    for key, value in my_dict.items():
        results_text.insert(tk.END, f"{key}: {value}\n")
}



