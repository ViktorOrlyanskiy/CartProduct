'use strict'

// массивы которые приходят с Back-end

const products = {


    "51050569": {
        "name": "Воздушный безмасляный компрессор DENZEL РС 1 6-180, 1,1 кВт, 180 л мин, 6 л 58057",
        "url": "#",
        "category": "kompressor",
        "image": "img/product/51050569.jpg",
        "price": "11202",
        "sales": "363",
        "reviews": "114",
        "rating": "104"
    },
    "51067143": {
        "name": "Вибрационная шлифмашина Makita BO3711",
        "url": "#",
        "category": "shlifmashina",
        "image": "img/product/51067143.jpg",
        "price": "3411",
        "sales": "369",
        "reviews": "942",
        "rating": "548"
    },
    "51068633": {
        "name": "Отбойный молоток Makita HM1307C",
        "url": "#",
        "category": "molotok",
        "image": "img/product/51068633.jpg",
        "price": "13223",
        "sales": "137",
        "reviews": "823",
        "rating": "385"
    },
    "51078909": {
        "name": "Лобзик Bosch PST 900 PEL 0.603.3A0.220",
        "url": "#",
        "category": "lobzik",
        "image": "img/product/51078909.jpg",
        "price": "10620",
        "sales": "420",
        "reviews": "90",
        "rating": "595"
    },
    "51130692": {
        "name": "Бензиновый генератор Huter HT950A",
        "url": "#",
        "category": "gerenator",
        "image": "img/product/51130692.jpg",
        "price": "13099",
        "sales": "821",
        "reviews": "300",
        "rating": "607"
    },
    "51209866": {
        "name": "Компрессор Inforce CX-24L 04-06-20",
        "url": "#",
        "category": "kompressor",
        "image": "img/product/51209866.jpg",
        "price": "17088",
        "sales": "204",
        "reviews": "757",
        "rating": "823"
    },
    "51214277": {
        "name": "Электрический лобзик ЗУБР 570 Вт, 65 мм Л-570",
        "url": "#",
        "category": "lobzik",
        "image": "img/product/51214277.jpg",
        "price": "18578",
        "sales": "848",
        "reviews": "890",
        "rating": "432"
    },
    "51260022": {
        "name": "Аккумуляторный гвоздезабиватель AEG B18N18-0 4935451535",
        "url": "#",
        "category": "stepler",
        "image": "img/product/51260022.jpg",
        "price": "9007",
        "sales": "482",
        "reviews": "983",
        "rating": "382"
    },
    "51264845": {
        "name": "Аккумуляторная циркулярная пила Bosch GKS 12V Solo 0.601.6A1.001",
        "url": "#",
        "category": "pila",
        "image": "img/product/51264845.jpg",
        "price": "12680",
        "sales": "161",
        "reviews": "768",
        "rating": "539"
    },
    "51275883": {
        "name": "Аккумуляторная дисковая пила GRAPHITE Energy+ 58g008",
        "url": "#",
        "category": "pila",
        "image": "img/product/51275883.jpg",
        "price": "3027",
        "sales": "616",
        "reviews": "758",
        "rating": "209"
    },
    "51282239": {
        "name": "Масляный компрессор Metabo Basic 250-24 W 601533000",
        "url": "#",
        "category": "kompressor",
        "image": "img/product/51282239.jpg",
        "price": "13304",
        "sales": "45",
        "reviews": "667",
        "rating": "896"
    },
    "51282506": {
        "name": "Вибрационная плоскошлифовальная машина DEWALT 18 В XR DCW200N-XJ",
        "url": "#",
        "category": "shlifmashina",
        "image": "img/product/51282506.jpg",
        "price": "14530",
        "sales": "714",
        "reviews": "200",
        "rating": "990"
    },
    "51289298": {
        "name": "Электромолоток REDVERG RD-DH1850 6628287",
        "url": "#",
        "category": "molotok",
        "image": "img/product/51289298.jpg",
        "price": "9767",
        "sales": "811",
        "reviews": "158",
        "rating": "28"
    },
    "51301077": {
        "name": "Бетонолом СОЮЗ ПЕС-2520РБ",
        "url": "#",
        "category": "molotok",
        "image": "img/product/51301077.jpg",
        "price": "18202",
        "sales": "328",
        "reviews": "654",
        "rating": "69"
    },
    "51304834": {
        "name": "Болгарка (УШМ) Ryobi RAG800-125G 5133002491",
        "url": "#",
        "category": "bolgarka",
        "image": "img/product/51304834.jpg",
        "price": "3036",
        "sales": "192",
        "reviews": "483",
        "rating": "408"
    },
    "51358475": {
        "name": "Компактная дрель-шуруповерт DEWALT 12 В XR DCD701D2-QW",
        "url": "#",
        "category": "shurupovert",
        "image": "img/product/51358475.jpg",
        "price": "1881",
        "sales": "562",
        "reviews": "369",
        "rating": "39"
    },
    "51361487": {
        "name": "Перфоратор REDVERG RD-RH1500 6627066",
        "url": "#",
        "category": "perforator",
        "image": "img/product/51361487.jpg",
        "price": "12854",
        "sales": "408",
        "reviews": "269",
        "rating": "274"
    },
    "51362433": {
        "name": "Плоско-шлифовальная машина REDVERG RD-SG30-90 5022685",
        "url": "#",
        "category": "shlifmashina",
        "image": "img/product/51362433.jpg",
        "price": "6882",
        "sales": "972",
        "reviews": "582",
        "rating": "357"
    },
    "51380972": {
        "name": "Угловая шлифмашина AEG WS13-125XE 4935451410",
        "url": "#",
        "category": "bolgarka",
        "image": "img/product/51380972.jpg",
        "price": "4401",
        "sales": "983",
        "reviews": "263",
        "rating": "564"
    },
    "51390831": {
        "name": "Скобозабивной пистолет ЗУБР 2000 Вт ЗСП-2000",
        "url": "#",
        "category": "stepler",
        "image": "img/product/51390831.jpg",
        "price": "11860",
        "sales": "245",
        "reviews": "388",
        "rating": "492"
    },
    "51406772": {
        "name": "Технический фен ЗУБР Профессионал ФТ-П2000 2000 Вт М2ДК",
        "url": "#",
        "category": "fen",
        "image": "img/product/51406772.jpg",
        "price": "4943",
        "sales": "232",
        "reviews": "646",
        "rating": "770"
    },
    "51426581": {
        "name": "Бетонолом GRAPHITE 58G867",
        "url": "#",
        "category": "molotok",
        "image": "img/product/51426581.jpg",
        "price": "17091",
        "sales": "335",
        "reviews": "860",
        "rating": "544"
    },
    "51452785": {
        "name": "Компрессор FUBAG Easy Air + набор из 5 предметов",
        "url": "#",
        "category": "kompressor",
        "image": "img/product/51452785.jpg",
        "price": "5254",
        "sales": "205",
        "reviews": "18",
        "rating": "254"
    },
    "51501701": {
        "name": "Лобзик AEG STEP100 4935451001",
        "url": "#",
        "category": "lobzik",
        "image": "img/product/51501701.jpg",
        "price": "7818",
        "sales": "392",
        "reviews": "701",
        "rating": "975"
    },
    "51524906": {
        "name": "Поршневой масляный компрессор Gigant LAS 24/1500",
        "url": "#",
        "category": "kompressor",
        "image": "img/product/51524906.jpg",
        "price": "12239",
        "sales": "297",
        "reviews": "369",
        "rating": "852"
    },
    "51532288": {
        "name": "Профессиональный степлер 6 в 1 Inforce 06-14-07",
        "url": "#",
        "category": "stepler",
        "image": "img/product/51532288.jpg",
        "price": "17853",
        "sales": "82",
        "reviews": "382",
        "rating": "925"
    },
    "51549351": {
        "name": "Плоскошлифовальная машина Фиолент МПШ4-28Э",
        "url": "#",
        "category": "shlifmashina",
        "image": "img/product/51549351.jpg",
        "price": "17514",
        "sales": "732",
        "reviews": "749",
        "rating": "749"
    },
    "51574301": {
        "name": "Лобзик Metabo STEB 65 Quick 601030500",
        "url": "#",
        "category": "lobzik",
        "image": "img/product/51574301.jpg",
        "price": "3727",
        "sales": "980",
        "reviews": "280",
        "rating": "986"
    },
    "51583775": {
        "name": "Перфоратор DEWALT D25773K",
        "url": "#",
        "category": "perforator",
        "image": "img/product/51583775.jpg",
        "price": "14297",
        "sales": "774",
        "reviews": "203",
        "rating": "962"
    },
    "51592063": {
        "name": "Плоская шлифмашина Metabo SRE 3185 600442000",
        "url": "#",
        "category": "shlifmashina",
        "image": "img/product/51592063.jpg",
        "price": "5596",
        "sales": "931",
        "reviews": "190",
        "rating": "622"
    },
    "51611131": {
        "name": "Отбойный молоток PATRIOT DB 560 140301385",
        "url": "#",
        "category": "molotok",
        "image": "img/product/51611131.jpg",
        "price": "13837",
        "sales": "259",
        "reviews": "906",
        "rating": "909"
    },
    "51632747": {
        "name": "Воздушный компрессор Remeza СБ 4/С-100.J2047 B",
        "url": "#",
        "category": "kompressor",
        "image": "img/product/51632747.jpg",
        "price": "17727",
        "sales": "85",
        "reviews": "400",
        "rating": "151"
    },
    "51646001": {
        "name": "Дисковая пила Ryobi ONE+ R18CS-0 5133002338",
        "url": "#",
        "category": "pila",
        "image": "img/product/51646001.jpg",
        "price": "18132",
        "sales": "550",
        "reviews": "818",
        "rating": "763"
    },
    "51663834": {
        "name": "Циркулярная аккумуляторная пила Einhell PXC TE-CS 18/165 Li-Solo 4331204",
        "url": "#",
        "category": "pila",
        "image": "img/product/51663834.jpg",
        "price": "11149",
        "sales": "224",
        "reviews": "653",
        "rating": "677"
    },
    "51675259": {
        "name": "Технический фен ЗУБР МАСТЕР ФТ-2000",
        "url": "#",
        "category": "fen",
        "image": "img/product/51675259.jpg",
        "price": "6780",
        "sales": "130",
        "reviews": "424",
        "rating": "65"
    },
    "51696274": {
        "name": "Ударная дрель Ryobi RPD500-G 5133001832",
        "url": "#",
        "category": "drel",
        "image": "img/product/51696274.jpg",
        "price": "7391",
        "sales": "982",
        "reviews": "396",
        "rating": "141"
    },
    "51697543": {
        "name": "Ударная дрель Ryobi RPD800K 5133002018",
        "url": "#",
        "category": "drel",
        "image": "img/product/51697543.jpg",
        "price": "1261",
        "sales": "465",
        "reviews": "642",
        "rating": "743"
    },
    "51707400": {
        "name": "Лобзик Makita 4350 FCT",
        "url": "#",
        "category": "lobzik",
        "image": "img/product/51707400.jpg",
        "price": "5839",
        "sales": "732",
        "reviews": "94",
        "rating": "469"
    },
    "51735896": {
        "name": "Аккумуляторный шуруповерт ЗУБР СТАНДАРТ ДШЛ-121 КН",
        "url": "#",
        "category": "shurupovert",
        "image": "img/product/51735896.jpg",
        "price": "16200",
        "sales": "680",
        "reviews": "231",
        "rating": "54"
    },
    "51749918": {
        "name": "Термопистолет AEG HG560D 4935441015",
        "url": "#",
        "category": "fen",
        "image": "img/product/51749918.jpg",
        "price": "10049",
        "sales": "524",
        "reviews": "774",
        "rating": "253"
    },
    "51807296": {
        "name": "Степлер Stanley Light Duty 6-TR150L",
        "url": "#",
        "category": "stepler",
        "image": "img/product/51807296.jpg",
        "price": "18815",
        "sales": "353",
        "reviews": "817",
        "rating": "551"
    },
    "51814886": {
        "name": "Гвоздезабивной пистолет FUBAG F50 100151",
        "url": "#",
        "category": "stepler",
        "image": "img/product/51814886.jpg",
        "price": "2213",
        "sales": "196",
        "reviews": "306",
        "rating": "398"
    },
    "51831094": {
        "name": "Степлер Bosch PTK 14 EDT 0.603.265.520",
        "url": "#",
        "category": "stepler",
        "image": "img/product/51831094.jpg",
        "price": "7960",
        "sales": "37",
        "reviews": "826",
        "rating": "196"
    },
    "51832663": {
        "name": "Угловая шлифмашина Hikoki G13SS2 G13SS2NSZ",
        "url": "#",
        "category": "bolgarka",
        "image": "img/product/51832663.jpg",
        "price": "17420",
        "sales": "31",
        "reviews": "223",
        "rating": "351"
    },
    "51834194": {
        "name": "Бензиновая электростанция FUBAG BS 3500 Duplex 431249",
        "url": "#",
        "category": "gerenator",
        "image": "img/product/51834194.jpg",
        "price": "19118",
        "sales": "157",
        "reviews": "118",
        "rating": "12"
    },
    "51858312": {
        "name": "Бензиновый генератор Победа ГБ 3500 475101730",
        "url": "#",
        "category": "gerenator",
        "image": "img/product/51858312.jpg",
        "price": "6099",
        "sales": "637",
        "reviews": "88",
        "rating": "177"
    },
    "51868922": {
        "name": "Аккумуляторная бесщеточная дисковая пила AEG BKS 18 BL-0 4935451537",
        "url": "#",
        "category": "pila",
        "image": "img/product/51868922.jpg",
        "price": "5967",
        "sales": "372",
        "reviews": "881",
        "rating": "745"
    },
    "51879077": {
        "name": "Аккумуляторная дрель-шуруповерт GRAPHITE Energy+ 58g006",
        "url": "#",
        "category": "shurupovert",
        "image": "img/product/51879077.jpg",
        "price": "11768",
        "sales": "231",
        "reviews": "80",
        "rating": "233"
    },
    "51906599": {
        "name": "Термопистолет Ryobi EHG2020LCD 5133001730",
        "url": "#",
        "category": "fen",
        "image": "img/product/51906599.jpg",
        "price": "14103",
        "sales": "926",
        "reviews": "291",
        "rating": "243"
    },
    "51913956": {
        "name": "Углошлифовальная машина ЗУБР 125мм УШМ-125-1200 ЭМ3",
        "url": "#",
        "category": "bolgarka",
        "image": "img/product/51913956.jpg",
        "price": "4653",
        "sales": "521",
        "reviews": "747",
        "rating": "788"
    },
    "51973124": {
        "name": "Ударная дрель AEG SBE 750 RE 4935442850",
        "url": "#",
        "category": "drel",
        "image": "img/product/51973124.jpg",
        "price": "8388",
        "sales": "156",
        "reviews": "590",
        "rating": "418"
    },
    "51981365": {
        "name": "Ударная дрель Metabo SBE 760, патрон с зубчатым венцом 600841500",
        "url": "#",
        "category": "drel",
        "image": "img/product/51981365.jpg",
        "price": "17284",
        "sales": "904",
        "reviews": "41",
        "rating": "422"
    },
    "51987980": {
        "name": "Аккумуляторная дрель-шуруповерт ЗУБР МАСТЕР ДА-14.4-2-Ли КМ2",
        "url": "#",
        "category": "shurupovert",
        "image": "img/product/51987980.jpg",
        "price": "12515",
        "sales": "664",
        "reviews": "682",
        "rating": "141"
    },
    "52002189": {
        "name": "Аккумуляторная дрель-шуруповерт DEWALT DCD 771 C2",
        "url": "#",
        "category": "shurupovert",
        "image": "img/product/52002189.jpg",
        "price": "10282",
        "sales": "347",
        "reviews": "407",
        "rating": "471"
    },
    "52008672": {
        "name": "Перфоратор METABO KHEV 5-40 BL 600765500",
        "url": "#",
        "category": "perforator",
        "image": "img/product/52008672.jpg",
        "price": "13065",
        "sales": "891",
        "reviews": "563",
        "rating": "230"
    },
    "52030941": {
        "name": "Дисковая пила Makita DSS610Z",
        "url": "#",
        "category": "pila",
        "image": "img/product/52030941.jpg",
        "price": "6821",
        "sales": "323",
        "reviews": "899",
        "rating": "328"
    },
    "52031520": {
        "name": "Виброшлифмашина Makita M9203",
        "url": "#",
        "category": "shlifmashina",
        "image": "img/product/52031520.jpg",
        "price": "19619",
        "sales": "109",
        "reviews": "221",
        "rating": "822"
    },
    "52042967": {
        "name": "Аккумуляторная дрель-шуруповерт Metabo BS 18 LT 602102530",
        "url": "#",
        "category": "shurupovert",
        "image": "img/product/52042967.jpg",
        "price": "17199",
        "sales": "985",
        "reviews": "28",
        "rating": "90"
    },
    "52052763": {
        "name": "Бензиновая электростанция FUBAG BS 3300",
        "url": "#",
        "category": "gerenator",
        "image": "img/product/52052763.jpg",
        "price": "7638",
        "sales": "389",
        "reviews": "943",
        "rating": "716"
    },
    "52053155": {
        "name": "Лобзик Ryobi RJS1050K 5133002219",
        "url": "#",
        "category": "lobzik",
        "image": "img/product/52053155.jpg",
        "price": "19023",
        "sales": "356",
        "reviews": "801",
        "rating": "138"
    },
    "52070445": {
        "name": "Перфоратор Makita HR4003C",
        "url": "#",
        "category": "perforator",
        "image": "img/product/52070445.jpg",
        "price": "13694",
        "sales": "300",
        "reviews": "734",
        "rating": "76"
    },
    "52106290": {
        "name": "Технический фен Einhell TH-HA 2000/1 4520179",
        "url": "#",
        "category": "fen",
        "image": "img/product/52106290.jpg",
        "price": "14630",
        "sales": "936",
        "reviews": "88",
        "rating": "702"
    },
    "52116414": {
        "name": "Аккумуляторная дисковая пила Bosch UniversalCirc 12 0.603.3C7.003",
        "url": "#",
        "category": "pila",
        "image": "img/product/52116414.jpg",
        "price": "1501",
        "sales": "675",
        "reviews": "510",
        "rating": "916"
    },
    "52122228": {
        "name": "Ударная дрель Зубр МАСТЕР ДУ-810 ЭРМ2",
        "url": "#",
        "category": "drel",
        "image": "img/product/52122228.jpg",
        "price": "15161",
        "sales": "11",
        "reviews": "807",
        "rating": "271"
    },
    "52152384": {
        "name": "Термофен GRAPHITE 59G524",
        "url": "#",
        "category": "fen",
        "image": "img/product/52152384.jpg",
        "price": "18630",
        "sales": "36",
        "reviews": "381",
        "rating": "918"
    },
    "52181052": {
        "name": "Компрессор Fubag HANDY MASTER KIT 195 + 5 предметов 8213690KOA607",
        "url": "#",
        "category": "kompressor",
        "image": "img/product/52181052.jpg",
        "price": "7783",
        "sales": "886",
        "reviews": "23",
        "rating": "675"
    },
    "52202070": {
        "name": "Аккумуляторная дисковая пила AEG BKS 18-0 4935431375",
        "url": "#",
        "category": "pila",
        "image": "img/product/52202070.jpg",
        "price": "5301",
        "sales": "705",
        "reviews": "126",
        "rating": "121"
    },
    "52213396": {
        "name": "Компрессор FUBAG FС 230/24 CM2 61431378",
        "url": "#",
        "category": "kompressor",
        "image": "img/product/52213396.jpg",
        "price": "6484",
        "sales": "612",
        "reviews": "368",
        "rating": "627"
    },
    "52218654": {
        "name": "Лобзик Einhell TC-JS 80/1 4321145",
        "url": "#",
        "category": "lobzik",
        "image": "img/product/52218654.jpg",
        "price": "4797",
        "sales": "574",
        "reviews": "581",
        "rating": "38"
    },
    "52269187": {
        "name": "Аккумуляторный степлер Ryobi ONE+ R18N16G0 5133002222",
        "url": "#",
        "category": "stepler",
        "image": "img/product/52269187.jpg",
        "price": "9141",
        "sales": "627",
        "reviews": "577",
        "rating": "794"
    },
    "52314058": {
        "name": "Электрический перфоратор ДИОЛД ПР-10/1500 SDS-max 10051101",
        "url": "#",
        "category": "perforator",
        "image": "img/product/52314058.jpg",
        "price": "16868",
        "sales": "937",
        "reviews": "683",
        "rating": "609"
    },
    "52314142": {
        "name": "Угловая шлифмашина DEWALT DWE4119",
        "url": "#",
        "category": "bolgarka",
        "image": "img/product/52314142.jpg",
        "price": "6372",
        "sales": "992",
        "reviews": "797",
        "rating": "203"
    },
    "52319260": {
        "name": "Перфоратор AEG KH 5 G 4935418160",
        "url": "#",
        "category": "perforator",
        "image": "img/product/52319260.jpg",
        "price": "3032",
        "sales": "206",
        "reviews": "684",
        "rating": "174"
    },
    "52327551": {
        "name": "Перфоратор SDS-Max ЗУБР Профессионал ЗПМ-40-1250 ЭВК",
        "url": "#",
        "category": "perforator",
        "image": "img/product/52327551.jpg",
        "price": "1791",
        "sales": "915",
        "reviews": "472",
        "rating": "859"
    },
    "52331123": {
        "name": "Отбойный молоток ЗУБР ЗМ-50-2000 ВК",
        "url": "#",
        "category": "molotok",
        "image": "img/product/52331123.jpg",
        "price": "9352",
        "sales": "615",
        "reviews": "997",
        "rating": "696"
    },
    "52342605": {
        "name": "Плоскошлифовальная машина ЗУБР ЗПШМ-300Э-02",
        "url": "#",
        "category": "shlifmashina",
        "image": "img/product/52342605.jpg",
        "price": "10896",
        "sales": "657",
        "reviews": "54",
        "rating": "75"
    },
    "52344336": {
        "name": "Ударная дрель GRAPHITE 58G735",
        "url": "#",
        "category": "drel",
        "image": "img/product/52344336.jpg",
        "price": "6632",
        "sales": "706",
        "reviews": "382",
        "rating": "750"
    },
    "52368250": {
        "name": "Ударная дрель DENZEL ID-750 26307",
        "url": "#",
        "category": "drel",
        "image": "img/product/52368250.jpg",
        "price": "19317",
        "sales": "456",
        "reviews": "290",
        "rating": "594"
    },
    "52376640": {
        "name": "Угловая шлифмашина Bosch PWS 650-125 0.603.411.0R0",
        "url": "#",
        "category": "bolgarka",
        "image": "img/product/52376640.jpg",
        "price": "13594",
        "sales": "991",
        "reviews": "31",
        "rating": "201"
    },
    "52377135": {
        "name": "Ударная дрель Bosch GSB 13 RE 0.601.217.102",
        "url": "#",
        "category": "drel",
        "image": "img/product/52377135.jpg",
        "price": "6911",
        "sales": "628",
        "reviews": "23",
        "rating": "231"
    },
    "52386876": {
        "name": "Угловая шлифмашина Metabo W 13-125 Quick 603627010",
        "url": "#",
        "category": "bolgarka",
        "image": "img/product/52386876.jpg",
        "price": "16163",
        "sales": "675",
        "reviews": "646",
        "rating": "200"
    },
    "52424669": {
        "name": "Отбойный молоток Einhell TC-DH 43 4139087",
        "url": "#",
        "category": "molotok",
        "image": "img/product/52424669.jpg",
        "price": "3655",
        "sales": "332",
        "reviews": "757",
        "rating": "468"
    },
    "52444234": {
        "name": "Бензиновый генератор с возможностью подключения блока автоматики Inforce GL 7500 04-03-17",
        "url": "#",
        "category": "gerenator",
        "image": "img/product/52444234.jpg",
        "price": "4770",
        "sales": "271",
        "reviews": "775",
        "rating": "954"
    },
    "52479752": {
        "name": "Технический фен Bosch UniversalHeat 600 Promo Set 06032A6102",
        "url": "#",
        "category": "fen",
        "image": "img/product/52479752.jpg",
        "price": "13820",
        "sales": "195",
        "reviews": "966",
        "rating": "946"
    },
    "52614693": {
        "name": "Вибрационная шлифмашина WERT EVS 230QD",
        "url": "#",
        "category": "shlifmashina",
        "image": "img/product/52614693.jpg",
        "price": "15499",
        "sales": "905",
        "reviews": "262",
        "rating": "457"
    },
    "52731834": {
        "name": "Термопистолет Makita HG5030K",
        "url": "#",
        "category": "fen",
        "image": "img/product/52731834.jpg",
        "price": "1727",
        "sales": "570",
        "reviews": "477",
        "rating": "989"
    },
    "52877062": {
        "name": "Электрогенератор Ресанта БГ 6500 Р 64/1/45",
        "url": "#",
        "category": "gerenator",
        "image": "img/product/52877062.jpg",
        "price": "5789",
        "sales": "408",
        "reviews": "260",
        "rating": "104"
    },
    "52903654": {
        "name": "Аккумуляторный лобзик DEKO DKJS20 063-4207",
        "url": "#",
        "category": "kompressor",
        "image": "img/product/52903654.jpg",
        "price": "10099",
        "sales": "536",
        "reviews": "180",
        "rating": "582"
    },
    "52977519": {
        "name": "Угловая шлифмашина Einhell TE-AG 125 CE 4430860",
        "url": "#",
        "category": "bolgarka",
        "image": "img/product/52977519.jpg",
        "price": "2330",
        "sales": "574",
        "reviews": "597",
        "rating": "714"
    },
    "53021969": {
        "name": "Аккумуляторная дрель-шуруповерт PATRIOT THE ONE BR 181Li 180201425",
        "url": "#",
        "category": "shurupovert",
        "image": "img/product/53021969.jpg",
        "price": "6813",
        "sales": "542",
        "reviews": "964",
        "rating": "420"
    },
    "53326035": {
        "name": "Дрель-шуруповерт AEG BS18G4-202C 4935478630",
        "url": "#",
        "category": "shurupovert",
        "image": "img/product/53326035.jpg",
        "price": "7857",
        "sales": "547",
        "reviews": "29",
        "rating": "525"
    },
    "53327558": {
        "name": "Скобозабивной пистолет Pegas pneumatic 1022J 1034",
        "url": "#",
        "category": "stepler",
        "image": "img/product/53327558.jpg",
        "price": "12704",
        "sales": "859",
        "reviews": "104",
        "rating": "146"
    },
    "53393394": {
        "name": "Перфоратор Metabo KH 5-40 600763500",
        "url": "#",
        "category": "perforator",
        "image": "img/product/53393394.jpg",
        "price": "1131",
        "sales": "798",
        "reviews": "868",
        "rating": "282"
    },
    "53659977": {
        "name": "Электрогенератор Huter DY6.5A 64/1/57",
        "url": "#",
        "category": "gerenator",
        "image": "img/product/53659977.jpg",
        "price": "13070",
        "sales": "911",
        "reviews": "882",
        "rating": "744"
    },
    "53800957": {
        "name": "Электростанция Huter DY6500L",
        "url": "#",
        "category": "gerenator",
        "image": "img/product/53800957.jpg",
        "price": "16765",
        "sales": "305",
        "reviews": "389",
        "rating": "410"
    },
    "54223162": {
        "name": "Отбойный молоток 6 гр 30 мм Энкор МЭ-1700/30М 50139",
        "url": "#",
        "category": "molotok",
        "image": "img/product/54223162.jpg",
        "price": "18593",
        "sales": "968",
        "reviews": "122",
        "rating": "26"
    }


}