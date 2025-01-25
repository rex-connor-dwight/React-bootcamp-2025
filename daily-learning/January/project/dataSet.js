// Creation of an object with symptoms and remedies
const symptomsAndRemedies = {
    headache: {
      remedies: "Take a pain reliever like ibuprofen or acetaminophen",
    },
    fever: {
      remedies: "Take medication like acetaminophen or ibuprofen to reduce the fever",
    },
    cough: {
      remedies: "Stay hydrated and use a humidifier to relieve congestion",
    },
    soreThroat: {
      remedies: "Gargle with salt water and stay hydrated to soothe the throat",
    },
    diarrhea: {
      remedies: "Stay hydrated and avoid solid foods for a while",
    },
    nausea: {
      remedies: "Take medication like metoclopramide to relieve nausea",

    },
    vomiting: {
      remedies: "Stay hydrated and avoid solid foods for a while",
    },
    fatigue: {
      remedies: "Get plenty of rest and stay hydrated",
    },
    skinRash: {
      remedies: "Apply a topical cream or ointment to soothe the skin",
    },
    dizziness: {
      remedies: "Stay hydrated and avoid standing up too quickly",
    },
    anxiety: {
        remedies: "Practice deep breathing, engage in physical activity, and seek professional help if needed",
    },
    insomnia: {
        remedies: "Establish a regular sleep schedule, avoid caffeine, and create a relaxing bedtime routine",
    },
    backPain: {
        remedies: "Apply heat or ice, take pain relievers, and do gentle stretching"
    },
    jointPain: {
        remedies: "Use over-the-counter pain relievers, apply heat or ice, and do low-impact exercises."
    },
    musclePain: {
        remedies: "Rest the affected muscle, apply ice, and take pain relievers."
    },
    allergies: {
        remedies: "Avoid allergens, take antihistamines, and use nasal sprays."
    },
    rash: {
        remedies: "Apply anti-itch cream, avoid scratching, and keep the area clean and dry."
    },
    sunburn: {
        remedies: "Apply aloe vera, take cool baths, and stay hydrated."
    },
    acne: {
        remedies: "Cleanse your skin regularly, use acne treatments, and avoid picking at pimples."
    },
    drySkin: {
        remedies: "Moisturize regularly, avoid hot showers, and use gentle soaps."
    },
    dandruff: {
        remedies: "Use anti-dandruff shampoo, avoid hair products that cause buildup, and manage stress."
    },
    toothache: {
        remedies: "Rinse with warm salt water, take pain relievers, and see a dentist."
    },
    earAche: {
        remedies: "Apply a warm compress, take pain relievers, and see a doctor if necessary."
    },
    eyeStrain: {
        remedies: "Take regular breaks from screens, use proper lighting, and adjust screen settings."
    },
    blurredVision: {
        remedies: "Rest your eyes, use lubricating eye drops, and see an eye doctor."
    },
    indigestion: {
        remedies: "Eat smaller meals, avoid spicy foods, and take antacids."
    },
    heartburn: {
        remedies: "Avoid trigger foods, eat smaller meals, and take antacids."
    },
    bloating: {
        remedies: "Avoid carbonated drinks, eat slowly, and take over-the-counter gas relief medications."
    },
    gas: {
        remedies: "Avoid gas-producing foods, eat slowly, and take over-the-counter gas relief medications."
    },
    hiccups: {
        remedies: "Hold your breath, drink a glass of water quickly, and try swallowing a teaspoon of sugar."
    },
    coldSores: {
        remedies: "Apply antiviral creams, avoid touching the sores, and use lip balm with sunscreen."
    },
    chappedLips: {
        remedies: "Use lip balm, avoid licking your lips, and stay hydrated."
    },
    badBreath: {
        remedies: "Brush and floss regularly, use mouthwash, and stay hydrated."
    },
    sweating: {
        remedies: "Use antiperspirant, wear breathable clothing, and stay hydrated."
    },
    bodyOdor: {
        remedies: "Shower regularly, use deodorant, and wear clean clothes."

    },
    itchySkin: {
        remedies: "Apply anti-itch cream, avoid scratching, and keep the area clean and dry."
    },
    bruises: {
        remedies: "Apply ice, elevate the area, and rest."
    },
    cuts: {
        remedies: "Clean the wound, apply an antibiotic ointment, and cover with a bandage."
    },
    burns: {
        remedies: "Cool the burn with running water, apply aloe vera, and cover with a sterile bandage."
    },
    blisters: {
        remedies: "Keep the area clean, avoid popping the blister, and cover with a bandage."
    },
    splinters: {
        remedies: "Clean the area, use tweezers to remove the splinter, and apply an antibiotic ointment, and cover with a bandage."
    },
    soreMuscles: {
        remedies: "Rest the muscles, apply ice or heat, and take over-the-counter pain relievers."
    },
    dizziness: {
        remedies: "Sit or lie down until the dizziness passes, stay hydrated, and avoid sudden movements."
    },
    fainting: {
        remedies: "Lie down and elevate your legs, stay hydrated, and avoid standing for long periods."
    },
    nosebleeds: {
        remedies: "Pinch your nose and lean forward, apply a cold compress, and avoid picking your nose."
    },
    anxiety: {
        remedies: "Practice deep breathing, engage in physical activity, and seek professional help if needed."
    },
    depression: {
        remedies: "Talk to a therapist, engage in physical activity, and consider medication if prescribed."
    },
    stress: {
        remedies: "Practice relaxation techniques, engage in physical activity, and manage your time effectively."
    },
    panicAttacks: {
        remedies: "Practice deep breathing, use grounding techniques, and seek professional help if needed."
    },
    memoryLoss: {
        remedies: "Engage in mental exercises, stay physically active, and maintain a healthy diet."
    },
    confusion: {
        remedies: "Ensure adequate sleep, stay hydrated, and seek medical attention if necessary."
    },
    ringingInEars: {
        remedies: "Avoid loud noises, manage stress, and see a doctor if persistent."
    },
    hearingLoss: {
        remedies: "Avoid loud noises, use hearing protection, and see a doctor if necessary."
    },
    impairedVision: {
        remedies: "See an eye doctor, manage underlying conditions, and use corrective lenses if needed."
    },
    hairLoss: {
        remedies: "Use gentle hair care products, avoid tight hairstyles, and consider medical treatments."
    },
    weightGain: {
        remedies: "Maintain a balanced diet, engage in regular physical activity, and manage stress."
    },
    weightLoss: {
        remedies: "Ensure adequate calorie intake, eat nutrient-dense foods, and seek medical advice if needed."
    },
    highBloodPressure: {
        remedies: "Reduce salt intake, engage in regular physical activity, and take prescribed medications."
    },
    lowBloodPressure: {
        remedies: "Stay hydrated, eat small, frequent meals, and avoid sudden position changes."
    },
    highCholesterol: {
        remedies: "Eat a heart-healthy diet, engage in regular physical activity, and take prescribed medications."
    },
    diabetes: {
        remedies: "Monitor blood sugar levels, maintain a balanced diet, and take prescribed medications."
    },
    asthma: {
        remedies: "Use prescribed inhalers, avoid triggers, and engage in regular physical activity."
    },
    bronchitis: {
        remedies: "Rest, stay hydrated, and use a humidifier."
    },
    pneumonia: {
        remedies: "Take prescribed antibiotics, rest, and stay hydrated."
    },
    flu: {
        remedies: "Rest, stay hydrated, and take over-the-counter flu medications."
    },
    cold: {
        remedies: "Rest, stay hydrated, and use over-the-counter cold medications."
    },
    stomachAche: {
        remedies: "Eat small, bland meals, avoid strong odors, and stay hydrated."
    },
    ulcers: {
        remedies: "Avoid spicy foods, take prescribed medications, and manage stress."
    },
    gallStones: {
        remedies: "Eat a low-fat diet, maintain a healthy weight, and seek medical advice if needed."
    },
    kidneyStones: {
        remedies: "Drink plenty of water, take pain relievers, and seek medical advice if needed."
    },
    urinaryTractInfection: {
        remedies: "Drink plenty of water, take prescribed antibiotics, and avoid irritants."
    },
    yeastInfection: {
        remedies: "Use antifungal treatments, wear breathable clothing, and maintain good hygiene."
    },
    menstrualCramps: {
        remedies: "Use a heating pad, take over-the-counter pain relievers, and practice relaxation techniques."
    },
    pinkEyes: {
        remedies: "Keep the area clean, Wash eyes with clean water, avoid touching the eyes, and use prescribed eye drops."
    },
    strepThroat: {remedies: "Take prescribed antibiotics, rest, and stay hydrated."}
};


// const smallData = {
//     dataOne: `This is data one`,
//     dataTwo: `This is data two`,
//     dataThree: `This is data three`,
//     dataFour: `This is data four`,
// }

const loopedkeys = document.getElementById("loopedKeys");




for ( const keys in symptomsAndRemedies) {
    loopedkeys.innerHTML += `<p>${keys}</p>`;
    // console.log(keysToBeDisplayed)
}







