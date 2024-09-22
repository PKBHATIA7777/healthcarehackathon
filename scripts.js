const plantDetails = {

    Rosemary:{
        name: "Rosmarinus officinalis",
        info: "Popular Indian Locations: Found in cooler regions such as Kashmir, Himachal Pradesh, and Uttarakhand.\n Medicinal Advantage: Enhances memory, digestion, and relieves pain. "
        
        
    },
    Yarrow:{
        name: "Achillea millefolium",
        info: "Popular Indian Location: Himalayan regions\n Medicinal Advantage: Heals wounds, regulates menstruation, and aids digestion.."
    },
    ChineseSage: {
        name: "Chinese Sage (Salvia miltiorrhiza)",
        info: "Popular Indian Location: Rajasthan, Gujarat, Maharashtra\n Medicinal Advantage: Reduces pain, swelling, and treats muscle injuries.."
    },
    Greaterburdock:{
        name: "Greater burdock (Arctium Lappa)",
        info: "Popular Indian Location: Plains and foothills across India\n Medicinal Advantage: Treats respiratory issues, digestive disorders, and joint pain.     "
    },
    Neem: {
        name: "Neem",
        info: "Popular Indian Location: Rajasthan, Gujarat, Uttar Pradesh\n  Medicinal Advantage: Fights infections, detoxifies the body, and supports skin health.."
    },
    Momordicacharantia:{
        name: "Momordica charantia",
        info: "Popular Location: Uttar Pradesh, Bihar, West Bengal\n Medicinal Advantage: Regulates blood sugar, boosts immunity, and improves liver health."
    },
    Cassiasophera : {
        name: "Cassia sophera",
        info: "Popular Indian Locations : Throughout the Western Ghats.\n Medicinal Advantages:Anti-inflammatory, kin conditions:"
    },
    Achyranthesaspera: {
        name: "Arnica",
        info: "Popular Indian Location: Rajasthan, Gujarat, Maharashtra\n  Medicinal Advantage: Reduces pain, swelling, and treats muscle injuries.."
    },
};

function showDetails(plant) {
    document.getElementById('plantName').innerText = plantDetails[plant].name;
    document.getElementById('plantInfo').innerText = plantDetails[plant].info;
    document.getElementById('detailsModal').style.display = "block";
}

function closeModal() {
    document.getElementById('detailsModal').style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('detailsModal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}