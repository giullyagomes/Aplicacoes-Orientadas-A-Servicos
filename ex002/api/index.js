import express from "express"
import cors from "cors"

const app = express();

app.get("/random", (req, res) => {
    let randomNumber = Math.floor(Math.random() * 9999);

    return res.json( {randomNumber} );
})

app.listen(3000, () => {
    console.log("Server on 3000 port");
})

const getRandomSentense = () => {
    const sentenses = [
        "Acredite em si mesmo e todo o resto virá naturalmente.        ",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Não importa o quão devagar você vá, desde que não pare.",
        "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
        "A persistência é o caminho do êxito.",
        "Se você pode sonhar, você pode realizar.",
        "Grandes coisas nunca vêm de zonas de conforto.",
        "Tudo o que você precisa para realizar seus sonhos está dentro de você.",
        "A única limitação para o seu sucesso é a sua própria imaginação.",
        "O fracasso é apenas a oportunidade de começar novamente, desta vez de forma mais inteligente.",
        "Não espere por oportunidades, crie-as.",
        "A coragem não é a ausência do medo, mas a capacidade de seguir em frente apesar dele.",
        "A vida começa onde termina a zona de conforto.",
        "Os obstáculos são aquelas coisas assustadoras que você vê quando desvia os olhos de seu objetivo.",
        "Você não precisa ser ótimo para começar, mas precisa começar para ser ótimo.",
        "Espero que seja útil!",
    ]

    const index = Math.floor(Math.random() * 14);
    return sentenses[index];
}