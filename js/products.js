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
        id: "chakki-fresh-atta",
        category: "Atta",
        name: "Fortune Chakki Fresh Atta",
        image: "images/fortune-foods/chakki-fresh-atta.png?v=1",
        packs: "Fortune atta",
        packList: ["Chakki Fresh Atta"],
        summary: "Fortune Chakki Fresh Atta.",
        points: ["Fortune Chakki Fresh Atta"]
    },
    {
        id: "premium-sharbati-atta",
        category: "Atta",
        name: "Fortune Premium Sharbati Atta",
        image: "images/fortune-foods/premium-sharbati-atta.png?v=1",
        packs: "Fortune atta",
        packList: ["Premium Sharbati Atta"],
        summary: "Fortune Premium Sharbati Atta.",
        points: ["Fortune Premium Sharbati Atta"]
    },
    {
        id: "atta-multigrains",
        category: "Atta",
        name: "Fortune Atta With Multigrains",
        image: "images/fortune-foods/atta-multigrains.png?v=1",
        packs: "Fortune atta",
        packList: ["Atta with Multigrains"],
        summary: "Fortune Atta with Multigrains.",
        points: ["Fortune Atta With Multigrains"]
    },
    {
        id: "biryani-special",
        category: "Rice",
        name: "Fortune Biryani Special Basmati Rice",
        image: "images/fortune-foods/biryani-special.png?v=1",
        packs: "Fortune rice",
        packList: ["Biryani Special Basmati Rice"],
        summary: "Fortune Biryani Special Basmati Rice.",
        points: ["Fortune Biryani Special Basmati Rice"]
    },
    {
        id: "everyday-basmati",
        category: "Rice",
        name: "Fortune Everyday Basmati Rice",
        image: "images/fortune-foods/everyday-basmati.png?v=1",
        packs: "Fortune rice",
        packList: ["Everyday Basmati Rice"],
        summary: "Fortune Everyday Basmati Rice.",
        points: ["Fortune Everyday Basmati Rice"]
    },
    {
        id: "rozana-basmati",
        category: "Rice",
        name: "Fortune Rozana Basmati Rice",
        image: "images/fortune-foods/rozana-basmati.png?v=1",
        packs: "Fortune rice",
        packList: ["Rozana Basmati Rice"],
        summary: "Fortune Rozana Basmati Rice.",
        points: ["Fortune Rozana Basmati Rice"]
    },
    {
        id: "soya-granules",
        category: "Soya Products",
        name: "Fortune Soya Granules",
        image: "images/fortune-foods/soya-granules.png?v=1",
        packs: "Fortune soya",
        packList: ["Soya Granules"],
        summary: "Fortune Soya Granules.",
        points: ["Fortune Soya Granules"]
    },
    {
        id: "soya-mini-chunks",
        category: "Soya Products",
        name: "Fortune Soya Mini Chunks",
        image: "images/fortune-foods/soya-mini-chunks.png?v=1",
        packs: "Fortune soya",
        packList: ["Soya Mini Chunks"],
        summary: "Fortune Soya Mini Chunks.",
        points: ["Fortune Soya Mini Chunks"]
    },
    {
        id: "soya-chunks",
        category: "Soya Products",
        name: "Fortune Soya Chunks",
        image: "images/fortune-foods/soya-chunks.png?v=1",
        packs: "Fortune soya",
        packList: ["Soya Chunks"],
        summary: "Fortune Soya Chunks.",
        points: ["Fortune Soya Chunks"]
    },
    {
        id: "besan",
        category: "Staples",
        name: "Fortune Besan",
        image: "images/fortune-foods/besan.png?v=1",
        packs: "Fortune staple",
        packList: ["Besan"],
        summary: "Fortune Besan.",
        points: ["Fortune Besan"]
    },
    {
        id: "sugar",
        category: "Staples",
        name: "Fortune Sugar",
        image: "images/fortune-foods/sugar.png?v=1",
        packs: "Fortune staple",
        packList: ["Sugar"],
        summary: "Fortune Sugar.",
        points: ["Fortune Sugar"]
    },
    {
        id: "rawa",
        category: "Staples",
        name: "Fortune Rawa",
        image: "images/fortune-foods/rawa.png?v=1",
        packs: "Fortune staple",
        packList: ["Rawa"],
        summary: "Fortune Rawa.",
        points: ["Fortune Rawa"]
    },
    {
        id: "maida",
        category: "Staples",
        name: "Fortune Maida",
        image: "images/fortune-foods/maida.png?v=1",
        packs: "Fortune staple",
        packList: ["Maida"],
        summary: "Fortune Maida.",
        points: ["Fortune Maida"]
    },
    {
        id: "suji",
        category: "Staples",
        name: "Fortune Suji",
        image: "images/fortune-foods/suji.png?v=1",
        packs: "Fortune staple",
        packList: ["Suji"],
        summary: "Fortune Suji.",
        points: ["Fortune Suji"]
    },
    {
        id: "chana-sattu",
        category: "Staples",
        name: "Fortune Chana Sattu",
        image: "images/fortune-foods/chana-sattu.png?v=1",
        packs: "Fortune staple",
        packList: ["Chana Sattu"],
        summary: "Fortune Chana Sattu.",
        points: ["Fortune Chana Sattu"]
    },
    {
        id: "chana-dal",
        category: "Pulses",
        name: "Fortune Unpolished Chana Dal",
        image: "images/fortune-foods/chana-dal.png?v=1",
        packs: "Fortune pulses",
        packList: ["Unpolished Chana Dal"],
        summary: "Fortune Unpolished Chana Dal.",
        points: ["Fortune Unpolished Chana Dal"]
    },
    {
        id: "arhar-dal",
        category: "Pulses",
        name: "Fortune Unpolished Arhar Dal",
        image: "images/fortune-foods/arhar-dal.png?v=1",
        packs: "Fortune pulses",
        packList: ["Unpolished Arhar Dal"],
        summary: "Fortune Unpolished Arhar Dal.",
        points: ["Fortune Unpolished Arhar Dal"]
    },
    {
        id: "moong-dal",
        category: "Pulses",
        name: "Fortune Unpolished Moong Dal",
        image: "images/fortune-foods/moong-dal.png?v=1",
        packs: "Fortune pulses",
        packList: ["Unpolished Moong Dal"],
        summary: "Fortune Unpolished Moong Dal.",
        points: ["Fortune Unpolished Moong Dal"]
    },
    {
        id: "sona-moong-dal",
        category: "Pulses",
        name: "Fortune Unpolished Sona Moong Dal",
        image: "images/fortune-foods/sona-moong-dal.png?v=1",
        packs: "Fortune pulses",
        packList: ["Unpolished Sona Moong Dal"],
        summary: "Fortune Unpolished Sona Moong Dal.",
        points: ["Fortune Unpolished Sona Moong Dal"]
    },
    {
        id: "desi-masoor",
        category: "Pulses",
        name: "Fortune Unpolished Desi Masoor Malka Dal",
        image: "images/fortune-foods/desi-masoor.png?v=1",
        packs: "Fortune pulses",
        packList: ["Unpolished Desi Masoor Malka Dal"],
        summary: "Fortune Unpolished Desi Masoor Malka Dal.",
        points: ["Fortune Unpolished Desi Masoor Malka Dal"]
    },
    {
        id: "big-masoor",
        category: "Pulses",
        name: "Fortune Unpolished Big Masoor Malka Dal",
        image: "images/fortune-foods/big-masoor.png?v=1",
        packs: "Fortune pulses",
        packList: ["Unpolished Big Masoor Malka Dal"],
        summary: "Fortune Unpolished Big Masoor Malka Dal.",
        points: ["Fortune Unpolished Big Masoor Malka Dal"]
    },
    {
        id: "kabuli-chana",
        category: "Pulses",
        name: "Fortune Unpolished Kabuli Chana",
        image: "images/fortune-foods/kabuli-chana.png?v=1",
        packs: "Fortune pulses",
        packList: ["Unpolished Kabuli Chana"],
        summary: "Fortune Unpolished Kabuli Chana.",
        points: ["Fortune Unpolished Kabuli Chana"]
    },
    {
        id: "kala-chana",
        category: "Pulses",
        name: "Fortune Unpolished Kala Chana Whole",
        image: "images/fortune-foods/kala-chana.png?v=1",
        packs: "Fortune pulses",
        packList: ["Unpolished Kala Chana Whole"],
        summary: "Fortune Unpolished Kala Chana Whole.",
        points: ["Fortune Unpolished Kala Chana Whole"]
    },
    {
        id: "rajma-chitra",
        category: "Pulses",
        name: "Fortune Unpolished Rajma Chitra",
        image: "images/fortune-foods/rajma-chitra.png?v=1",
        packs: "Fortune pulses",
        packList: ["Unpolished Rajma Chitra"],
        summary: "Fortune Unpolished Rajma Chitra.",
        points: ["Fortune Unpolished Rajma Chitra"]
    },
    {
        id: "regular-poha",
        category: "Poha",
        name: "Fortune Regular Poha",
        image: "images/fortune-foods/regular-poha.png?v=1",
        packs: "Fortune poha",
        packList: ["Regular Poha"],
        summary: "Fortune Regular Poha.",
        points: ["Fortune Regular Poha"]
    },
    {
        id: "indori-poha",
        category: "Poha",
        name: "Fortune Indori Poha",
        image: "images/fortune-foods/indori-poha.png?v=1",
        packs: "Fortune poha",
        packList: ["Indori Poha"],
        summary: "Fortune Indori Poha.",
        points: ["Fortune Indori Poha"]
    },
    {
        id: "wheat-sharbati",
        category: "Wheat",
        name: "Fortune Pure Sharbati Wheat",
        image: "images/fortune-foods/wheat-sharbati.png?v=1",
        packs: "Fortune wheat",
        packList: ["Pure Sharbati Wheat"],
        summary: "Fortune Pure Sharbati Wheat.",
        points: ["Fortune Pure Sharbati Wheat"]
    },
    {
        id: "wheat-lokwan",
        category: "Wheat",
        name: "Fortune Pure Lokwan Wheat",
        image: "images/fortune-foods/wheat-lokwan.png?v=1",
        packs: "Fortune wheat",
        packList: ["Pure Lokwan Wheat"],
        summary: "Fortune Pure Lokwan Wheat.",
        points: ["Fortune Pure Lokwan Wheat"]
    },
    {
        id: "wheat-1544",
        category: "Wheat",
        name: "Fortune Pure 1544 (Poorna) Wheat",
        image: "images/fortune-foods/wheat-1544.png?v=1",
        packs: "Fortune wheat",
        packList: ["Pure 1544 (Poorna) Wheat"],
        summary: "Fortune Pure 1544 (Poorna) Wheat.",
        points: ["Fortune Pure 1544 (Poorna) Wheat"]
    },
    {
        id: "wheat-mp-grade1",
        category: "Wheat",
        name: "Fortune MP Grade 1 Wheat",
        image: "images/fortune-foods/wheat-mp-grade1.png?v=1",
        packs: "Fortune wheat",
        packList: ["MP Grade 1 Wheat"],
        summary: "Fortune MP Grade 1 Wheat.",
        points: ["Fortune MP Grade 1 Wheat"]
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
    "Packaged Drinking Water",
    "Bisleri Soda",
    "Edible Oils",
    "Fortune Xpert Oils",
    "Atta",
    "Rice",
    "Soya Products",
    "Staples",
    "Pulses",
    "Poha",
    "Wheat",
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
