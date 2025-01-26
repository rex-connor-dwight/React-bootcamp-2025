const houses = {
    houseOne: {
        name: 'House Stark',
        discription: `These topics could be woven together with real-world examples, interviews, and actionable insights to create a book that inspires and equips readers to approach business with the same rigor, passion, and determination as an Olympic athlete.`,
        image: './asset/houseOne.jpg'
    }
}


const heading = document.getElementById("heading").innerHTML = houses.houseOne.name
const description = document.getElementById("discription").innerHTML = houses.houseOne.discription
const image = document.getElementById("image").src = houses.houseOne.image

