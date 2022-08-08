/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../images/01_screensaver/screensaverBG.jpg')",
        "our-service": "url('../images/02_OURSERVICES/Ourservicesbg@2x.jpg')",
        "our-process": "url('../images/03_OURPROCESS/ourprocessBG@2x.jpg')",
        "our-studio": "url('../images/04_STUDIO/Studiobg@2x.png')",
        // "our-partners": "url('../images/05_OURPARTNERS/OURPARTNERSBG@2x.png')",
        "our-partners": "url('../images/05_OURPARTNERS/PARTNERSBG.png')",
        // "our-partners": "url('../images/05_OURPARTNERS/PARTNERSBGmin.png')",
        "our-work": "url('../images/WORK/WORKBG.png')",
        "our-industry":
          "url('../images/07_OURINDUSTRIES/OURINDUSTRIESBG@2x.png')",
        footer: "url('../images/Copyright/Rectangle657.png')",
        "our-industry-1":
          "url('../images/07_OURINDUSTRIES/OURINDUSTRIESimageBG@2x.png')",
        "contact-us": "url('../images/08_CONTACTUS/CONTACTUSimageBG2x1.png')",
        COLLABORATIVEVRBG:
          "url('../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRBG@2x.png')",
        volumetric:
          "url('../images/09_pages/VOLUSTUDIO/VOLUMETRICSTUDIOBG.jpg')",
        TataCommunicationsBG:
          "url('../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/TataCommunicationsBG.jpg')",
        // AUDIBG: "url('../images/09_pages/AUDI/AUDIBG@2x.png')",
        AUDIBG: "url('../images/09_pages/AUDI/AUDIBG.jpg')",
        CAPSULEBG: "url('../images/09_pages/CAPSULE/HOLOGRAPHICCAPSULEBG.jpg')",
        WNSBG: "url('../images/09_pages/WNS/wnsexperiencecentreBG.jpg')",
        GROHEBG: "url('../images/09_pages/GROHE/GROHEBG@2x.png')",
        KANAKIABG: "url('../images/09_pages/KANAKIA/KANAKIABG@2x.jpg')",
        LEGRANDBG: "url('../images/09_pages/LEGRAND/LEGRANDBG@2x.jpg')",
        SIEMENSBG: "url('../images/09_pages/SIEMENS/SIEMENSBG@2x.jpg')",
        VRCAVEBG: "url('../images/09_pages/VRCAVE/VIRTUALREALITYCAVEBG.jpg')",
        MULTITACTION: "url('../images/02_OURSERVICES/pages/COLLABORATIVEVR/MULTITACTIONBG.jpg')",
        APPLICATION: "url('../images/10_APPLICATIONs/applicationBG.jpg')",
        ABOUTUS: "url('../images/11_ABOUTUS/aboutusbg.jpg')"
      },
      height: {
        79: 315,
        400: 400,
        473: 473,
        600: 600,
        650: 650,
        500: 500,
        700: 700,
      },
      width: {
        79: 315,
        800: 800,
        600: 600,
        500: 500,
        700: 700,
        1250: 1250,
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
        height: "height",
        width: "width",
      },
      content: {
        link: "url('../images/minus.png')",
      },
      // right:{
      //   "42": "170px"
      // },
      brightness: {
        25: ".25",
        30: ".30",
        40: ".40",
        175: "1.75",
      },
    },
  },
  plugins: [],
};
