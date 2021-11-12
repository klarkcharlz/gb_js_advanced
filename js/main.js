function validationFormData() {
    let invalidInput = [];

    const regexp = {
        'name': /^[a-zа-я]+$/i,
        'mobile': /^\+7[(]\d{3}[)]\d{3}-\d{4}$/,
        'email': /^my[.|-]?mail@mail.ru$/
    }

    let validationInputs = document.querySelectorAll("[data-regexp='regexp']");
    for (const input of validationInputs) {
        const nameRegexp = regexp[input.id];
        if (!nameRegexp.test(input.value)) {
            invalidInput.push(input.dataset.name);
            input.classList.add("invalid");
        } else input.classList.remove("invalid");
    }

    if (invalidInput) {
        let res = document.querySelector("#result");
        res.value = `Следующие поля не прошли валидацию:\n${invalidInput.join("\n")}`;
    }

}

// Задание 1-2

let textForReplace = "One: 'Hi Mary.' Two: 'Oh, hi.'\n" +
    "One: 'How are you doing?'\n" +
    "Two: 'I'm doing alright. How about you?'\n" +
    "    One: 'Not too bad. The weather is great isn't it?'\n" +
    "    Two: 'Yes. It's absolutely beautiful today.'\n" +
    "One: 'I wish it was like this more frequently.'\n" +
    "Two: 'Me too.'\n" +
    "One: 'So where are you going now?'\n" +
    "Two: 'I'm going to meet a friend of mine at the department store.'\n" +
    "One: 'Going to do a little shopping?'\n" +
    "Two: 'Yeah, I have to buy some presents for my parents.'\n" +
    "One: 'What's the occasion?'\n" +
    "Two: 'It's their anniversary.'\n" +
    "One: 'That's great. Well, you better get going. You don't want to be late.'\n" +
    "Two: 'I'll see you next time.'\n" +
    "One: 'Sure. Bye.'";

console.log(textForReplace.replace(/\B'/g,'"'));

