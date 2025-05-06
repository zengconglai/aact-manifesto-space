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
        ins_handle: ["@aysiatse"],
        quote: '“The second iteration of this work documents all my yé yé’s grandchildren learning how to write their Chinese names. He guides our brush strokes with his own hand, passing down familial and cultural knowledge.”',
        bio: 'Aysia Tse (b. Singapore 2001) is an interdisciplinary artist, arts worker and community organizer whose practice includes movement-based work, performance and multimedia installations that engage themes relating to madness, queerness, and her mixed diasporic identity. She is currently developing projects that dive into the intersections of water, movement, identity, and bodily politics.\n\n' +
            'Aysia has worked with various arts organizations including Workman Arts, MABELLEarts, the Creative Research and Inclusive Practices (CRIP) Lab, Arts Etobicoke, STEPS Public Art and Femme Art Review. She has exhibited work at Trinity Square Video, Xpace Cultural Centre, Ignite Gallery, TIFF Bell Lightbox, Long Winter TO and the Rendezvous with Madness Festival. Aysia is grateful to have participated in residencies with the Toronto Dance Theatre (TDT), the Public Visualization Lab in collaboration with Duplex Artists Society and the Shoes Off Collective. She is currently an Artist-in-Residence with the South Asian Visual Arts Centre (SAVAC).' +
            '\n\n' +
            "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/aysiatse/?hl=en\">@aysiatse</a>",
        topic_name: "Resilience in Community",
        quote_bg_url: require("@/assets/ResilienceInCommunity/Aysia/Rewriting-1.jpeg"),
        collection_title: "",
        
        description: 
            "<em>Bean Curd Soup Ft. Ye-ye</em>\n" + 
            "This reflective piece engages the preservation of diasporic memory through objects, tied to memories as a child of eating my grandfather's bean curd soup. Dried bean curd, made solid through the process of bronze casting, feels heavy and solid in my hands. The transformation from natural casting processes represents the physical and metaphorical solidification of early memories connected to culture and tradition, speaking to the passing down of intergenerational knowledge, the materiality of love, and familial care. \n" +
             "\n" +
             "The accompanying sound piece documents the process of my yé-yé (爷爷, grandfather) teaching me how to make his bean curd soup, a comforting Chinese dish steeped in my childhood memories. The polyrhythmic beat was recorded with a contact mic, sampled from the sounds of liquid contents sloshing around in my stomach. Listening closely, you may be able to hear the cracking, soaking, and rubbing of the bean curd; the chopping of mushrooms and meat; the soup boiling, slurping, eating, and the voices of my grandfather and me. \n" +
             "\n" +
             "<em>Rewriting Reconnections</em>\n" + 
             "This piece documents the shared time and space between grandfather and granddaughter. While my grandfather teaches me how to write my Chinese name, his hand guides mine, passing down a traditional practice, movement, and knowledge. Writing my own Chinese name makes my identity visible stroke by stroke, the repetition ingraining the sequence of movements into my mind and body's memory. \n" +
             "\n" +
             "Our physical relationships with our elders are impermanent, making the knowledge and histories they hold vulnerable. This work reflects on what it looks like to reconnect to culture by creating and nurturing intergenerational sharing spaces. How do we hold onto what we have learned, and how do we embody that knowledge moving forward? \n" +
             "\n" +
             "In this second iteration of the previous work <em>Rewriting Reconnections</em> (2022), this piece documents all my yé-yé's grandchildren learning how to write their Chinese names. He guides our brush strokes with his own hand, passing down familial and cultural knowledge. \n",
        directory: '/assets/ResilienceInCommunity/Aysia',
        artworks: {
            art1: {
                name: "Bean Curd Soup Ft. Ye-ye",
                year: '2023',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Aysia/Bean Curd Bronze.jpg"),
            },
            art2: {
                name: "Rewriting Reconnections",
                year: '2022',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Aysia/Rewriting-1.jpeg"),
            },
            art3: {
                name: "Rewriting Reconnections",
                year: '2022',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Aysia/Rewriting-2.jpeg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Aysia/Bean Curd Bronze.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Aysia/Rewriting-1.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Aysia/Rewriting-2.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist2:{
        idx: 2,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Ayumi Goto & Vridhhi Chaudhry",
        ins_handle: [],
        quote: 'In Letters to Future Love, Ayu and Vridhhi explore the spoken and unspoken, seen and unseen in the ' +
            'contemplation of durational grief, traumatic future memories and longing.',
        bio: 'Ayu explores the world through performance, where the body works with and through worlds that are ' +
            'encountered. 我々(ware-ware pronoun) draws upon the writings of Neo-Buddhist modernist philosopher, Nishida ' +
            'Kitarō, who articulated thinking as an outcome of the lived body. Just like one’s hair, sweat, tears, skin, ' +
            'and faeces, thought is a secondary characteristic of the body in motion rather than a prime mover. Ayu is ' +
            'fascinated by place-based, temporal/spatial shapeshifting and how these transformations might expand current ' +
            'understandings of health and disease. 我々 works in collaboration with human, nonhuman, dreams, and hope.' +
        '\n\n' +
        'Vridhhi C. is an interdisciplinary artist working between Toronto and Delhi, India. Holding an MFA from OCAD ' +
            'University, she is also a self-taught painter whose practice is rooted in dreams and personal narratives. ' +
            'Her practice unfolds through ritualistic repetition and evocative mark-making. Drawing on Carl Jung’s ' +
            'insights, she envisions the body as a dynamic archive, a site of endurance and exploration, where layers ' +
            'of emotion, memory, and transformation are etched in every gesture. Collaborating with the ephemeral ' +
            'currents of experience, her work navigates the complexities of human experience through intuitive, ' +
            'nonlinear systems of affect. ' +
        '\n\n' +  
        'Vridhhi & Ayu have been collaborating closely since August 2023. As they learn from one another, others are ' +
            'invited in so that all are included, nurtured, and supported in the work to transform suffering into ' +
            'loving action and regard. Letters to Future Love is the first public showing of Vridhhi and Ayu’s ' +
            'creative process. ',
        topic_name: "Resilience in Community",
        quote_bg_url: require('@/assets/ResilienceInCommunity/Ayumi/Height-3.jpeg'),
        collection_title: "Letters to Future Love",
        description:
            "In Letters to Future Love, Ayu and Vridhhi C. explore, through text, image, and sound, the emotional, " +
            "psychological, and spiritual reckoning of falling in future love. In the prismatic multiplicities of " +
            "space-time, Ayu and Vridhhi articulate the confluences of traumatic memories, past and future tense. As " +
            "Ayu composes the letters, they are sent to Vridhhi, who translates the text into images, drawing upon her " +
            "own life experiences. Through this collaboration, the artists reach one another, extending this invitation " +
            "outwards, welcoming others to explore the inner workings of their hearts. At times, this reach is " +
            "intercultural, interpolitical, and interfeminist. Yet, in the interweaving of diverse histories and " +
            "cosmologies, uncanny emotional and mental health knowledges resonate and materialize. Ayu and Vridhhi " +
            "bring to this endeavor creative investigations of intergenerational trauma, complex PTSD, depression, " +
            "suicide, emotional and spiritual resilience, care rituals, and commemoration. \n",
        directory: '/assets/ResilienceInCommunity/Ayumi',
        artworks: {
            art1: {
                name: "Letters to Future Love",
                year: '2025',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Ayumi/Height-1.jpeg"),
            },
            art2: {
                name: "Letters to Future Love",
                year: '2025',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Ayumi/Height-2.jpeg"),
            },
            art3: {
                name: "Letters to Future Love",
                year: '2025',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Ayumi/Height-3.jpeg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Ayumi/Height-1.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Ayumi/Height-2.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Ayumi/Height-3.jpeg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist3:{
        idx: 3,  // for internal use
        format: AllowedFormats.Image,  // for rendering
        visible: true,
        artist_name: "Cherie Leung",
        ins_handle: ["@fangdanchen"],
        quote: '"In Chinese culture, we don’t express our feelings. I cannot speak openly about mental health because it’s ' +
            'considered a weakness or even an insult. Through my work, I can ‘speak’ a visual language that hopefully ' +
            'opens up a verbal dialogue about mental health and wellness."',
        bio: 'Cherie is a multi-media storyteller who works in textiles, crafting material, and found objects. She uses ' +
            'techniques like sewing, quilting, embroidery and beading to create works that intersect painting, textiles, ' +
            'and sculpture.  As a second-generation Chinese Canadian, her work focuses on motherhood and self, ' +
            'materiality, and mental health.  Two recent residencies in Oaxaca, Mexico and Chiang Mai, Thailand ' +
            'continue to influence Cherie’s work.  Cherie’s work has been featured in over 20 group shows.  Her ' +
            'achievements have been recognized in the form of merit scholarships and by the Government of Canada. ' +
            'After completing her BFA in Drawing and Painting at OCAD University, Cherie will pursue an MA in Textiles ' +
            'at the Royal College of Art (London, September 2025).' +
        '\n\n' +
         "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/cherieleungart/\">@cherieleungart</a>",
        topic_name: "Resilience in Community",
        quote_bg_url: require('@/assets/ResilienceInCommunity/Cherie/Time-Heals-All-Wounds.jpg'),
        collection_title: "Time Heals All Wounds",
        description:
            "I opened this message at one of the darkest points of my life. I knew that fortune cookies are mass-produced but I hoped desperately that it was true.  The process of enlarging and hand-embroidering this piece was a way of personalizing and preserving the message that I received. \n" +
            '\n' +
            "My practice is process-oriented and often labour-intensive because I use it to process my own thoughts and feelings. The making is therapeutic, and the output often speaks to issues of mental health. While I was born in Toronto, my parents immigrated from Hong Kong. Cultural stigma and intergenerational dynamics are at play when it comes to mental health and my work. In Chinese culture, we don’t express our feelings. Being overly emotional incites shame on the individual and awkwardness on the observer. Life is about working hard, being studious and successful and emotions get in the way of this. I cannot speak openly about mental health because it’s considered a weakness or even an insult. “It’s just the rituals that they have to go through” or “They’re just a nervous person” or “They are always this negative.” Through my work, I can “speak” a visual language that hopefully opens up a verbal dialogue about mental health and wellness. \n",
        directory: '/assets/ResilienceInCommunity/Cherie',
        artworks: {
            art1: {
                name: "Time Heals All Wounds",
                year: '2023',
                medium: "",
                file_name: require("@/assets/ResilienceInCommunity/Cherie/Time-Heals-All-Wounds.jpg"),
            },
        },
        slides:[
            {
                image: require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/ResilienceInCommunity/Cherie/Time-Heals-All-Wounds.jpg")}" class="object-contain w-fit h-[500px] lg:h-screen"/>`,
            },
        ],
    },
    artist4:{
        idx: 4,  // for internal use
        format: AllowedFormats.Video,  // for rendering
        visible: true,
        artist_name: "Teresa Chan",
        ins_handle: ["@7eresa_storyteller"],
        quote: '',
        bio: 'Teresa Chan is a Hong Kong-born interdisciplinary artist and award-winning children’s author and ' +
            'illustrator. She holds a Bachelor’s degree in Ecology & Biodiversity and a Master’s in Anthropology. ' +
            'Chan began her creative journey drawing political cartoons and book illustrations, and her first solo ' +
            'exhibition was awarded by the Hong Kong Arts Centre in 2022. In addition to her artistic work, she is ' +
            'actively engaged in early childhood education rooted in the Montessori philosophy and has published picture ' +
            'books focused on emotional education. Her work has been featured in solo and group exhibitions across ' +
            'Canada and recognized by media outlets such as Hong Kong Free Press, Taiwan Public Television Service, and ' +
            'The Washington Post.\n' +
            '\n' +
            'Chan’s practice is informed by her multicultural experiences and is not confined by geographic or ' +
            'disciplinary boundaries. After spending two years living with Indigenous People in rural Taiwan, she began ' +
            'incorporating natural materials and everyday objects into her art to explore the relationship between ' +
            'humans and nature. Her work investigates collective memory and cultural identity through a multi-species ' +
            'lens, often blending experimental and narrative forms to highlight the interconnectedness of all things. ' +
            'Beyond her artistic endeavors, she has also contributed as a researcher in collaborative projects in rural ' +
            'Hong Kong villages and Myanmar refugee camps, advocating for humanitarian and environmental causes—until ' +
            'worsening political conditions in Hong Kong curtailed her efforts.\n' +
            '\n' +
            'Since relocating to Canada in 2022, Chan has become a professional member of the Canadian Society of ' +
            'Children’s Authors, Illustrators and Performers (CANSCAIP). She has participated in artist residencies at ' +
            'Artscape Gibraltar Point in Ontario and Island Mountain Arts in British Columbia. Most recently, she has ' +
            'facilitated mindfulness drawing workshops for both adults and children.' +
        '\n\n' +
         "<a class=\"font-medium text-bitten/80 hover:text-bitten\" href=\"https://www.instagram.com/7eresa_storyteller/\">@7eresa_storyteller</a>",
        topic_name: "Resilience in Community",
        quote_bg_url: require('@/assets/ResilienceInCommunity/Teresa/Mind-Full-Ness.jpg'),
        collection_title: "Mind-Full-Ness",
        
        description: 
            "As a newcomer from Hong Kong, moving to Canada is like kayaking alone and navigating through turbulence to " +
            "an imaginary destination. I want to explore ‘Cultural Narratives and Representation’ and ‘Art and Mental " +
            "Health’. As growing up in a Japanese Buddhist family with a tradition of suppressing emotions to achieve " +
            "harmonious relationships, I attempt to connect with nature to heal from trauma. Since the 2019 protest " +
            "movement and pandemic, suicide cases in Hong Kong have been increasing at an alarming rate. Reminding " +
            "someone to drink water (see this and drink water, 見字飲水) means telling them to take better care of " +
            "themselves. The famous martial arts star Bruce Lee’s quote, “Empty your mind. Be formless, shapeless... " +
            "Be water, my friend,” has become influential in Hong Kong culture. However, it also brings out the feeling " +
            "of helplessness. \n" +
           '\n' +
            "After moving to Tkaronto/Toronto in 2022, I started to practice suminagashi (Japanese paper marbling) as a " +
            "way of collaborating with water to embody Bruce Lee’s philosophy. Suminagashi is a method of decorative " +
            "printing that can be traced back to 12th-century China and Japan. It was also a technique practiced by " +
            "monks. Making concentric circles by dipping bushes into the water’s surface requires a mind-body connection, " +
            "similar to the Buddhist zazen process. In the culture I grew up in, I was always asked to hide my emotions " +
            "and avoid disturbing others. While presenting the beauty of Zen through paper marbling, the repeating black " +
            "circles represent uncontrollable and recurring thoughts, carrying a hint of oppressiveness. I am silent, " +
            "but let water speak. \n",
        directory: '/assets/ResilienceInCommunity/Teresa',
        artworks: {
            art1: {
                name: "Mind-Full-Ness",
                year: '2024',
                medium: "Digital Video",
                file_name: "https://www.youtube.com/embed/jYe9z_whYg0",
            },
        },
    }
}