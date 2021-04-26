import { getPets , getWalkers } from "./database.js"

const pets = getPets()
const walkers = getWalkers()

document.addEventListener(
    "click", (clickEvent) => {
        const itemClicked = clickEvent.target
        if(itemClicked.id.startsWith("pet")) {
            const [, petId] = itemClicked.id.split("--")

            


            for (const pet of pets) {
                if(pet.id === parseInt(petId)) {
                    
                    const petWalker = walkers.find(walker => walker.id === pet.walkerId)

                    window.alert(`${pet.name} is walked by ${petWalker.name}`)

                //     const petWalker = walkers.filter(walker => pet.walkerId === walker.id)
                
                // window.alert(`${pet.name} is walked by ${petWalker[0].name}`)
                // }
            }
        }
    }
}
)

export const RegisteredPets = () => {
    let petHTML = "<ul>"

    for (const pet of pets) {
        petHTML += `<li id="pet--${pet.id}">${pet.name}</li>`
    }

    petHTML += "</ul>"

    return petHTML
}

