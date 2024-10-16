import inquirer from "inquirer";
function counter(words) {
    let freeWhiteSpace = words.replace(/\s/g, "");
    return freeWhiteSpace.length;
}
async function startWordCOunt(counter) {
    do {
        let res = await inquirer.prompt({
            type: "input",
            message: "Write your lines here",
            name: "words",
        });
        console.log(counter(res.words));
    } while (true);
}
startWordCOunt(counter);
