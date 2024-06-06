document.addEventListener("DOMContentLoaded", function() {
    const quizWordElement = document.getElementById("quiz-word");
    const quizOptionsElement = document.getElementById("quiz-options");

    const info = {
        "Ik": "nominativo del pronome personale di prima persona 'io' (antico sassone, nel caso di aat. sarebbe stato 'ih', non ha mutazione consonantica)",
        "gihorta": "preterito indicativo di prima persona singolare di gihoren, verbo debole di 1 classe",
        "đat": "accusativo singolare del dimostrativo, usato anche come articolo (forma sassone per la d col taglio e la t)",
        "seggen": "dal verbo sagjian, verbo debole di 3 classe (forma anglosassone per la geminazione)",
        // Aggiungi altre parole e definizioni qui
    };

    const words = Object.keys(info);
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const correctDefinition = info[randomWord];
    
    function getRandomDefinitions(correctDefinition) {
        const definitions = Object.values(info).filter(def => def !== correctDefinition);
        const randomDefinitions = [];
        while (randomDefinitions.length < 2) {
            const randomIndex = Math.floor(Math.random() * definitions.length);
            const randomDefinition = definitions[randomIndex];
            if (!randomDefinitions.includes(randomDefinition)) {
                randomDefinitions.push(randomDefinition);
            }
        }
        return randomDefinitions;
    }

    const randomDefinitions = getRandomDefinitions(correctDefinition);
    randomDefinitions.push(correctDefinition);
    randomDefinitions.sort(() => Math.random() - 0.5);

    quizWordElement.textContent = `Word: ${randomWord}`;
    randomDefinitions.forEach(definition => {
        const li = document.createElement("li");
        li.textContent = definition;
        li.addEventListener("click", () => {
            if (definition === correctDefinition) {
                alert("Corretto!");
            } else {
                alert("Sbagliato, riprova.");
            }
        });
        quizOptionsElement.appendChild(li);
    });
});