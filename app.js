var isNewGame = true;
// Тоглогчийн ээлж хадагалах хувьсагч
var activePlayer = 0;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

// ТОглогчийн ээлжиндээ цуглуулж байгаа оноог хадаглах хувьсагч
var roundScore = 0;
var change = function(){
    roundScore = 0;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
        activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
        document.querySelector('.player-0-panel').classList.toggle("active");
        document.querySelector('.player-1-panel').classList.toggle("active");
}
// шооны аль талаараа буусныг хадгалах хувьсагч хэрэгтэйь 1-6 гэсэн утга
//var dice = Math.floor (Math.random() * 6) + 6;

document.getElementById("score-0").textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// Шоо шидэх эвэнт лшстенер
document.querySelector(".btn-roll").addEventListener("click", function () {
    if(isNewGame){
         // 1-6 дотрох санамсаргүй нэг тоо
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = "dice-" + diceNumber + ".png";
    // document.querySelector('.dice').style.displey = "block"
    if(diceNumber !== 1){
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;
    }else{
       change();
    }
    }else{
        alert('Тоглоом дуусан байна.')
    }
});
// hold buttom
document.querySelector('.btn-hold').addEventListener("click", function(){
    if(isNewGame){
        scores[activePlayer] = scores[activePlayer] +roundScore;
    document.getElementById('score-' + activePlayer).textContent =  scores[activePlayer];
    if(scores[activePlayer] >= 100){
        isNewGame = false;
        document.getElementById('name-' + activePlayer).textContent = 'winner!!!';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
    }else{
        change();
    }
    }else{
        alert("Тоглоом дуусан байна.")
    }
});
//New game bottum
document.querySelector(".btn-new").addEventListener("click", function(){
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
document.getElementById("score-0").textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'player 1';
document.getElementById('name-1').textContent = 'player 2';
document.querySelector('.player-0-panel').classList.remove("winner");
document.querySelector('.player-1-panel').classList.remove("winner");
document.querySelector('.player-0-panel').classList.remove("active");
document.querySelector('.player-1-panel').classList.remove("active");
document.querySelector('.player-0-panel').classList.add("active");
});