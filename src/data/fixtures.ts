export default {
  author: "Selby Baidjnath",
  hero: {
    subtitle: "Software Engineer at VSH Tech.",
    description: "Building reliable and scalable systems by day. Leveraging technology to launch fully featured products by night.",
    cta: "Browse Products",
  },
  products: {
    featured: [
      {
        name: "DoubleText",
        medium: "React · GraphQL · Golang",
        summary: "The #1 Facebook chat analyzer.",
        copy: [
          "See millions of messages at a glance, without data leaving your computer."
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Discover",
            url: "https://doubletext.me/"
          }
        },
        images: [
          "/doubletext/0.jpg",
          "/doubletext/1.jpg",
          "/doubletext/2.jpg",
          "/doubletext/3.jpg",
          "/doubletext/4.jpg"
        ]
      },
      {
        name: "ClimbList",
        medium: "React · Next.js",
        summary: "Construction is now in progress.",
        copy: [
          "Compare and track grades between gyms around the country.",
        ],
        links: {
          color: "#363636",
          primary: {
            name: "Learn more",
            url: "https://climblist.com/"
          }
        },
        images: [
          "/climblist/0.jpg",
          "/climblist/1.jpg",
        ]
      }
    ],
    // Only supports 0-3 at the moment
    minor: [
      {
        name: "Volunteer Portal",
        description: "Find and track volunteer opportunities.",
        link: {
          name: "Github",
          url: "https://github.com/zendesk/volunteer_portal"
        }
      },
      {
        name: "Grove's Life",
        description: "Created in 72 hours for the Unity GameJam.",
        link: {
          name: "Download",
          url: "https://samzx.itch.io/final-slash-vr"
        }
      },
      {
        name: "Crimson Discord Bot",
        description: "Adminstrative Discord bot.",
        link: {
          name: "Invite",
          url: "https://mphwatch.samxie.net/demo"
        }
      }
    ]
  },
  logoSection: {
    title: "As hired by",
    // Only supports 0-3 at the moment
    logos: [
      {
        src: "/logos/zendesk.svg",
        url: "http://itpartner.nl/",
        alt: "IT Partner BV"
      },
      {
        src: "/logos/unimelb.svg",
        url: "https://www.vsh-tech.com//",
        alt: "VSH Tech BV"
      },
      {
        src: "/logos/cashapp.svg",
        url: "https://apptastic.sr/",
        alt: "Apptastic"
      }
  ]
  },
  footer: {
    tagline: "Selby Baidjnath — Paramaribo, Suriname",
    links: [
      {
        name: "Github",
        url: "https://github.com/ultimaterex",
        fa: "fab fa-github"
      },
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/in/selbybaidjnath/",
        fa: "fab fa-linkedin"
      },
      {
        name: "Email",
        url: "mailto:contact@serubii.com",
        fa: "fa fa-envelope"
      },
    ]
  }
}