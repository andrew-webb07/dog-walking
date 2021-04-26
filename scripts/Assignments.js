import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities()


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            
            const cityId = cities.find(city => city.id === walker.cityId)
            return `${walker.name} in ${cityId.name}`
        }
    }
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
        const currentPetWalker = findWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

