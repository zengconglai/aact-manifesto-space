const AllowedFormats = {
    Image: "image",
    Video: "video",
    Text: "text",
}

export const rootsAndReconciliation = {
    artist1:{
        idx: 1,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Fangdan Chen",
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
        quote_bg_url: require('@/assets/RootsAndReconciliation/Fangdan/YouAreABrainInAVessel.jpg'),
        collection_title: "Technology and Well-being",
        description: "This piece explores the complex duality of technological advancement, inviting viewers to " +
            "critically assess their relationship with technology. It portrays the media's gaze as a seductive escape " +
            "for the masses—a powerful yet double-edged sword. While technology, particularly social media, can lead to " +
            "unprecedented feelings of loneliness and isolation, it also compels participation through societal pressure. " +
            "Despite this, there exists an untainted space within each of us, where the simplicity of birdsong and " +
            "starlight prevails. This piece encourages us to reconnect with and safeguard that pristine refuge in our " +
            "minds.",
        directory: '/assets/RootsAndReconciliation/Fangdan',
        artworks: {
            art1: {
                name: "A Train of Thoughts",
                year: '',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Fangdan/ATrainOfThoughts.jpg"),
            },
            art2: {
                name: "You Are a Brain in a Vessel",
                year: '',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Fangdan/YouAreABrainInAVessel.jpg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Fangdan/ATrainOfThoughts.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Fangdan/YouAreABrainInAVessel.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
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
        quote_bg_url: require('@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_closeupA.jpg'),
        collection_title: "Spills II",
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
        directory: '/assets/RootsAndReconciliation/Geoff',
        artworks: {
            art1: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_closeupA.jpg"),
            },
            art2: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_closeupB.jpg"),
            },
            art3: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_detailA.jpg"),
            },
            art4: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_detailB.jpg"),
            },
            art5: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_detailC.jpg"),
            },
            art6: {
                name: "Spills II",
                year: '2023',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_detailD.jpg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_closeupA.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_closeupB.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_detailA.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_detailB.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_detailC.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Geoff/install2023_spillsII_detailD.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist3:{
        idx: 3,  // for internal use
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
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/jihaekaye\">@jihaekaye</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require('@/assets/RootsAndReconciliation/Sarah/MOTHERWING.jpeg'),
        collection_title: "MOTHERWING",
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
        directory: '/assets/RootsAndReconciliation/Sarah',
        artworks: {
            art1: {
                name: "MOTHERWING",
                year: '',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Sarah/MOTHERWING.jpeg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Sarah/MOTHERWING.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist4:{
        idx: 4,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Lux Gow-Habrich",
        ins_handle: [""],
        quote: '',
        bio: "Lux Gow-Habrich (星尘) is a queer, disabled, multidisciplinary visual artist, facilitator and support " +
            "worker of mixed, second-generation Chinese heritage, new to Tkarón:to - the traditional territory of the " +
            "Haudenosaunee, the Anishinaabe, the Wendat, and the Mississaugas of the Credit." +
            "\n" +
            "Following an Interdisciplinary BFA from NSCAD University with a focus in ceramics and textiles, they work " +
            "primarily in gestural, craft, and creative community practices to redefine our understanding of art and " +
            "cultural praxis as sacred remedial forces that can deeply transform and mend systems and relationships. " +
            "The nature of care, access, interdependence, rupture and repair, agency, identity and especially questions " +
            "around embodiment, and the ways that disability, gender, race and visibility shape our internal and " +
            "external social realities, have always been at the core of their research. Lux's interest in cultural " +
            "objects, commemorative practices and the body as an archive, with its ability to house intergenerational " +
            "pain and wisdom - examines complex diasporic experiences of loss and belonging and unspoken legacies of " +
            "disabled, queer grief and empowerment.  They endeavour to highlight wellness rituals outside of Western " +
            "medicine, and challenge broken colonial medical systems that have framed healing based in disembodiment, " +
            "disconnection from nature and prioritizing individualism over collectivism." +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/lux.sparkledust\">@lux.sparkledust</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require('@/assets/RootsAndReconciliation/Lux/QueenMotherFull.jpg'),
        collection_title: "Queen Mothers of Eastern and Western Skies",
        description: "By redirecting discourses around disability away from that of personal failings and acknowledging " +
            "instead the long-standing structural forces that contribute to the harm faced and embodied by those on the " +
            "margins, they craft instances to hold compassion for the diversity within our experiences. Committed to " +
            "developing inclusive creative platforms, and reimagining cultural futures outside of the parameters of " +
            "colonialism – Lux’s practice is an expression rooted in relational and access dreaming." +
            "\n" +
            "Her mixed media/fibre installation entitled “Queen Mothers of Eastern and Western Skies” is a tactile, " +
            "low-barrier, multi-sensory installation that prioritizes accessible exhibition practices. The title is " +
            "inspired by the deity “Lady Queen Mother of the West (Xiwangmu)”, an ancient goddess in the Chinese " +
            "pantheon who brings joy and levity through hardship and trauma. This large, immersive installation " +
            "materializes the interior body, invisible pain, and chronic illness - situating the body as a site for " +
            "mending relational trauma for individual and collective healing. It follows intergenerational knowledge " +
            "transfer and the complex survival stories our bodies want to tell. It touches on the lasting impacts of " +
            "cultural taboos and stigma on mental wellness, nuances within the diasporic experience, and representation " +
            "through cultural symbols." +
            "\n" +
            "This work is informed by lived experiences at the intersections of disability, race, and gender. It traces " +
            "the lifelong resilience of her maternal ancestry within the context of dehumanizing xenophobic Chinese " +
            "Canadian migration legacies and the violent realities of fetishization on feminine Asiatic bodies.",
        directory: '/assets/RootsAndReconciliation/Sarah',
        artworks: {
            art1: {
                name: "Queen Mothers of Eastern and Western Skies",
                year: '',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Lux/QueenMotherFull.jpg"),
            },
            art2: {
                name: "Queen Mothers of Eastern and Western Skies",
                year: '',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Lux/QueenMotherDetail1.jpg"),
            },
            art3: {
                name: "Queen Mothers of Eastern and Western Skies",
                year: '',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Lux/QueenMotherDetail2.jpg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Lux/QueenMotherFull.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Lux/QueenMotherDetail1.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Lux/QueenMotherDetail2.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist5:{
        idx: 5,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Lana Yuan",
        ins_handle: [""],
        quote: '',
        bio: "Lana Yuan, a Chinese-born artist in Toronto, specializes in sculpture and kinetic installations. She " +
            "graduated with distinction from the University of Toronto's Studio Art Specialist program and has " +
            "exhibited at venues such as the Art Museum at the University of Toronto and Red Head Gallery. Lana won the " +
            "Juror Prize for the Shelley Peterson Student Art Exhibition in 2019 and received the Equity and Diversity " +
            "in the Arts Student project grant in 2018 and 2019. In 2020, she participated in the Artist Residency " +
            "program supported by SKETCH Working Arts and DesignTO and won the 401 Career Launcher Prize, granting her " +
            "studio space from 2022 to 2023. In 2023 and early 2024, Lana received the Newcomer Arts Award and Newcomer " +
            "Space Award from the Toronto Arts Foundation's Neighbourhood Arts Network, as well as the Exhibition " +
            "Assistance Grant from the Ontario Arts Council." +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/lana_yuan\">@lana_yuan</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require('@/assets/RootsAndReconciliation/Lana/SocialDistancing1.jpg'),
        collection_title: "Social Distancing",
        description: "Exploring the effects of the COVID-19 pandemic on human connection, Social Distancing delves into " +
            "both the psychological and physical dimensions of our altered social landscape. Comprised of two " +
            "wheelchairs featuring sleek mild steel frames, the installation suspends two tennis balls between them, " +
            "initially set to the distance mandated by social distancing policies. This interactive piece invites " +
            "viewers to engage with the chairs, adjusting their proximity and thereby fostering intimate interactions. " +
            "As the chairs draw closer, the large tennis ball spheres collide and sway, symbolizing the concept of " +
            "physical closeness amidst a time of necessary distance.",
        directory: '/assets/RootsAndReconciliation/Sarah',
        artworks: {
            art1: {
                name: "Social Distancing",
                year: '2023',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Lana/SocialDistancing1.jpg"),
            },
            art2: {
                name: "Social Distancing",
                year: '2023',
                medium: "",
                file_name: require("@/assets/RootsAndReconciliation/Lana/SocialDistancing2.jpg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Lana/SocialDistancing1.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Lana/SocialDistancing2.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/RootsAndReconciliation/Lana/TenderScars.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    // artist6:{
    //     idx: 6,  // for internal use
    //     format: AllowedFormats.Image,  // for rendering
    //     visible: true,
    //     artist_name: "Andrea Luu",
    //     ins_handle: [""],
    //     quote: '',
    //     bio: "Lana Yuan, a Chinese-born artist in Toronto, specializes in sculpture and kinetic installations. She " +
    //         "graduated with distinction from the University of Toronto's Studio Art Specialist program and has " +
    //         "exhibited at venues such as the Art Museum at the University of Toronto and Red Head Gallery. Lana won the " +
    //         "Juror Prize for the Shelley Peterson Student Art Exhibition in 2019 and received the Equity and Diversity " +
    //         "in the Arts Student project grant in 2018 and 2019. In 2020, she participated in the Artist Residency " +
    //         "program supported by SKETCH Working Arts and DesignTO and won the 401 Career Launcher Prize, granting her " +
    //         "studio space from 2022 to 2023. In 2023 and early 2024, Lana received the Newcomer Arts Award and Newcomer " +
    //         "Space Award from the Toronto Arts Foundation's Neighbourhood Arts Network, as well as the Exhibition " +
    //         "Assistance Grant from the Ontario Arts Council." +
    //         '\n\n' +
    //         "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/lana_yuan\">@lana_yuan</a>",
    //     topic_name: "Roots and Reconciliation",
    //     quote_bg_url: require('@/assets/RootsAndReconciliation/Lana/SocialDistancing1.jpg'),
    //     collection_title: "Social Distancing",
    //     description: "Map of Motherland employs green sea glass to form a map of Vietnam, a visual representation of the " +
    //         "country’s once lush and vibrant landscape. The glass symbolizes the natural beauty that existed before the " +
    //         "devastation wrought by war. Gold flecks are interspersed throughout, representing the bombings that rained " +
    //         "down from the skies, leaving behind a legacy of destruction and environmental ruin. The work critiques the " +
    //         "often-glorified portrayal of the Vietnam War in Hollywood media, where the profound human and environmental " +
    //         "costs can become overshadowed by dramatic narratives. By juxtaposing the vibrant green sea glass with the " +
    //         "intrusive gold flecks, this piece highlights the stark contrast between the country’s pre-war splendour and " +
    //         "the harsh reality of its wartime and post-war trauma. Additionally, the piece acknowledges the ongoing " +
    //         "impact of unexploded ordnance in Vietnam, Laos, and Cambodia, where many bombs remain active, rendering " +
    //         "large areas inaccessible. The use of over-poured glue to create a watery effect on the map symbolizes the " +
    //         "continuous presence of these remnants, as if they had just been pulled from the shores, reflecting the " +
    //         "ongoing environmental and societal challenges. Through this piece, I aim to address the often overlooked " +
    //         "and enduring consequences of war, encouraging a deeper reflection on the true costs beyond the glorified " +
    //         "portrayals and reminding us of the lives and lands forever changed by conflict.",
    //     directory: '/assets/RootsAndReconciliation/Sarah',
    //     artworks: {
    //         art1: {
    //             name: "Social Distancing",
    //             year: '2023',
    //             medium: "",
    //             file_name: require("@/assets/RootsAndReconciliation/Lana/SocialDistancing1.jpg"),
    //         },
    //         art2: {
    //             name: "Social Distancing",
    //             year: '2023',
    //             medium: "",
    //             file_name: require("@/assets/RootsAndReconciliation/Lana/SocialDistancing2.jpg"),
    //         },
    //     },
    //     slides:[
    //         {
    //             image: require("@/assets/bg.svg"),
    //             content:`<img src="${require("@/assets/RootsAndReconciliation/Lana/SocialDistancing1.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
    //         },
    //         {
    //             image: require("@/assets/bg.svg"),
    //             content:`<img src="${require("@/assets/RootsAndReconciliation/Lana/SocialDistancing2.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
    //         },
    //         {
    //             image: require("@/assets/bg.svg"),
    //             content:`<img src="${require("@/assets/RootsAndReconciliation/Lana/TenderScars.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
    //         },
    //     ],
    // },
}; 