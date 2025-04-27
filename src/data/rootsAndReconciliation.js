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
        collection_title: "",
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
}; 