const PRODUCTS = [
    {
        id: "goldnut",
        category: "Edible Oils",
        name: "Fortune Goldnut Refined Groundnut Oil",
        image: "images/fortune/goldnut.png?v=4",
        packs: "PET Bottle 1L · Pouch 1L · Jerry Can 5L · Tin 15 kg",
        packList: ["PET Bottle — 1 litre", "Pouch — 1 litre", "Jerry Can — 5 litres", "Tin — 15 kg"],
        summary: "Fortune Goldnut refined groundnut oil.",
        points: ["Fortune Goldnut", "PET Bottle — 1 litre", "Pouch — 1 litre", "Jerry Can — 5 litres", "Tin — 15 kg"]
    },
    {
        id: "pehli-dhaar",
        category: "Edible Oils",
        name: "Fortune Pehli Dhaar Mustard Oil",
        image: "images/fortune/pehli-dhaar.png?v=4",
        packs: "Pet Bottle 1L · Pouch 1L",
        packList: ["Pet Bottle — 1 litre", "Pouch — 1 litre"],
        summary: "Fortune Pehli Dhaar first pressed kachi ghani mustard oil.",
        points: ["Fortune Pehli Dhaar", "Pet Bottle — 1 litre", "Pouch — 1 litre"]
    },
    {
        id: "cottonlite",
        category: "Edible Oils",
        name: "Fortune Cottonlite Oil",
        image: "images/fortune/cottonlite.png?v=4",
        packs: "Pouch 1L · Jerry Can 5L · Tin 10 kg · Tin 15L / 15 kg",
        packList: ["Pouch — 1 litre", "Jerry Can — 5 litres", "Tin — 10 kg", "Tin — 15 litres", "Tin — 15 kg"],
        summary: "Fortune Cottonlite refined cottonseed oil.",
        points: ["Fortune Cottonlite", "Pouch — 1 litre", "Jerry Can — 5 litres", "Tin — 10 kg"]
    },
    {
        id: "groundnut",
        category: "Edible Oils",
        name: "Fortune Filtered Groundnut Oil",
        image: "images/fortune/groundnut.png?v=4",
        packs: "Pouch 1L · Pet Bottle 1L · Jerry Can 5L, 15L · Tin 10 kg, 15L, 15 kg",
        packList: ["Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 5 litres", "Jerry Can — 15 litres", "Tin — 10 kg", "Tin — 15 litres", "Tin — 15 kg"],
        summary: "Fortune filtered groundnut oil.",
        points: ["Fortune Filtered Groundnut Oil", "Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 5 litres", "Jerry Can — 15 litres"]
    },
    {
        id: "ricebran",
        category: "Edible Oils",
        name: "Fortune Rice Bran Health Oil",
        image: "images/fortune/ricebran.png?v=4",
        packs: "Pouch 1L · Pet Bottle 1L · Jerry Can 2L, 5L · Jar 15L · Tap Jar 15L",
        packList: ["Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 2 litres", "Jerry Can — 5 litres", "Jar — 15 litres", "Tap Jar — 15 litres"],
        summary: "Fortune rice bran health oil.",
        points: ["Fortune Rice Bran Health Oil", "Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 5 litres", "Jar — 15 litres"]
    },
    {
        id: "mustard",
        category: "Edible Oils",
        name: "Fortune Kachi Ghani Mustard Oil",
        image: "images/fortune/mustard.png?v=4",
        packs: "Pet Bottle 200ml, 500ml · Pouch 500ml, 1L · Jerry Can 2L, 5L, 15L · Pet Barni 2L, 5L · Tin 15 kg",
        packList: ["Pet Bottle — 200 ml", "Pouch — 500 ml", "Pet Bottle — 500 ml", "Pouch — 1 litre", "Jerry Can — 2 litres", "Jerry Can — 5 litres", "Pet Barni — 2 litres", "Pet Barni — 5 litres", "Large Jerry Can — 15 litres", "Tin — 15 kg"],
        summary: "Fortune kachi ghani mustard oil.",
        points: ["Fortune Kachi Ghani Mustard Oil", "Pet Bottle — 200 ml", "Pouch — 1 litre", "Jerry Can — 5 litres", "Large Jerry Can — 15 litres"]
    },
    {
        id: "sunflower",
        category: "Edible Oils",
        name: "Fortune Sunlite Refined Sunflower Oil",
        image: "images/fortune/sunflower.png?v=4",
        packs: "Pouch 500ml, 1L · Pet Bottle 500ml, 1L, 2L, 5L · Jerry Can 5L, 15L · Tin 15L, 15 kg",
        packList: ["Pouch — 500 ml", "Pouch — 1 litre", "Pet Bottle — 500 ml", "Pet Bottle — 1 litre", "Pet Bottle — 2 litres", "Pet Bottle — 5 litres", "Jerry Can — 5 litres", "Jerry Can — 15 litres", "Tin — 15 litres", "Tin — 15 kg"],
        summary: "Fortune Sunlite refined sunflower oil.",
        points: ["Fortune Sunlite", "Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 5 litres", "Jerry Can — 15 litres"]
    },
    {
        id: "soya",
        category: "Edible Oils",
        name: "Fortune Soya Health Oil",
        image: "images/fortune/soya.png?v=4",
        packs: "Pouch 1L · Pet Bottle 1L, 2L · Jerry Can 5L, 15L",
        packList: ["Pouch — 1 litre", "Pet Bottle — 1 litre", "Pet Bottle — 2 litres", "Jerry Can — 5 litres", "Jerry Can — 15 litres"],
        summary: "Fortune Soya Health refined soyabean oil.",
        points: ["Fortune Soya Health Oil", "Pouch — 1 litre", "Pet Bottle — 1 litre", "Jerry Can — 5 litres", "Jerry Can — 15 litres"]
    },
    {
        id: "xpert-active",
        category: "Fortune Xpert Oils",
        name: "Fortune Xpert Active Oil",
        image: "images/fortune/xpert-active.png?v=4",
        packs: "850 g",
        packList: ["850 g"],
        summary: "Fortune Xpert Active oil.",
        points: ["Fortune Xpert Active Oil", "850 g"]
    },
    {
        id: "xpert-total",
        category: "Fortune Xpert Oils",
        name: "Fortune Xpert Total Balance Oil",
        image: "images/fortune/xpert-total.png?v=4",
        packs: "Pouch 1L · Jar 5L",
        packList: ["Pouch — 1 litre", "Jar — 5 litres"],
        summary: "Fortune Xpert Total Balance oil.",
        points: ["Fortune Xpert Total Balance Oil", "Pouch — 1 litre", "Jar — 5 litres"]
    },
    {
        id: "xpert-immunity",
        category: "Fortune Xpert Oils",
        name: "Fortune Xpert Pro Immunity Oil",
        image: "images/fortune/xpert-immunity.png?v=4",
        packs: "Pouch 1L · Jerry Can 5L",
        packList: ["Pouch — 1 litre", "Jerry Can — 5 litres"],
        summary: "Fortune Xpert Pro Immunity oil.",
        points: ["Fortune Xpert Pro Immunity Oil", "Pouch — 1 litre", "Jerry Can — 5 litres"]
    },
    {
        id: "xpert-sugar",
        category: "Fortune Xpert Oils",
        name: "Fortune Xpert Pro Sugar Conscious Oil",
        image: "images/fortune/xpert-sugar.png?v=4",
        packs: "Pouch 1L · Jerry Can 5L",
        packList: ["Pouch — 1 litre", "Jerry Can — 5 litres"],
        summary: "Fortune Xpert Pro Sugar Conscious oil.",
        points: ["Fortune Xpert Pro Sugar Conscious Oil", "Pouch — 1 litre", "Jerry Can — 5 litres"]
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
        category: "Soya Products",
        name: "Fortune Soya Granules",
        image: "images/fortune-foods/soya-granules.png?v=2",
        packs: "Packs 200 gms",
        packList: ["Packs — 200 gms"],
        summary: "Fortune Soya Granules.",
        points: ["Fortune Soya Granules", "Packs — 200 gms"]
    },
    {
        id: "soya-mini-chunks",
        category: "Soya Products",
        name: "Fortune Soya Mini Chunks",
        image: "images/fortune-foods/soya-mini-chunks.png?v=2",
        packs: "Pouch 44 gms · Packs 200 gms",
        packList: ["Pouch — 44 gms", "Packs — 200 gms"],
        summary: "Fortune Soya Mini Chunks.",
        points: ["Fortune Soya Mini Chunks", "Pouch — 44 gms", "Packs — 200 gms"]
    },
    {
        id: "soya-chunks",
        category: "Soya Products",
        name: "Fortune Soya Chunks",
        image: "images/fortune-foods/soya-chunks.png?v=2",
        packs: "Pouch 44 gms · Packs 200 gms · Pouch 1 kg",
        packList: ["Pouch — 44 gms", "Packs — 200 gms", "Pouch — 1 kg"],
        summary: "Fortune Soya Chunks.",
        points: ["Fortune Soya Chunks", "Pouch — 44 gms", "Packs — 200 gms", "Pouch — 1 kg"]
    },
    {
        id: "besan",
        category: "Staples",
        name: "Fortune Besan",
        image: "images/fortune-foods/besan.png?v=2",
        packs: "Pouches 200 g, 500 g, 1 kg, 10 kg",
        packList: ["Pouches — 200 g, 500 g, 1 kg, 10 kg"],
        summary: "Fortune Besan.",
        points: ["Fortune Besan", "Pouches — 200 g, 500 g, 1 kg, 10 kg"]
    },
    {
        id: "sugar",
        category: "Staples",
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
        category: "Staples",
        name: "Fortune Rawa",
        image: "images/fortune-foods/rawa.png?v=2",
        packs: "Pack 1 kg",
        packList: ["Pack — 1 kg"],
        summary: "Fortune Rawa.",
        points: ["Fortune Rawa", "Pack — 1 kg"]
    },
    {
        id: "maida",
        category: "Staples",
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
        category: "Staples",
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
        category: "Staples",
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
        '<p class="pack-line">' + item.packs + '</p>' +
        '<a href="product.html?id=' + item.id + '" class="btn">Explore Now</a>' +
        '</div>';
}
