import { YogaPoseAPI } from "@/app/interface/CustomInterface";


const poseInfo: YogaPoseAPI[] = [
    {
        id: 101,
        name: "tree pose",
        originalName: "vṛkṣāsana",
        description: "The Tree Pose, Also Known As Vṛkṣāsana, Is A Yoga Pose That Helps To Improve Balance And Stretches The Body From Head To Toe",
        benefits: [
            "Balance Enhancement: Tree pose strengthens stabilizing muscles, improving equilibrium and stability for better posture and reduced risk of falls in daily activities.",
            "Leg Strength: Engaging quadriceps, hamstrings, and calves, tree pose builds lower body strength, enhancing functional abilities like walking and standing.",
            "Concentration: Requires focused attention on body alignment and breath, cultivating mindfulness that extends beyond the mat into daily tasks.",
            "Hip Flexibility: By stretching inner thighs and groin, tree pose promotes greater mobility in the hips, easing tension from sedentary lifestyles.",
            "Posture Alignment: Tree pose encourages spinal elongation and shoulder opening, fostering healthy posture habits for improved spinal alignment and reduced discomfort."
        ],
        tutorial: "tree.gif",
        image: "tree.webp",
        TFData: {
            class: "tree",
            set: 1,
        },
        audioData:{
            mainAudio: "tree.mp3",
            benefits: "benefits.mp3",
            narratorSegment:["seg0.mp3","seg1.mp3","seg2.mp3","seg3.mp3","seg4.mp3"]
        }
    },
    {
        id: 102,
        name: "warrior 1",
        originalName: "Vīrabhadrāsana I",
        description:"Warrior 1, also known as Virabhadrasana I, is a standing yoga pose that stretches the front of the body, improves balance, and builds strength in the core, legs, and back.",
        benefits:[
            "Strengthens Legs: Warrior 1 pose engages quadriceps, hamstrings, and calves, building lower body strength and stability.",
            "Improves Balance: Balancing on one leg, Warrior 1 enhances stability and coordination while fostering mental focus.",
            "Opens Hips: The hip of the back leg is in extension, stretching the hip flexors and promoting hip mobility.",
            "Stretches Chest and Shoulders: Extending the arms overhead in Warrior 1 stretches the chest and shoulders, counteracting the effects of hunching.",
            "Grounding and Empowerment: Rooting down through the feet, Warrior 1 promotes a sense of grounding and inner strength."
        ],
        tutorial: "warrior1.gif",
        image: "warrior1.webp",
        TFData: {
            class: "warrior1",
            set: 1,
        },
        audioData:{
            mainAudio: "warrior1.mp3",
            benefits: "benefits.mp3",
            narratorSegment:["seg0.mp3","seg1.mp3","seg2.mp3","seg3.mp3","seg4.mp3","seg5.mp3"]
        }
    },
    {
        id: 103,
        name: "Downward facing Dog",
        originalName: "Adho Mukha Śvānāsana",
        description:"Downward facing Dog or Downward Dog is also known as Adho Mukha Śvānāsana, is an inversion asana, often practised as part of a flowing sequence of poses, especially Surya Namaskar, the Salute to the Sun",
        benefits:[
            "Full Body Stretch: Downward Dog lengthens the spine, hamstrings, and calves, providing a comprehensive stretch for the entire body.",
            "Strengthens Arms and Shoulders: Holding the body weight, Downward Dog strengthens the arms, shoulders, and upper back muscles.",
            "Improves Flexibility: Regular practice increases flexibility in the spine, shoulders, and hamstrings, enhancing overall mobility.",
            "Calms the Mind: The inversion in Downward Dog promotes relaxation and relieves stress, calming the mind and promoting mental clarity.",
            "Energy Boost: Downward Dog increases blood flow to the brain, refreshing the body and mind, and providing an energy boost."
        ],
        tutorial: "downdog.gif",
        image: "downdog.webp",
        TFData: {
            class: "downdog",
            set: 1,
        },
        audioData:{
            mainAudio: "tree.mp3",
            benefits: "benefits.mp3",
            narratorSegment:["seg0.mp3","seg1.mp3","seg2.mp3","seg3.mp3","seg4.mp3"]
        }
    },
    {
        id: 104,
        name: "Goddess Pose",
        originalName: "Utkaṭāsana",
        description:"The Goddess pose, also known as Utkata Konasana, is a standing yoga pose that opens the hips and chest, tones the body, and stretches the inner thighs, hips, and pelvis",
        benefits:[
            "Strengthens Lower Body: Goddess pose engages the quadriceps, glutes, and inner thighs, building strength and stability in the lower body.",
            "Opens Hips and Chest: This wide-legged stance stretches the hips and groin while opening the chest and shoulders, promoting flexibility.",
            "Core Activation: By drawing the belly button in and engaging the core, Goddess pose strengthens the abdominal muscles and improves posture.",
            "Empowerment and Confidence: The powerful stance of Goddess pose fosters a sense of inner strength, confidence, and empowerment.",
            "Balancing Feminine Energy: Symbolizing the goddess archetype, this pose balances feminine energy, promoting self-love, nurturing, and grace."
        ],
        tutorial: "goddess.gif",
        image: "goddess.webp",
        TFData: {
            class: "goddess",
            set: 2,
        },
        audioData:{
            mainAudio: "tree.mp3",
            benefits: "benefits.mp3",
            narratorSegment:["seg0.mp3","seg1.mp3","seg2.mp3","seg3.mp3","seg4.mp3"]
        }
    },

];


export  {poseInfo}