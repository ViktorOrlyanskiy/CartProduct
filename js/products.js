'use strict'

// массивы которые приходят с Back-end

const products = [
    {
        "51304834": {
            "name": "Болгарка (УШМ) Ryobi RAG800-125G 5133002491",
            "url": "#",
            "category": "bolgarka",
            "image": "img/product/51304834.jpg",
            "price": "19646",
            "sales": "846",
            "reviews": "307",
            "rating": "55"
        }
    },
    {
        "51380972": {
            "name": "Угловая шлифмашина AEG WS13-125XE 4935451410",
            "url": "#",
            "category": "bolgarka",
            "image": "img/product/51380972.jpg",
            "price": "7691",
            "sales": "985",
            "reviews": "747",
            "rating": "313"
        }
    },
    {
        "51832663": {
            "name": "Угловая шлифмашина Hikoki G13SS2 G13SS2NSZ",
            "url": "#",
            "category": "bolgarka",
            "image": "img/product/51832663.jpg",
            "price": "9432",
            "sales": "864",
            "reviews": "36",
            "rating": "924"
        }
    },
    {
        "51913956": {
            "name": "Углошлифовальная машина ЗУБР 125мм УШМ-125-1200 ЭМ3",
            "url": "#",
            "category": "bolgarka",
            "image": "img/product/51913956.jpg",
            "price": "15268",
            "sales": "479",
            "reviews": "716",
            "rating": "727"
        }
    },
    {
        "52314142": {
            "name": "Угловая шлифмашина DEWALT DWE4119",
            "url": "#",
            "category": "bolgarka",
            "image": "img/product/52314142.jpg",
            "price": "15613",
            "sales": "65",
            "reviews": "499",
            "rating": "538"
        }
    },
    {
        "52376640": {
            "name": "Угловая шлифмашина Bosch PWS 650-125 0.603.411.0R0",
            "url": "#",
            "category": "bolgarka",
            "image": "img/product/52376640.jpg",
            "price": "10965",
            "sales": "47",
            "reviews": "290",
            "rating": "890"
        }
    },
    {
        "52386876": {
            "name": "Угловая шлифмашина Metabo W 13-125 Quick 603627010",
            "url": "#",
            "category": "bolgarka",
            "image": "img/product/52386876.jpg",
            "price": "14655",
            "sales": "331",
            "reviews": "679",
            "rating": "454"
        }
    },
    {
        "52977519": {
            "name": "Угловая шлифмашина Einhell TE-AG 125 CE 4430860",
            "url": "#",
            "category": "bolgarka",
            "image": "img/product/52977519.jpg",
            "price": "5224",
            "sales": "631",
            "reviews": "673",
            "rating": "470"
        }
    },
    {
        "53326035": {
            "name": "Дрель-шуруповерт AEG BS18G4-202C 4935478630",
            "url": "#",
            "category": "shurupovert",
            "image": "img/product/53326035.jpg",
            "price": "13700",
            "sales": "256",
            "reviews": "383",
            "rating": "461"
        }
    },
    {
        "52002189": {
            "name": "Аккумуляторная дрель-шуруповерт DEWALT DCD 771 C2",
            "url": "#",
            "category": "shurupovert",
            "image": "img/product/52002189.jpg",
            "price": "7239",
            "sales": "928",
            "reviews": "640",
            "rating": "782"
        }
    },
    {
        "51879077": {
            "name": "Аккумуляторная дрель-шуруповерт GRAPHITE Energy+ 58g006",
            "url": "#",
            "category": "shurupovert",
            "image": "img/product/51879077.jpg",
            "price": "8011",
            "sales": "315",
            "reviews": "220",
            "rating": "270"
        }
    },
    {
        "53021969": {
            "name": "Аккумуляторная дрель-шуруповерт PATRIOT THE ONE BR 181Li 180201425",
            "url": "#",
            "category": "shurupovert",
            "image": "img/product/53021969.jpg",
            "price": "2153",
            "sales": "44",
            "reviews": "910",
            "rating": "526"
        }
    },
    {
        "51358475": {
            "name": "Компактная дрель-шуруповерт DEWALT 12 В XR DCD701D2-QW",
            "url": "#",
            "category": "shurupovert",
            "image": "img/product/51358475.jpg",
            "price": "14786",
            "sales": "371",
            "reviews": "215",
            "rating": "543"
        }
    },
    {
        "51735896": {
            "name": "Аккумуляторный шуруповерт ЗУБР СТАНДАРТ ДШЛ-121 КН",
            "url": "#",
            "category": "shurupovert",
            "image": "img/product/51735896.jpg",
            "price": "12513",
            "sales": "409",
            "reviews": "228",
            "rating": "607"
        }
    },
    {
        "52042967": {
            "name": "Аккумуляторная дрель-шуруповерт Metabo BS 18 LT 602102530",
            "url": "#",
            "category": "shurupovert",
            "image": "img/product/52042967.jpg",
            "price": "7720",
            "sales": "30",
            "reviews": "285",
            "rating": "444"
        }
    },
    {
        "51987980": {
            "name": "Аккумуляторная дрель-шуруповерт ЗУБР МАСТЕР ДА-14.4-2-Ли КМ2",
            "url": "#",
            "category": "shurupovert",
            "image": "img/product/51987980.jpg",
            "price": "1238",
            "sales": "882",
            "reviews": "980",
            "rating": "41"
        }
    },
    {
        "51981365": {
            "name": "Ударная дрель Metabo SBE 760, патрон с зубчатым венцом 600841500",
            "url": "#",
            "category": "drel",
            "image": "img/product/51981365.jpg",
            "price": "2717",
            "sales": "556",
            "reviews": "929",
            "rating": "125"
        }
    },
    {
        "52368250": {
            "name": "Ударная дрель DENZEL ID-750 26307",
            "url": "#",
            "category": "drel",
            "image": "img/product/52368250.jpg",
            "price": "1041",
            "sales": "259",
            "reviews": "838",
            "rating": "592"
        }
    },
    {
        "51973124": {
            "name": "Ударная дрель AEG SBE 750 RE 4935442850",
            "url": "#",
            "category": "drel",
            "image": "img/product/51973124.jpg",
            "price": "8898",
            "sales": "719",
            "reviews": "882",
            "rating": "38"
        }
    },
    {
        "51697543": {
            "name": "Ударная дрель Ryobi RPD800K 5133002018",
            "url": "#",
            "category": "drel",
            "image": "img/product/51697543.jpg",
            "price": "2953",
            "sales": "40",
            "reviews": "992",
            "rating": "840"
        }
    },
    {
        "52122228": {
            "name": "Ударная дрель Зубр МАСТЕР ДУ-810 ЭРМ2",
            "url": "#",
            "category": "drel",
            "image": "img/product/52122228.jpg",
            "price": "15510",
            "sales": "158",
            "reviews": "443",
            "rating": "37"
        }
    },
    {
        "51696274": {
            "name": "Ударная дрель Ryobi RPD500-G 5133001832",
            "url": "#",
            "category": "drel",
            "image": "img/product/51696274.jpg",
            "price": "12182",
            "sales": "881",
            "reviews": "503",
            "rating": "461"
        }
    },
    {
        "52344336": {
            "name": "Ударная дрель GRAPHITE 58G735",
            "url": "#",
            "category": "drel",
            "image": "img/product/52344336.jpg",
            "price": "1587",
            "sales": "709",
            "reviews": "945",
            "rating": "426"
        }
    },
    {
        "52377135": {
            "name": "Ударная дрель Bosch GSB 13 RE 0.601.217.102",
            "url": "#",
            "category": "drel",
            "image": "img/product/52377135.jpg",
            "price": "8908",
            "sales": "379",
            "reviews": "515",
            "rating": "188"
        }
    },
    {
        "52053155": {
            "name": "Лобзик Ryobi RJS1050K 5133002219",
            "url": "#",
            "category": "lobzik",
            "image": "img/product/52053155.jpg",
            "price": "13534",
            "sales": "517",
            "reviews": "106",
            "rating": "740"
        }
    },
    {
        "51214277": {
            "name": "Электрический лобзик ЗУБР 570 Вт, 65 мм Л-570",
            "url": "#",
            "category": "lobzik",
            "image": "img/product/51214277.jpg",
            "price": "13110",
            "sales": "416",
            "reviews": "162",
            "rating": "404"
        }
    },
    {
        "51501701": {
            "name": "Лобзик AEG STEP100 4935451001",
            "url": "#",
            "category": "lobzik",
            "image": "img/product/51501701.jpg",
            "price": "6877",
            "sales": "722",
            "reviews": "764",
            "rating": "97"
        }
    },
    {
        "51574301": {
            "name": "Лобзик Metabo STEB 65 Quick 601030500",
            "url": "#",
            "category": "lobzik",
            "image": "img/product/51574301.jpg",
            "price": "12582",
            "sales": "933",
            "reviews": "410",
            "rating": "503"
        }
    },
    {
        "52218654": {
            "name": "Лобзик Einhell TC-JS 80/1 4321145",
            "url": "#",
            "category": "lobzik",
            "image": "img/product/52218654.jpg",
            "price": "15842",
            "sales": "824",
            "reviews": "714",
            "rating": "662"
        }
    },
    {
        "51078909": {
            "name": "Лобзик Bosch PST 900 PEL 0.603.3A0.220",
            "url": "#",
            "category": "lobzik",
            "image": "img/product/51078909.jpg",
            "price": "17496",
            "sales": "834",
            "reviews": "987",
            "rating": "114"
        }
    },
    {
        "51707400": {
            "name": "Лобзик Makita 4350 FCT",
            "url": "#",
            "category": "lobzik",
            "image": "img/product/51707400.jpg",
            "price": "10131",
            "sales": "985",
            "reviews": "392",
            "rating": "662"
        }
    },
    {
        "52903654": {
            "name": "Аккумуляторный лобзик DEKO DKJS20 063-4207",
            "url": "#",
            "category": "kompressor",
            "image": "img/product/52903654.jpg",
            "price": "17356",
            "sales": "241",
            "reviews": "45",
            "rating": "448"
        }
    },
    {
        "51452785": {
            "name": "Компрессор FUBAG Easy Air + набор из 5 предметов",
            "url": "#",
            "category": "kompressor",
            "image": "img/product/51452785.jpg",
            "price": "6555",
            "sales": "856",
            "reviews": "350",
            "rating": "839"
        }
    },
    {
        "52181052": {
            "name": "Компрессор Fubag HANDY MASTER KIT 195 + 5 предметов 8213690KOA607",
            "url": "#",
            "category": "kompressor",
            "image": "img/product/52181052.jpg",
            "price": "18347",
            "sales": "577",
            "reviews": "514",
            "rating": "901"
        }
    },
    {
        "51524906": {
            "name": "Поршневой масляный компрессор Gigant LAS 24/1500",
            "url": "#",
            "category": "kompressor",
            "image": "img/product/51524906.jpg",
            "price": "12757",
            "sales": "854",
            "reviews": "554",
            "rating": "586"
        }
    },
    {
        "52213396": {
            "name": "Компрессор FUBAG FС 230/24 CM2 61431378",
            "url": "#",
            "category": "kompressor",
            "image": "img/product/52213396.jpg",
            "price": "16389",
            "sales": "68",
            "reviews": "766",
            "rating": "384"
        }
    },
    {
        "51209866": {
            "name": "Компрессор Inforce CX-24L 04-06-20",
            "url": "#",
            "category": "kompressor",
            "image": "img/product/51209866.jpg",
            "price": "14568",
            "sales": "420",
            "reviews": "178",
            "rating": "731"
        }
    },
    {
        "51282239": {
            "name": "Масляный компрессор Metabo Basic 250-24 W 601533000",
            "url": "#",
            "category": "kompressor",
            "image": "img/product/51282239.jpg",
            "price": "4779",
            "sales": "625",
            "reviews": "29",
            "rating": "785"
        }
    },
    {
        "51050569": {
            "name": "Воздушный безмасляный компрессор DENZEL РС 1 6-180, 1,1 кВт, 180 л мин, 6 л 58057",
            "url": "#",
            "category": "kompressor",
            "image": "img/product/51050569.jpg",
            "price": "1946",
            "sales": "78",
            "reviews": "625",
            "rating": "257"
        }
    },
    {
        "51632747": {
            "name": "Воздушный компрессор Remeza СБ 4/С-100.J2047 B",
            "url": "#",
            "category": "kompressor",
            "image": "img/product/51632747.jpg",
            "price": "5920",
            "sales": "629",
            "reviews": "520",
            "rating": "394"
        }
    },
    {
        "52319260": {
            "name": "Перфоратор AEG KH 5 G 4935418160",
            "url": "#",
            "category": "perforator",
            "image": "img/product/52319260.jpg",
            "price": "15969",
            "sales": "608",
            "reviews": "41",
            "rating": "958"
        }
    },
    {
        "52327551": {
            "name": "Перфоратор SDS-Max ЗУБР Профессионал ЗПМ-40-1250 ЭВК",
            "url": "#",
            "category": "perforator",
            "image": "img/product/52327551.jpg",
            "price": "10049",
            "sales": "257",
            "reviews": "851",
            "rating": "49"
        }
    },
    {
        "53393394": {
            "name": "Перфоратор Metabo KH 5-40 600763500",
            "url": "#",
            "category": "perforator",
            "image": "img/product/53393394.jpg",
            "price": "14199",
            "sales": "572",
            "reviews": "951",
            "rating": "186"
        }
    },
    {
        "52070445": {
            "name": "Перфоратор Makita HR4003C",
            "url": "#",
            "category": "perforator",
            "image": "img/product/52070445.jpg",
            "price": "19420",
            "sales": "815",
            "reviews": "428",
            "rating": "64"
        }
    },
    {
        "51583775": {
            "name": "Перфоратор DEWALT D25773K",
            "url": "#",
            "category": "perforator",
            "image": "img/product/51583775.jpg",
            "price": "11029",
            "sales": "511",
            "reviews": "352",
            "rating": "154"
        }
    },
    {
        "52314058": {
            "name": "Электрический перфоратор ДИОЛД ПР-10/1500 SDS-max 10051101",
            "url": "#",
            "category": "perforator",
            "image": "img/product/52314058.jpg",
            "price": "5596",
            "sales": "865",
            "reviews": "336",
            "rating": "317"
        }
    },
    {
        "51361487": {
            "name": "Перфоратор REDVERG RD-RH1500 6627066",
            "url": "#",
            "category": "perforator",
            "image": "img/product/51361487.jpg",
            "price": "1298",
            "sales": "663",
            "reviews": "134",
            "rating": "768"
        }
    },
    {
        "52008672": {
            "name": "Перфоратор METABO KHEV 5-40 BL 600765500",
            "url": "#",
            "category": "perforator",
            "image": "img/product/52008672.jpg",
            "price": "16989",
            "sales": "356",
            "reviews": "394",
            "rating": "199"
        }
    },
    {
        "51646001": {
            "name": "Дисковая пила Ryobi ONE+ R18CS-0 5133002338",
            "url": "#",
            "category": "pila",
            "image": "img/product/51646001.jpg",
            "price": "15087",
            "sales": "863",
            "reviews": "370",
            "rating": "77"
        }
    },
    {
        "52202070": {
            "name": "Аккумуляторная дисковая пила AEG BKS 18-0 4935431375",
            "url": "#",
            "category": "pila",
            "image": "img/product/52202070.jpg",
            "price": "12488",
            "sales": "194",
            "reviews": "618",
            "rating": "185"
        }
    },
    {
        "51264845": {
            "name": "Аккумуляторная циркулярная пила Bosch GKS 12V Solo 0.601.6A1.001",
            "url": "#",
            "category": "pila",
            "image": "img/product/51264845.jpg",
            "price": "2060",
            "sales": "63",
            "reviews": "979",
            "rating": "184"
        }
    },
    {
        "51275883": {
            "name": "Аккумуляторная дисковая пила GRAPHITE Energy+ 58g008",
            "url": "#",
            "category": "pila",
            "image": "img/product/51275883.jpg",
            "price": "12894",
            "sales": "582",
            "reviews": "325",
            "rating": "630"
        }
    },
    {
        "52116414": {
            "name": "Аккумуляторная дисковая пила Bosch UniversalCirc 12 0.603.3C7.003",
            "url": "#",
            "category": "pila",
            "image": "img/product/52116414.jpg",
            "price": "9063",
            "sales": "730",
            "reviews": "448",
            "rating": "404"
        }
    },
    {
        "51868922": {
            "name": "Аккумуляторная бесщеточная дисковая пила AEG BKS 18 BL-0 4935451537",
            "url": "#",
            "category": "pila",
            "image": "img/product/51868922.jpg",
            "price": "5801",
            "sales": "181",
            "reviews": "209",
            "rating": "957"
        }
    },
    {
        "52030941": {
            "name": "Дисковая пила Makita DSS610Z",
            "url": "#",
            "category": "pila",
            "image": "img/product/52030941.jpg",
            "price": "12588",
            "sales": "872",
            "reviews": "173",
            "rating": "35"
        }
    },
    {
        "51663834": {
            "name": "Циркулярная аккумуляторная пила Einhell PXC TE-CS 18/165 Li-Solo 4331204",
            "url": "#",
            "category": "pila",
            "image": "img/product/51663834.jpg",
            "price": "13416",
            "sales": "646",
            "reviews": "717",
            "rating": "150"
        }
    },
    {
        "51906599": {
            "name": "Термопистолет Ryobi EHG2020LCD 5133001730",
            "url": "#",
            "category": "fen",
            "image": "img/product/51906599.jpg",
            "price": "15446",
            "sales": "229",
            "reviews": "429",
            "rating": "293"
        }
    },
    {
        "51749918": {
            "name": "Термопистолет AEG HG560D 4935441015",
            "url": "#",
            "category": "fen",
            "image": "img/product/51749918.jpg",
            "price": "8242",
            "sales": "23",
            "reviews": "431",
            "rating": "60"
        }
    },
    {
        "51675259": {
            "name": "Технический фен ЗУБР МАСТЕР ФТ-2000",
            "url": "#",
            "category": "fen",
            "image": "img/product/51675259.jpg",
            "price": "10907",
            "sales": "826",
            "reviews": "335",
            "rating": "221"
        }
    },
    {
        "51406772": {
            "name": "Технический фен ЗУБР Профессионал ФТ-П2000 2000 Вт М2ДК",
            "url": "#",
            "category": "fen",
            "image": "img/product/51406772.jpg",
            "price": "11741",
            "sales": "154",
            "reviews": "232",
            "rating": "81"
        }
    },
    {
        "52479752": {
            "name": "Технический фен Bosch UniversalHeat 600 Promo Set 06032A6102",
            "url": "#",
            "category": "fen",
            "image": "img/product/52479752.jpg",
            "price": "12754",
            "sales": "996",
            "reviews": "187",
            "rating": "191"
        }
    },
    {
        "52731834": {
            "name": "Термопистолет Makita HG5030K",
            "url": "#",
            "category": "fen",
            "image": "img/product/52731834.jpg",
            "price": "16086",
            "sales": "828",
            "reviews": "641",
            "rating": "240"
        }
    },
    {
        "52106290": {
            "name": "Технический фен Einhell TH-HA 2000/1 4520179",
            "url": "#",
            "category": "fen",
            "image": "img/product/52106290.jpg",
            "price": "19743",
            "sales": "888",
            "reviews": "237",
            "rating": "164"
        }
    },
    {
        "52152384": {
            "name": "Термофен GRAPHITE 59G524",
            "url": "#",
            "category": "fen",
            "image": "img/product/52152384.jpg",
            "price": "9376",
            "sales": "743",
            "reviews": "688",
            "rating": "146"
        }
    },
    {
        "52342605": {
            "name": "Плоскошлифовальная машина ЗУБР ЗПШМ-300Э-02",
            "url": "#",
            "category": "shlifmashina",
            "image": "img/product/52342605.jpg",
            "price": "2514",
            "sales": "935",
            "reviews": "77",
            "rating": "908"
        }
    },
    {
        "52614693": {
            "name": "Вибрационная шлифмашина WERT EVS 230QD",
            "url": "#",
            "category": "shlifmashina",
            "image": "img/product/52614693.jpg",
            "price": "16339",
            "sales": "13",
            "reviews": "585",
            "rating": "117"
        }
    },
    {
        "51067143": {
            "name": "Вибрационная шлифмашина Makita BO3711",
            "url": "#",
            "category": "shlifmashina",
            "image": "img/product/51067143.jpg",
            "price": "7453",
            "sales": "408",
            "reviews": "606",
            "rating": "750"
        }
    },
    {
        "51592063": {
            "name": "Плоская шлифмашина Metabo SRE 3185 600442000",
            "url": "#",
            "category": "shlifmashina",
            "image": "img/product/51592063.jpg",
            "price": "6898",
            "sales": "408",
            "reviews": "451",
            "rating": "98"
        }
    },
    {
        "51282506": {
            "name": "Вибрационная плоскошлифовальная машина DEWALT 18 В XR DCW200N-XJ",
            "url": "#",
            "category": "shlifmashina",
            "image": "img/product/51282506.jpg",
            "price": "16543",
            "sales": "393",
            "reviews": "60",
            "rating": "466"
        }
    },
    {
        "51549351": {
            "name": "Плоскошлифовальная машина Фиолент МПШ4-28Э",
            "url": "#",
            "category": "shlifmashina",
            "image": "img/product/51549351.jpg",
            "price": "13668",
            "sales": "807",
            "reviews": "37",
            "rating": "193"
        }
    },
    {
        "51362433": {
            "name": "Плоско-шлифовальная машина REDVERG RD-SG30-90 5022685",
            "url": "#",
            "category": "shlifmashina",
            "image": "img/product/51362433.jpg",
            "price": "14584",
            "sales": "414",
            "reviews": "663",
            "rating": "46"
        }
    },
    {
        "52031520": {
            "name": "Виброшлифмашина Makita M9203",
            "url": "#",
            "category": "shlifmashina",
            "image": "img/product/52031520.jpg",
            "price": "14161",
            "sales": "226",
            "reviews": "823",
            "rating": "640"
        }
    },
    {
        "51390831": {
            "name": "Скобозабивной пистолет ЗУБР 2000 Вт ЗСП-2000",
            "url": "#",
            "category": "stepler",
            "image": "img/product/51390831.jpg",
            "price": "1762",
            "sales": "143",
            "reviews": "508",
            "rating": "620"
        }
    },
    {
        "52269187": {
            "name": "Аккумуляторный степлер Ryobi ONE+ R18N16G0 5133002222",
            "url": "#",
            "category": "stepler",
            "image": "img/product/52269187.jpg",
            "price": "15912",
            "sales": "890",
            "reviews": "607",
            "rating": "818"
        }
    },
    {
        "51831094": {
            "name": "Степлер Bosch PTK 14 EDT 0.603.265.520",
            "url": "#",
            "category": "stepler",
            "image": "img/product/51831094.jpg",
            "price": "15098",
            "sales": "943",
            "reviews": "883",
            "rating": "417"
        }
    },
    {
        "51532288": {
            "name": "Профессиональный степлер 6 в 1 Inforce 06-14-07",
            "url": "#",
            "category": "stepler",
            "image": "img/product/51532288.jpg",
            "price": "5400",
            "sales": "620",
            "reviews": "17",
            "rating": "105"
        }
    },
    {
        "51807296": {
            "name": "Степлер Stanley Light Duty 6-TR150L",
            "url": "#",
            "category": "stepler",
            "image": "img/product/51807296.jpg",
            "price": "4902",
            "sales": "603",
            "reviews": "939",
            "rating": "569"
        }
    },
    {
        "51814886": {
            "name": "Гвоздезабивной пистолет FUBAG F50 100151",
            "url": "#",
            "category": "stepler",
            "image": "img/product/51814886.jpg",
            "price": "4132",
            "sales": "593",
            "reviews": "55",
            "rating": "270"
        }
    },
    {
        "51260022": {
            "name": "Аккумуляторный гвоздезабиватель AEG B18N18-0 4935451535",
            "url": "#",
            "category": "stepler",
            "image": "img/product/51260022.jpg",
            "price": "15176",
            "sales": "768",
            "reviews": "883",
            "rating": "210"
        }
    },
    {
        "53327558": {
            "name": "Скобозабивной пистолет Pegas pneumatic 1022J 1034",
            "url": "#",
            "category": "stepler",
            "image": "img/product/53327558.jpg",
            "price": "8111",
            "sales": "882",
            "reviews": "320",
            "rating": "950"
        }
    },
    {
        "54223162": {
            "name": "Отбойный молоток 6 гр 30 мм Энкор МЭ-1700/30М 50139",
            "url": "#",
            "category": "molotok",
            "image": "img/product/54223162.jpg",
            "price": "12574",
            "sales": "652",
            "reviews": "976",
            "rating": "170"
        }
    },
    {
        "52331123": {
            "name": "Отбойный молоток ЗУБР ЗМ-50-2000 ВК",
            "url": "#",
            "category": "molotok",
            "image": "img/product/52331123.jpg",
            "price": "9786",
            "sales": "981",
            "reviews": "158",
            "rating": "739"
        }
    },
    {
        "51426581": {
            "name": "Бетонолом GRAPHITE 58G867",
            "url": "#",
            "category": "molotok",
            "image": "img/product/51426581.jpg",
            "price": "6952",
            "sales": "866",
            "reviews": "786",
            "rating": "780"
        }
    },
    {
        "52424669": {
            "name": "Отбойный молоток Einhell TC-DH 43 4139087",
            "url": "#",
            "category": "molotok",
            "image": "img/product/52424669.jpg",
            "price": "8448",
            "sales": "493",
            "reviews": "350",
            "rating": "577"
        }
    },
    {
        "51301077": {
            "name": "Бетонолом СОЮЗ ПЕС-2520РБ",
            "url": "#",
            "category": "molotok",
            "image": "img/product/51301077.jpg",
            "price": "11574",
            "sales": "194",
            "reviews": "998",
            "rating": "864"
        }
    },
    {
        "51611131": {
            "name": "Отбойный молоток PATRIOT DB 560 140301385",
            "url": "#",
            "category": "molotok",
            "image": "img/product/51611131.jpg",
            "price": "2290",
            "sales": "450",
            "reviews": "869",
            "rating": "782"
        }
    },
    {
        "51289298": {
            "name": "Электромолоток REDVERG RD-DH1850 6628287",
            "url": "#",
            "category": "molotok",
            "image": "img/product/51289298.jpg",
            "price": "15801",
            "sales": "573",
            "reviews": "820",
            "rating": "575"
        }
    },
    {
        "51068633": {
            "name": "Отбойный молоток Makita HM1307C",
            "url": "#",
            "category": "molotok",
            "image": "img/product/51068633.jpg",
            "price": "5882",
            "sales": "235",
            "reviews": "216",
            "rating": "463"
        }
    },
    {
        "52052763": {
            "name": "Бензиновая электростанция FUBAG BS 3300",
            "url": "#",
            "category": "gerenator",
            "image": "img/product/52052763.jpg",
            "price": "11792",
            "sales": "411",
            "reviews": "902",
            "rating": "650"
        }
    },
    {
        "52444234": {
            "name": "Бензиновый генератор с возможностью подключения блока автоматики Inforce GL 7500 04-03-17",
            "url": "#",
            "category": "gerenator",
            "image": "img/product/52444234.jpg",
            "price": "3366",
            "sales": "319",
            "reviews": "864",
            "rating": "34"
        }
    },
    {
        "51834194": {
            "name": "Бензиновая электростанция FUBAG BS 3500 Duplex 431249",
            "url": "#",
            "category": "gerenator",
            "image": "img/product/51834194.jpg",
            "price": "12075",
            "sales": "325",
            "reviews": "590",
            "rating": "442"
        }
    },
    {
        "53800957": {
            "name": "Электростанция Huter DY6500L",
            "url": "#",
            "category": "gerenator",
            "image": "img/product/53800957.jpg",
            "price": "16635",
            "sales": "244",
            "reviews": "555",
            "rating": "205"
        }
    },
    {
        "51130692": {
            "name": "Бензиновый генератор Huter HT950A",
            "url": "#",
            "category": "gerenator",
            "image": "img/product/51130692.jpg",
            "price": "5604",
            "sales": "923",
            "reviews": "53",
            "rating": "373"
        }
    },
    {
        "53659977": {
            "name": "Электрогенератор Huter DY6.5A 64/1/57",
            "url": "#",
            "category": "gerenator",
            "image": "img/product/53659977.jpg",
            "price": "11219",
            "sales": "868",
            "reviews": "791",
            "rating": "44"
        }
    },
    {
        "52877062": {
            "name": "Электрогенератор Ресанта БГ 6500 Р 64/1/45",
            "url": "#",
            "category": "gerenator",
            "image": "img/product/52877062.jpg",
            "price": "8494",
            "sales": "833",
            "reviews": "674",
            "rating": "861"
        }
    },
    {
        "51858312": {
            "name": "Бензиновый генератор Победа ГБ 3500 475101730",
            "url": "#",
            "category": "gerenator",
            "image": "img/product/51858312.jpg",
            "price": "7229",
            "sales": "501",
            "reviews": "440",
            "rating": "248"
        }
    }
]


let popularity = document.querySelector('.popularity');
popularity.addEventListener('click', function () {

    products.sort((a, b) => a[Object.keys(a)].sales > b[Object.keys(b)].sales ? 1 : -1)

});