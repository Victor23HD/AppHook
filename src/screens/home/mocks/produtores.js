import green from "../../../../assets/produtores/green.png";
import grow from "../../../../assets/produtores/grow.png";
import jennyJack from "../../../../assets/produtores/jenny-jack.png";
import potager from "../../../../assets/produtores/potager.png";
import salad from "../../../../assets/produtores/salad.png";

const generateRandomNumber = (min, max) => 
{
   return Math.floor(Math.random() * (max - min + 1) + min);
}

const produtores = 
{
    title: "Produtores",
    list: [
        {
            name: "Green",
            imagem: green,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: "Grow",
            imagem: grow,
            distance: `${generateRandomNumber(1,500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: "Jenny Jack",
            imagem: jennyJack,
            distance: `${generateRandomNumber(1,500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: "Potager",
            imagem: potager,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: "Salad",
            imagem: salad,
            distance: `${generateRandomNumber(1, 500)}m`,
            starts: generateRandomNumber(1, 5),
        },
    ]
}

export default produtores;