let gold = 20;
let health = 100;
let currentWeapon = 0;
let xp = 0;
let hps = 50;
let hpb = 100;
let hpd = 200;
let mons = 0;
let power = 10;
let def;
let bef;
let man;
let t;
let temp;
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
button3.onclick = fightDragon;
const m = [
    {
        name: "Slime",
        mh: 50
    },
    {
        name: "Beast",
        mh: 100
    },
    {
        name: "Dragon",
        mh: 200
    }
];
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
    slime.display.style = "none"
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
        text.innerText = "Not enough Gold to buy Health!";    
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
        power = weapons[currentWeapon].power;
    }
    else if(gold>=60)
    {
        currentWeapon = 3
        gold-=60
        g.innerText = gold
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
        power = weapons[currentWeapon].power;
    }
    else if(gold>=40)
    {
        gold-=40
        g.innerText = gold
        currentWeapon = 2
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
        power = weapons[currentWeapon].power;
    }
    else if(gold>=20)
    {
        currentWeapon = 1
        gold-=20
        g.innerText = gold
        stat.innerText = weapons[currentWeapon].name;
        p.innerText = weapons[currentWeapon].power;
        power = weapons[currentWeapon].power;
    }
    else
        text.innerText = "Not enough Gold to buy a Weapon!"
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
    let fact = power/(m[mons].mh) + xp/100;
    if(fact<0.50)
    {
        hard.style.display = "none"
        easy.style.display = "none"
        insane.style.display = "inline"
        
    }
    else if(fact>=0.50 && fact<0.75)
    {
        insane.style.display = "none"
        easy.style.display = "none"
        hard.style.display = "inline"
        
    }
    else
    {
        insane.style.display = "none"
        hard.style.display = "none"
        easy.style.display = "inline"
        
    }
}

function fightSlime()
{
    mons = 0;
    hps = 50;
    def=0;
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
    mons = 1;
    hpb = 100;
    bef = 0;
    button2.innerText = "Attack"
    button3.innerText = "Dodge"
    text.innerText = "Fighting Beast...\n";
    slime.style.display = "block"
    diff();
    hp1.innerText = hpb;
    button1.onclick =  goCave;
    button2.onclick = attack;
    button3.onclick = dodge;
}

function fightDragon()
{
    mons = 2;
    hpd = 200;
    man = 0;
    button1.innerText = '\u2190';
    button2.innerText = "Attack"
    button3.innerText = "Dodge"
    text.innerText = "Fighting the Dragon...\n";
    slime.style.display = "block"
    diff();
    hp1.innerText = hpd;
    button1.onclick =  home;
    button2.onclick = attack;
    button3.onclick = dodge;
}

function attack()
{
    
    let damage = Math.floor(Math.random()*11) + Math.floor((xp/10)*Math.random()) + Math.floor(power/5+(power/10)*Math.random());
    if(mons==0 && hps-damage>0 && def==0)
    {
        text.innerText += "\nDamage dealt: " + damage;
        hps-=damage;
        hp1.innerText = hps;
    }
    else if(mons==0 && def==0)        // XP and Gold rewards for Slime
    {
        hps = 0;
        hp1.innerText = hps;
        text.innerText = "Congratulations, you beat the " + m[mons].name + "!\nThe Monster died and dropped "
        t = Math.floor(15+Math.random()*11);
        temp = Math.floor(15+Math.random()*11);
        text.innerText += " " + t + " XP and " + temp + " Gold.";
        xp += t;
        gold += temp;
        g.innerText = gold;
        x.innerText = xp;
        def++;
    }
    else if(mons==1 && hpb-damage>=0 && bef==0)
    {
        text.innerText += "\nDamage dealt: " + damage;
        hpb-=damage;
        hp1.innerText = hpb;
    }
    else if(mons==1 && bef==0)        // XP and Gold rewards for Beast 
    {
        text.innerText += "\nDamage dealt: " + damage;
        hpb = 0;
        hp1.innerText = hpb;
        text.innerText = "Congratulations, you beat the " + m[mons].name + "!\nThe Monster died and dropped "
        t = Math.floor(25+Math.random()*11);
        temp = Math.floor(25+Math.random()*11);
        text.innerText += " " + t + " XP and " + temp + " Gold.";
        xp += t;
        gold += temp;
        g.innerText = gold;
        x.innerText = xp;
        bef++;
    }
    else if(mons==2 && man==0 && hpd-damage>=0)
    {
        text.innerText += "\nDamage dealt: " + damage;
        hpd-=damage;
        hp1.innerText = hpd;
    }
    else if(mons==2 && man==0)               // XP and rewards for the Dragon
    {
        text.innerText += "\nDamage dealt: " + damage;
        hpd = 0;
        hp1.innerText = hpd;
        text.innerText = "Congratulations, you beat the DRAGON!!!\nThe Monster died and dropped "
        t = Math.floor(40+Math.random()*11);
        temp = Math.floor(40+Math.random()*11);
        text.innerText += " " + t + " XP and " + temp + " Gold.\nYOU WIN!";
        xp += t;
        gold += temp;
        g.innerText = gold;
        x.innerText = xp;
        man++;
    }
    
}

function dodge()
{

}
