const jedi = [] 

jedi[0] = `Luke`
console.log(jedi);

jedi.push(`Obi-Wan Kenobi`);
console.log(jedi);

jedi.unshift(`Yoda`);
console.log(jedi);


jedi.pop();
console.log(jedi.shift());
console.log(jedi);

const SithLords = [`Darth Vader`, `Darth Sidious`, `Darth Maul`]
const imperialOfficers = [`Grand Moff Tarkin`,  `Orson Krennic`]

const StarWarsVillains = SithLords.concat(imperialOfficers);
console.log(StarWarsVillains);

console.log(StarWarsVillains.slice(0, 2));

const Droids = [{
    Astromech: `R2-D2`
}, {
    Protocol: `C-3PO`
},{
    Assassin: `IG-88`
}
]
console.log(Droids[0][`Astromech`])
console.log(Droids[1].Protocol)
Droids.Assassin = `IG-11`;
console.log(Droids.Assassin)

