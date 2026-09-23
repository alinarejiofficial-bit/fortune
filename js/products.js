const PRODUCTS = [
    {
        id: "soya",
        category: "Oils",
        name: "Fortune Soya Health Oil",
        image: "images/fortune/soya-jerry-5l.png?v=3",
        packs: "Pouch 1L · Pet Bottle 1L, 2L · Jerry Can 5L, 15L",
        packList: ["Pouch — 1 litre", "Pet Bottle — 1 litre", "Pet Bottle — 2 litres", "Jerry Can — 5 litres", "Jerry Can — 15 litres"],
        summary: "Fortune Soya Health refined soyabean oil.",
        points: ["Fortune Soya Health Oil", "Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 5 litres", "Jerry Can — 15 litres"]
    },
    {
        id: "sunflower",
        category: "Oils",
        name: "Fortune Sunlite Refined Sunflower Oil",
        image: "images/fortune/sunlite-jerry.png?v=3",
        packs: "Pouch 500ml, 1L · Pet Bottle 500ml–5L · Jerry Can 5L, 15L · Tin 15L, 15kg",
        packList: ["Pouch — 500 ml", "Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 5 litres", "Tin — 15 litres"],
        summary: "Fortune Sunlite refined sunflower oil.",
        points: ["Fortune Sunlite Refined Sunflower Oil", "Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 5 litres"]
    },
    {
        id: "mustard",
        category: "Oils",
        name: "Fortune Kachi Ghani Mustard Oil",
        image: "images/fortune/mustard-jerry-5l.png?v=3",
        packs: "Pet Bottle 200ml, 500ml · Pouch 500ml, 1L · Jerry Can 2L, 5L, 15L · Pet Barni 2L, 5L · Tin 15kg",
        packList: ["Pet Bottle — 200 ml", "Pouch — 1 litre", "Jerry Can — 5 litres", "Tin — 15 kg"],
        summary: "Fortune Kachi Ghani mustard oil.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Pet Bottle — 200 ml", "Pouch — 1 litre", "Jerry Can — 5 litres"]
    },
    {
        id: "ricebran",
        category: "Oils",
        name: "Fortune Rice Bran Health Oil",
        image: "images/fortune/ricebran-jerry-can-2-l.png?v=3",
        packs: "Pet 1L · Pouch 1L · Jerry Can 2L, 5L · Jar 15L · Tap Jar 15L",
        packList: ["Pet Bottle — 1 litre", "Pouch — 1 litre", "Jerry Can — 5 litres", "Jar — 15 litres"],
        summary: "Fortune Rice Bran Health Oil.",
        points: ["Fortune Rice Bran Health Oil", "Pouch — 1 litre", "Jerry Can — 5 litres"]
    },
    {
        id: "groundnut",
        category: "Oils",
        name: "Fortune Filtered Groundnut Oil",
        image: "images/fortune/groundnut-jerry-can-5-l.png?v=3",
        packs: "Pouch 1L · Pet Bottle 1L · Jerry Can 5L, 15L · Tin 10kg, 15L, 15kg",
        packList: ["Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 5 litres", "Tin — 10 kg"],
        summary: "Fortune Filtered Groundnut Oil.",
        points: ["Fortune Filtered Groundnut Oil", "Pouch — 1 litre", "Jerry Can — 5 litres"]
    },
    {
        id: "cottonlite",
        category: "Oils",
        name: "Fortune Cottonlite Oil",
        image: "images/fortune/cottonlite.png?v=2",
        packs: "Pouch 1L · Jerry Can 5L · Tin 10kg, 15L, 15kg",
        packList: ["Pouch — 1 litre", "Jerry Can — 5 litres", "Tin — 10 kg", "Tin — 15 litres", "Tin — 15 kg"],
        summary: "Fortune Cottonlite Oil.",
        points: ["Fortune Cottonlite Oil", "Pouch — 1 litre", "Jerry Can — 5 litres", "Tin — 10 kg"]
    },
    {
        id: "goldnut",
        category: "Oils",
        name: "Fortune Goldnut Refined Groundnut Oil",
        image: "images/fortune/goldnut.png?v=2",
        packs: "PET Bottle 1L · Pouch 1L · Jerry Can 5L · Tin 15kg",
        packList: ["PET Bottle — 1 litre", "Pouch — 1 litre", "Jerry Can — 5 litres", "Tin — 15 kg"],
        summary: "Fortune Goldnut refined groundnut oil.",
        points: ["Fortune Goldnut Refined Groundnut Oil", "PET Bottle — 1 litre", "Pouch — 1 litre", "Jerry Can — 5 litres"]
    },
    {
        id: "pehli-dhaar",
        category: "Oils",
        name: "Fortune Pehli Dhaar Mustard Oil",
        image: "images/fortune/pehli-dhaar.png?v=1",
        packs: "Pet Bottle 1L · Pouch 1L",
        packList: ["Pet Bottle — 1 litre", "Pouch — 1 litre"],
        summary: "Fortune Pehli Dhaar Mustard Oil.",
        points: ["Fortune Pehli Dhaar Mustard Oil", "Pet Bottle — 1 litre", "Pouch — 1 litre"]
    },
    {
        id: "goldnut-pet-bottle-1-l",
        category: "Oils Archive",
        name: "Fortune Goldnut — PET Bottle 1 Litre",
        image: "images/fortune/goldnut-pet-bottle-1-l.png?v=2",
        packs: "PET Bottle 1 Litre",
        packList: ["PET Bottle — 1 Litre"],
        summary: "Fortune Goldnut refined groundnut oil, PET bottle 1 litre.",
        points: ["Fortune Goldnut Refined Groundnut Oil", "PET Bottle — 1 Litre"]
    },
    {
        id: "goldnut-pouch-1-l",
        category: "Oils Archive",
        name: "Fortune Goldnut — Pouch 1 Litre",
        image: "images/fortune/goldnut-pouch-1-l.png?v=2",
        packs: "Pouch 1 Litre",
        packList: ["Pouch — 1 Litre"],
        summary: "Fortune Goldnut refined groundnut oil, pouch 1 litre.",
        points: ["Fortune Goldnut Refined Groundnut Oil", "Pouch — 1 Litre"]
    },
    {
        id: "goldnut-jerry-can-5-l",
        category: "Oils Archive",
        name: "Fortune Goldnut — Jerry Can 5 Litres",
        image: "images/fortune/goldnut-jerry-can-5-l.png?v=2",
        packs: "Jerry Can 5 Litres",
        packList: ["Jerry Can — 5 Litres"],
        summary: "Fortune Goldnut refined groundnut oil, jerry can 5 litres.",
        points: ["Fortune Goldnut Refined Groundnut Oil", "Jerry Can — 5 Litres"]
    },
    {
        id: "goldnut-tin-15-kg",
        category: "Oils Archive",
        name: "Fortune Goldnut — Tin 15 Kg",
        image: "images/fortune/goldnut-tin-15-kg.png?v=2",
        packs: "Tin 15 Kg",
        packList: ["Tin — 15 Kg"],
        summary: "Fortune Goldnut refined groundnut oil, tin 15 kg.",
        points: ["Fortune Goldnut Refined Groundnut Oil", "Tin — 15 Kg"]
    },
    {
        id: "pehli-dhaar-pet-bottle-1-l",
        category: "Oils Archive",
        name: "Fortune Pehli Dhaar Mustard Oil — 1 L Pet Bottle",
        image: "images/fortune/pehli-dhaar-pet-bottle-1-l.png?v=1",
        packs: "Pet Bottle 1 L",
        packList: ["Pet Bottle \u2014 1 L"],
        summary: "Fortune Pehli Dhaar Mustard Oil, Pet Bottle 1 L.",
        points: ["Fortune Pehli Dhaar Mustard Oil", "Pet Bottle \u2014 1 L"]
    },
    {
        id: "pehli-dhaar-pouch-1-l",
        category: "Oils Archive",
        name: "Fortune Pehli Dhaar Mustard Oil — 1 L Pouch",
        image: "images/fortune/pehli-dhaar-pouch-1-l.png?v=1",
        packs: "Pouch 1 L",
        packList: ["Pouch \u2014 1 L"],
        summary: "Fortune Pehli Dhaar Mustard Oil, Pouch 1 L.",
        points: ["Fortune Pehli Dhaar Mustard Oil", "Pouch \u2014 1 L"]
    },
    {
        id: "cottonlite-pouch-1-l",
        category: "Oils Archive",
        name: "Fortune Cottonlite — Pouch 1 Litre",
        image: "images/fortune/cottonlite-pouch-1-l.png?v=2",
        packs: "Pouch 1 litre",
        packList: ["Pouch — 1 litre"],
        summary: "Fortune Cottonlite Oil, pouch 1 litre.",
        points: ["Fortune Cottonlite Oil", "Pouch — 1 litre"]
    },
    {
        id: "cottonlite-jerry-cans-5-l",
        category: "Oils Archive",
        name: "Fortune Cottonlite — Jerry Can 5 Litres",
        image: "images/fortune/cottonlite-jerry-cans-5-l.png?v=2",
        packs: "Jerry Can 5 litres",
        packList: ["Jerry Can — 5 litres"],
        summary: "Fortune Cottonlite Oil, jerry can 5 litres.",
        points: ["Fortune Cottonlite Oil", "Jerry Can — 5 litres"]
    },
    {
        id: "cottonlite-tin-10-kg",
        category: "Oils Archive",
        name: "Fortune Cottonlite — Tin 10 kg",
        image: "images/fortune/cottonlite-tin-10-kg.png?v=2",
        packs: "Tin 10 kg",
        packList: ["Tin — 10 kg"],
        summary: "Fortune Cottonlite Oil, tin 10 kg.",
        points: ["Fortune Cottonlite Oil", "Tin — 10 kg"]
    },
    {
        id: "cottonlite-tins",
        category: "Oils Archive",
        name: "Fortune Cottonlite — Tin 15 L / 15 kg",
        image: "images/fortune/cottonlite-tins.png?v=1",
        packs: "Tin 15 litres · 15 kg",
        packList: ["Tin — 15 litres", "Tin — 15 kg"],
        summary: "Fortune Cottonlite Oil tins.",
        points: ["Fortune Cottonlite Oil", "Tin — 15 litres", "Tin — 15 kg"]
    },
    {
        id: "groundnut-pouch-1-l",
        category: "Oils Archive",
        name: "Fortune Filtered Groundnut — Pouch 1 Litre",
        image: "images/fortune/groundnut-pouch-1-l.png?v=2",
        packs: "Pouch 1 litre",
        packList: ["Pouch — 1 litre"],
        summary: "Fortune Filtered Groundnut Oil, pouch 1 litre.",
        points: ["Fortune Filtered Groundnut Oil", "Pouch — 1 litre"]
    },
    {
        id: "groundnut-pet-bottle-1-l",
        category: "Oils Archive",
        name: "Fortune Filtered Groundnut — Pet Bottle 1 Litre",
        image: "images/fortune/groundnut-pet-bottle-1-l.png?v=2",
        packs: "Pet Bottle 1 litre",
        packList: ["Pet Bottle — 1 litre"],
        summary: "Fortune Filtered Groundnut Oil, pet bottle 1 litre.",
        points: ["Fortune Filtered Groundnut Oil", "Pet Bottle — 1 litre"]
    },
    {
        id: "groundnut-jerry-can",
        category: "Oils Archive",
        name: "Fortune Filtered Groundnut — Jerry Can",
        image: "images/fortune/groundnut-jerry-can-5-l.png?v=2",
        packs: "Jerry Can 5 litres · 15 litres",
        packList: ["Jerry Can — 5 litres", "Jerry Can — 15 litres"],
        summary: "Fortune Filtered Groundnut Oil jerry cans.",
        points: ["Fortune Filtered Groundnut Oil", "Jerry Can — 5 litres", "Jerry Can — 15 litres"]
    },
    {
        id: "groundnut-tin-10-kg",
        category: "Oils Archive",
        name: "Fortune Filtered Groundnut — Tin 10 kg",
        image: "images/fortune/groundnut-tin-10-kg.png?v=2",
        packs: "Tin 10 kg",
        packList: ["Tin — 10 kg"],
        summary: "Fortune Filtered Groundnut Oil, tin 10 kg.",
        points: ["Fortune Filtered Groundnut Oil", "Tin — 10 kg"]
    },
    {
        id: "groundnut-tins",
        category: "Oils Archive",
        name: "Fortune Filtered Groundnut — Tin 15 L / 15 kg",
        image: "images/fortune/groundnut-tins.png?v=1",
        packs: "Tin 15 litres · 15 kg",
        packList: ["Tin — 15 litres", "Tin — 15 kg"],
        summary: "Fortune Filtered Groundnut Oil tins.",
        points: ["Fortune Filtered Groundnut Oil", "Tin — 15 litres", "Tin — 15 kg"]
    },
    {
        id: "ricebran-pet-1-l",
        category: "Oils Archive",
        name: "Fortune Rice Bran Health Oil — 1 L Pet Bottle",
        image: "images/fortune/ricebran-pet-1-l.png?v=1",
        packs: "Pet Bottle 1 L",
        packList: ["Pet Bottle \u2014 1 L"],
        summary: "Fortune Rice Bran Health Oil, Pet Bottle 1 L.",
        points: ["Fortune Rice Bran Health Oil", "Pet Bottle \u2014 1 L"]
    },
    {
        id: "ricebran-pouch-1-l",
        category: "Oils Archive",
        name: "Fortune Rice Bran Health Oil — 1 L Pouch",
        image: "images/fortune/ricebran-pouch-1-l.png?v=1",
        packs: "Pouch 1 L",
        packList: ["Pouch \u2014 1 L"],
        summary: "Fortune Rice Bran Health Oil, Pouch 1 L.",
        points: ["Fortune Rice Bran Health Oil", "Pouch \u2014 1 L"]
    },
    {
        id: "ricebran-jerry-can",
        category: "Oils Archive",
        name: "Fortune Rice Bran — Jerry Can",
        image: "images/fortune/ricebran-jerry-can-2-l.png?v=2",
        packs: "Jerry Can 2 litres · 5 litres",
        packList: ["Jerry Can — 2 litres", "Jerry Can — 5 litres"],
        summary: "Fortune Rice Bran Health Oil jerry cans.",
        points: ["Fortune Rice Bran Health Oil", "Jerry Can — 2 litres", "Jerry Can — 5 litres"]
    },
    {
        id: "ricebran-jar-15-l",
        category: "Oils Archive",
        name: "Fortune Rice Bran Health Oil — 15 L Jar",
        image: "images/fortune/ricebran-jar-15-l.png?v=1",
        packs: "Jar 15 L",
        packList: ["Jar \u2014 15 L"],
        summary: "Fortune Rice Bran Health Oil, Jar 15 L.",
        points: ["Fortune Rice Bran Health Oil", "Jar \u2014 15 L"]
    },
    {
        id: "ricebran-tap-jar-15-l",
        category: "Oils Archive",
        name: "Fortune Rice Bran Health Oil — 15 L Tap Jar",
        image: "images/fortune/ricebran-tap-jar-15-l.png?v=1",
        packs: "Tap Jar 15 L",
        packList: ["Tap Jar \u2014 15 L"],
        summary: "Fortune Rice Bran Health Oil, Tap Jar 15 L.",
        points: ["Fortune Rice Bran Health Oil", "Tap Jar \u2014 15 L"]
    },
    {
        id: "mustard-bottle-200ml",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 200 ml Pet Bottle",
        image: "images/fortune/mustard-bottle-200ml.png?v=1",
        packs: "Pet Bottle 200 ml",
        packList: ["Pet Bottle — 200 ml"],
        summary: "Fortune Kachi Ghani mustard oil, 200 ml pet bottle.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Pet Bottle — 200 ml"]
    },
    {
        id: "mustard-pouch-500ml",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 500 ml Pouch",
        image: "images/fortune/mustard-pouch-500ml.png?v=1",
        packs: "Pouch 500 ml",
        packList: ["Pouch — 500 ml"],
        summary: "Fortune Kachi Ghani mustard oil, 500 ml pouch.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Pouch — 500 ml"]
    },
    {
        id: "mustard-bottle-500ml",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 500 ml Pet Bottle",
        image: "images/fortune/mustard-bottle-500ml.png?v=1",
        packs: "Pet Bottle 500 ml",
        packList: ["Pet Bottle — 500 ml"],
        summary: "Fortune Kachi Ghani mustard oil, 500 ml pet bottle.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Pet Bottle — 500 ml"]
    },
    {
        id: "mustard-pouch-1l",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 1 L Pouch",
        image: "images/fortune/mustard-pouch-1l.png?v=1",
        packs: "Pouch 1 litre",
        packList: ["Pouch — 1 litre"],
        summary: "Fortune Kachi Ghani mustard oil, 1 litre pouch.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Pouch — 1 litre"]
    },
    {
        id: "mustard-jerry-2l",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 2 L Jerry Can",
        image: "images/fortune/mustard-jerry-2l.png?v=1",
        packs: "Jerry Can 2 litres",
        packList: ["Jerry Can — 2 litres"],
        summary: "Fortune Kachi Ghani mustard oil, 2 litre jerry can.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Jerry Can — 2 litres"]
    },
    {
        id: "mustard-jerry-5l",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 5 L Jerry Can",
        image: "images/fortune/mustard-jerry-5l.png?v=1",
        packs: "Jerry Can 5 litres",
        packList: ["Jerry Can — 5 litres"],
        summary: "Fortune Kachi Ghani mustard oil, 5 litre jerry can.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Jerry Can — 5 litres"]
    },
    {
        id: "mustard-barni-2l",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 2 L Pet Barni",
        image: "images/fortune/mustard-barni-2l.png?v=1",
        packs: "Pet Barni 2 litres",
        packList: ["Pet Barni — 2 litres"],
        summary: "Fortune Kachi Ghani mustard oil, 2 litre pet barni.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Pet Barni — 2 litres"]
    },
    {
        id: "mustard-barni-5l",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 5 L Pet Barni",
        image: "images/fortune/mustard-barni-5l.png?v=1",
        packs: "Pet Barni 5 litres",
        packList: ["Pet Barni — 5 litres"],
        summary: "Fortune Kachi Ghani mustard oil, 5 litre pet barni.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Pet Barni — 5 litres"]
    },
    {
        id: "mustard-jerry-15l",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 15 L Jerry Can",
        image: "images/fortune/mustard-jerry-15l.png?v=1",
        packs: "Large Jerry Can 15 litres",
        packList: ["Large Jerry Can — 15 litres"],
        summary: "Fortune Kachi Ghani mustard oil, 15 litre jerry can.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Large Jerry Can — 15 litres"]
    },
    {
        id: "mustard-tin-15kg",
        category: "Oils Archive",
        name: "Fortune Kachi Ghani — 15 kg Tin",
        image: "images/fortune/mustard-tin-15kg.png?v=1",
        packs: "Tin 15 kg",
        packList: ["Tin — 15 kg"],
        summary: "Fortune Kachi Ghani mustard oil, 15 kg tin.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Tin — 15 kg"]
    },
    {
        id: "sunlite-pouch",
        category: "Oils Archive",
        name: "Fortune Sunlite — Pouch",
        image: "images/fortune/sunlite-pouch.png?v=2",
        packs: "Pouch 500 ml · 1 litre",
        packList: ["Pouch — 500 ml", "Pouch — 1 litre"],
        summary: "Fortune Sunlite refined sunflower oil pouches.",
        points: ["Fortune Sunlite Refined Sunflower Oil", "Pouch — 500 ml", "Pouch — 1 litre"]
    },
    {
        id: "sunlite-bottle",
        category: "Oils Archive",
        name: "Fortune Sunlite — Pet Bottle",
        image: "images/fortune/sunlite-bottle.png?v=2",
        packs: "Pet Bottle 500 ml · 1 L · 2 L · 5 L",
        packList: ["Pet Bottle — 500 ml", "Pet Bottle — 1 litre", "Pet Bottle — 2 litres", "Pet Bottle — 5 litres"],
        summary: "Fortune Sunlite refined sunflower oil pet bottles.",
        points: ["Fortune Sunlite Refined Sunflower Oil", "Pet Bottle — 500 ml", "Pet Bottle — 1 litre", "Pet Bottle — 2 litres", "Pet Bottle — 5 litres"]
    },
    {
        id: "sunlite-jerry",
        category: "Oils Archive",
        name: "Fortune Sunlite — Jerry Can",
        image: "images/fortune/sunlite-jerry.png?v=2",
        packs: "Jerry Can 5 L · 15 L · 15 L Tap",
        packList: ["Jerry Can — 5 litres", "Jerry Can — 15 litres", "Jerry Can Tap — 15 litres"],
        summary: "Fortune Sunlite refined sunflower oil jerry cans.",
        points: ["Fortune Sunlite Refined Sunflower Oil", "Jerry Can — 5 litres", "Jerry Can — 15 litres", "Jerry Can Tap — 15 litres"]
    },
    {
        id: "sunlite-tin",
        category: "Oils Archive",
        name: "Fortune Sunlite — Tin",
        image: "images/fortune/sunlite-tin.png?v=2",
        packs: "Tin 15 litres · 15 kg",
        packList: ["Tin — 15 litres", "Tin — 15 kg"],
        summary: "Fortune Sunlite refined sunflower oil tins.",
        points: ["Fortune Sunlite Refined Sunflower Oil", "Tin — 15 litres", "Tin — 15 kg"]
    },
    {
        id: "soya-pouch-1l",
        category: "Oils Archive",
        name: "Fortune Soya Health Oil — 1 L Pouch",
        image: "images/fortune/soya-pouch-1l.png?v=2",
        packs: "Pouch 1 litre",
        packList: ["Pouch — 1 litre"],
        summary: "Fortune Soya Health refined soyabean oil, 1 litre pouch.",
        points: ["Fortune Soya Health Oil", "Pouch — 1 litre"]
    },
    {
        id: "soya-bottle-1l",
        category: "Oils Archive",
        name: "Fortune Soya Health Oil — 1 L Pet Bottle",
        image: "images/fortune/soya-bottle-1l.png?v=2",
        packs: "Pet Bottle 1 litre",
        packList: ["Pet Bottle — 1 litre"],
        summary: "Fortune Soya Health refined soyabean oil, 1 litre pet bottle.",
        points: ["Fortune Soya Health Oil", "Pet Bottle — 1 litre"]
    },
    {
        id: "soya-bottle-2l",
        category: "Oils Archive",
        name: "Fortune Soya Health Oil — 2 L Pet Bottle",
        image: "images/fortune/soya-bottle-2l.png?v=2",
        packs: "Pet Bottle 2 litres",
        packList: ["Pet Bottle — 2 litres"],
        summary: "Fortune Soya Health refined soyabean oil, 2 litre pet bottle.",
        points: ["Fortune Soya Health Oil", "Pet Bottle — 2 litres"]
    },
    {
        id: "soya-jerry-5l",
        category: "Oils Archive",
        name: "Fortune Soya Health Oil — 5 L Jerry Can",
        image: "images/fortune/soya-jerry-5l.png?v=2",
        packs: "Jerry Can 5 litres",
        packList: ["Jerry Can — 5 litres"],
        summary: "Fortune Soya Health refined soyabean oil, 5 litre jerry can.",
        points: ["Fortune Soya Health Oil", "Jerry Can — 5 litres"]
    },
    {
        id: "soya-jerry-15l",
        category: "Oils Archive",
        name: "Fortune Soya Health Oil — 15 L Jerry Can",
        image: "images/fortune/soya-jerry-15l.png?v=2",
        packs: "Jerry Can 15 litres",
        packList: ["Jerry Can — 15 litres"],
        summary: "Fortune Soya Health refined soyabean oil, 15 litre jerry can.",
        points: ["Fortune Soya Health Oil", "Jerry Can — 15 litres"]
    },
    {
        id: "xpert-active",
        category: "Oils",
        name: "Fortune Xpert Active Oil",
        image: "images/fortune/xpert-active.png?v=2",
        packs: "Pouch 850g",
        packList: ["Pouch — 850g"],
        summary: "Fortune Xpert Active Oil.",
        points: ["Fortune Xpert Active Oil", "Pouch — 850g"]
    },
    {
        id: "xpert-total",
        category: "Oils",
        name: "Fortune Xpert Total Balance Oil",
        image: "images/fortune/xpert-total.png?v=2",
        packs: "Pouch 1 L · Jar 5 L",
        packList: ["Pouch — 1 L", "Jar — 5 L"],
        summary: "Fortune Xpert Total Balance Oil.",
        points: ["Fortune Xpert Total Balance Oil", "Pouch — 1 L", "Jar — 5 L"]
    },
    {
        id: "xpert-immunity",
        category: "Oils",
        name: "Fortune Xpert Pro Immunity Oil",
        image: "images/fortune/xpert-immunity.png?v=2",
        packs: "Pouch 1 L · Jerry Can 5 L",
        packList: ["Pouch — 1 L", "Jerry Can — 5 L"],
        summary: "Fortune Xpert Pro Immunity Oil.",
        points: ["Fortune Xpert Pro Immunity Oil", "Pouch — 1 L", "Jerry Can — 5 L"]
    },
    {
        id: "xpert-sugar",
        category: "Oils",
        name: "Fortune Xpert Pro Sugar Conscious Oil",
        image: "images/fortune/xpert-sugar.png?v=2",
        packs: "Pouch 1 L · Jerry Can 5 L",
        packList: ["Pouch — 1 L", "Jerry Can — 5 L"],
        summary: "Fortune Xpert Pro Sugar Conscious Oil.",
        points: ["Fortune Xpert Pro Sugar Conscious Oil", "Pouch — 1 L", "Jerry Can — 5 L"]
    },
    {
        id: "xpert-active-pouch-850g",
        category: "Oils Archive",
        name: "Fortune Xpert Active Oil — 850g Pouch",
        image: "images/fortune/xpert-active-pouch-850g.png?v=1",
        packs: "Pouch 850g",
        packList: ["Pouch \u2014 850g"],
        summary: "Fortune Xpert Active Oil, Pouch 850g.",
        points: ["Fortune Xpert Active Oil", "Pouch \u2014 850g"]
    },
    {
        id: "xpert-total-pouch-1-l",
        category: "Oils Archive",
        name: "Fortune Xpert Total Balance Oil — 1 L Pouch",
        image: "images/fortune/xpert-total-pouch-1-l.png?v=1",
        packs: "Pouch 1 L",
        packList: ["Pouch \u2014 1 L"],
        summary: "Fortune Xpert Total Balance Oil, Pouch 1 L.",
        points: ["Fortune Xpert Total Balance Oil", "Pouch \u2014 1 L"]
    },
    {
        id: "xpert-total-jar-5-l",
        category: "Oils Archive",
        name: "Fortune Xpert Total Balance Oil — 5 L Jar",
        image: "images/fortune/xpert-total-jar-5-l.png?v=1",
        packs: "Jar 5 L",
        packList: ["Jar \u2014 5 L"],
        summary: "Fortune Xpert Total Balance Oil, Jar 5 L.",
        points: ["Fortune Xpert Total Balance Oil", "Jar \u2014 5 L"]
    },
    {
        id: "xpert-immunity-pouch-1-l",
        category: "Oils Archive",
        name: "Fortune Xpert Pro Immunity Oil — 1 L Pouch",
        image: "images/fortune/xpert-immunity-pouch-1-l.png?v=1",
        packs: "Pouch 1 L",
        packList: ["Pouch \u2014 1 L"],
        summary: "Fortune Xpert Pro Immunity Oil, Pouch 1 L.",
        points: ["Fortune Xpert Pro Immunity Oil", "Pouch \u2014 1 L"]
    },
    {
        id: "xpert-immunity-jerry-cans-5-l",
        category: "Oils Archive",
        name: "Fortune Xpert Pro Immunity Oil — 5 L Jerry Can",
        image: "images/fortune/xpert-immunity-jerry-cans-5-l.png?v=1",
        packs: "Jerry Can 5 L",
        packList: ["Jerry Can \u2014 5 L"],
        summary: "Fortune Xpert Pro Immunity Oil, Jerry Can 5 L.",
        points: ["Fortune Xpert Pro Immunity Oil", "Jerry Can \u2014 5 L"]
    },
    {
        id: "xpert-sugar-pouch-1-l",
        category: "Oils Archive",
        name: "Fortune Xpert Pro Sugar Conscious Oil — 1 L Pouch",
        image: "images/fortune/xpert-sugar-pouch-1-l.png?v=1",
        packs: "Pouch 1 L",
        packList: ["Pouch \u2014 1 L"],
        summary: "Fortune Xpert Pro Sugar Conscious Oil, Pouch 1 L.",
        points: ["Fortune Xpert Pro Sugar Conscious Oil", "Pouch \u2014 1 L"]
    },
    {
        id: "xpert-sugar-jerry-cans-5-l",
        category: "Oils Archive",
        name: "Fortune Xpert Pro Sugar Conscious Oil — 5 L Jerry Can",
        image: "images/fortune/xpert-sugar-jerry-cans-5-l.png?v=1",
        packs: "Jerry Can 5 L",
        packList: ["Jerry Can \u2014 5 L"],
        summary: "Fortune Xpert Pro Sugar Conscious Oil, Jerry Can 5 L.",
        points: ["Fortune Xpert Pro Sugar Conscious Oil", "Jerry Can \u2014 5 L"]
    },
    {
        id: "chakki-fresh-atta",
        category: "Atta",
        name: "Fortune Chakki Fresh Atta",
        image: "images/fortune-foods/chakki-fresh-atta.png?v=2",
        packs: "Pouch 1 kg · Pouch 5 kg · Pouch 10 kg",
        packList: ["Pouch — 1 kg", "Pouch — 5 kg", "Pouch — 10 kg"],
        summary: "Fortune Chakki Fresh Atta.",
        points: ["Fortune Chakki Fresh Atta", "Pouch — 1 kg", "Pouch — 5 kg", "Pouch — 10 kg"]
    },
    {
        id: "premium-sharbati-atta",
        category: "Atta",
        name: "Fortune Premium Sharbati Atta",
        image: "images/fortune-foods/premium-sharbati-atta.png?v=2",
        packs: "Pouch 5kg",
        packList: ["Pouch — 5kg"],
        summary: "Fortune Premium Sharbati Atta.",
        points: ["Fortune Premium Sharbati Atta", "Pouch — 5kg"]
    },
    {
        id: "atta-multigrains",
        category: "Atta",
        name: "Fortune Atta With Multigrains",
        image: "images/fortune-foods/atta-multigrains.png?v=2",
        packs: "Fortune food",
        packList: ["Fortune Atta With Multigrains"],
        summary: "Fortune Atta With Multigrains.",
        points: ["Fortune Atta With Multigrains", "Fortune Atta With Multigrains"]
    },
    {
        id: "biryani-special",
        category: "Rice",
        name: "Fortune Biryani Special Basmati Rice",
        image: "images/fortune-foods/biryani-special.png?v=2",
        packs: "Pouch 1 kg · Bag 5 kgs",
        packList: ["Pouch — 1 kg", "Bag — 5 kgs"],
        summary: "Fortune Biryani Special Basmati Rice.",
        points: ["Fortune Biryani Special Basmati Rice", "Pouch — 1 kg", "Bag — 5 kgs"]
    },
    {
        id: "everyday-basmati",
        category: "Rice",
        name: "Fortune Everyday Basmati Rice",
        image: "images/fortune-foods/everyday-basmati.png?v=2",
        packs: "Pack 1 kg · Pouch 1 kg",
        packList: ["Pack — 1 kg", "Pouch — 1 kg"],
        summary: "Fortune Everyday Basmati Rice.",
        points: ["Fortune Everyday Basmati Rice", "Pack — 1 kg", "Pouch — 1 kg"]
    },
    {
        id: "rozana-basmati",
        category: "Rice",
        name: "Fortune Rozana Basmati Rice",
        image: "images/fortune-foods/rozana-basmati.png?v=2",
        packs: "Pouch 1 kg · Bag 5 kg",
        packList: ["Pouch — 1 kg", "Bag — 5 kg"],
        summary: "Fortune Rozana Basmati Rice.",
        points: ["Fortune Rozana Basmati Rice", "Pouch — 1 kg", "Bag — 5 kg"]
    },
    {
        id: "soya-granules",
        category: "Soya Chunks",
        name: "Fortune Soya Granules",
        image: "images/fortune-foods/soya-granules.png?v=2",
        packs: "Packs 200 gms",
        packList: ["Packs — 200 gms"],
        summary: "Fortune Soya Granules.",
        points: ["Fortune Soya Granules", "Packs — 200 gms"]
    },
    {
        id: "soya-mini-chunks",
        category: "Soya Chunks",
        name: "Fortune Soya Mini Chunks",
        image: "images/fortune-foods/soya-mini-chunks.png?v=2",
        packs: "Pouch 44 gms · Packs 200 gms",
        packList: ["Pouch — 44 gms", "Packs — 200 gms"],
        summary: "Fortune Soya Mini Chunks.",
        points: ["Fortune Soya Mini Chunks", "Pouch — 44 gms", "Packs — 200 gms"]
    },
    {
        id: "soya-chunks",
        category: "Soya Chunks",
        name: "Fortune Soya Chunks",
        image: "images/fortune-foods/soya-chunks.png?v=2",
        packs: "Pouch 44 gms · Packs 200 gms · Pouch 1 kg",
        packList: ["Pouch — 44 gms", "Packs — 200 gms", "Pouch — 1 kg"],
        summary: "Fortune Soya Chunks.",
        points: ["Fortune Soya Chunks", "Pouch — 44 gms", "Packs — 200 gms", "Pouch — 1 kg"]
    },
    {
        id: "besan",
        category: "Besan",
        name: "Fortune Besan",
        image: "images/fortune-foods/besan.png?v=2",
        packs: "Pouches 200 g, 500 g, 1 kg, 10 kg",
        packList: ["Pouches — 200 g, 500 g, 1 kg, 10 kg"],
        summary: "Fortune Besan.",
        points: ["Fortune Besan", "Pouches — 200 g, 500 g, 1 kg, 10 kg"]
    },
    {
        id: "sugar",
        category: "Sugar",
        name: "Fortune Sugar",
        image: "images/fortune-foods/sugar.png?v=2",
        packs: "Sugar Pouch 1 kg · Fine Sugar Pouch 1 kg · Sugar Pouch 5 kg · Fine Sugar Pouch 5 kg",
        packList: ["Sugar Pouch — 1 kg", "Fine Sugar Pouch — 1 kg", "Sugar Pouch — 5 kg", "Fine Sugar Pouch — 5 kg"],
        summary: "Fortune Sugar.",
        points: ["Fortune Sugar", "Sugar Pouch — 1 kg", "Fine Sugar Pouch — 1 kg", "Sugar Pouch — 5 kg"]
    },
    {
        id: "chana-dal",
        category: "Pulses",
        name: "Fortune Unpolished Chana Dal",
        image: "images/fortune-foods/chana-dal.png?v=2",
        packs: "Pouch 1kg · Pouch 500 g",
        packList: ["Pouch — 1kg", "Pouch — 500 g"],
        summary: "Fortune Unpolished Chana Dal.",
        points: ["Fortune Unpolished Chana Dal", "Pouch — 1kg", "Pouch — 500 g"]
    },
    {
        id: "arhar-dal",
        category: "Pulses",
        name: "Fortune Unpolished Arhar Dal",
        image: "images/fortune-foods/arhar-dal.png?v=2",
        packs: "Pouch 1 kg · Pouch 500g",
        packList: ["Pouch — 1 kg", "Pouch — 500g"],
        summary: "Fortune Unpolished Arhar Dal.",
        points: ["Fortune Unpolished Arhar Dal", "Pouch — 1 kg", "Pouch — 500g"]
    },
    {
        id: "moong-dal",
        category: "Pulses",
        name: "Fortune Unpolished Moong Dal",
        image: "images/fortune-foods/moong-dal.png?v=2",
        packs: "Pouch 500g · Pouch 1kg",
        packList: ["Pouch — 500g", "Pouch — 1kg"],
        summary: "Fortune Unpolished Moong Dal.",
        points: ["Fortune Unpolished Moong Dal", "Pouch — 500g", "Pouch — 1kg"]
    },
    {
        id: "sona-moong-dal",
        category: "Pulses",
        name: "Fortune Unpolished Sona Moong Dal",
        image: "images/fortune-foods/sona-moong-dal.png?v=2",
        packs: "Pouch 500g · Pouch 1kg",
        packList: ["Pouch — 500g", "Pouch — 1kg"],
        summary: "Fortune Unpolished Sona Moong Dal.",
        points: ["Fortune Unpolished Sona Moong Dal", "Pouch — 500g", "Pouch — 1kg"]
    },
    {
        id: "desi-masoor",
        category: "Pulses",
        name: "Fortune Unpolished Desi Masoor Malka Dal",
        image: "images/fortune-foods/desi-masoor.png?v=2",
        packs: "Pouch 500g · Pouch 1kg",
        packList: ["Pouch — 500g", "Pouch — 1kg"],
        summary: "Fortune Unpolished Desi Masoor Malka Dal.",
        points: ["Fortune Unpolished Desi Masoor Malka Dal", "Pouch — 500g", "Pouch — 1kg"]
    },
    {
        id: "big-masoor",
        category: "Pulses",
        name: "Fortune Unpolished Big Masoor Malka Dal",
        image: "images/fortune-foods/big-masoor.png?v=2",
        packs: "Pouch 500g · Pouch 1kg",
        packList: ["Pouch — 500g", "Pouch — 1kg"],
        summary: "Fortune Unpolished Big Masoor Malka Dal.",
        points: ["Fortune Unpolished Big Masoor Malka Dal", "Pouch — 500g", "Pouch — 1kg"]
    },
    {
        id: "kabuli-chana",
        category: "Pulses",
        name: "Fortune Unpolished Kabuli Chana",
        image: "images/fortune-foods/kabuli-chana.png?v=2",
        packs: "Pouch 500g",
        packList: ["Pouch — 500g"],
        summary: "Fortune Unpolished Kabuli Chana.",
        points: ["Fortune Unpolished Kabuli Chana", "Pouch — 500g"]
    },
    {
        id: "kala-chana",
        category: "Pulses",
        name: "Fortune Unpolished Kala Chana Whole",
        image: "images/fortune-foods/kala-chana.png?v=2",
        packs: "Pouch 500g",
        packList: ["Pouch — 500g"],
        summary: "Fortune Unpolished Kala Chana Whole.",
        points: ["Fortune Unpolished Kala Chana Whole", "Pouch — 500g"]
    },
    {
        id: "rajma-chitra",
        category: "Pulses",
        name: "Fortune Unpolished Rajma Chitra",
        image: "images/fortune-foods/rajma-chitra.png?v=2",
        packs: "Pouch 500g",
        packList: ["Pouch — 500g"],
        summary: "Fortune Unpolished Rajma Chitra.",
        points: ["Fortune Unpolished Rajma Chitra", "Pouch — 500g"]
    },
    {
        id: "rawa",
        category: "Rawa",
        name: "Fortune Rawa",
        image: "images/fortune-foods/rawa.png?v=2",
        packs: "Pack 1 kg",
        packList: ["Pack — 1 kg"],
        summary: "Fortune Rawa.",
        points: ["Fortune Rawa", "Pack — 1 kg"]
    },
    {
        id: "maida",
        category: "Maida",
        name: "Fortune Maida",
        image: "images/fortune-foods/maida.png?v=2",
        packs: "Pouch 500 grams · Pouch 1 kg",
        packList: ["Pouch — 500 grams", "Pouch — 1 kg"],
        summary: "Fortune Maida.",
        points: ["Fortune Maida", "Pouch — 500 grams", "Pouch — 1 kg"]
    },
    {
        id: "regular-poha",
        category: "Poha",
        name: "Fortune Regular Poha",
        image: "images/fortune-foods/regular-poha.png?v=2",
        packs: "Pouch 500g · Pouch 1kg",
        packList: ["Pouch — 500g", "Pouch — 1kg"],
        summary: "Fortune Regular Poha.",
        points: ["Fortune Regular Poha", "Pouch — 500g", "Pouch — 1kg"]
    },
    {
        id: "indori-poha",
        category: "Poha",
        name: "Fortune Indori Poha",
        image: "images/fortune-foods/indori-poha.png?v=2",
        packs: "Pouch 500g · Pouch 1kg",
        packList: ["Pouch — 500g", "Pouch — 1kg"],
        summary: "Fortune Indori Poha.",
        points: ["Fortune Indori Poha", "Pouch — 500g", "Pouch — 1kg"]
    },
    {
        id: "suji",
        category: "Suji",
        name: "Fortune Suji",
        image: "images/fortune-foods/suji.png?v=2",
        packs: "Pouch 200 g · Pouch 1 kg",
        packList: ["Pouch — 200 g", "Pouch — 1 kg"],
        summary: "Fortune Suji.",
        points: ["Fortune Suji", "Pouch — 200 g", "Pouch — 1 kg"]
    },
    {
        id: "wheat-sharbati",
        category: "Wheat",
        name: "Fortune Pure Sharbati Wheat",
        image: "images/fortune-foods/wheat-sharbati.png?v=2",
        packs: "Packs 30kg",
        packList: ["Packs — 30kg"],
        summary: "Fortune Pure Sharbati Wheat.",
        points: ["Fortune Pure Sharbati Wheat", "Packs — 30kg"]
    },
    {
        id: "wheat-lokwan",
        category: "Wheat",
        name: "Fortune Pure Lokwan Wheat",
        image: "images/fortune-foods/wheat-lokwan.png?v=2",
        packs: "Packs 30kg",
        packList: ["Packs — 30kg"],
        summary: "Fortune Pure Lokwan Wheat.",
        points: ["Fortune Pure Lokwan Wheat", "Packs — 30kg"]
    },
    {
        id: "wheat-1544",
        category: "Wheat",
        name: "Fortune Pure 1544 (Poorna) Wheat",
        image: "images/fortune-foods/wheat-1544.png?v=2",
        packs: "Packs 30kg",
        packList: ["Packs — 30kg"],
        summary: "Fortune Pure 1544 (Poorna) Wheat.",
        points: ["Fortune Pure 1544 (Poorna) Wheat", "Packs — 30kg"]
    },
    {
        id: "wheat-mp-grade1",
        category: "Wheat",
        name: "Fortune MP Grade 1 Wheat",
        image: "images/fortune-foods/wheat-mp-grade1.png?v=2",
        packs: "Packs 30kg",
        packList: ["Packs — 30kg"],
        summary: "Fortune MP Grade 1 Wheat.",
        points: ["Fortune MP Grade 1 Wheat", "Packs — 30kg"]
    },
    {
        id: "chana-sattu",
        category: "Chana Sattu",
        name: "Fortune Chana Sattu",
        image: "images/fortune-foods/chana-sattu.png?v=2",
        packs: "Pouch 200g, 500g",
        packList: ["Pouch — 200g, 500g"],
        summary: "Fortune Chana Sattu.",
        points: ["Fortune Chana Sattu", "Pouch — 200g, 500g"]
    },
    {
        id: "soap-sandalwood",
        category: "Alife Hygiene Soap",
        name: "Fortune Alife Soap - Sandalwood",
        image: "images/soap-sandalwood-premium.png",
        packs: "Sandalwood",
        packList: ["Sandalwood"],
        summary: "Fortune Alife soap in sandalwood.",
        points: ["Fortune Alife Soap", "Sandalwood"]
    },
    {
        id: "soap-lily",
        category: "Alife Hygiene Soap",
        name: "Fortune Alife Soap - Lily",
        image: "images/soap-lily-premium.png",
        packs: "Lily",
        packList: ["Lily"],
        summary: "Fortune Alife soap in lily.",
        points: ["Fortune Alife Soap", "Lily"]
    },
    {
        id: "soap-lime",
        category: "Alife Hygiene Soap",
        name: "Fortune Alife Soap - Lime",
        image: "images/soap-lime-premium.png",
        packs: "Lime",
        packList: ["Lime"],
        summary: "Fortune Alife soap in lime.",
        points: ["Fortune Alife Soap", "Lime"]
    },
    {
        id: "soap-rose",
        category: "Alife Hygiene Soap",
        name: "Fortune Alife Soap - Rose",
        image: "images/soap-rose-premium.png",
        packs: "Rose",
        packList: ["Rose"],
        summary: "Fortune Alife soap in rose.",
        points: ["Fortune Alife Soap", "Rose"]
    },
    {
        id: "bisleri-10l-jar",
        category: "Packaged Drinking Water",
        name: "Bisleri 10 L Packaged Drinking Water",
        image: "images/bisleri/water-10l.png?v=3",
        packs: "1 Jar · ₹130/- per jar",
        packList: ["10 Litre jar", "₹130/- per jar"],
        summary: "Bisleri 10 litre packaged drinking water jar.",
        points: ["10 Litre jar", "₹130/- per jar"]
    },
    {
        id: "bisleri-5l-jar",
        category: "Packaged Drinking Water",
        name: "Bisleri 5 L Packaged Drinking Water",
        image: "images/bisleri/water-5l.png?v=2",
        packs: "1 Jar · ₹75/- per jar",
        packList: ["5 Litre jar", "₹75/- per jar"],
        summary: "Bisleri 5 litre packaged drinking water jar.",
        points: ["5 Litre jar", "₹75/- per jar"]
    },
    {
        id: "bisleri-2l-case",
        category: "Packaged Drinking Water",
        name: "Bisleri 2 L Packaged Drinking Water — Case",
        image: "images/bisleri/water-2l.png?v=2",
        packs: "Case of 9 bottles · ₹270/-",
        packList: ["Case of 9 bottles", "₹270/- per case"],
        summary: "Bisleri 2 litre packaged drinking water, case of 9 bottles.",
        points: ["2 Litre bottle", "Case of 9 bottles", "₹270/- per case"]
    },
    {
        id: "bisleri-2l-single",
        category: "Packaged Drinking Water",
        name: "Bisleri 2 L Packaged Drinking Water — Single",
        image: "images/bisleri/water-2l.png?v=2",
        packs: "1 Bottle · ₹30/-",
        packList: ["Single 2 litre bottle", "₹30/- per bottle"],
        summary: "Bisleri 2 litre packaged drinking water, single bottle.",
        points: ["2 Litre bottle", "₹30/- per bottle"]
    },
    {
        id: "bisleri-1l-case",
        category: "Packaged Drinking Water",
        name: "Bisleri 1 L Packaged Drinking Water — Case",
        image: "images/bisleri/water-1l.png?v=2",
        packs: "Case of 12 bottles · ₹240/-",
        packList: ["Case of 12 bottles", "₹240/- per case"],
        summary: "Bisleri 1 litre packaged drinking water, case of 12 bottles.",
        points: ["1 Litre bottle", "Case of 12 bottles", "₹240/- per case"]
    },
    {
        id: "bisleri-1l-single",
        category: "Packaged Drinking Water",
        name: "Bisleri 1 L Packaged Drinking Water — Single",
        image: "images/bisleri/water-1l.png?v=2",
        packs: "1 Bottle · ₹20/-",
        packList: ["Single 1 litre bottle", "₹20/- per bottle"],
        summary: "Bisleri 1 litre packaged drinking water, single bottle.",
        points: ["1 Litre bottle", "₹20/- per bottle"]
    },
    {
        id: "bisleri-500ml-case",
        category: "Packaged Drinking Water",
        name: "Bisleri 500 ML Packaged Drinking Water — Case",
        image: "images/bisleri/water-500ml.png?v=3",
        packs: "Case of 24 bottles · ₹240/-",
        packList: ["Case of 24 bottles", "₹240/- per case"],
        summary: "Bisleri 500 ml packaged drinking water, case of 24 bottles.",
        points: ["500 ML bottle", "Case of 24 bottles", "₹240/- per case"]
    },
    {
        id: "bisleri-500ml-single",
        category: "Packaged Drinking Water",
        name: "Bisleri 500 ML Packaged Drinking Water — Single",
        image: "images/bisleri/water-500ml.png?v=3",
        packs: "1 Bottle · ₹10/-",
        packList: ["Single 500 ml bottle", "₹10/- per bottle"],
        summary: "Bisleri 500 ml packaged drinking water, single bottle.",
        points: ["500 ML bottle", "₹10/- per bottle"]
    },
    {
        id: "bisleri-soda-750ml-case",
        category: "Bisleri Soda",
        name: "Bisleri Soda 750 ML — Case",
        image: "images/bisleri/soda-750ml.png?v=2",
        packs: "Case of 12 bottles · ₹240/-",
        packList: ["Case of 12 bottles", "₹240/- per case"],
        summary: "Bisleri soda 750 ml, case of 12 bottles.",
        points: ["750 ML soda", "Case of 12 bottles", "₹240/- per case"]
    },
    {
        id: "bisleri-soda-750ml-single",
        category: "Bisleri Soda",
        name: "Bisleri Soda 750 ML — Single",
        image: "images/bisleri/soda-750ml.png?v=2",
        packs: "1 Bottle · ₹20/-",
        packList: ["Single 750 ml bottle", "₹20/- per bottle"],
        summary: "Bisleri soda 750 ml, single bottle.",
        points: ["750 ML soda", "₹20/- per bottle"]
    },
    {
        id: "bailley-20l",
        category: "Bailley",
        name: "Bailley 20 Ltr Packaged Drinking Water",
        image: "images/bailley/water-20l.png?v=4",
        packs: "20 Ltr – Pack of 1",
        packList: ["20 Litre", "Pack of 1"],
        summary: "Bailley 20 litre packaged drinking water with minerals.",
        points: [
            "20 Ltr – Pack of 1",
            "Packaged drinking water with minerals"
        ]
    },
    {
        id: "bailley-10l",
        category: "Bailley",
        name: "Bailley 10 Ltr Packaged Drinking Water",
        image: "images/bailley/water-10l.png?v=1",
        packs: "10 Ltr – Pack of 1",
        packList: ["10 Litre", "Pack of 1"],
        summary: "Bailley 10 litre packaged drinking water with minerals.",
        points: [
            "10 Ltr – Pack of 1",
            "Packaged drinking water with minerals"
        ]
    },
    {
        id: "bailley-5l",
        category: "Bailley",
        name: "Bailley 5 Ltr Packaged Drinking Water",
        image: "images/bailley/water-5l.png?v=3",
        packs: "5 Ltr – Pack of 1",
        packList: ["5 Litre", "Pack of 1"],
        summary: "Bailley 5 litre packaged drinking water with minerals.",
        points: [
            "5 Ltr – Pack of 1",
            "Packaged drinking water with minerals"
        ]
    },
    {
        id: "bailley-2l",
        category: "Bailley",
        name: "Bailley 2 Ltr Packaged Drinking Water",
        image: "images/bailley/water-2l.png?v=3",
        packs: "2 Ltr – Pack of 6",
        packList: ["2 Litre", "Pack of 6"],
        summary: "Bailley 2 litre packaged drinking water with minerals, pack of 6.",
        points: [
            "2 Ltr – Pack of 6",
            "Packaged drinking water with minerals"
        ]
    },
    {
        id: "bailley-1l",
        category: "Bailley",
        name: "Bailley 1 Ltr Packaged Drinking Water",
        image: "images/bailley/water-1l.png?v=3",
        packs: "1 Ltr – Pack of 12",
        packList: ["1 Litre", "Pack of 12"],
        summary: "Bailley 1 litre packaged drinking water with minerals, pack of 12.",
        points: [
            "1 Ltr – Pack of 12",
            "Packaged drinking water with minerals"
        ]
    },
    {
        id: "bailley-one-500ml",
        category: "Bailley",
        name: "Bailley One 500 ML Packaged Drinking Water",
        image: "images/bailley/bailley-one-500ml.png?v=3",
        packs: "500 ML – Pack of 24",
        packList: ["500 ML", "Pack of 24"],
        summary: "Bailley One 500 ml packaged drinking water with minerals, pack of 24.",
        points: [
            "500 ML – Pack of 24",
            "Bailley One with minerals"
        ]
    }
];

const PRODUCT_CATEGORIES = [
    { id: "bailley", name: "Bailley" },
    { id: "bisleri", name: "Bisleri" },
    { id: "fortune", name: "Fortune" }
];

const BRAND_FILTERS = {
    bailley: {
        title: "Bailley",
        match: function (item) {
            return /bailley/i.test(item.name) || item.category === "Bailley";
        }
    },
    bisleri: {
        title: "Bisleri",
        match: function (item) {
            return /bisleri/i.test(item.name)
                || item.category === "Packaged Drinking Water"
                || item.category === "Bisleri Soda";
        }
    },
    fortune: {
        title: "Fortune",
        match: function (item) {
            return /fortune|alife/i.test(item.name);
        }
    }
};

function getBrandProducts(brand) {
    const filter = BRAND_FILTERS[brand];
    if (!filter) return [];
    return PRODUCTS.filter(filter.match);
}

const FORTUNE_CATEGORY_ORDER = [
    "Oils",
    "Atta",
    "Rice",
    "Soya Chunks",
    "Besan",
    "Sugar",
    "Pulses",
    "Rawa",
    "Maida",
    "Poha",
    "Suji",
    "Wheat",
    "Chana Sattu"
];

const FORTUNE_FAMILY = {
    Oils: ["Oils"],
    Foods: [
        "Atta",
        "Rice",
        "Soya Chunks",
        "Besan",
        "Sugar",
        "Pulses",
        "Rawa",
        "Maida",
        "Poha",
        "Suji",
        "Wheat",
        "Chana Sattu"
    ]
};

const FORTUNE_OIL_SUBCATEGORIES = [
    { id: "soya-health", label: "Fortune Soya Health Oil", productIds: ["soya"] },
    { id: "sunlite", label: "Fortune Sunlite Refined Sunflower Oil", productIds: ["sunflower"] },
    { id: "kachi-ghani", label: "Fortune Kachi Ghani Mustard Oil", productIds: ["mustard"] },
    { id: "rice-bran", label: "Fortune Rice Bran Health Oil", productIds: ["ricebran"] },
    { id: "filtered-groundnut", label: "Fortune Filtered Groundnut Oil", productIds: ["groundnut"] },
    { id: "cottonlite", label: "Fortune Cottonlite Oil", productIds: ["cottonlite"] },
    { id: "goldnut", label: "Fortune Goldnut Refined Groundnut Oil", productIds: ["goldnut"] },
    { id: "xpert-active", label: "Fortune Xpert Active Oil", productIds: ["xpert-active"] },
    { id: "xpert-total", label: "Fortune Xpert Total Balance Oil", productIds: ["xpert-total"] },
    { id: "xpert-immunity", label: "Fortune Xpert Pro Immunity Oil", productIds: ["xpert-immunity"] },
    { id: "xpert-sugar", label: "Fortune Xpert Pro Sugar Conscious Oil", productIds: ["xpert-sugar"] },
    { id: "pehli-dhaar", label: "Fortune Pehli Dhaar Mustard Oil", productIds: ["pehli-dhaar"] }
];

const FORTUNE_FOOD_SUBCATEGORIES = [
    { id: "atta", label: "Fortune Atta", category: "Atta" },
    { id: "rice", label: "Fortune Rice", category: "Rice" },
    { id: "soya-chunks", label: "Fortune Soya Chunks", category: "Soya Chunks" },
    { id: "besan", label: "Fortune Besan", category: "Besan" },
    { id: "sugar", label: "Fortune Sugar", category: "Sugar" },
    { id: "pulses", label: "Fortune Unpolished Pulses", category: "Pulses" },
    { id: "rawa", label: "Fortune Rawa", category: "Rawa" },
    { id: "maida", label: "Fortune Maida", category: "Maida" },
    { id: "poha", label: "Fortune Poha", category: "Poha" },
    { id: "suji", label: "Fortune Suji", category: "Suji" },
    { id: "wheat", label: "Fortune Wheat", category: "Wheat" },
    { id: "chana-sattu", label: "Fortune Chana Sattu", category: "Chana Sattu" }
];

function getProductsByIds(ids) {
    return ids.map(function (id) {
        return getProduct(id);
    }).filter(Boolean);
}

function categorySlug(brand, category) {
    return brand + "-" + category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function getBrandCategories(brand) {
    const items = getBrandProducts(brand);
    const seen = {};
    items.forEach(function (item) {
        seen[item.category] = true;
    });
    const preferred = brand === "fortune" ? FORTUNE_CATEGORY_ORDER : [];
    const ordered = preferred.filter(function (name) {
        return seen[name];
    });
    Object.keys(seen).forEach(function (name) {
        if (ordered.indexOf(name) === -1) ordered.push(name);
    });
    return ordered;
}

function getBrandProductsByCategory(brand, category) {
    return getBrandProducts(brand).filter(function (item) {
        return item.category === category;
    });
}

function renderSubcategory(brand, category) {
    const items = getBrandProductsByCategory(brand, category);
    if (!items.length) return "";
    return '<div class="catalog-subgroup" id="' + categorySlug(brand, category) + '" data-subcategory="' + category + '">' +
        '<h3 class="catalog-subtitle">' + category + '</h3>' +
        '<div class="products-grid">' + items.map(productCard).join("") + '</div>' +
        '</div>';
}

function renderOilSubcategory(sub) {
    const items = getProductsByIds(sub.productIds);
    if (!items.length) return "";
    return items.map(function (item) {
        return '<div class="product-card" data-oil-sub="' + sub.id + '">' +
            productCardInner(item) +
            '</div>';
    }).join("");
}

function renderFoodSubcategory(sub) {
    const items = getBrandProductsByCategory("fortune", sub.category);
    if (!items.length) return "";
    return items.map(function (item) {
        return '<div class="product-card" data-food-sub="' + sub.id + '">' +
            productCardInner(item) +
            '</div>';
    }).join("");
}

function productCardInner(item, options) {
    options = options || {};
    return '<div class="product-img-box">' +
            '<img src="' + item.image + '" alt="' + item.name + '">' +
        '</div>' +
        '<h4>' + item.name + '</h4>' +
        '<a href="product.html?id=' + item.id + '" class="btn">Explore Now</a>';
}

function renderFortuneCatalog() {
    const chips = [
        '<button type="button" class="catalog-subchip active" data-subfilter="all">All</button>',
        '<button type="button" class="catalog-subchip" data-subfilter="Oils">Oils</button>',
        '<button type="button" class="catalog-subchip" data-subfilter="Foods">Foods</button>'
    ].join("");

    const oilCards = FORTUNE_OIL_SUBCATEGORIES.map(renderOilSubcategory).join("");

    const foodSubs = FORTUNE_FOOD_SUBCATEGORIES.filter(function (sub) {
        return getBrandProductsByCategory("fortune", sub.category).length > 0;
    });
    const foodChips = foodSubs.map(function (sub) {
        return '<button type="button" class="catalog-foodchip" data-food-filter="' + sub.id + '">' + sub.label + '</button>';
    }).join("");
    const foodCards = foodSubs.map(renderFoodSubcategory).join("");

    let body = "";
    if (oilCards) {
        body += '<div class="catalog-family" data-family="Oils">' +
            '<h3 class="catalog-family-title">Oils</h3>' +
            '<div class="catalog-subgroup">' +
            '<div class="products-grid">' + oilCards + '</div>' +
            '</div></div>';
    }
    if (foodCards) {
        body += '<div class="catalog-family" data-family="Foods">' +
            '<h3 class="catalog-family-title">Foods</h3>' +
            '<div class="catalog-foodnav" role="tablist" aria-label="Fortune food subcategories">' +
            '<button type="button" class="catalog-foodchip active" data-food-filter="all">All Foods</button>' +
            foodChips +
            '</div>' +
            '<div class="catalog-subgroup">' +
            '<div class="products-grid">' + foodCards + '</div>' +
            '</div></div>';
    }

    return '<div class="catalog-group" id="fortune">' +
        '<div class="section-header"><h2 class="section-title">Fortune</h2></div>' +
        '<div class="catalog-subnav" role="tablist" aria-label="Fortune subcategories">' + chips + '</div>' +
        body +
        '</div>';
}

function renderBrandCatalog(brand) {
    const filter = BRAND_FILTERS[brand];
    if (!filter) return "";
    if (brand === "fortune") return renderFortuneCatalog();

    const categories = getBrandCategories(brand);
    if (categories.length <= 1) {
        const items = getBrandProducts(brand);
        return '<div class="catalog-group" id="' + brand + '">' +
            '<div class="section-header"><h2 class="section-title">' + filter.title + '</h2></div>' +
            '<div class="products-grid">' + items.map(productCard).join("") + '</div>' +
            '</div>';
    }
    return '<div class="catalog-group" id="' + brand + '">' +
        '<div class="section-header"><h2 class="section-title">' + filter.title + '</h2></div>' +
        categories.map(function (category) {
            return renderSubcategory(brand, category);
        }).join("") +
        '</div>';
}

function getProduct(id) {
    return PRODUCTS.find(function (item) {
        return item.id === id;
    });
}

function productCard(item) {
    return '<div class="product-card">' + productCardInner(item) + '</div>';
}
