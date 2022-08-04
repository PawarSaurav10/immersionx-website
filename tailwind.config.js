/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // "hero-pattern": "url('../images/ImmersionxShowreel_v02.mp4')",
        "our-service": "url('../images/02_OURSERVICES/Ourservicesbg@2x.jpg')",
        "our-process": "url('../images/03_OURPROCESS/ourprocessBG@2x.jpg')",
        "our-studio": "url('../images/04_STUDIO/Studiobg@2x.png')",
        "our-partners": "url('../images/05_OURPARTNERS/OURPARTNERSBG@2x.png')",
        "our-work": "url('../images/06_OURWORK/OURWORKBG@2x.png')",
        "our-industry":
          "url('../images/07_OURINDUSTRIES/OURINDUSTRIESBG@2x.png')",
        "our-industry-1":
          "url('../images/07_OURINDUSTRIES/OURINDUSTRIESimageBG@2x.png')",
        "contact-us": "url('../images/08_CONTACTUS/CONTACTUSimageBG2x1.png')",
        COLLABORATIVEVRBG:
          "url('../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRBG@2x.png')",
          volumetric:
          "url('../images/09_pages/VOLUSTUDIO/coverimagevolumetric.png')",
        TataCommunicationsBG:
          "url('../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/TataCommunicationsBG@2x.png')",
        AUDIBG: "url('../images/09_pages/AUDI/AUDIBG@2x.png')",
        CAPSULEBG: "url('../images/09_pages/CAPSULE/CAPSULEBG@2x.png')",
        WNSBG: "url('../images/09_pages/WNS/wnsexperiencecentre@2x.png')",
        GROHEBG: "url('../images/09_pages/GROHE/GROHEBG@2x.png')",
        KANAKIABG: "url('../images/09_pages/KANAKIA/KANAKIABG@2x.png')",
        LEGRANDBG: "url('../images/09_pages/LEGRAND/LEGRANDBG@2x.png')",
        SIEMENSBG: "url('../images/09_pages/SIEMENS/SIEMENSBG@2x.png')",
        VRCAVEBG: "url('../images/09_pages/VRCAVE/VRCAVEBG@2x.png')",
      },
      height: {
        79: 315,
        400: 400
      },
      width: {
        79: 315,
        800: 800,
        600:600
      },
      fontSize: {
        xxs: 10,
      },
      screens: {
        desktop: "1440px",
        // => @media (min-width: 1280px) { ... }
      },
      maxWidth: {
        "8xl": "1440px",
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
      },
      content: {
        'link': "url('../images/minus.png')",
      },
      brightness: {
        25: '.25',
        30: '.30',
        40: '.40',
        175: '1.75',
      }
    },
  },
  plugins: [],
};
