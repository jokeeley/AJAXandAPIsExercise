console.log(`Sup Globe Peeps?`);

// AJAX and APIs Exercise

// 1
const first = document.querySelector('#first');
const p1 = document.createElement('p');
const p2 = document.createElement('p');
first.append(p1);
first.append(p2);
// 1a
const oneAJSON = `{"id":18,"type":"programming","setup":"Why did the programmer quit his job?","punchline":"Because he didn't get arrays."}`;
const jokeJS1 = JSON.parse(oneAJSON);
console.log(jokeJS1);
// 1b
p1.innerText = jokeJS1.setup
// 1c
p2.innerText = jokeJS1.punchline

// 2
const second = document.querySelector('#second');
const p3 = document.createElement('p');
const p4 = document.createElement('p');
second.append(p3);
second.append(p4);
// 2a
const activity = axios.get('https://www.boredapi.com/api/activity')
// 2b
.then((result) => {
    activityjs2 = result.data
    p3.innerText = activityjs2.type
    p4.innerText = activityjs2.activity
    console.log('Question 2 was successful');
})
.catch((err)=> {
    console.log('Question 2 failed to GET');
    console.log(err);
})
// 3
const third = document.querySelector('#third');
const p5 = document.createElement('p');
const p6 = document.createElement('p');
third.append(p5);
third.append(p6);
// 3b
async function activityFunc(){
    try {
        // 3a
        const activityjs3 = await axios.get('https://www.boredapi.com/api/activity')
        // 3c
        p5.innerText = activityjs3.data.activity
        p6.innerText = activityjs3.data.type
    } catch (error) {
        console.log('Question 3 failed to get');
        console.log(err);
    }
}
activityFunc();

// 4
const fourth = document.querySelector('#fourth');
const p7 = document.createElement('p');
fourth.append(p7);
// 4a
// https://www.tvmaze.com/api
async function tvMazeFunc() {
    try {
        console.log('Question 4 was successful');
        const finalEp = await axios.get('https://api.tvmaze.com/singlesearch/shows?q=Mandalorian&embed=episodes')
        p7.innerText = finalEp.data._embedded.episodes[15].name
    } catch (error){
        console.log('Question 4 failed to GET');
        console.log(err);
    }
}
tvMazeFunc()

// BONUS
// 5
const img = document.createElement('img')
const body = document.querySelector('body')

async function pika() {
    try {
        const pikaPic = await axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
        console.log(pikaPic);
        img.src = pikaPic.data.sprites.front_shiny
        body.append(img)
        console.log('Bonus question was successful');
    } catch (err) {
        console.log('bonus question failed to GET');
        console.log(err);
    }
}