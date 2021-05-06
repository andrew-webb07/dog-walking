import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            // have this function ONLY find walker
            // const cityId = cities.find(city => city.id === walker.cityId)
            // return `${walker.name} in ${cityId.name}`
            return walker
        }
    }
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)

        const foundCity = cities.find(city => {
            if(city.id === currentPetWalker.cityId) {
                return city
            }
        })

        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${foundCity.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

