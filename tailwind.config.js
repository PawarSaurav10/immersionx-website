/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('../images/01_screensaver/bg@2x.png')",
        "our-service": "url('../images/02_OURSERVICES/Ourservicesbg@2x.png')",
        "our-process": "url('../images/03_OURPROCESS/ourprocessBG@2x.png')",
        studio: "url('../images/04_STUDIO/Studiobg@2x.png')",
        "our-partners": "url('../images/05_OURPARTNERS/OURPARTNERSBG@2x.png')",
        "our-work": "url('../images/06_OURWORK/OURWORKBG@2x.png')",
        "our-industry":
          "url('../images/07_OURINDUSTRIES/OURINDUSTRIESBG@2x.png')",
        "our-industry-1":
          "url('../images/07_OURINDUSTRIES/OURINDUSTRIESimageBG@2x.png')",
        "contact-us": "url('../images/08_CONTACTUS/CONTACTUSimageBG@2x.png')",
        "COLLABORATIVEVRBG":
          "url('../images/02_OURSERVICES/pages/COLLABORATIVEVR/COLLABORATIVEVRBG@2x.png')",
        "TataCommunicationsBG":
          "url('../images/06_OURWORK/pages/TataCommunicationsExperienceCentre/TataCommunicationsBG@2x.png')",
      },
      height: {
        79: 315,
      },
      fontSize: {
        xxs: 10,
      },
    },
  },
  plugins: [],
};
