import { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'en' | 'am' | 'om';

const translations = {
  en: {
    appName: 'Ethio Bus',
    tagline: 'Your Gateway to Ethiopian Travel',
    language: 'Language',
    english: 'English',
    amharic: 'Amharic',
    oromo: 'Oromo',
    heroTitle: 'Explore Ethiopian Bus Companies',
    heroSubtitle: 'Find the perfect bus service for your journey',
    ethiopianTransitNetwork: 'Ethiopian Transit Network',
    searchFilter: 'Search & Filter',
    narrowBy: 'Narrow by company or destination',
    priceCheckTitle: 'Price check',
    priceCheckSubtitle: 'Choose departure and destination to see fares',
    currencyLabel: 'ETB',
    selectBothCities: 'Select departure and destination to see prices.',
    selectCitiesAndDate: 'Select departure, destination, and date to see prices.',
    noPriceAvailable: 'Price not available',
    routeNotServed: 'Route not served',
    seatsAvailableLabel: 'Seats available',
    nationwide: 'Ethiopia-wide routes',
    safetyFirst: 'Safety First',
    modernFleet: 'Modern Fleet',
    nationwideRoutes: 'Nationwide Routes',
    favorites: 'Favorites',
    showAll: 'Show All',
    searchPlaceholder: 'Search bus companies...',
    allDepartures: 'All Departures',
    allDestinations: 'All Destinations',
    noResults: 'No bus companies found matching your criteria.',
    showing: 'Showing',
    company: 'company',
    companies: 'companies',
    more: 'more',
    back: 'Back',
    backToList: 'Back to List',
    bookNow: 'Book Now',
    about: 'About',
    popularRoutes: 'Popular Routes',
    amenities: 'Amenities & Features',
    contactInfo: 'Contact Information',
    phone: 'Phone',
    locationsServed: 'Locations Served',
    quickFacts: 'Quick Facts',
    routes: 'Routes',
    citiesServed: 'Cities Served',
    features: 'Features',
    viewDetails: 'View Details',
    selectRoute: 'Select Your Route',
    passengerDetails: 'Passenger Details',
    selectSeats: 'Select Seats',
    bookingSummary: 'Booking Summary',
    trip: 'Trip',
    details: 'Details',
    seats: 'Seats',
    payment: 'Payment',
    bookingConfirmed: 'Booking Confirmed!',
    bookingThanks: 'Thank you for your booking. Confirmation details have been sent to your email.',
    redirecting: 'Redirecting to home page...',
    continue: 'Continue',
    selectSeatsButton: 'Select Seats',
    reviewPayment: 'Review Payment',
    confirmBooking: 'Confirm Booking',
    choosePayment: 'Choose Payment Method',
    smsConfirmation: 'SMS Confirmation:',
    smsInstruction: 'Tap “Send SMS” to open your SMS app with the message prefilled.',
    sendSms: 'Send SMS',
    smsSent: 'SMS Sent',
    sending: 'Sending...',
    openSms: 'Open SMS App',
    paymentNote: 'Payment Note:',
    paymentNoteBody: 'This is a demonstration. In a production environment, secure payment processing would be integrated here.',
    addPhoneHint: 'Add phone in Details step',
    ethiopianPride: 'Ethiopian Pride',
    prideBody: 'Book with confidence. Supporting local Ethiopian transportation excellence.',
    premiumFeatures: 'Premium Features',
    footerTagline: 'Smart travel across Ethiopia',
    footerLinks: 'Explore',
    footerContact: 'Contact',
    footerSupport: '24/7 customer support',
    footerRights: 'All rights reserved',
    footerBuilt: 'Built for modern Ethiopian transportation with comfort, safety, and speed.',
    from: 'From',
    to: 'To',
    departureDate: 'Departure Date',
    passengers: 'Number of Passengers',
    firstName: 'First Name',
    lastName: 'Last Name',
    email: 'Email',
    phoneLabel: 'Phone',
    routeLabel: 'Route',
    dateLabel: 'Date',
    passengersLabel: 'Passengers',
    seatsLabel: 'Seats',
    total: 'Total',
    paymentLabel: 'Payment',
    busLabel: 'Bus',
    bookJourney: 'Book your journey in style',
    tripDetailsError: 'Please fill your trip details (from, to, date, passengers).',
    passengerDetailsError: 'Please fill your name, email, and phone number.',
    seatError: 'Please select the correct number of seats.',
    departureNotServed: 'Departure city not served by this bus.',
    destinationNotServed: 'Destination not served by this bus.',
    sameCityError: 'Departure and destination cannot be the same.',
    ethiopianExpress: 'Ethiopian Express',
    firstNamePlaceholder: 'First name',
    lastNamePlaceholder: 'Last name',
    emailPlaceholder: 'Email address',
    phoneFormatHint: 'Format: +2519XXXXXXXX or +2517XXXXXXXX',
    ethiopiaLocation: 'Addis Ababa, Ethiopia'
  },
  am: {
    appName: 'ኢትዮ ባስ',
    tagline: 'ወደ ኢትዮጵያ ጉዞዎ መግቢያ',
    language: 'ቋንቋ',
    english: 'English',
    amharic: 'አማርኛ',
    oromo: 'Afaan Oromoo',
    heroTitle: 'የኢትዮጵያ የባስ ኩባንያዎችን ያስሱ',
    heroSubtitle: 'ለጉዞዎ የሚስማማ የባስ አገልግሎት ይፈልጉ',
    ethiopianTransitNetwork: 'የኢትዮጵያ የመጓጓዣ መስመር',
    searchFilter: 'ፍለጋ እና ማጣሪያ',
    narrowBy: 'በኩባንያ ወይም በመድረሻ ይያዙ',
    priceCheckTitle: 'ዋጋ ማረጋገጫ',
    priceCheckSubtitle: 'ዋጋ ለማየት መነሻና መድረሻ ይምረጡ',
    currencyLabel: 'ብር',
    selectBothCities: 'ዋጋ ለማየት መነሻና መድረሻ ይምረጡ።',
    selectCitiesAndDate: 'ዋጋ ለማየት መነሻ፣ መድረሻ እና ቀን ይምረጡ።',
    noPriceAvailable: 'ዋጋ አልተገኘም',
    routeNotServed: 'ይህ መንገድ አይገናኝም',
    seatsAvailableLabel: 'የቀሩ መቀመጫዎች',
    nationwide: 'አገር አቀፍ መስመሮች',
    safetyFirst: 'ደህንነት በመጀመሪያ',
    modernFleet: 'ዘመናዊ መኪናዎች',
    nationwideRoutes: 'አገር አቀፍ መስመሮች',
    favorites: 'የተወደዱ',
    showAll: 'ሁሉንም አሳይ',
    searchPlaceholder: 'የባስ ኩባንያ ይፈልጉ...',
    allDepartures: 'ሁሉም መነሻዎች',
    allDestinations: 'ሁሉም መድረሻዎች',
    noResults: 'ተመሳሳይ መስፈርቶች የሚሟሉ ኩባንያዎች አልተገኙም።',
    showing: 'በመታየት ላይ',
    company: 'ኩባንያ',
    companies: 'ኩባንያዎች',
    more: 'ተጨማሪ',
    back: 'ተመለስ',
    backToList: 'ወደ ዝርዝር ተመለስ',
    bookNow: 'አሁን ያስያዙ',
    about: 'ስለ',
    popularRoutes: 'ታዋቂ መስመሮች',
    amenities: 'አገልግሎቶች እና ባህሪዎች',
    contactInfo: 'የግንኙነት መረጃ',
    phone: 'ስልክ',
    locationsServed: 'የሚሰሩባቸው ከተሞች',
    quickFacts: 'ፈጣን መረጃ',
    routes: 'መስመሮች',
    citiesServed: 'የሚያገለግሉ ከተሞች',
    features: 'ባህሪዎች',
    viewDetails: 'ዝርዝር አሳይ',
    selectRoute: 'መንገድ ይምረጡ',
    passengerDetails: 'የተሳፋሪ መረጃ',
    selectSeats: 'ቦታ ይምረጡ',
    bookingSummary: 'የቦታ ማስያዣ ማጠቃለያ',
    trip: 'ጉዞ',
    details: 'ዝርዝር',
    seats: 'መቀመጫዎች',
    payment: 'ክፍያ',
    bookingConfirmed: 'ማስያዣው ተረጋግጧል!',
    bookingThanks: 'ስለማስያዣዎ እናመሰግናለን። ዝርዝሮቹ በኢሜል ተልከዋል።',
    redirecting: 'ወደ መነሻ ገጽ እየተመለሰ ነው...',
    continue: 'ቀጥል',
    selectSeatsButton: 'ቦታ ይምረጡ',
    reviewPayment: 'ክፍያ ይመልከቱ',
    confirmBooking: 'ማስያዣን ያረጋግጡ',
    choosePayment: 'የክፍያ ዘዴ ይምረጡ',
    smsConfirmation: 'SMS ማረጋገጫ:',
    smsInstruction: '“SMS ላክ” በማጫን የSMS መተግበሪያዎትን ከተሞላ መልዕክት ጋር ይክፈቱ።',
    sendSms: 'SMS ላክ',
    smsSent: 'SMS ተልኳል',
    sending: 'በመላክ ላይ...',
    openSms: 'የSMS መተግበሪያ ክፈት',
    paymentNote: 'የክፍያ ማስታወሻ:',
    paymentNoteBody: 'ይህ ሙከራ ነው። በእውነተኛ ሁኔታ የተጠበቀ የክፍያ ሂደት ይካተታል።',
    addPhoneHint: 'በዝርዝር ደረጃ ስልክ ያክሉ',
    ethiopianPride: 'የኢትዮጵያ ትውልድ ክብር',
    prideBody: 'በእምነት ያስያዙ። የአገር ውስጥ ትራንስፖርትን ይደግፋል።',
    premiumFeatures: 'የልዩ ባህሪዎች',
    footerTagline: 'በኢትዮጵያ ላይ ዘመናዊ ጉዞ',
    footerLinks: 'ያስሱ',
    footerContact: 'እኛን ያግኙ',
    footerSupport: '24/7 የደንበኛ እገዛ',
    footerRights: 'መብቶች ሁሉ የተጠበቁ ናቸው',
    footerBuilt: 'ለዘመናዊ የኢትዮጵያ መጓጓዣ በማረጋገጥ ተገንብቷል።',
    from: 'ከ',
    to: 'ወደ',
    departureDate: 'የመነሻ ቀን',
    passengers: 'የተሳፋሪ ብዛት',
    firstName: 'ስም',
    lastName: 'የአባት ስም',
    email: 'ኢሜል',
    phoneLabel: 'ስልክ',
    routeLabel: 'መንገድ',
    dateLabel: 'ቀን',
    passengersLabel: 'ተሳፋሪዎች',
    seatsLabel: 'መቀመጫዎች',
    total: 'ድምር',
    paymentLabel: 'ክፍያ',
    busLabel: 'ባስ',
    bookJourney: 'ጉዞዎን በቅኔ ያስያዙ',
    tripDetailsError: 'እባክዎ የጉዞ ዝርዝሮችን (ከ, ወደ, ቀን, ተሳፋሪዎች) ይሙሉ።',
    passengerDetailsError: 'እባክዎ ስም, ኢሜል እና ስልክ ቁጥር ይሙሉ።',
    seatError: 'እባክዎ የተሳፋሪዎችን ብዛት በትክክል ይምረጡ።',
    departureNotServed: 'ይህ ባስ የመነሻ ከተማውን አያገለግልም።',
    destinationNotServed: 'ይህ ባስ መድረሻውን አያገለግልም።',
    sameCityError: 'መነሻ እና መድረሻ አንድ መሆን አይችሉም።',
    ethiopianExpress: 'የኢትዮጵያ ኤክስፕረስ',
    firstNamePlaceholder: 'ስም',
    lastNamePlaceholder: 'የአባት ስም',
    emailPlaceholder: 'የኢሜል አድራሻ',
    phoneFormatHint: 'ቅርጸት: +2519XXXXXXXX ወይም +2517XXXXXXXX',
    ethiopiaLocation: 'አዲስ አበባ፣ ኢትዮጵያ'
  },
  om: {
    appName: 'Ethio Bus',
    tagline: 'Gara Imala Itiyoophiyaa Keessan',
    language: 'Afaan',
    english: 'English',
    amharic: 'Amharic',
    oromo: 'Afaan Oromoo',
    heroTitle: 'Kompaniilee Basii Itiyoophiyaa Daawwadhaa',
    heroSubtitle: 'Tajaajila basii imala keessaniif mijataa barbaadaa',
    ethiopianTransitNetwork: 'Hidhaa Geejjibaa Itiyoophiyaa',
    searchFilter: 'Barbaadi & Filadhu',
    narrowBy: 'Kompanii ykn bakka itti geessuu irratti filadhaa',
    priceCheckTitle: 'Gatii mirkaneessuu',
    priceCheckSubtitle: 'Gatii ilaaluu uchun kaumsaa fi gahumsaa filadhu',
    currencyLabel: 'ETB',
    selectBothCities: 'Gatii arguuf kaumsaa fi gahumsaa filadhu.',
    selectCitiesAndDate: 'Gatii arguuf kaumsaa, gahumsaa fi guyyaa filadhu.',
    noPriceAvailable: 'Gatiin hin jiru',
    routeNotServed: 'Daandiin hin tajaajilamu',
    seatsAvailableLabel: 'Teessoon jiru',
    nationwide: 'Daandii Itiyoophiyaa guutuu',
    safetyFirst: 'Nageenya Dursa',
    modernFleet: 'Konkolaataa Haaraa',
    nationwideRoutes: 'Daandii Biyya Guutuu',
    favorites: 'Filatamoo',
    showAll: 'Hunda Agarsiisi',
    searchPlaceholder: 'Kompanii basii barbaadi...',
    allDepartures: 'Kaumsawwan Hunda',
    allDestinations: 'Gahumsawwan Hunda',
    noResults: 'Kompanii basii ulaagaawwan kanaaf hin argamne.',
    showing: 'Agarsiisaa',
    company: 'kompanii',
    companies: 'kompaniilee',
    more: 'dabalataa',
    back: 'Deebi’i',
    backToList: 'Gara Tarree Deebi’i',
    bookNow: 'Amma Qabadhu',
    about: 'Waa’ee',
    popularRoutes: 'Daandii Beekamoo',
    amenities: 'Tajaajiloota & Amaloota',
    contactInfo: 'Odeeffannoo Quunnamtii',
    phone: 'Bilbila',
    locationsServed: 'Bakkeewwan Tajaajilaman',
    quickFacts: 'Odeeffannoo Ariifachiisaa',
    routes: 'Daandii',
    citiesServed: 'Magaalota Tajaajilaman',
    features: 'Amaloota',
    viewDetails: 'Bal’ina Ilaali',
    selectRoute: 'Daandii Filadhu',
    passengerDetails: 'Odeeffannoo Imaltootaa',
    selectSeats: 'Teessoo Filadhu',
    bookingSummary: 'Gabaasa Qabannaa',
    trip: 'Imala',
    details: 'Bal’ina',
    seats: 'Teessoo',
    payment: 'Kaffaltii',
    bookingConfirmed: 'Qabannaan Mirkanaa’e!',
    bookingThanks: 'Galatoomaa. Odeeffannoon mirkaneessaa email irratti ergameera.',
    redirecting: 'Gara fuula jalqabaa deebi’aa jira...',
    continue: 'Itti Fufi',
    selectSeatsButton: 'Teessoo Filadhu',
    reviewPayment: 'Kaffaltii Ilaali',
    confirmBooking: 'Qabannaa Mirkaneessi',
    choosePayment: 'Mala Kaffaltii Filadhu',
    smsConfirmation: 'Mirkaneessa SMS:',
    smsInstruction: '“SMS Ergi” tuqiitii SMS app keessatti ergaa guutamee banu.',
    sendSms: 'SMS Ergi',
    smsSent: 'SMS Ergame',
    sending: 'Ergaa jira...',
    openSms: 'SMS App Bani',
    paymentNote: 'Hubachiisa Kaffaltii:',
    paymentNoteBody: 'Kun fakkeenya qofa. Hojii keessatti kaffaltiin nageenya qabu ni ida’ama.',
    addPhoneHint: 'Lakkoofsa bilbila isaanii bal’ina keessatti dabali',
    ethiopianPride: 'Faayidaa Itiyoophiyaa',
    prideBody: 'Amantaa irratti qabaa. Tajaajila geejjiba biyya keessaa deeggera.',
    premiumFeatures: 'Amaloota Addaa',
    footerTagline: 'Imala ammayyaa Itiyoophiyaa keessatti',
    footerLinks: 'Daawwadhaa',
    footerContact: 'Quunnamaa',
    footerSupport: 'Deeggarsa maamila 24/7',
    footerRights: 'Mirgi hundi eeggamaa',
    footerBuilt: 'Geejjiba ammayyaa Itiyoophiyaa keessatti nageenya, qusannaa fi saffisaaf ijaaramé.',
    from: 'Irraa',
    to: 'Gara',
    departureDate: 'Guyyaa Ka’umsaa',
    passengers: 'Lakkoofsa Imaltootaa',
    firstName: 'Maqaa',
    lastName: 'Maqaa Abbaa',
    email: 'Email',
    phoneLabel: 'Bilbila',
    routeLabel: 'Daandii',
    dateLabel: 'Guyyaa',
    passengersLabel: 'Imaltoota',
    seatsLabel: 'Teessoo',
    total: 'Waliigala',
    paymentLabel: 'Kaffaltii',
    busLabel: 'Basi',
    bookJourney: 'Imala keessan haala bareedaan qabaa',
    tripDetailsError: 'Mee odeeffannoo imalaa (irraa, gara, guyyaa, imaltoota) guutaa.',
    passengerDetailsError: 'Mee maqaa, email fi lakkoofsa bilbila guutaa.',
    seatError: 'Mee lakkoofsa teessoo sirriitti filadhaa.',
    departureNotServed: 'Basi kun magaalaa kaumsaa hin tajaajilu.',
    destinationNotServed: 'Basi kun bakka gahumsaa hin tajaajilu.',
    sameCityError: 'Ka’umsi fi gahumsi wal fakkaachuun hin danda’u.',
    ethiopianExpress: 'Itiyoophiyaa Ekispirees',
    firstNamePlaceholder: 'Maqaa',
    lastNamePlaceholder: 'Maqaa Abbaa',
    emailPlaceholder: 'Iddoo email',
    phoneFormatHint: 'Akkaataa: +2519XXXXXXXX ykn +2517XXXXXXXX',
    ethiopiaLocation: 'Finfinnee, Itiyoophiyaa'
  }
} as const;

const oromoCityMap: Record<string, string> = {
  'Addis Ababa': 'Finfinnee',
  'Addis Ababa (Merkato)': 'Finfinnee (Merkato)',
  'Bahir Dar': 'Bahir Dar',
  'Gondar': 'Gondar',
  'Mekelle': 'Maqale',
  'Hawassa': 'Hawaasa',
  'Moyale': 'Moyale',
  'Dire Dawa': 'Dirree Dawa',
  'Jimma': 'Jimmaa',
  'Arba Minch': 'Arba Minch',
  'Dessie': 'Dassee',
  'Adama': 'Adaamaa',
  'Metema': 'Metemma',
  'Khartoum (Sudan)': 'Kartuum (Sudaan)',
  'Nairobi (Kenya)': 'Naayiroobii (Keeniyaa)',
  'Djibouti': 'Jibuutii',
  'Nekemte': 'Naqamtee',
  'Ambo': 'Amboo',
  'Wolkite': 'Wolkitte',
  'Hosanna': 'Hosaana',
  'Harar': 'Harar',
  'Awash': 'Awaash',
  'Shashemene': 'Shashamanee',
  'Bale Robe': 'Baalee Robe',
  'Asella': 'Asallaa',
  'Lalibela': 'Lalibela',
  'Woldia': 'Woldia',
  'Axum': 'Aksum',
  'Merkato': 'Merkato'
};

const oromoFeatureMap: Record<string, string> = {
  'Wi-Fi': 'Wi-Fi',
  'Air Conditioning': 'Qabbana Qilleensaa',
  'Reclining Seats': "Teessoo deebi'aa",
  'Charging Ports': 'Iddoo chaarjii',
  'Onboard Entertainment': 'Bashannana keessaa',
  'Refreshments': 'Nyaataa fi dhugaatii',
  'Comfortable Seats': 'Teessoo mijataa',
  'Luggage Storage': 'Iddoo baaxii',
  'Professional Drivers': 'Konkolaachisummaa ogeessa',
  'Regular Maintenance': 'Suphaa yeroo yeroon',
  'Long-Distance Comfort': 'Mijaawina imala fagoo',
  'Cross-Border Service': 'Tajaajila daangaa cehu',
  'Experienced Drivers': 'Konkolaachisummaa muuxannoo',
  'Safety Equipment': 'Qal\'aa nageenyaa',
  'Rest Stops': 'Dhaabbii boqonnaa',
  'Luxury Seating': 'Teessoo luxii',
  'Entertainment System': 'Sirna bashannanaa',
  'VIP Service': 'Tajaajila VIP',
  'Onboard Refreshments': 'Nyaataa fi dhugaatii keessaa',
  'Extra Legroom': 'Lafa miila dabalataa',
  'Frequent Departures': 'Ka\'umsa yeroo baay\'ee',
  'Affordable Rates': 'Gatii madaalawaa',
  'Central Terminal Location': 'Bakka tarminaala giddugaleessa',
  'Wide Route Coverage': 'Daandii bal\'aa',
  'Modern Fleet': 'Fleet ammayyaa',
  'Safety Features': 'Amaloota nageenyaa',
  'Regular Service': 'Tajaajila yeroo yeroon',
  'Complimentary Breakfast': 'Buna ganamaa bilisaan',
  'Tour Packages': 'Paakeejii daawwannaa',
  'Friendly Staff': 'Hojjettoota gaarii',
  'Regional Expertise': 'Ogummaa naannoo',
  'Local Knowledge': 'Beekumsa naannoo',
  'Regular Schedules': 'Sagantaa yeroo yeroon',
  'Community Focus': 'Xiyyeeffannoo hawaasa',
  'Cultural Tours': 'Daawwannaa aadaa',
  'Premium Comfort': 'Mijaawina premium',
  'Educational Guides': 'Qajeelfama barnootaa',
  'Photography Stops': 'Dhaabbii suuraa',
  'Local Cuisine': 'Nyaata naannoo'
};

const oromoRouteMap: Record<string, string> = {
  'Historical Circuit Tour': 'Daawwannaa seenaa'
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  translateCity: (city: string) => string;
  translateFeature: (feature: string) => string;
  translateRoute: (route: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language | null;
    if (saved) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const value = useMemo<LanguageContextValue>(() => {
    const t = (key: keyof typeof translations.en) => {
      return translations[language][key] ?? translations.en[key];
    };

    const translateCity = (city: string) => {
      if (language !== 'om') {
        return city;
      }
      return oromoCityMap[city] ?? city;
    };

    const translateFeature = (feature: string) => {
      if (language !== 'om') {
        return feature;
      }
      return oromoFeatureMap[feature] ?? feature;
    };

    const translateRoute = (route: string) => {
      if (language !== 'om') {
        return route;
      }

      if (oromoRouteMap[route]) {
        return oromoRouteMap[route];
      }

      return route
        .split(' - ')
        .map(segment => translateCity(segment.trim()))
        .join(' - ');
    };

    return { language, setLanguage, t, translateCity, translateFeature, translateRoute };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
