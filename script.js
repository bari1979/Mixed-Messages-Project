function generateRandomNumber (num) {
    return Math.floor(Math.random() * num)
}

const collectiveStupidity = {
    type: ['Antivaxxer','Homeopath','Conspiracy Theorist'],
    commonPhrases: ['The vaccine will change my DNA','The human body heals by itself','I do not want to be microchipped','This is a global conspiracy to enslave us all'],
    answer: ['You are a special kind of stupid','You need urgent professional help','Your IQ must be below 5']
}

let programResponse = []

for (let prop in collectiveStupidity) {
    let optionIdx = generateRandomNumber(collectiveStupidity[prop].length)


switch (prop) {
    case 'type' :
        programResponse.push(`"${collectiveStupidity[prop][optionIdx]}" : `)
        break
        case 'commonPhrases' :
            programResponse.push(`"${collectiveStupidity[prop][optionIdx]}" `)
            break
            case 'answer' :
                programResponse.push(`"${collectiveStupidity[prop][optionIdx]}" .`)
                break
                default:
                    programResponse.push('There is not enough info.')
}
}

function formatAnswer(answer) {
    const formatted = programResponse.join('\n')
    console.log(formatted)
}

formatAnswer(programResponse);




