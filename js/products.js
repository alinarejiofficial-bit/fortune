const PRODUCTS = [
    {
        id: "sunflower",
        category: "Edible Oils",
        name: "Fortune Refined Sunflower Oil",
        image: "images/oil-sunflower-exact.png",
        packs: "Pet Bottles 1L · Jerry Can 5L · Pouch 1L",
        packList: ["Pet Bottles — 1 litre", "Jerry Can — 5 litres", "Pouch — 1 litre"],
        summary: "Light, everyday refined sunflower oil from the Fortune range.",
        points: [
            "A staple oil for daily cooking",
            "Pet Bottles — 1 litre",
            "Jerry Can — 5 litres",
            "Pouch — 1 litre"
        ]
    },
    {
        id: "mustard",
        category: "Edible Oils",
        name: "Fortune Kachi Ghani Mustard Oil",
        image: "images/oil-mustard-exact.png",
        packs: "Pet Bottles 1L, 500ml · Pouch 1L",
        packList: ["Pet Bottles — 1 litre", "Pet Bottles — 500 ml", "Pet Bottles — 200 ml", "Pouch — 1 litre"],
        summary: "Traditional kachi ghani mustard oil with a deep amber colour.",
        points: [
            "Traditional kachi ghani mustard oil",
            "Deep amber oil for a classic pungent flavour",
            "Pet Bottles — 1 litre, 500 ml and 200 ml",
            "Pouch — 1 litre"
        ]
    },
    {
        id: "ricebran",
        category: "Edible Oils",
        name: "Fortune Rice Bran Health Oil",
        image: "images/oil-ricebran.png",
        packs: "Jerry Can 5 litres · Pouch 1 litre",
        packList: ["Jerry Can — 5 litres", "Pouch — 1 litre"],
        summary: "Fortune rice bran health oil in a gold jerry can and pouch.",
        points: [
            "Fortune rice bran health oil",
            "Gold jerry can for the family kitchen",
            "Jerry Can — 5 litres",
            "Pouch — 1 litre"
        ]
    },
    {
        id: "groundnut",
        category: "Edible Oils",
        name: "Fortune Filtered Groundnut Oil",
        image: "images/oil-groundnut.png",
        packs: "Jerry Can 5 litres · Pouch 1 litre",
        packList: ["Jerry Can — 5 litres", "Pouch — 1 litre"],
        summary: "Filtered groundnut oil for everyday cooking.",
        points: [
            "Filtered groundnut oil",
            "Warm gold jerry can and pouch",
            "Jerry Can — 5 litres",
            "Pouch — 1 litre"
        ]
    },
    {
        id: "palmolein",
        category: "Edible Oils",
        name: "Raag Gold Palmolein",
        image: "images/oil-palmolein.png",
        packs: "Pouch 1 litre · Available in 5 litres Jerry Can",
        packList: ["Pouch — 1 litre", "Jerry Can — 5 litres"],
        summary: "Raag Gold palmolein from the Fortune range, in a pouch and a 5 litre jerry can.",
        points: [
            "Raag Gold palmolein",
            "Bright pouch for daily use",
            "Pouch — 1 litre",
            "Also available in a 5 litres jerry can"
        ]
    },
    {
        id: "soya",
        category: "Edible Oils",
        name: "Fortune Soya Health Oil",
        image: "images/oil-soya.png",
        packs: "Jerry Can 5 litres · Pouch 1 litre",
        packList: ["Jerry Can — 5 litres", "Pouch — 1 litre"],
        summary: "Fortune soya health oil in a green jerry can and matching pouch.",
        points: [
            "Fortune soya health oil",
            "Green jerry can and matching pouch",
            "Jerry Can — 5 litres",
            "Pouch — 1 litre"
        ]
    },
    {
        id: "xpert-sugar",
        category: "Edible Oils",
        name: "Fortune Xpert - Pro Sugar Conscious",
        image: "images/oil-xpert-sugar.png",
        packs: "Jerry Can 5 litres · Pouch 1 litre",
        packList: ["Jerry Can — 5 litres", "Pouch — 1 litre"],
        summary: "Fortune Xpert health oil, Pro Sugar Conscious, in a blue jerry can and pouch.",
        points: [
            "Fortune Xpert health oil",
            "Pro Sugar Conscious variant",
            "Blue jerry can and pouch",
            "Jerry Can — 5 litres",
            "Pouch — 1 litre"
        ]
    },
    {
        id: "xpert-immunity",
        category: "Edible Oils",
        name: "Fortune Xpert - Pro Immunity",
        image: "images/oil-xpert-immunity.png",
        packs: "Jerry Can 5 litres · Pouch 1 litre",
        packList: ["Jerry Can — 5 litres", "Pouch — 1 litre"],
        summary: "Fortune Xpert health oil, Pro Immunity, in an orange jerry can and pouch.",
        points: [
            "Fortune Xpert health oil",
            "Pro Immunity variant",
            "Orange jerry can and pouch",
            "Jerry Can — 5 litres",
            "Pouch — 1 litre"
        ]
    },
    {
        id: "xpert-total",
        category: "Edible Oils",
        name: "Fortune Xpert - Total",
        image: "images/oil-xpert-total.png",
        packs: "Jerry Can 5 litres · Pouch 1 litre",
        packList: ["Jerry Can — 5 litres", "Pouch — 1 litre"],
        summary: "Fortune Xpert health oil, Total, in a purple jerry can and pouch.",
        points: [
            "Fortune Xpert health oil",
            "Total variant",
            "Purple jerry can and pouch",
            "Jerry Can — 5 litres",
            "Pouch — 1 litre"
        ]
    },
    {
        id: "soya-granules",
        category: "Soya & Foods",
        name: "Fortune Soya Granules / Chura",
        image: "images/soya-granules.jpg",
        packs: "₹10, ₹20, 200 gms and 1 kg packs",
        packList: ["₹10 pack", "₹20 pack", "200 gms", "1 kg"],
        summary: "Fortune soya granules, also labelled chura, from the foods range.",
        points: ["Soya granules / chura", "Available in ₹10, ₹20, 200 gms and 1 kg packs"]
    },
    {
        id: "soya-chunks",
        category: "Soya & Foods",
        name: "Fortune Soya Chunks",
        image: "images/soya-chunks-exact.png",
        packs: "₹10, ₹20, 200g and 1kg packs",
        packList: ["₹10 pack", "₹20 pack", "200 gms", "1 kg"],
        summary: "Fortune soya chunks from the foods range.",
        points: ["Soya chunks", "Available in ₹10, ₹20, 200 gms and 1 kg packs"]
    },
    {
        id: "soya-mini",
        category: "Soya & Foods",
        name: "Fortune Mini Soya Chunks",
        image: "images/soya-mini.jpg",
        packs: "₹10, ₹20, 200 gms and 1 kg packs",
        packList: ["₹10 pack", "₹20 pack", "200 gms", "1 kg"],
        summary: "Fortune mini soya chunks from the foods range.",
        points: ["Mini soya chunks", "Available in ₹10, ₹20, 200 gms and 1 kg packs"]
    },
    {
        id: "wada-kolam",
        category: "Soya & Foods",
        name: "Fortune Wada Kolam Rice",
        image: "images/wada-kolam.jpg",
        packs: "Shown in the Fortune foods range",
        packList: ["Fortune Wada Kolam Rice"],
        summary: "Fortune Wada Kolam rice from the foods range.",
        points: ["Fortune Wada Kolam Rice", "Part of the Fortune rice and foods line"]
    },
    {
        id: "sona-regular",
        category: "Soya & Foods",
        name: "Fortune Sona Masoori Rice Regular",
        image: "images/sona-regular.jpg",
        packs: "Shown in the Fortune foods range",
        packList: ["Fortune Sona Masoori Rice Regular"],
        summary: "Fortune Sona Masoori rice, regular.",
        points: ["Sona Masoori Rice Regular", "Part of the Fortune rice and foods line"]
    },
    {
        id: "sona-supreme",
        category: "Soya & Foods",
        name: "Fortune Sona Masoori Rice Supreme",
        image: "images/sona-supreme.jpg",
        packs: "Shown in the Fortune foods range",
        packList: ["Fortune Sona Masoori Rice Supreme"],
        summary: "Fortune Sona Masoori rice, supreme.",
        points: ["Sona Masoori Rice Supreme", "Part of the Fortune rice and foods line"]
    },
    {
        id: "biryani-kit",
        category: "Soya & Foods",
        name: "Kohinoor Biryani Kit",
        image: "images/biryani-kit.jpg",
        packs: "Biryani kit",
        packList: ["Kohinoor Biryani Kit"],
        summary: "Kohinoor biryani kit from the Fortune foods range.",
        points: ["Kohinoor Biryani Kit", "Shown alongside the Fortune foods range"]
    },
    {
        id: "chakki-atta",
        category: "Staples",
        name: "Fortune Chakki Fresh Atta",
        image: "images/chakki-atta.jpg",
        packs: "Pouches: 1 kg, 5 kg, 10 kg",
        packList: ["Pouch — 1 kg", "Pouch — 5 kg", "Pouch — 10 kg"],
        summary: "Fortune chakki fresh atta in pouches.",
        points: ["Chakki fresh atta", "Available in pouches of 1 kg, 5 kg and 10 kg"]
    },
    {
        id: "suji",
        category: "Staples",
        name: "Fortune Suji",
        image: "images/suji.jpg",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune suji in a 500 g pouch.",
        points: ["Fortune suji", "Available in a 500 g pouch"]
    },
    {
        id: "rawa",
        category: "Staples",
        name: "Fortune Rawa",
        image: "images/rawa.jpg",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune rawa in a 500 g pouch.",
        points: ["Fortune rawa", "Available in a 500 g pouch"]
    },
    {
        id: "maida",
        category: "Staples",
        name: "Fortune Maida",
        image: "images/maida.jpg",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune maida in a 500 g pouch.",
        points: ["Fortune maida", "Available in a 500 g pouch"]
    },
    {
        id: "besan",
        category: "Staples",
        name: "Fortune Chana Dal Besan",
        image: "images/besan.jpg",
        packs: "Pouches: 200 g, 500 g, 1 kg",
        packList: ["Pouch — 200 g", "Pouch — 500 g", "Pouch — 1 kg"],
        summary: "Fortune chana dal besan in pouches.",
        points: ["Chana dal besan", "Available in pouches of 200 g, 500 g and 1 kg"]
    },
    {
        id: "sugar",
        category: "Staples",
        name: "Fortune Sugar",
        image: "images/sugar.jpg",
        packs: "Pouches: 500 g, 1 kg, 5 kg",
        packList: ["Pouch — 500 g", "Pouch — 1 kg", "Pouch — 5 kg"],
        summary: "Fortune sugar in pouches.",
        points: ["Fortune sugar", "Available in pouches of 500 g, 1 kg and 5 kg"]
    },
    {
        id: "indori-poha",
        category: "Staples",
        name: "Fortune Indori Poha",
        image: "images/indori-poha.jpg",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune Indori poha in a 500 g pouch.",
        points: ["Indori poha", "Available in a 500 g pouch"]
    },
    {
        id: "thick-poha",
        category: "Staples",
        name: "Fortune Thick Poha",
        image: "images/thick-poha.jpg",
        packs: "Pouch 500 g",
        packList: ["Pouch — 500 g"],
        summary: "Fortune thick poha in a 500 g pouch.",
        points: ["Thick poha", "Available in a 500 g pouch"]
    },
    {
        id: "super-basmati",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Super Basmati Rice",
        image: "images/super-basmati.jpg",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Super basmati rice.",
        points: ["Fortune Super Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "biryani-classic",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Biryani Classic Basmati Rice",
        image: "images/biryani-classic.jpg",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Biryani Classic basmati rice.",
        points: ["Biryani Classic Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "biryani-special",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Biryani Special Basmati Rice",
        image: "images/biryani-special.jpg",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Biryani Special basmati rice.",
        points: ["Biryani Special Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "everyday-basmati",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Everyday Basmati Rice",
        image: "images/everyday-basmati.jpg",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Everyday basmati rice.",
        points: ["Everyday Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "rozana-basmati",
        category: "Basmati & Kohinoor Rice",
        name: "Fortune Everyday Rozana Basmati Rice",
        image: "images/rozana-basmati.jpg",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Fortune Everyday Rozana basmati rice.",
        points: ["Everyday Rozana Basmati Rice", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "kohinoor-silver",
        category: "Basmati & Kohinoor Rice",
        name: "Kohinoor Super Silver",
        image: "images/kohinoor-silver.jpg",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Kohinoor Super Silver rice.",
        points: ["Kohinoor Super Silver", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "kohinoor-trophy",
        category: "Basmati & Kohinoor Rice",
        name: "Kohinoor Trophy Royale",
        image: "images/kohinoor-trophy.jpg",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Kohinoor Trophy Royale rice.",
        points: ["Kohinoor Trophy Royale", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "kohinoor-charminar",
        category: "Basmati & Kohinoor Rice",
        name: "Kohinoor Charminar",
        image: "images/kohinoor-charminar.jpg",
        packs: "Packs: 1 kg, 5 kg",
        packList: ["1 kg", "5 kg"],
        summary: "Kohinoor Charminar rice.",
        points: ["Kohinoor Charminar", "Available in 1 kg and 5 kg packs"]
    },
    {
        id: "soap-sandalwood",
        category: "Fortune Alife Soap",
        name: "Fortune Alife Soap - Sandalwood",
        image: "images/soap-sandalwood.jpg",
        packs: "Sandalwood",
        packList: ["Sandalwood"],
        summary: "Fortune Alife soap in sandalwood.",
        points: ["Fortune Alife Soap", "Sandalwood"]
    },
    {
        id: "soap-lily",
        category: "Fortune Alife Soap",
        name: "Fortune Alife Soap - Lily",
        image: "images/soap-lily.jpg",
        packs: "Lily",
        packList: ["Lily"],
        summary: "Fortune Alife soap in lily.",
        points: ["Fortune Alife Soap", "Lily"]
    },
    {
        id: "soap-lime",
        category: "Fortune Alife Soap",
        name: "Fortune Alife Soap - Lime",
        image: "images/soap-lime.jpg",
        packs: "Lime",
        packList: ["Lime"],
        summary: "Fortune Alife soap in lime.",
        points: ["Fortune Alife Soap", "Lime"]
    },
    {
        id: "soap-rose",
        category: "Fortune Alife Soap",
        name: "Fortune Alife Soap - Rose",
        image: "images/soap-rose.jpg",
        packs: "Rose",
        packList: ["Rose"],
        summary: "Fortune Alife soap in rose.",
        points: ["Fortune Alife Soap", "Rose"]
    }
];

const PRODUCT_CATEGORIES = [
    { id: "oils", name: "Edible Oils" },
    { id: "foods", name: "Soya & Foods" },
    { id: "staples", name: "Staples" },
    { id: "rice", name: "Basmati & Kohinoor Rice" },
    { id: "soap", name: "Fortune Alife Soap" }
];

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
        '<a href="product.html?id=' + item.id + '" class="btn">View Details</a>' +
        '</div>';
}
