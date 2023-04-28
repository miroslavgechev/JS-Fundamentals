function inventory(inputHeroes) {

    let heroArray = [];
    let sortedHeroArray = [];

    for (let el of inputHeroes) {
        let [hero, level, items] = el.split(' / ');
        heroArray.push({ hero, level, items });
    }

    sortedHeroArray = heroArray.sort((a, b) => (a.level - b.level));

    sortedHeroArray.forEach(el => {
        console.log(`Hero: ${el.hero}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.items}`);
    })

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)