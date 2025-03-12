const map = L.map('map', {
    minZoom: 2, 
    maxZoom: 6, 
    worldCopyJump: false, 
    maxBounds: [
        [-90, -180], 
        [90, 180]   
    ],
    maxBoundsViscosity: 1.0 
}).setView([20, 0], 2);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

const locations = [
    {
        name: "USA",
        coords: [37.0902, -95.7129],
        description: "A global leader in technology and innovation.",
        stats: { "Clinics": 12000, "Hospitals": 5700, "Medical Colleges": 150 }
    },
    {
        name: "India",
        coords: [20.5937, 78.9629],
        description: "Known for its rich history and diverse healthcare sector.",
        stats: { "Clinics": 45000, "Hospitals": 25000, "Medical Colleges": 600 }
    },
    {
        name: "Germany",
        coords: [51.1657, 10.4515],
        description: "Renowned for its healthcare and engineering advancements.",
        stats: { "Clinics": 8000, "Hospitals": 2200, "Medical Colleges": 75 }
    },
    {
        name: "United Kingdom",
        coords: [55.3781, -3.4360],
        description: "Home to the NHS, one of the world's best public healthcare systems.",
        stats: { "Clinics": 5000, "Hospitals": 1400, "Medical Colleges": 50 }
    },
    {
        name: "Australia",
        coords: [-25.2744, 133.7751],
        description: "A country with advanced healthcare and medical research facilities.",
        stats: { "Clinics": 3000, "Hospitals": 1200, "Medical Colleges": 35 }
    },
    {
        name: "China",
        coords: [35.8617, 104.1954],
        description: "The world's most populous country with a vast healthcare system.",
        stats: { "Clinics": 60000, "Hospitals": 33000, "Medical Colleges": 500 }
    },
    {
        name: "Japan",
        coords: [36.2048, 138.2529],
        description: "Known for its cutting-edge medical technology and long life expectancy.",
        stats: { "Clinics": 9000, "Hospitals": 4000, "Medical Colleges": 80 }
    },
    {
        name: "Brazil",
        coords: [-14.2350, -51.9253],
        description: "Largest country in South America with a universal healthcare system.",
        stats: { "Clinics": 15000, "Hospitals": 7000, "Medical Colleges": 120 }
    },
    {
        name: "South Africa",
        coords: [-30.5595, 22.9375],
        description: "Leading healthcare provider in Africa with advanced medical facilities.",
        stats: { "Clinics": 4000, "Hospitals": 1800, "Medical Colleges": 40 }
    },
    {
        name: "Canada",
        coords: [56.1304, -106.3468],
        description: "A country with high-quality healthcare and a well-funded public system.",
        stats: { "Clinics": 8000, "Hospitals": 2500, "Medical Colleges": 60 }
    }
];

// Create a floating info box
const infoBox = document.createElement("div");
infoBox.classList.add("info-box");
document.body.appendChild(infoBox);

// Add markers and hover effects
locations.forEach(location => {
    const marker = L.marker(location.coords).addTo(map);

    marker.on("mouseover", (e) => {
        map.getContainer().classList.add("map-fade"); 

        let tableContent = "<table>";
        for (let key in location.stats) {
            tableContent += `<tr><td>${key}</td><td>${location.stats[key]}</td></tr>`;
        }
        tableContent += "</table>";

        infoBox.innerHTML = `
            <h3>${location.name}</h3>
            <p>${location.description}</p>
            ${tableContent}
        `;
        infoBox.style.left = (e.containerPoint.x + 10) + "px";
        infoBox.style.top = (e.containerPoint.y - 50) + "px";
        infoBox.style.display = "block";
    });

    marker.on("mouseout", () => {
        map.getContainer().classList.remove("map-fade"); 
        infoBox.style.display = "none";
    });
});
