const presentationsArray = [
    {
        event: 'NDNComm 2025',
        location: 'Los Angeles, CA',
        title: 'AI Inference Distributed Data Challenge',
        date: 'Apr 17, 2025',
        link: 'https://ndncomm2025.named-data.net/'
    },
    {
        event: 'Intel Vision',
        location: 'Las Vegas, NV',
        title: 'Optimizing Edge AI with Open and Scalable Solutions',
        date: 'Apr 1, 2025',
        link: 'https://www.intel.com/content/www/us/en/events/on-event-series/vision.html'
    },
    {
        event: 'Nvidia GTC 2025',
        location: 'San Jose, CA',
        title: 'Distributed Agentic Multimodal LLM Deployment',
        date: 'Mar 17, 2025',
        link: 'https://www.nvidia.com/gtc/'
    },
    {
        event: 'IEEE Symposium on Edge Compute',
        location: 'Rome, Italy',
        title: 'Chair - Edge Networking and Connected Vehicles; Panelist - Unlocking Innovation at the Edge: Stories and Experiences',
        date: 'Dec 4, 2024',
        link: 'https://acm-ieee-sec.org/2024/'
    },
    {
        event: 'Inter-Academy International 6G Symposium',
        location: 'New Delhi, India',
        title: 'Resiliency and Sustainability of 6G for Autonomous, Cloud/Edge and Security',
        date: 'Oct 16-18, 2024',
        link: 'https://www.indiamobilecongress.com/'
    },
    {
        event: 'AHEAD Leadership Summit',
        location: 'Palm Beach, FL',
        title: 'Understanding Your Edge: Evolving the Technology Closer to the Business Challenge',
        date: 'Sep 30-Oct 2, 2024',
        link: 'https://events.ahead.com/aheadleadershipsummit'
    },
    {
        event: 'AI Hardware & Edge AI Summit',
        location: 'San Jose, CA',
        title: 'The Impact of LLMs at the Edge - What can we Learn from the Generative AI Boom; Unleashing AI Acceleration from Edge to MultiCloud',
        date: 'Sep 9-12, 2024',
        link: 'https://aihwedgesummit.com/events/aihwedgesummit'
    },
    {
        event: 'Inter-Academy International Workshop On Future Communications and 6G',
        location: 'Technology and Innovation Centre University of Strathclyde, Glasgow, Scotland',
        title: 'Industry Influencers Forum - Emerging Opportunities in AI, Networking, THz, Advanced Computation and Vehicles for Greater Industry Engagement and International Collaboration',
        date: 'June 24-25, 2024',
        link: 'https://fws.eee.strath.ac.uk/'
    },
    {
        event: 'Digital Twin Consortium Member Meeting',
        location: 'Las Vegas, NV',
        title: 'Dynamic Twin Control Framework for Edge',
        date: 'June 11-13, 2024',
        link: 'https://www.digitaltwinconsortium.org/events/q2-member-meeting-2024/'
    },
    {
        event: 'Storage Networking Industry Association - SNIA, Compute Memory and Storage Summit',
        location: 'Online',
        title: 'Edgenuity - AI/ML In, On, and For the Modern Edge',
        date: 'May 21-22, 2024',
        link: 'https://www.snia.org/cms-summit'

    },
    {
        event: 'IEEE International Conference on Mobility: Operations, Services, and Technologies',
        location: 'Dallas, TX',
        title: 'Future of EV and Connected Autonomous Vehicles',
        date: 'May 1-3, 2024',
        link: 'https://ieeemobility.org/MOST2024/'
    },
    {
        event: 'NIST - National Cybersecurity Center of Excellence',
        location: 'Gaithersburg, MD',
        title: 'Edge Challenges with Data Management and Networking – Infrastructure and Services track; Present and Future of Network Security',
        date: 'Mar 6, 2024',
        link: 'https://www.nist.gov/news-events/events/ndncomm2024#:~:text=The%202024%20Named%20Data%20Networking,and%20calls%20for%20your%20contributions'
    },
    {
        event: 'Dell Technologies',
        location: 'Online',
        title: 'Inferencing at the Edge',
        date: 'Feb 28, 2024',
        link: 'https://infohub.delltechnologies.com/en-US/p/inferencing-at-the-edge/'
    },
    {
        event: 'Precision Convergence Webinar',
        location: 'Online McGill University & CMU',
        title: 'Evolution of the Intelligent Digital Twin',
        date: 'Dec 14, 2023',
        link: 'https://www.mcgill.ca/desautels/mcche/events/webinar-series/precision-convergence-webinar-series'
    },
    {
        event: 'IEEE / ACM Symposium on Edge Compute',
        location: 'Wilmington, DE',
        title: 'Edgenuity: Technical Challenges and Opportunities for Modern Edge Computation',
        date: 'Dec 6, 2023',
        link: 'https://acm-ieee-sec.org/2023/'
    },
    {
        event: 'Digital Twin Consortium',
        location: 'Austin, TX',
        title: 'Advanced Model Predictive Control Using AI and Digital Twin for Distributed System Platforms',
        date: 'Dec 5, 2023',
        link: 'https://www.digitaltwinconsortium.org/events/q4-member-meeting-2023/'
    },
    {
        event: 'GE Global Research – Edge Symposium',
        location: 'Niskayuna, NY',
        title: 'How AI/ML is Used to Build the Modern Software Defined Edge Operating Platform',
        date: 'Sep 19, 2023',
        link: 'https://www.ge.com/research/newsroom/inventing-future-latest-advances-edge-5g-controls-cybersecurity-ai-and-robotics'
    },
    {
        event: 'AI Hardware and Edge AI Summit',
        location: 'Santa Clara, CA',
        title: 'Edge Inference @ Scale, Harder than it Looks',
        date: 'Sep 14, 2023',
        link: 'https://aihwedgesummit.com/ai-hardware-edge-ai-summit-2023/ai-hardware-edge-ai-summit-2023-agenda'
    },
    {
        event: 'Dell Technologies Forum',
        location: 'Tel Aviv',
        title: 'Dell Technology Forum – Dell Edge Strategy & Execution',
        date: 'Sep 12, 2023',
        link: 'https://www.dell.com/en-us/dt/events/forums.htm#/'
    },
    {
        event: 'Texas Digital Government Summit',
        location: 'Austin, TX',
        title: 'Is It Real or Is It AI',
        date: 'Jun 29, 2023',
        link: 'https://dir.texas.gov/events/texas-digital-government-summit-2023'
    },
    {
        event: 'Digital Twin Consortium',
        location: 'Orlando, FL',
        title: 'Modeling Dynamics in Industrial Systems Using Computer Vision with Point Clouds',
        date: 'Jun 20, 2023',
        link: 'https://www.digitaltwinconsortium.org/events/dtc-q2-member-meeting-2024/'
    },
    {
        event: 'Intelligent Traffic Systems',
        location: 'Dallas, TX',
        title: 'Edge in collection and operation of traffic flow',
        date: 'Apr 24, 2023',
        link: 'https://itsa.org/event/its-america-conference-expo-2023-dallas/'
    },
    {
        event: 'Antheneum',
        location: 'Online',
        title: 'Edge Technical Drivers & Challenges - Hyperautomation',
        date: 'Mar 29, 2023',
        link: 'https://www.atheneum.ai/webinars'
    },
    {
        event: 'NIST - NDN Communications Summit',
        location: 'Online',
        title: 'Edge Information Management Demand is Only Growing',
        date: 'Mar 2, 2023',
        link: 'https://www.nist.gov/news-events/events/2023/03/ndncomm-2023'
    },
    {
        event: 'Digital Twin Consortium',
        location: 'Online',
        title: 'Edgenuity – How Will Edge and Digital Twins Intersect',
        date: 'Feb 22, 2023',
        link: 'https://www.digitaltwinconsortium.org/events/the-value-of-digital-twins-from-concept-to-reality/'
    },
    {
        event: 'IOT Solution World Congress',
        location: 'Barcelona, Spain',
        title: 'Vision and Industry Initiatives Driving the Future of Mobility',
        date: 'Jan 31, 2023',
        link: 'https://www.iiconsortium.org/events/iotswc-2023/'
    },
    {
        event: 'Emerson Exchange Summit',
        location: 'Dallas, TX',
        title: 'Edge Impact of Sustainability',
        date: 'Oct 25, 2022',
        link: 'https://www.emerson.com/en-us/automation/events/emerson-exchange/americas'
    },
    {
        event: 'GE Global Research – Edge Symposium',
        location: 'Niskayuna, NY',
        title: 'Edgenuity: Drivers, Innovation, & Technology',
        date: 'Sep 19, 2022',
        link: 'https://www.youtube.com/playlist?list=PL7cXTVV5-YmKKAqTPUHFr3_wucrTMNVkF'
    }
]

export default presentationsArray;