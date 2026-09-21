const PRODUCTS = [
    {
        id: "goldnut",
        category: "Edible Oils",
        name: "Fortune Goldnut Refined Groundnut Oil",
        image: "images/fortune/goldnut.png?v=2",
        packs: "Fortune edible oil",
        packList: ["Refined groundnut oil"],
        summary: "Fortune Goldnut refined groundnut oil.",
        points: ["Fortune Goldnut", "Refined groundnut oil"]
    },
    {
        id: "pehli-dhaar",
        category: "Edible Oils",
        name: "Fortune Pehli Dhaar Mustard Oil",
        image: "images/fortune/pehli-dhaar.png?v=2",
        packs: "Fortune edible oil",
        packList: ["First pressed kachi ghani mustard oil"],
        summary: "Fortune Pehli Dhaar first pressed kachi ghani mustard oil.",
        points: ["Fortune Pehli Dhaar", "First pressed kachi ghani mustard oil"]
    },
    {
        id: "cottonlite",
        category: "Edible Oils",
        name: "Fortune Cottonlite Oil",
        image: "images/fortune/cottonlite.png?v=2",
        packs: "Fortune edible oil",
        packList: ["Refined cottonseed oil"],
        summary: "Fortune Cottonlite refined cottonseed oil.",
        points: ["Fortune Cottonlite", "Refined cottonseed oil"]
    },
    {
        id: "groundnut",
        category: "Edible Oils",
        name: "Fortune Filtered Groundnut Oil",
        image: "images/fortune/groundnut.png?v=2",
        packs: "Fortune edible oil",
        packList: ["Filtered groundnut oil"],
        summary: "Fortune filtered groundnut oil.",
        points: ["Fortune Filtered Groundnut Oil"]
    },
    {
        id: "ricebran",
        category: "Edible Oils",
        name: "Fortune Rice Bran Health Oil",
        image: "images/fortune/ricebran.png?v=2",
        packs: "Fortune edible oil",
        packList: ["Rice bran health oil"],
        summary: "Fortune rice bran health oil.",
        points: ["Fortune Rice Bran Health Oil"]
    },
    {
        id: "mustard",
        category: "Edible Oils",
        name: "Fortune Kachi Ghani Mustard Oil",
        image: "images/fortune/mustard.png?v=2",
        packs: "Fortune edible oil",
        packList: ["Kachi ghani mustard oil"],
        summary: "Fortune kachi ghani mustard oil.",
        points: ["Fortune Kachi Ghani Mustard Oil"]
    },
    {
        id: "sunflower",
        category: "Edible Oils",
        name: "Fortune Sunlite Refined Sunflower Oil",
        image: "images/fortune/sunflower.png?v=2",
        packs: "Fortune edible oil",
        packList: ["Refined sunflower oil"],
        summary: "Fortune Sunlite refined sunflower oil.",
        points: ["Fortune Sunlite", "Refined sunflower oil"]
    },
    {
        id: "soya",
        category: "Edible Oils",
        name: "Fortune Soya Health Oil",
        image: "images/fortune/soya.png?v=2",
        packs: "Fortune edible oil",
        packList: ["Soya health oil"],
        summary: "Fortune soya health oil.",
        points: ["Fortune Soya Health Oil"]
    },
    {
        id: "xpert-active",
        category: "Fortune Xpert Oils",
        name: "Fortune Xpert Active Oil",
        image: "images/fortune/xpert-active.png?v=2",
        packs: "Fortune Xpert oil",
        packList: ["Xpert Active"],
        summary: "Fortune Xpert Active oil.",
        points: ["Fortune Xpert Active Oil"]
    },
    {
        id: "xpert-total",
        category: "Fortune Xpert Oils",
        name: "Fortune Xpert Total Balance Oil",
        image: "images/fortune/xpert-total.png?v=2",
        packs: "Fortune Xpert oil",
        packList: ["Xpert Total Balance"],
        summary: "Fortune Xpert Total Balance oil.",
        points: ["Fortune Xpert Total Balance Oil"]
    },
    {
        id: "xpert-immunity",
        category: "Fortune Xpert Oils",
        name: "Fortune Xpert Pro Immunity Oil",
        image: "images/fortune/xpert-immunity.png?v=2",
        packs: "Fortune Xpert oil",
        packList: ["Xpert Pro Immunity"],
        summary: "Fortune Xpert Pro Immunity oil.",
        points: ["Fortune Xpert Pro Immunity Oil"]
    },
    {
        id: "xpert-sugar",
        category: "Fortune Xpert Oils",
        name: "Fortune Xpert Pro Sugar Conscious Oil",
        image: "images/fortune/xpert-sugar.png?v=2",
        packs: "Fortune Xpert oil",
        packList: ["Xpert Pro Sugar Conscious"],
        summary: "Fortune Xpert Pro Sugar Conscious oil.",
        points: ["Fortune Xpert Pro Sugar Conscious Oil"]
    },
    {
        id: "soya-granules",
        category: "Soya Products",
        name: "Fortune Soya Granules / Chura",
        image: "images/soya-granules-premium.png",
        packs: "₹10, ₹20, 200 gms and 1 kg packs",
        packList: ["₹10 pack", "₹20 pack", "200 gms", "1 kg"],
        summary: "Fortune soya granules, also labelled chura, from the foods range.",
        points: ["Soya granules / chura", "Available in ₹10, ₹20, 200 gms and 1 kg packs"]
    },
    {
        id: "soya-chunks",
        category: "Soya Products",
        name: "Fortune Soya Chunks",
        image: "images/soya-chunks-exact.png",
        packs: "₹10, ₹20, 200g and 1kg packs",
        packList: ["₹10 pack", "₹20 pack", "200 gms", "1 kg"],
        summary: "Fortune soya chunks from the foods range.",
        points: ["Soya chunks", "Available in ₹10, ₹20, 200 gms and 1 kg packs"]
    },
    {
        id: "soya-mini",
        category: "Soya Products",
        name: "Fortune Mini Soya Chunks",
        image: "images/soya-mini-premium.png",
        packs: "₹10, ₹20, 200 gms and 1 kg packs",
        packList: ["₹10 pack", "₹20 pack", "200 gms", "1 kg"],
        summary: "Fortune mini soya chunks from the foods range.",
        points: ["Mini soya chunks", "Available in ₹10, ₹20, 200 gms and 1 kg packs"]
    },
    {
        id: "wada-kolam",
        category: "Rice Range",
        name: "Fortune Wada Kolam Rice",
        image: "images/wada-kolam-premium.png",
        packs: "Shown in the Fortune foods range",
        packList: ["Fortune Wada Kolam Rice"],
        summary: "Fortune Wada Kolam rice from the foods range.",
        points: ["Fortune Wada Kolam Rice", "Part of the Fortune rice and foods line"]
    },
    {
        id: "sona-regular",
        category: "Rice Range",
        name: "Fortune Sona Masoori Rice Regular",
        image: "images/sona-regular-premium.png",
        packs: "Shown in the Fortune foods range",
        packList: ["Fortune Sona Masoori Rice Regular"],
        summary: "Fortune Sona Masoori rice, regular.",
        points: ["Sona Masoori Rice Regular", "Part of the Fortune rice and foods line"]
    },
    {
        id: "sona-supreme",
        category: "Rice Range",
        name: "Fortune Sona Masoori Rice Supreme",
        image: "images/sona-supreme-premium.png",
        packs: "Shown in the Fortune foods range",
        packList: ["Fortune Sona Masoori Rice Supreme"],
        summary: "Fortune Sona Masoori rice, supreme.",
        points: ["Sona Masoori Rice Supreme", "Part of the Fortune rice and foods line"]
    },
    {
        id: "biryani-kit",
        category: "Rice Range",
        name: "Kohinoor Biryani Kit",
        image: "images/biryani-kit-premium.png",
        packs: "Biryani kit",
        packList: ["Kohinoor Biryani Kit"],
        summary: "Kohinoor biryani kit from the Fortune foods range.",
        points: ["Kohinoor Biryani Kit", "Shown alongside the Fortune foods range"]
    },
    {
        id: "chakki-atta",
        category: "Staples & Atta",
        name: "Fortune Chakki Fresh Atta",
        image: "images/chakki-atta-premium.png",
        packs: "Pouches: 1 kg, 5 kg, 10 kg",
        packList: ["Pouch — 1 kg", "Pouch — 5 kg", "Pouch — 10 kg"],
        summary: "Fortune chakki fresh atta in pouches.",
        points: ["Chakki fresh atta", "Available in pouches of 1 kg, 5 kg and 10 kg"]
    },
    {
        id: "suji",
        category: "Staples & Atta",
        name: "Fortune Suji",
        image: "images/suji-premium.png",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune suji in a 500 g pouch.",
        points: ["Fortune suji", "Available in a 500 g pouch"]
    },
    {
        id: "rawa",
        category: "Staples & Atta",
        name: "Fortune Rawa",
        image: "images/rawa-premium.png",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune rawa in a 500 g pouch.",
        points: ["Fortune rawa", "Available in a 500 g pouch"]
    },
    {
        id: "maida",
        category: "Staples & Atta",
        name: "Fortune Maida",
        image: "images/maida-premium.png",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune maida in a 500 g pouch.",
        points: ["Fortune maida", "Available in a 500 g pouch"]
    },
    {
        id: "besan",
        category: "Staples & Atta",
        name: "Fortune Chana Dal Besan",
        image: "images/besan-premium.png",
        packs: "Pouches: 200 g, 500 g, 1 kg",
        packList: ["Pouch — 200 g", "Pouch — 500 g", "Pouch — 1 kg"],
        summary: "Fortune chana dal besan in pouches.",
        points: ["Chana dal besan", "Available in pouches of 200 g, 500 g and 1 kg"]
    },
    {
        id: "sugar",
        category: "Staples & Atta",
        name: "Fortune Sugar",
        image: "images/sugar-premium.png",
        packs: "Pouches: 500 g, 1 kg, 5 kg",
        packList: ["Pouch — 500 g", "Pouch — 1 kg", "Pouch — 5 kg"],
        summary: "Fortune sugar in pouches.",
        points: ["Fortune sugar", "Available in pouches of 500 g, 1 kg and 5 kg"]
    },
    {
        id: "indori-poha",
        category: "Staples & Atta",
        name: "Fortune Indori Poha",
        image: "images/indori-poha-premium.png",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune Indori poha in a 500 g pouch.",
        points: ["Indori poha", "Available in a 500 g pouch"]
    },
    {
        id: "thick-poha",
        category: "Staples & Atta",
        name: "Fortune Thick Poha",
        image: "images/thick-poha-premium.png",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune thick poha in a 500 g pouch.",
        points: ["Thick poha", "Available in a 500 g pouch"]
    },
    {
        id: "super-basmati",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Super Basmati Rice",
        image: "images/super-basmati-premium.png",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Super basmati rice.",
        points: ["Fortune Super Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "biryani-classic",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Biryani Classic Basmati Rice",
        image: "images/biryani-classic-premium.png",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Biryani Classic basmati rice.",
        points: ["Biryani Classic Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "biryani-special",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Biryani Special Basmati Rice",
        image: "images/biryani-special-premium.png",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Biryani Special basmati rice.",
        points: ["Biryani Special Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "everyday-basmati",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Everyday Basmati Rice",
        image: "images/everyday-basmati-premium.png",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Everyday basmati rice.",
        points: ["Everyday Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "rozana-basmati",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Everyday Rozana Basmati Rice",
        image: "images/rozana-basmati-premium.png",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Everyday Rozana basmati rice.",
        points: ["Everyday Rozana Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "kohinoor-silver",
        category: "Basmati & Kohinoor Rice",
        name: "Kohinoor Super Silver",
        image: "images/kohinoor-silver-premium.png",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Kohinoor Super Silver rice.",
        points: ["Kohinoor Super Silver", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "kohinoor-trophy",
        category: "Basmati & Kohinoor Rice",
        name: "Kohinoor Trophy Royale",
        image: "images/kohinoor-trophy-premium.png",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Kohinoor Trophy Royale rice.",
        points: ["Kohinoor Trophy Royale", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "kohinoor-charminar",
        category: "Basmati & Kohinoor Rice",
        name: "Kohinoor Charminar",
        image: "images/kohinoor-charminar-premium.png",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Kohinoor Charminar rice.",
        points: ["Kohinoor Charminar", "Available in 1 kg and 5 kg packs"]
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
        id: "bisleri-20l-jar",
        category: "Packaged Drinking Water",
        name: "Bisleri 20 L Packaged Drinking Water",
        image: "images/bisleri/water-20l.png?v=2",
        packs: "1 Jar · ₹100/- per jar",
        packList: ["20 Litre jar", "₹100/- per jar"],
        summary: "Bisleri 20 litre packaged drinking water jar.",
        points: ["20 Litre jar", "₹100/- per jar"]
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
        image: "images/bailley/water-20l.png?v=2",
        packs: "20 Ltr – Pack of 1",
        packList: ["20 Litre", "Pack of 1"],
        summary: "Bailley 20 litre packaged drinking water with minerals.",
        points: [
            "20 Ltr – Pack of 1",
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
            "Packaged drinking water with minerals",
            "Free jar, no deposit"
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
        packs: "500 ML – Pack of 24 – Bailley One",
        packList: ["500 ML", "Pack of 24", "Bailley One"],
        summary: "Bailley One 500 ml packaged drinking water with minerals, pack of 24.",
        points: [
            "500 ML – Pack of 24 – Bailley One",
            "Packaged drinking water with minerals"
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
            return /fortune|raag gold|alife|kohinoor/i.test(item.name);
        }
    }
};

function getBrandProducts(brand) {
    const filter = BRAND_FILTERS[brand];
    if (!filter) return [];
    return PRODUCTS.filter(filter.match);
}

const FORTUNE_CATEGORY_ORDER = [
    "Packaged Drinking Water",
    "Bisleri Soda",
    "Edible Oils",
    "Fortune Xpert Oils",
    "Soya Products",
    "Rice Range",
    "Basmati & Kohinoor Rice",
    "Staples & Atta",
    "Alife Hygiene Soap"
];

function getBrandCategories(brand) {
    const items = getBrandProducts(brand);
    const seen = {};
    items.forEach(function (item) {
        seen[item.category] = true;
    });
    const ordered = FORTUNE_CATEGORY_ORDER.filter(function (name) {
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

function renderBrandCatalog(brand) {
    const filter = BRAND_FILTERS[brand];
    if (!filter) return "";
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
            const items = getBrandProductsByCategory(brand, category);
            const slug = brand + "-" + category.toLowerCase().replace(/[^a-z0-9]+/g, "-");
            return '<div class="catalog-subgroup" id="' + slug + '">' +
                '<h3 class="catalog-subtitle">' + category + '</h3>' +
                '<div class="products-grid">' + items.map(productCard).join("") + '</div>' +
                '</div>';
        }).join("") +
        '</div>';
}

function getProduct(id) {
    return PRODUCTS.find(function (item) {
        return item.id === id;
    });
}

function productCard(item) {
    return '<div class="product-card">' +
        '<div class="product-img-box">' +
            '<img src="' + item.image + '" alt="' + item.name + '">' +
        '</div>' +
        '<h4>' + item.name + '</h4>' +
        '<a href="product.html?id=' + item.id + '" class="btn">Explore Now</a>' +
        '</div>';
}
