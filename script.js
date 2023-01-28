let gold = 50;
let health = 100;
let currentWeapon = 0;
let xp = 0;
let hps = 50;
let hpb = 100;
let hpd = 200;
const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const stat = document.querySelector("#stat");
const p = document.querySelector("#p");
const x = document.querySelector("#xp");
const h = document.querySelector("#health");
const g = document.querySelector("#gold");
const text = document.querySelector("#text");
const slime = document.querySelector("#slime");
const hp1 = document.querySelector("#hp1");
const easy = document.querySelector('#easy');
const hard = document.querySelector('#hard');
const insane = document.querySelector('#insane');
button1.onclick = goStore;
button2.onclick = goCave;
button3.onlcick = fightDragon;
const weapons = [
    {
        name: "Stick",
        "power": 10
    },
    {
        name: "Stone Sword",
        "power": 20,
    },
    {
        name: "Iron Sword",
        "power": 40,
    },
    {
        name: "Iron Axe",
        "power": 60,
    },
    {
        name: "Diamond Sword",
        "power": 80,
    }
];
function goStore()
{
    text.innerText = "You enter the store.\n";
    text.innerText += '\nCost of health: 1 Gold per 2 units\n';
    text.innerText += '\nWeapons available:\n 1. Stone Sword (20 Gold)\n2. Iron Sword (40 Gold)'
    text.innerText += '\n3. Iron Axe (60 Gold)\n4. Diamond Sword (80 Gold)'
    stat.innerText = weapons[currentWeapon].name;
    p.innerText = weapons[currentWeapon].power;
    button1.innerText = '\u2190';
    button2.innerText = 'Buy health';
    button3.innerText = 'Buy Weapon';
    button2.onclick = buyhealth;
    button3.onclick = buyweapon;
    button1.onclick = home;
}
function home()
{
    text.innerText = 'You are in the town square now.';
    stat.innerText = weapons[currentWeapon].name;
    p.innerText = weapons[currentWeapon].power;
    button1.innerText = 'Go to Store';
    button2.innerText = 'Go to Cave';
    button3.innerText = 'Fight Dragon';
    button1.onclick = goStore;
    button2.onclick = goCave;
    button3.onclick = fightDragon;
}
function buyhealth()
{
    if(gold>=1)
    {
        gold-=1;
        health+=2;
        h.innerText = health;
        g.innerText = gold;
    }
    else
        text.innerText = "Not enough Gold!";    
}
function buyweapon()
{
    if(gold>=80)
    {
        gold-=80
        g.innerText = gold
        currentWeapon = 4
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
    }
    else if(gold>=60)
    {
        currentWeapon = 3
        gold-=60
        g.innerText = gold
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
    }
    else if(gold>=40)
    {
        gold-=40
        g.innerText = gold
        currentWeapon = 2
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
    }
    else if(gold>=20)
    {
        currentWeapon = 1
        gold-=20
        g.innerText = gold
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
    }
    else
        text.innerText = "Not enough Gold!"
}

function goCave()
{
    text.innerText = "Entering cave...\nChoose the Monster that you want to fight."
    button1.innerText = "\u2190";
    button2.innerText = "Fight Slime";
    button3.innerText = "Fight Beast"
    button1.onclick = home;
    button2.onclick = fightSlime;
    button3.onclick = fightBeast;
    slime.style.display = "none"
}

function diff()
{
    if(xp==0)
    hard.style.display = "inline"
    else if(xp>0 && xp<=10)
    insane.style.display = "inline"
    else if(xp>10 && xp<=30)
    hard.style.display = "inline"
    else
    easy.style.display = "inline"
}

function fightSlime()
{
    hps = 50;
    button2.innerText = "Attack"
    button3.innerText = "Dodge"
    text.innerText = "Fighting Slime...\n";
    slime.style.display = "block"
    diff();
    hp1.innerText = hps;
    button1.onclick =  goCave;
    button2.onclick = attack;
    button3.onclick = dodge;
}

function fightBeast()
{

}

function fightDragon()
{

}