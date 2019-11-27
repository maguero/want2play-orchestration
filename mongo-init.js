db.createUser({
    user: "want2play",
    pwd: "4dm1n",
    roles: [ { role: "readWrite", db: "want2play" } ]
})

db.users.insert({
    name: "want2play"
})

try {
    db.sports.insertMany( [
        { _id: "basket", name: "Basketball", playersByTeam: 5 },
        { _id: "paddle", name: "Paddle", playersByTeam: 2 },
        { _id: "soccer5", name: "Soccer 5", playersByTeam: 5 },
        { _id: "soccer7", name: "Soccer 7", playersByTeam: 7 },
        { _id: "soccer11", name: "Soccer 11", playersByTeam: 11 },
        { _id: "tennis", name: "Tennis", playersByTeam: 2 }
    ]);
} catch (e) {
    print(e)
}

try {
    db.countries.insertMany( [
        { _id: "AR", name: "Argentina", states: [
            { name: "Entre Rios", cities: [ { name : "Parana" } ] },
            { name: "Buenos Aires", cities: [ { name : "CABA" } ] }
        ]},
        { _id: "ES", name: "España", states: [
            { name: "Barcelona", cities: [ { name : "Barcelona" } ] }
        ]}
    ]);
} catch (e) {
    print(e)
}

try {
    db.stadiums.insertMany( [
        { name: "Quique Club", city: "Parana", address: "Alsina ...", fields: [
            { name: "Cancha de Basquet", sport: "basket" }
        ]},
        { name: "C.A. Paracao", city: "Parana", address: "Baez ..." },
        { name: "Joan Miro", city: "Barcelona", address: "Parque Joan Miro", fields: [
           { name: "Cancha de Basquet", sport: "basket" },
           { name: "Cancha de Futbol 5", sport: "soccer5" }
        ] }
    ]);
} catch (e) {
    print(e)
}

try {
    db.players.insertMany( [
        { _id: "peter.ince@w2p.com", name: "Peter Ince" },
        { _id: "jonathan.arnold@w2p.com", name: "Jonathan Arnold" },
        { _id: "max.ogden@w2p.com", name: "Max Ogden" },
        { _id: "jan.fraser@w2p.com", name: "Jan Fraser" },
        { _id: "andrea.ogden@w2p.com", name: "Andrea Ogden" },
        { _id: "jacob.duncan@w2p.com", name: "Jacob Duncan" },
        { _id: "joan.ball@w2p.com", name: "Joan Ball" },
        { _id: "anne.fraser@w2p.com", name: "Anne Fraser" },
        { _id: "boris.powell@w2p.com", name: "Boris Powell	" },
        { _id: "joanne.short@w2p.com", name: "Joanne Short	" }
    ]);
} catch (e) {
    print(e)
}