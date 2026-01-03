window.products = [
    // --- City Bikes ---
    {
        id: 'city-libretto',
        name: 'Libretto (リブレット)',
        category: 'city',
        price: 20000,
        image: 'assets/images/products/new_06W.png',
        brand: 'Hodaka',
        description: 'シンプルでお手頃なシティサイクル。',
        specs: { size: '26 inch', gears: 'Single' }
    },
    {
        id: 'city-flemy-3s',
        name: 'Flemy (フレーミー) 3段変速',
        category: 'city',
        price: 44800,
        image: 'assets/images/products/city_03.png',
        brand: 'Bridgestone',
        description: 'ゆったりとした乗り心地と高い積載力が特徴。オートライト搭載。',
        specs: { size: '26 inch', gears: '3 Speed' }
    },
    {
        id: 'city-flemy-single',
        name: 'Flemy (フレーミー) 変速なし',
        category: 'city',
        price: 39800,
        image: 'assets/images/products/new_03.png',
        brand: 'Bridgestone',
        description: 'ゆったりとした乗り心地と高い積載力が特徴。オートライト搭載。',
        specs: { size: '26 inch', gears: 'Single' }
    },
    {
        id: 'city-promenade-3s',
        name: 'Promenade U (プロムナードU) 3段変速',
        category: 'city',
        price: 47000,
        image: 'assets/images/products/PROMENADE_U.png',
        brand: 'Bridgestone',
        description: '乗り降りしやすいU型フレームの定番モデル。オートライト搭載。',
        specs: { size: '26 inch', gears: '3 Speed' }
    },
    {
        id: 'city-promenade-single',
        name: 'Promenade U (プロムナードU) 変速なし',
        category: 'city',
        price: 42000,
        image: 'assets/images/products/PROMENADE_U.png',
        brand: 'Bridgestone',
        description: '乗り降りしやすいU型フレームの定番モデル。オートライト搭載。',
        specs: { size: '26/24 inch', gears: 'Single' }
    },
    {
        id: 'city-carusa-3s',
        name: 'Carusa (カルーサ) 3段変速',
        category: 'city',
        price: 49000,
        image: 'assets/images/products/Carusa.png',
        brand: 'Bridgestone',
        description: '軽くて丈夫なアルミフレーム採用。オートライト搭載。',
        specs: { size: '26/24 inch', gears: '3 Speed' }
    },
    {
        id: 'city-carusa-single',
        name: 'Carusa (カルーサ) 変速なし',
        category: 'city',
        price: 44000,
        image: 'assets/images/products/Carusa.png',
        brand: 'Bridgestone',
        description: '軽くて丈夫なアルミフレーム採用。オートライト搭載。',
        specs: { size: '26/24 inch', gears: 'Single' }
    },
    {
        id: 'city-alumiu-3s',
        name: 'Alumi-U (アルミーユ) 3段変速',
        category: 'city',
        price: 54000,
        image: 'assets/images/products/city_01.png',
        brand: 'Bridgestone',
        description: 'クラス最軽量の軽快車。軽くてまたぎやすい。',
        specs: { size: '26/24 inch', gears: '3 Speed' }
    },
    {
        id: 'city-alumiu-single',
        name: 'Alumi-U (アルミーユ) 変速なし',
        category: 'city',
        price: 49000,
        image: 'assets/images/products/city_01.png',
        brand: 'Bridgestone',
        description: 'クラス最軽量の軽快車。軽くてまたぎやすい。',
        specs: { size: '26/24 inch', gears: 'Single' }
    },
    {
        id: 'city-alumiu-mini-3s',
        name: 'Alumi-U Mini (アルミーユ ミニ) 3段変速',
        category: 'city',
        price: 53000,
        image: 'assets/images/products/city_02.png',
        brand: 'Bridgestone',
        description: '小柄な方でも乗りやすい20/22インチモデル。',
        specs: { size: '22/20 inch', gears: '3 Speed' }
    },
    {
        id: 'city-alumiu-mini-single',
        name: 'Alumi-U Mini (アルミーユ ミニ) 変速なし',
        category: 'city',
        price: 48000,
        image: 'assets/images/products/city_02.png',
        brand: 'Bridgestone',
        description: '小柄な方でも乗りやすい20/22インチモデル。',
        specs: { size: '22/20 inch', gears: 'Single' }
    },
    {
        id: 'city-mina',
        name: 'Mina (ミンナ)',
        category: 'city',
        price: 54780,
        image: 'assets/images/products/minna.png',
        brand: 'Bridgestone',
        description: 'クラシカルで大人っぽいデザイン。3段変速、オートライト。',
        specs: { size: '26 inch', gears: '3 Speed' }
    },
    {
        id: 'city-longteen-s',
        name: 'Long Teen (ロングティーン) S型',
        category: 'city',
        price: 39800,
        image: 'assets/images/products/new_01.png',
        brand: 'Bridgestone',
        description: '耐久性抜群のハードランフレーム。オートライト搭載。',
        specs: { size: '27/26 inch', gears: 'Single' }
    },
    {
        id: 'city-longteen-w',
        name: 'Long Teen (ロングティーン) W型',
        category: 'city',
        price: 40800,
        image: 'assets/images/products/new_01.png',
        brand: 'Bridgestone',
        description: '耐久性抜群のハードランフレーム。W型フレーム。オートライト搭載。',
        specs: { size: '27/26 inch', gears: 'Single' }
    },

    // --- Commuter Bikes ---
    {
        id: 'commuter-nolcog',
        name: 'Nolcog W (ノルコグW)',
        category: 'commuter',
        price: 41800,
        image: 'assets/images/products/new_04.png',
        brand: 'Bridgestone',
        description: '5段変速で坂道も楽々。オートライト搭載。',
        specs: { size: '26 inch', gears: '5 Speed' }
    },
    {
        id: 'commuter-albelt',
        name: 'Albelt (アルベルト)',
        category: 'commuter',
        price: 76000,
        image: 'assets/images/products/commuter_01.png',
        brand: 'Bridgestone',
        description: 'ベストセラー通学自転車。ベルトドライブでメンテナンスフリー。',
        specs: { size: '27/26 inch', gears: '5 Speed' }
    },
    {
        id: 'commuter-cajuna-sweet',
        name: 'Cajuna (カジュナ) スイートライン',
        category: 'commuter',
        price: 62480,
        image: 'assets/images/products/commuter_02.png',
        brand: 'Bridgestone',
        description: '可愛らしいデザインとカラーリング。ベルトドライブモデル。',
        specs: { size: '27/26 inch', gears: '3 Speed' }
    },
    {
        id: 'commuter-cajuna-basic',
        name: 'Cajuna (カジュナ) ベーシックライン',
        category: 'commuter',
        price: 62480,
        image: 'assets/images/products/commuter_03.png',
        brand: 'Bridgestone',
        description: '落ち着いたカラーの上品なデザイン。ベルトドライブモデル。',
        specs: { size: '27/26 inch', gears: '3 Speed' }
    },
    {
        id: 'commuter-stepcruz',
        name: 'Step Cruz (ステップクルーズ)',
        category: 'commuter',
        price: 56980,
        image: 'assets/images/products/commuter_04.png',
        brand: 'Bridgestone',
        description: '「またぎやすい」のに「スポーティ」。太めのタイヤで安定感抜群。',
        specs: { size: '26 inch', gears: '3 Speed' }
    },
    {
        id: 'commuter-starclub',
        name: 'Star Club (スタークラブ)',
        category: 'commuter',
        price: 45000,
        image: 'assets/images/products/new_05.png',
        brand: 'Miyata',
        description: '丈夫で長持ち、安心の通学自転車。ベルトドライブ。',
        specs: { size: '27/26 inch', gears: '3 Speed' }
    },
    {
        id: 'commuter-longteen-dx',
        name: 'Long Teen (ロングティーン) デラックス',
        category: 'commuter',
        price: 63580,
        image: 'assets/images/products/new_07.png',
        brand: 'Bridgestone',
        description: '高耐久パーツ搭載の最上位モデル。ベルトドライブ。',
        specs: { size: '27 inch', gears: '3 Speed' }
    },

    // --- Electric Bikes ---
    {
        id: 'electric-pas-cheer',
        name: 'PAS CHEER',
        category: 'ebike',
        price: 112200,
        image: 'assets/images/products/electric_01.png',
        brand: 'Yamaha',
        description: '初めての電動アシスト自転車に最適。ベーシック機能を搭載。',
        specs: { size: '26/24 inch', battery: '8.9Ah', gears: '3 Speed' }
    },
    {
        id: 'electric-assista-u',
        name: 'Assista U (アシスタU)',
        category: 'ebike',
        price: 123000,
        image: 'assets/images/products/electric_02.png',
        brand: 'Bridgestone',
        description: '乗り降りしやすいフレーム形状。お手頃価格の電動自転車。',
        specs: { size: '26/24 inch', battery: '6.2Ah', gears: '3 Speed' }
    },
    {
        id: 'electric-pas-with',
        name: 'PAS With',
        category: 'ebike',
        price: 128700,
        image: 'assets/images/products/PAS_With.png',
        brand: 'Yamaha',
        description: '軽さと機能のバランスが良いスタンダードモデル。',
        specs: { size: '26 inch', battery: '12.3Ah', gears: '3 Speed' }
    },
    {
        id: 'electric-vivi-sl',
        name: 'ViVi SL (ビビ・SL)',
        category: 'ebike',
        price: 138000,
        image: 'assets/images/products/electric_03.png',
        brand: 'Panasonic',
        description: 'ショッピングモデル業界最軽量。軽い力で持ち上げられる。',
        specs: { size: '24 inch', battery: '8.0Ah', gears: '3 Speed' }
    },
    {
        id: 'electric-pas-with-dx',
        name: 'PAS With DX',
        category: 'electric',
        price: 144100,
        image: 'assets/images/products/PAS_WithDX.png',
        brand: 'Yamaha',
        description: '細部までデザインにこだわったファッショナブルモデル。',
        specs: { size: '26/24 inch', battery: '12.3Ah', gears: '3 Speed' }
    },
    {
        id: 'electric-vivi-l',
        name: 'ViVi L (ビビ・L)',
        category: 'electric',
        price: 147000,
        image: 'assets/images/products/ViVi_L.png',
        brand: 'Panasonic',
        description: '軽さにこだわったビビシリーズの軽量モデル。',
        specs: { size: '26/24 inch', battery: '12.0Ah', gears: '3 Speed' }
    },
    {
        id: 'electric-vivi-sl-20',
        name: 'ViVi SL 20 (ビビ・SL・20)',
        category: 'electric',
        price: 147000,
        image: 'assets/images/products/new_02.png',
        brand: 'Panasonic',
        description: '乗り降りしやすく小回りが利く20インチ軽量モデル。',
        specs: { size: '20 inch', battery: '8.0Ah', gears: '3 Speed' }
    },
    {
        id: 'electric-lakutto',
        name: 'Lakutto (ラクット)',
        category: 'electric',
        price: 174000,
        image: 'assets/images/products/electric_04.png',
        brand: 'Bridgestone',
        description: '地面に足がつきやすく、またぎやすい。安心のシニア向け設計。',
        specs: { size: '20 inch', battery: '14.3Ah', gears: '3 Speed' }
    },

    // --- Sport Bikes ---
    {
        id: 'sport-markrosa-f',
        name: 'MarkRosa F (マークローザ エフ)',
        category: 'sport',
        price: 34980,
        image: 'assets/images/products/MarkRosaF.png',
        brand: 'Bridgestone',
        description: '折りたたみ自転車。スポーティで普段使いに便利。',
        specs: { size: '18 inch', gears: 'Single' }
    },
    {
        id: 'sport-pavea',
        name: 'Pavea (パビア)',
        category: 'sport',
        price: 43780,
        image: 'assets/images/products/Mini-Velo_01.png',
        brand: 'Miyata',
        description: '小径スポーツバイク（ミニベロ）。軽快な走り。',
        specs: { size: '20 inch', gears: '7 Speed' }
    },
    {
        id: 'sport-vegas',
        name: 'VEGAS (ベガス)',
        category: 'sport',
        price: 44880,
        image: 'assets/images/products/VEGAS.png',
        brand: 'Bridgestone',
        description: 'ロングセラーの小径車。安定感のある太めのタイヤ。',
        specs: { size: '20 inch', gears: '3 Speed' }
    },
    {
        id: 'sport-markrosa-staggered',
        name: 'MarkRosa Staggered (スタッガード)',
        category: 'sport',
        price: 47080,
        image: 'assets/images/products/city_03-1.png',
        brand: 'Bridgestone',
        description: 'スポーティな走りとまたぎやすさを両立。オートライト。',
        specs: { size: '26 inch', gears: '6 Speed' }
    },
    {
        id: 'sport-laforet',
        name: 'Laforet (ラフォーレ)',
        category: 'sport',
        price: 48685,
        image: 'assets/images/products/Laforet.png',
        brand: 'Miyata',
        description: 'アーバン・スポーツバイク。街乗りに最適。',
        specs: { size: '700x28C', gears: '7 Speed' }
    },
    {
        id: 'sport-california-sky-m',
        name: 'California Sky M',
        category: 'sport',
        price: 50000,
        image: 'assets/images/products/CaliforniaSkyM.png',
        brand: 'Miyata',
        description: '本格的なマウンテンバイクスタイル。',
        specs: { size: '26x2.0', gears: '21 Speed' }
    },
    {
        id: 'sport-markrosa-horizontal',
        name: 'MarkRosa Horizontal (ホリゾンタル)',
        category: 'sport',
        price: 50000,
        image: 'assets/images/products/city_04.png',
        brand: 'Bridgestone',
        description: 'ホリゾンタルフレームのスポーティなルックス。',
        specs: { size: '27 inch', gears: '7 Speed' }
    },
    {
        id: 'sport-cylva-f24',
        name: 'CYLVA (シルヴァ) F24',
        category: 'sport',
        price: 56361,
        image: 'assets/images/products/CYLVA_F24.png',
        brand: 'Bridgestone',
        description: '初めてのクロスバイクに最適。付属品も充実。',
        specs: { size: '700x32C', gears: '24 Speed' }
    },
    {
        id: 'sport-chero-20',
        name: 'CHeRO (クエロ) 20',
        category: 'sport',
        price: 61380,
        image: 'assets/images/products/CHeRO20.png',
        brand: 'Bridgestone',
        description: 'クラシカルなデザインのミニベロ。クロモリフレーム。',
        specs: { size: '20 inch', gears: '8 Speed' }
    },
    {
        id: 'sport-chero-700c',
        name: 'CHeRO (クエロ) 700C',
        category: 'sport',
        price: 61380,
        image: 'assets/images/products/crossbike_02.png',
        brand: 'Bridgestone',
        description: 'クラシカルなデザインのクロスバイク。クロモリフレーム。',
        specs: { size: '700x32C', gears: '8 Speed' }
    },
    {
        id: 'sport-ex-cross-urban',
        name: 'EX Cross Urban 27',
        category: 'sport',
        price: 62480,
        image: 'assets/images/products/crossbike_01.png',
        brand: 'Miyata',
        description: '通勤・通学に強いタフなクロスバイク。オートライト。',
        specs: { size: '27 inch', gears: '7 Speed' }
    },
    {
        id: 'sport-espresso',
        name: 'Espresso (エスプレッソ)',
        category: 'sport',
        price: 75900,
        image: 'assets/images/products/Espresso.png',
        brand: 'DAHON',
        description: 'フルサイズ折りたたみ自転車。',
        specs: { size: '26 inch', gears: '21 Speed' }
    },

    // --- Cargo Bikes ---
    {
        id: 'cargo-totebox',
        name: 'Tote Box (トートボックス)',
        category: 'cargo',
        price: 50380,
        image: 'assets/images/products/new_11.png',
        brand: 'Bridgestone',
        description: '荷物がたっぷり積める実用車。専用BOX付き。',
        specs: { size: '20/18 inch', gears: '3 Speed' }
    },

    // --- Kids Bikes ---
    {
        id: 'kids-syunsoku',
        name: 'Syun Soku (瞬足)',
        category: 'kids',
        price: 23885,
        image: 'assets/images/products/kids_02.png',
        brand: 'Miyata',
        description: '人気シューズ「瞬足」とのコラボモデル。',
        specs: { size: '16 inch', gears: 'Single' }
    },
    {
        id: 'kids-xgirl',
        name: 'X-girl Stages',
        category: 'kids',
        price: 23990,
        image: 'assets/images/products/kids_01.png',
        brand: 'Bridgestone',
        description: 'X-girl Stages とのコラボモデル。',
        specs: { size: '16 inch', gears: 'Single' }
    },
    {
        id: 'kids-hellokitty',
        name: 'Hello Kitty (ハローキティ)',
        category: 'kids',
        price: 27028,
        image: 'assets/images/products/kids_03.png',
        brand: 'Bridgestone',
        description: 'ハローキティのかわいい自転車。',
        specs: { size: '16 inch', gears: 'Single' }
    },
    {
        id: 'kids-lycee',
        name: 'LYCEE (リセ)',
        category: 'kids',
        price: 31320,
        image: 'assets/images/products/kids_04.png',
        brand: 'Panasonic',
        description: 'おしゃれな女の子のための自転車。',
        specs: { size: '20 inch', gears: 'Single' }
    },
    {
        id: 'kids-sherbet',
        name: 'Sherbet (シャーベット)',
        category: 'kids',
        price: 21384,
        image: 'assets/images/products/kids_05.png',
        brand: 'Miyata',
        description: 'パステルカラーが可愛いジュニアサイクル。',
        specs: { size: '24 inch', gears: 'Single' }
    },
    {
        id: 'kids-rem',
        name: 'Lem (レム)',
        category: 'kids',
        price: 33880,
        image: 'assets/images/products/kids_06.png',
        brand: 'Tsunoda',
        description: 'シンプルで飽きのこないデザイン。',
        specs: { size: '24 inch', gears: 'Single' }
    },

    // --- Sale Items ---
    {
        id: 'sale-realstream',
        name: 'Real Stream (リアルストリーム)',
        category: 'sale',
        price: 90000,
        originalPrice: 167409,
        image: 'assets/images/products/sale_04.png',
        brand: 'Bridgestone',
        description: '【46%OFF】電動スポーツバイク。展示品限り。',
        specs: { size: '26 inch', battery: '8.7Ah', gears: '8 Speed' },
        isSale: true
    },
    {
        id: 'sale-angelino',
        name: 'Angelino e (アンジェリーノe)',
        category: 'sale',
        price: 100000,
        originalPrice: 146080,
        image: 'assets/images/products/sale_02.png',
        brand: 'Bridgestone',
        description: '【32%OFF】3人乗り対応電動アシスト自転車。',
        specs: { size: '22/26 inch', battery: '8.7Ah', gears: '3 Speed' },
        isSale: true
    },

    // --- Secondhand Items ---
    {
        id: 'second-betty',
        name: 'Betty! (ベティ)',
        category: 'secondhand',
        price: 6000,
        image: 'assets/images/products/new_12.png',
        brand: 'Yokota Cycle',
        description: '【中古】子供向け自転車。点検・整備済み。',
        specs: { size: '22 inch', gears: 'Single', condition: 'Used' }
    },
    {
        id: 'second-toprun',
        name: 'Top Run (トップラン)',
        category: 'secondhand',
        price: 12800,
        image: 'assets/images/products/secondhand_11.png',
        brand: 'Bridgestone',
        description: '【中古】シンプルなシティサイクル。',
        specs: { size: '24 inch', gears: 'Single', condition: 'Used' }
    },
    {
        id: 'second-stenmax',
        name: 'Stenmax (ステンマックス)',
        category: 'secondhand',
        price: 25800,
        image: 'assets/images/products/secondhand_05.png',
        brand: 'Miyata',
        description: '【中古】28インチの大型モデル。通勤・通学に。',
        specs: { size: '28 inch', gears: '5 Speed', condition: 'Used' }
    }
];
