const AllowedFormats = {
    Image: "image",
    Video: "video",
    Text: "text",
}

export const BetweenTwoWorlds = {
    artist1:{
        idx: 1,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Emerald Repard-Denniston",
        ins_handle: ["@emthegreenstone"],
        quote: 'Incorporating playful gestures imbued with symbolism, she constructs imagistic narratives that lend her practice an autobiographical intimacy. Her work is underpinned by influences from illustration, Cynical Realism, and the Superflat movement. Moreover, her artistic exploration extends to probing issues surrounding representation, diasporic storytelling, and queer theory.',
        bio: 'Emerald Repard-Denniston 邹佑 (Born in Hunan, China) is a visual artist based in Squamish, Tsleil-Waututh ' +
            'Musqueam/Vancouver, and Tkaronto/Toronto. She is a multidisciplinary artist drawn to painting, digital ' +
            'media, and activist work. She holds a BFA in Drawing and Painting from OCAD University with a Minor in Art ' +
            'and Social Change (2022). Emerald is the co-founder and current organizer/curator for the Shoes Off ' +
            'Collective (artist-run collective) and is a member of The Plumb (DIY artist-run project).' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/emthegreenstone/\">@emthegreenstone</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require("@/assets/BetweenTwoWorlds/Emerald/Conflict.jpg"),
        collection_title: "Conflict with the Internal Occident and the External Orient",
        description:
            "In my artistic journey, I am deeply drawn to the theme of navigating dual+ realities, particularly within " +
            "the context of Asian mental health. This exploration stems from a profound curiosity about how individuals " +
            "reconcile their identities amidst conflicting internal and external pressures, and the profound impact of " +
            "these struggles on their well-being. \n" +
             "\n" +
             "Being adopted from Hunan China and growing up in Vancouver and now Toronto, I have witnessed firsthand the " +
            "intricate interplay between personal identity and societal expectations. My own struggle with grappling " +
            "with my own cultural heritage/identity often coexists with the complexities of modern Western white " +
            "influences, creating a tension that can be both empowering and confining. Through my art, I seek to un" +
            "avel these complexities, shedding light on the silent struggles and resilience within my own Chinese " +
            "adoptee identity. \n" +
             "\n" +
             "My work delves into the duality of my internal world and external world - how they can be both liberating " +
            "and imprisoning. The internal dialogue, influenced by upbringing and social norms, often manifests as an " +
            "intricate dance between acceptance and defiance, belonging and alienation. These dynamics profoundly shape " +
            "my mental health experiences, sometimes exacerbating feelings of isolation or inadequacy. \n",
        directory: '/assets/BetweenTwoWorlds/Emerald',
        artworks: {
            art1: {
                name: "City Pool",
                year: '',
                medium: "",
                file_name: require("@/assets/BetweenTwoWorlds/Emerald/City-Pool.png"),
            },
            art2: {
                name: "Conflict with the Internal Occident and the External Orient",
                year: '',
                medium: "",
                file_name: require("@/assets/BetweenTwoWorlds/Emerald/Conflict.jpg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BetweenTwoWorlds/Emerald/City-Pool.png")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BetweenTwoWorlds/Emerald/Conflict.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist2:{
        idx: 2,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Jayasree Koppayil Gopalakrishnan",
        ins_handle: [""],
        quote: '"',
        bio: 'Jayasree is a Canadian permanent resident originally from Kerala, India. She lives with her family in ' +
            'Mississauga since 2023. Since childhood, She\'s been deeply passionate about painting and visual arts, ' +
            'participating in various competitions and events at both state and national levels during her school ' +
            'years. Actively involved in the creation of school magazines, her affinity for visual arts and design ' +
            'led her to pursue a Bachelor\'s degree in Architecture. In college, her sketches depicting her travel ' +
            'experiences in Delhi were featured in the 2011 college magazine. After completing her Architecture ' +
            'degree in 2010, she pursued a Master\'s degree in design with a focus on industrial design, graduating in ' +
            '2013. Driven by her interest in design, she has chosen user experience and product design as her primary ' +
            'career path, while continuing to cultivate her passion for visual arts as a dedicated hobby.',
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require("@/assets/BetweenTwoWorlds/Jayasree/Veiled-Eyes.jpeg"),
        collection_title: "Veiled Eyes",
        description:
            "The artwork portrays the psychological strain that arises when a woman from an eastern nation, such as " +
            "India, attempts to establish a life for herself in a western nation. The social and emotional ideals have " +
            "entrapped her. She is always stressed out and frequently gets lost in her thoughts. She shields her eyes " +
            "and can't see the color and life around her. \n",
        directory: '/assets/BetweenTwoWorlds/Jayasree',
        artworks: {
            art1: {
                name: "Veiled Eyes",
                year: '2024',
                medium: "Oil on Canvas panel",
                file_name: require("@/assets/BetweenTwoWorlds/Jayasree/Veiled-Eyes.jpeg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BetweenTwoWorlds/Jayasree/Veiled-Eyes.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist3:{
        idx: 3,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Phuong Nguyen",
        ins_handle: ["@toomanyphuongnguyens"],
        quote: 'By conceptualizing the image of a porcelain vase into a portrait of a person, the imagery of porcelain ' +
            'in fragments, with broken lines, and repairs using twine, become the fragments of a person who has been broken and reassembled.',
        bio: 'Born and raised in Tkaronto (Toronto), Phuong Nguyen is a Tkaronto-based visual artist working in ' +
            'representational oil painting and experimental weaving. Nguyen uses these mediums to explore themes of ' +
            'Ornamentalism, Orientalism, and the relationship between exoticism and violence by referencing Orientalist ' +
            'scholarship, and  the aesthetics and history of Chinoiserie in relationship to South East Asian/Vietnamese ' +
            'femininity. Nguyen holds a BFA from OCAD University (2014).' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/toomanyphuongnguyens/?hl=en\">@toomanyphuongnguyens</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require("@/assets/BetweenTwoWorlds/Phuong/Gourd.jpeg"),
        collection_title: "",
        
        description: 
            "<em>A Loss of Radiance</em>\n" + 
            "<em>Gourd</em>\n" +
            "\n" +
            "In a series of works, Nguyen explores the topics of “Intersectionality”, “Cultural Narratives and " +
            "Representation”, and “Art and Mental Health”. By conceptualizing the image of a porcelain vase into a " +
            "portrait of a person, the imagery of porcelain in fragments, with broken lines, and repairs using twine, " +
            "become the fragments of a person who has been broken and reassembled. The perceived experiences of the " +
            "Vietnamese diaspora in Canada is one that is synonymous with images of trauma and violence. The symbol of " +
            "porcelain, an object that is both considered beautiful and exotic as well as commonplace, parallels the " +
            "perception and treatment of southeast asian women in the West. She is an object of beauty as well as a " +
            "site of violence in her objectification. \n" +
            "\n" +
             "What does healing look like for this human-object? \n" +
             "\n" +
             "The use of plastic twine (a household material commonly found in Vietnamese homes meant for fastening " +
            "banana leaves in cultural cooking) in these works has been both a medium and a visual signifier for " +
            "healing, repair, reassemblage, migration, and the formation of something new. \n" +
             "\n" +
             "As a racialized artist of the Vietnamese diaspora, Nguyen learned about her culture second-hand from her " +
            "refugee family and from North American sources. Self-tokenization has been used as a tool for social " +
            "survival and self-discovery while also being a vessel for self-betrayal and self-objectification. Although " +
            "Ornamentalism's “object turned person” is still peri-human- a racialized Other in Canadian society, Nguyen " +
            "believes that it is a figure worth studying and conceptualizing in the artwork in an attempt to learn more " +
            "about what it means to be a living yet dead “person-thing”. \n",
        directory: '/assets/BetweenTwoWorlds/Phuong',
        artworks: {
            art1: {
                name: "A Loss of Radiance",
                year: '2023',
                medium: "",
                file_name: require("@/assets/BetweenTwoWorlds/Phuong/A-Loss-of-Radiance.jpg"),
            },
            art2: {
                name: "Gourd",
                year: '2024',
                medium: "",
                file_name: require("@/assets/BetweenTwoWorlds/Phuong/Gourd.jpeg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BetweenTwoWorlds/Phuong/A-Loss-of-Radiance.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BetweenTwoWorlds/Phuong/Gourd.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist4:{
        idx: 4,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Reginald Balanga",
        ins_handle: ["@regie.xyz"],
        quote: '"I create imagery, encounters and interventions that portray the states of being temporary, in-between and out of place.”',
        bio: 'Reginald Balanga is an interdisciplinary artist whose work reflects the emotional and physical journey of ' +
            'failures and the search for new beginnings. Through sculpture, installation, drawing, and photography, he ' +
            'creates vibrant imagery and unexpected encounters using mark-making, found objects, abstract forms and ' +
            'spatial interventions that portray the states of being temporary, in-between and out of place.' +
            '\n\n' +
            'A first-generation Filipino-Canadian, memories of his upbringing in the rural Philippines and his experiences ' +
            'in moving to Canada are the main threads that connect and drive his multifaceted artistic practice. Reginald ' +
            'studied illustration, art history and drawing & painting at OCAD University in Toronto, where he is currently ' +
            'based.' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/regie.xyz/?hl=en\">@regie.xyz</a>",
        topic_name: "Roots and Reconciliation",
        quote_bg_url: require("@/assets/BetweenTwoWorlds/Reginald/Imagined-Ricefields-3.jpeg"),
        collection_title: "Imagined Ricefields",
        description:
            "My work explores the complex journey and navigation between multiple worlds and the constant negotiation of " +
            "identity in a foreign land. Imagined Ricefields is an imagined map of a rural farming village I’ve drawn " +
            "based on memory. It’s about my severed personal history as a migrant and the struggle of finding a home and " +
            "a sense of belonging away from my native country. Installed in cold and snowy landscapes, I show the " +
            "dislocation I felt moving to a different part of the world. \n" +
             "\n" +
             "Installed in a tree that’s falling over, it represents my disconnection with the land particularly with " +
            "the flora. It’s a reminder of the typhoon that felled the century-old mango trees that destroyed my " +
            "grandmother's ancestral house, right before I left the Philippines. \n" +
            "\n" +
            "Installed on a bridge, it represents the struggle to connect the distance between my native country and my " +
            "new country. My son Renard, who was only two years old during our move to Canada, is holding on to the " +
            "painting in the photograph.",
        directory: '/assets/BetweenTwoWorlds/Reginald',
        artworks: {
            art1: {
                name: "Imagined Ricefields",
                year: '',
                medium: "",
                file_name: require("@/assets/BetweenTwoWorlds/Reginald/Imagined-Ricefields-1.jpeg"),
            },
            art2: {
                name: "Imagined Ricefields",
                year: '',
                medium: "",
                file_name: require("@/assets/BetweenTwoWorlds/Reginald/Imagined-Ricefields-2.jpeg"),
            },
            art3: {
                name: "Imagined Ricefields",
                year: '',
                medium: "",
                file_name: require("@/assets/BetweenTwoWorlds/Reginald/Imagined-Ricefields-3.jpeg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BetweenTwoWorlds/Reginald/Imagined-Ricefields-1.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BetweenTwoWorlds/Reginald/Imagined-Ricefields-2.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BetweenTwoWorlds/Reginald/Imagined-Ricefields-3.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            
        ],
    },
}
