const experiences = [
    {
        id: crypto.randomUUID(),
        title: 'Customer Service Representative → Subject Matter Expert (SME) ',
        date: 'TTEC | Sep 2022 – Present',
        number: '1',
        description: 'Progressed from frontline agent to Subject Matter Expert, serving as the primary escalation resource for voice, chat, and outbound teams. Hand-picked to train and onboard 100+ new agents across 10 waves, while managing CRM platforms and remote diagnostic tools to resolve complex customer and system issues.'
    },
    {
        id: crypto.randomUUID(),
        title: 'WordPress Website Optimization & Security Management',
        date: 'Independent Project | Feb 2024 – Jul 2025',
        number: '2',
        description: 'Rebuilt and refreshed site layouts using Elementor, improving overall UX through updated navigation, media, and content. Independently identified and resolved security threats by auditing backend plugin files and restoring full site functionality via the SiteGround hosting panel.'
    },
    {
        id: crypto.randomUUID(),
        title: 'General Virtual Assistant',
        date: 'Flower Shop Client | Aug 2024 – Dec 2025 | Seasonal',
        number: '3',
        description: 'Provided end-to-end virtual support for a flower shop client, managing email correspondence, calendar scheduling, and appointment booking. Assisted in organizing and building sales funnels using GoHighLevel to improve the client\'s online presence and customer flow.'
    },
    {
        id: crypto.randomUUID(),
        title: 'Customer Support Representative',
        date: 'VXI Global Solutions | Mar 2022 – Jul 2022',
        number: '4',
        description: 'Handled inbound and outbound customer calls as the primary point of contact, resolving technical and billing inquiries with a consistent focus on first-contact resolution.'
    }
]

/* sample template
    {
        id: crypto.randomUUID(),
        title: '',
        date: '',
        number: '',
        description: ''
    },
*/

const panel = document.getElementById('experience-section-js');

panel.innerHTML = `

    <div class="experience-section">
        <p><i class="fa-solid fa-feather-pointed"></i> Experience</p>
        <h1>JOURNEY THROUGH EXPERIENCE</h1>
        <div class="experience-subtitle">
            <blockquote>I work independently, communicate clearly, and I don't let things fall through the cracks. Whether you need someone to own your inbox, keep your clients happy, or handle the operational work you don't have time for — I'm ready! </blockquote>
        </div>
    </div>

    <div id="experience-section-list"></div>
`;

const grid = document.getElementById('experience-section-list');

experiences.forEach(function(experience) {
    const card = document.createElement('div');
    card.className = 'experience-card';

    card.innerHTML = `
            <div class="experience">
                <div class="exp-title-layout">
                    <i class="fa-solid fa-${experience.number} number"></i>
                    <div class="exp-title">
                        <h3>${experience.title}</h3>
                        <p>${experience.date}</p>
                    </div>
                </div>
                <p class="exp-description">${experience.description}</p>
            </div>
    `

    grid.appendChild(card);
});

function errorNotif() {
    alert('This page is currently unavailable as we make some updates. We expect to be back online shortly. Thank you for your patience!');
}

