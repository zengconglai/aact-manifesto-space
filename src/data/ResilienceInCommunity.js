const AllowedFormats = {
    Image: "image",
    Video: "video",
    Text: "text",
}

export const ResilienceInCommunity = {
    artist1:{
        idx: 1,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Aysia Tse",
        ins_handle: ["@fangdanchen"],
        quote: '',
        bio: 'Fangdan Chen is a versatile freelance illustrator with a keen eye for editorial illustration. Her vibrant ' +
            'portfolio includes collaborations with esteemed publishers like Bafflers Magazine. Fangdan excels in ' +
            'uncovering compelling stories and unique perspectives within the tapestry of everyday life, skillfully ' +
            'eaving visual metaphors through her work. Proficient in both traditional and digital mediums, she embraces ' +
            'technological advancements and the evolving dynamics of the modern era. Always curious and open-minded, ' +
            'Fangdan continues to explore and adapt, making her a dynamic force in the world of illustration.' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/fangdanchen\">@fangdanchen</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require('@/assets/ResilienceInCommunity/Fangdan/YouAreABrainInAVessel.jpg'),
        collection_title: "",
        description: "This piece explores the complex duality of technological advancement, inviting viewers to " +
            "critically assess their relationship with technology. It portrays the media's gaze as a seductive escape " +
            "for the masses—a powerful yet double-edged sword. While technology, particularly social media, can lead to " +
            "unprecedented feelings of loneliness and isolation, it also compels participation through societal pressure. " +
            "Despite this, there exists an untainted space within each of us, where the simplicity of birdsong and " +
            "starlight prevails. This piece encourages us to reconnect with and safeguard that pristine refuge in our " +
            "minds.",
        directory: '/assets/ResilienceInCommunity/Fangdan',
        artworks: {
            art1: {
                name: "A Train of Thoughts",
                year: '',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Fangdan/ATrainOfThoughts.jpg"),
            },
            art2: {
                name: "You Are a Brain in a Vessel",
                year: '',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Fangdan/YouAreABrainInAVessel.jpg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Fangdan/ATrainOfThoughts.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Fangdan/YouAreABrainInAVessel.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist2: {
        idx: 2,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Geoffrey Lok-Fay Cheung",
        ins_handle: [""],
        quote: '',
        bio: 'Geoffrey Lok-Fay Cheung (he/him) is an artist examining the way bodies hold and transform memories, from ' +
            'its compaction against familial narrative legacies, to its dilation through ritual and ceremony. Cheung’s ' +
            'practice is guided by diverse material and disciplinary traditions, creating works—including print, video, ' +
            'and installations—that incorporate photographic images, organic materials, and digital processes. His ' +
            'exploration of personal identity and cultural inheritance is informed by his lived experience as a queer ' +
            'second-generation Canadian settler of Chinese descent. His work synthesizes scientific and metaphysical ' +
            'perspectives, informed by his background as a Master of Science graduate from the University of Toronto. ' +
            'Cheung currently works and lives on the traditional First Nation territories of Tkaronto, also known as ' +
            'Toronto, as well as the unceded territories of the Musqueam, Squamish, and Tsleil-Waututh Nations, also ' +
            'known as Vancouver. He obtained his Master of Fine Arts degree in 2024 from Emily Carr University.' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/geoffrey.l.cheung\">@geoffrey.l.cheung</a>" +
            '\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.geoffreycheungart.com\">geoffreycheungart.com</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require('@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_closeupA.jpg'),
        collection_title: "",
        description: "Spills II explores the transformation of memory through personal, familial, and cultural rituals. " +
            "The piece consists of wax-encased photo transparencies arranged on a shelf wrapped in brown packing paper. " +
            "The wax, melted ceremonial detritus, obscures large portions of each transparency—family photos—leaving " +
            "only glimpses of the content below. The act of obfuscation speaks to the erosion of memory over time and " +
            "the challenges of inherited histories.\n" +
            "\n" +
            "The use of non-archival materials, such as brown packing paper, introduces an element of imperfection. It " +
            "alludes to the inadequacies inherent in the ways we attempt to preserve the past, particularly in the " +
            "context of disrupted genealogies. The meticulous folding and taping of the material, however, suggests " +
            "deep care and consideration in the face of limited resources. The photos, which are laid face up at waist " +
            "height, encourage viewers to bow slightly in order to examine them. This physical engagement with the piece " +
            "echoes a gesture of reverence and enfolds the viewer-audience into participatory ritual.\n" +
            "\n" +
            "Spills II challenges us to consider our interactions with our personal and collective histories. It " +
            "suggests that our actions, intentional or otherwise, hold the possibility of forging new relationships " +
            "with the narratives we've inherited—that we are active agents in the renewal and transformation of the past.",
        directory: '/assets/ResilienceInCommunity/Geoff',
        artworks: {
            art1: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_closeupA.jpg"),
            },
            art2: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_closeupB.jpg"),
            },
            art3: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_detailA.jpg"),
            },
            art4: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_detailB.jpg"),
            },
            art5: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_detailC.jpg"),
            },
            art6: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_detailD.jpg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_closeupA.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_closeupB.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_detailA.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_detailB.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_detailC.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Geoff/install2023_spillsII_detailD.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist3:{
        idx: 3,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Kai Liu",
        ins_handle: [""],
        quote: '',
        bio: '' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/fangdanchen\">@fangdanchen</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require('@/assets/ResilienceInCommunity/Fangdan/YouAreABrainInAVessel.jpg'),
        collection_title: "",
        description: "",
        directory: '/assets/ResilienceInCommunity/Fangdan',
        artworks: {
            art1: {
                name: "A Train of Thoughts",
                year: '',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Fangdan/ATrainOfThoughts.jpg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Fangdan/ATrainOfThoughts.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist4:{
        idx: 4,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Sarah Jihae Kaye",
        ins_handle: [""],
        quote: '',
        bio: "Sarah Jihae Kaye (b. 2002) is an emerging interdisciplinary artist currently working between Tkaronto and " +
            "Katarokwi. She graduated with a BFAH (2024) supported by the Margaret Craig Scholarship in Fine Arts and " +
            "will complete her BEd in 2025 from Queen’s University. Kaye specializes in performance, printmaking, and " +
            "sculpture to investigate the body’s capability of storing memory, and its physical limits. She explores " +
            "materiality as a tool for deconstructing and reimagining memory through an autobiographical lens. In her " +
            "work, an egg is presented as a symbol of birth and arrested development, where eggshells, the maternal " +
            "encasement, become a leftover house. Through introspection, she unravels narratives rooted in lived " +
            "experiences, confronting the interplay between a host and its home." +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/fangdanchen\">@fangdanchen</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require('@/assets/ResilienceInCommunity/Sarah/MOTHERWING.jpeg'),
        collection_title: "Roots and Reconciliation",
        description: "Intergenerational dynamics shape my concept of home and domestic relationships. They reside within " +
            "night prayers, between unopened moving boxes, encased in a white envelope, and handed down from mothers to " +
            "daughters in my family. Such cyclical repetition brings with it familiarity, but also the uncanny–where the " +
            "familiar becomes its opposite. This generational dialogue manifests in the juxtaposition of materials and " +
            "symbols within my practice, constantly negotiating time and space. Drawing from objects that hold personal " +
            "significance, including childhood clothing, red beans, and toys, I seek intersections between pain, " +
            "tenderness, and hauntings perpetuated by domestic settings. Rematerializing and interpreting these objects, " +
            "traditionally associated with innocence explores artmaking as a means for catharsis, which I represent " +
            "through the presence of an egg. An egg exists as a symbol of fragility, where eggshells–the maternal " +
            "encasement–become a leftover house through birth.",
        directory: '/assets/ResilienceInCommunity/Sarah',
        artworks: {
            art1: {
                name: "MOTHERWING",
                year: '',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Sarah/MOTHERWING.jpeg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Sarah/MOTHERWING.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
}; 