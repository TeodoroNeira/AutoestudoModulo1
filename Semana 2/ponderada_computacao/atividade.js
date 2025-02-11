let media;

const prompt = require("readline-sync");

media = 0;

for(let i = 0; i < 3; i++)
{
    media = media + parseFloat(prompt.question('Digite a nota:'));
}

media = media/3;

if(media >= 7)
    {
        console.log('Você foi aprovado com a média: ', media.toFixed(2));
    }
    else
    {
        console.log('Você foi reprovado com a média: ', media.toFixed(2));
    }