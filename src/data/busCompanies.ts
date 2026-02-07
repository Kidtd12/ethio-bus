import { BusCompany } from '../types/Bus';
import yegna1 from '../asset/yegna1.jpg';
import selam from '../asset/selam.jpg';
import abay from '../asset/abay.jpg';
import habessa from '../asset/habessa.jpg';
import etho from '../asset/etho.jpg';
import odaa from '../asset/odaa.jpg';
import awash from '../asset/awash.webp';
import birhan from '../asset/birhan.png';
import absnya from '../asset/absnya.jpg';
import zemen from '../asset/zemen.jpg';

export const busCompanies: BusCompany[] = [
  {
    id: 'zemen-bus',
    name: 'Zemen Bus',
    shortDescription: 'Premium intercity buses with modern amenities and comfortable seating.',
    shortDescriptionAm: 'ዘመናዊ አገልግሎቶችና ምቹ መቀመጫዎች ያላቸው ፕሪሚየም ከተሞች-መካከል ባሶች።',
    shortDescriptionOm: 'Baasiwwan imala magaalaa gara magaalaa ta’an tajaajila ammayyaa fi teessoo mijataa qabu.',
    fullDescription: 'Zemen Bus is one of Ethiopia\'s most modern bus operators, offering premium intercity travel with state-of-the-art amenities. Founded with the vision of revolutionizing Ethiopian public transport, Zemen Bus provides passengers with comfortable reclining seats, onboard Wi-Fi, air conditioning, and charging ports. Their fleet consists of modern coaches that ensure a smooth and pleasant journey across Ethiopia.',
    fullDescriptionAm: 'ዘመን ባስ በኢትዮጵያ በጣም ዘመናዊ የባስ አስተዳዳሪዎች መካከል አንዱ ሲሆን ዘመናዊ አገልግሎቶች ያሉበት ፕሪሚየም ከተሞች-መካከል ጉዞ ይቀርባል። የኢትዮጵያ የህዝብ ትራንስፖርትን ለመቀየር ተመርኮዝ ተመስርቶ ሲሆን ተሳፋሪዎችን ምቹ የሚመለስ መቀመጫ፣ በመኪና ውስጥ የኢንተርኔት አገልግሎት፣ አየር ማቀዝቀዣ እና የመክፈያ ቁልፍ መያዣዎች ይሰጣሉ። መኪናዎቹ ዘመናዊ ኮች ሲሆኑ በኢትዮጵያ ዙሪያ ምቹ እና ዘላቂ ጉዞ ያረጋግጣሉ።',
    fullDescriptionOm: 'Zemen Bus keessaa kaan keessaa tajaajiltoota basii ammayyaa Itiyoophiyaa ti. Imala magaalaa gara magaalaa premium tajaajila ammayyaa waliin kenna. Kaayyoo geejjiba uummataa haaromsuu irratti hundaa’uun, teessoo jilba deebisu, Wi-Fi keessaa, qabbana qilleensaa fi iddoo chaarjii ni kenna. Baasiwwan isaanii ammayyaa ta’uun Itiyoophiyaa guutuu keessatti imala si’ataa fi mijataa taasisu.',
    phone: '+251 11 661 5050',
    locations: ['Addis Ababa', 'Bahir Dar', 'Gondar', 'Mekelle', 'Hawassa', 'Moyale', 'Dire Dawa'],
    features: ['Wi-Fi', 'Air Conditioning', 'Reclining Seats', 'Charging Ports', 'Onboard Entertainment', 'Refreshments'],
    image: zemen,
    routes: ['Addis Ababa - Bahir Dar', 'Addis Ababa - Gondar', 'Addis Ababa - Mekelle', 'Addis Ababa - Moyale'],
    fares: [
      { from: 'Addis Ababa', to: 'Bahir Dar', price: 1200, seatsAvailable: 14 },
      { from: 'Addis Ababa', to: 'Gondar', price: 1600, seatsAvailable: 8 },
      { from: 'Addis Ababa', to: 'Mekelle', price: 2000, seatsAvailable: 6 },
      { from: 'Addis Ababa', to: 'Moyale', price: 2200, seatsAvailable: 4 },
      { from: 'Addis Ababa', to: 'Hawassa', price: 700, seatsAvailable: 18 },
      { from: 'Addis Ababa', to: 'Dire Dawa', price: 1300, seatsAvailable: 10 }
    ]
  },
  {
    id: 'selam-bus',
    name: 'Selam Bus Line',
    shortDescription: 'One of Ethiopia\'s largest intercity networks serving regional capitals.',
    shortDescriptionAm: 'የኢትዮጵያ ትልቅ ከተሞች-መካከል አውታረ መንገድ ሲሆን ዋና ክልሎችን ይገናኛል።',
    shortDescriptionOm: 'Hidha basii magaalaa gara magaalaa bal’aan kaapitaala naannoo tajaajila.',
    fullDescription: 'Established in 1996, Selam Bus Line has grown to become one of Ethiopia\'s most extensive bus networks. With daily departures to major cities and regional capitals, Selam Bus Line connects communities across the country. Known for their reliability and extensive route coverage, they serve thousands of passengers daily with their modern fleet of comfortable buses.',
    fullDescriptionAm: 'በ1996 የተመሰረተው ሰላም ባስ ላይን በጊዜ ሂደት ከኢትዮጵያ ትልቁ የባስ አውታር መካከል አንዱ ሆኗል። ወደ ትልቅ ከተሞች እና ዋና ዋና ክልል ከተሞች በየቀኑ መነሻ ስርዓት በመኖሩ ማህበረሰቦችን በአገር አቀፍ ይገናኛል። ተስፋ የሚሰጥ እና ሰፊ የመንገድ ሽፋን ባለው ከተሻሻለ ባስ መኪና ጋር በየቀኑ በሺዎች የሚቆጠሩ ተሳፋሪዎችን ይገልጻል።',
    fullDescriptionOm: 'Selam Bus Line bara 1996 dhaabbatee booda, hidha basii bal’inaan Itiyoophiyaa keessatti guddateera. Guyyaa guyyaan gara magaalaa gurguddoo fi kaapitaala naannoo deemuu irratti, hawaasa biyyattii wal qunnamsiisa. Amanamummaa fi daandii bal’aa tajaajilu keessatti beekamaa ta’uun, baasiwwan mijataa ta’an irratti imaltoota kumoota hedduu tajaajila.',
    phone: '+251 11 553 3344',
    locations: ['Addis Ababa', 'Mekelle', 'Bahir Dar', 'Dire Dawa', 'Jimma', 'Arba Minch', 'Dessie', 'Adama'],
    features: ['Air Conditioning', 'Comfortable Seats', 'Luggage Storage', 'Professional Drivers', 'Regular Maintenance'],
    image: selam,
    routes: ['Addis Ababa - Mekelle', 'Addis Ababa - Bahir Dar', 'Addis Ababa - Dire Dawa', 'Addis Ababa - Jimma'],
    fares: [
      { from: 'Addis Ababa', to: 'Mekelle', price: 1800, seatsAvailable: 9 },
      { from: 'Addis Ababa', to: 'Bahir Dar', price: 1100, seatsAvailable: 16 },
      { from: 'Addis Ababa', to: 'Dire Dawa', price: 1200, seatsAvailable: 11 },
      { from: 'Addis Ababa', to: 'Jimma', price: 800, seatsAvailable: 20 },
      { from: 'Addis Ababa', to: 'Adama', price: 300, seatsAvailable: 24 },
      { from: 'Addis Ababa', to: 'Arba Minch', price: 1500, seatsAvailable: 7 }
    ]
  },
  {
    id: 'abay-bus',
    name: 'Abay Bus',
    shortDescription: 'Long-distance services including international routes to Sudan.',
    shortDescriptionAm: 'ረጅም ርቀት አገልግሎት ከሱዳን ጨምሮ የውጭ መንገዶችን ያካትታል።',
    shortDescriptionOm: 'Tajaajila fagoo; daandii biyya alaa Sudaan dabalatee.',
    fullDescription: 'Abay Bus specializes in long-distance travel, offering reliable services to both domestic and international destinations. Most notably, they operate routes to Khartoum, Sudan, making them a crucial link for cross-border travel in the Horn of Africa. Their experienced drivers and well-maintained buses ensure safe passage across challenging terrains.',
    fullDescriptionAm: 'አባይ ባስ በረጅም ርቀት ጉዞ ላይ ልዩ ባለሙያ ሲሆን በሀገር ውስጥም በውጭም መድረሻዎች ታማኝ አገልግሎት ይሰጣል። በተለይ ወደ ካርቱም (ሱዳን) መንገድ በማካሄድ በሆርን አፍሪካ መስመር ላይ አስፈላጊ አገናኝ ሆኗል። ተሞክሮ ያላቸው አሽከርካሪዎች እና በትክክል የተጠበቁ ባሶች ከባድ መሬት ላይ ደህንነት ያረጋግጣሉ።',
    fullDescriptionOm: 'Abay Bus imala fagoo irratti adda ta’e; biyya keessaa fi alaa keessatti tajaajila amanamaa kenna. Daandii gara Khartoum, Sudaan tajaajiluun, imala daangaa cehuuf hidha murteessaa ta’e. Konkolaachisummaa muuxannoo qabu fi baasiwwan sirnaan eeggaman isaanii, daandii ulfaataa irratti nageenya mirkaneessu.',
    phone: '+251 11 442 7788',
    locations: ['Addis Ababa', 'Gondar', 'Bahir Dar', 'Metema', 'Khartoum (Sudan)'],
    features: ['Long-Distance Comfort', 'Cross-Border Service', 'Experienced Drivers', 'Safety Equipment', 'Rest Stops'],
    image: abay,
    routes: ['Addis Ababa - Gondar', 'Gondar - Metema - Khartoum', 'Addis Ababa - Bahir Dar'],
    fares: [
      { from: 'Addis Ababa', to: 'Gondar', price: 1400, seatsAvailable: 12 },
      { from: 'Addis Ababa', to: 'Bahir Dar', price: 1000, seatsAvailable: 15 },
      { from: 'Gondar', to: 'Metema', price: 900, seatsAvailable: 9 },
      { from: 'Gondar', to: 'Khartoum (Sudan)', price: 4500, seatsAvailable: 5 }
    ]
  },
  {
    id: 'habesha-bus',
    name: 'Habesha Bus',
    shortDescription: 'Reliable long-distance operator with daily trips to major cities.',
    shortDescriptionAm: 'ወደ ትልቅ ከተሞች በየቀኑ የሚሄድ ታማኝ የረጅም ርቀት አገልግሎት።',
    shortDescriptionOm: 'Tajaajila fagoo amanamaa; guyyaa guyyaan gara magaalaa gurguddoo deema.',
    fullDescription: 'Habesha Bus has built a reputation for reliability and punctuality. Operating daily trips to major Ethiopian cities, they provide comfortable and affordable travel options for thousands of passengers. Their commitment to customer service and safety has made them a popular choice among frequent travelers.',
    fullDescriptionAm: 'ሀበሻ ባስ በታማኝነት እና በትክክለኛ ሰዓት መጓጓዣ ትምክህት አገኘ። ወደ ትልቅ የኢትዮጵያ ከተሞች በየቀኑ ጉዞ በማካሄድ ለሺዎች ተሳፋሪዎች ምቹ እና ተመጣጣኝ የጉዞ አማራጮችን ይሰጣል። ወደ ደንበኛ አገልግሎት እና ደህንነት ያለው ቁርጠኝነት በብዙ ተደጋጋሚ ተሳፋሪዎች መካከል የተወደደ አድርጎታል።',
    fullDescriptionOm: 'Habesha Bus amanamummaa fi yeroo irratti ga’uu keessatti maqaa gaarii qaba. Guyyaa guyyaan gara magaalaa gurguddoo Itiyoophiyaa deemuun, imaltoota kumootaaf imala mijataa fi gatii madaalawaa kenna. Tajaajila maamila fi nageenya irratti kutannoo isaanii, imaltoota yeroo hedduu imalan keessatti jaalatama taasiseera.',
    phone: '+251 11 663 2211',
    locations: ['Addis Ababa', 'Mekelle', 'Hawassa', 'Gondar', 'Bahir Dar', 'Dessie', 'Adama'],
    features: ['Daily Departures', 'Comfortable Seating', 'Air Conditioning', 'Professional Staff', 'Affordable Prices'],
    image: habessa,
    routes: ['Addis Ababa - Mekelle', 'Addis Ababa - Hawassa', 'Addis Ababa - Gondar', 'Addis Ababa - Dessie'],
    fares: [
      { from: 'Addis Ababa', to: 'Mekelle', price: 1750, seatsAvailable: 10 },
      { from: 'Addis Ababa', to: 'Hawassa', price: 650, seatsAvailable: 21 },
      { from: 'Addis Ababa', to: 'Gondar', price: 1500, seatsAvailable: 8 },
      { from: 'Addis Ababa', to: 'Dessie', price: 900, seatsAvailable: 14 },
      { from: 'Addis Ababa', to: 'Bahir Dar', price: 1100, seatsAvailable: 13 }
    ]
  },
  {
    id: 'ethio-bus',
    name: 'Ethio Bus',
    shortDescription: 'Luxury long-distance buses with premium amenities and modern features.',
    shortDescriptionAm: 'ፕሪሚየም አገልግሎቶችና ዘመናዊ ባህሪያት ያላቸው ልዩ የረጅም ርቀት ባሶች።',
    shortDescriptionOm: 'Baasiwwan luxi imala fagoo; tajaajila premium fi amaloota ammayyaa qabu.',
    fullDescription: 'Ethio Bus represents the pinnacle of luxury travel in Ethiopia. Their premium fleet features the latest amenities including Wi-Fi connectivity, personal entertainment screens, extra legroom, and plush reclining seats. Catering to business travelers and those seeking premium comfort, Ethio Bus also operates select international routes, connecting Ethiopia to neighboring countries.',
    fullDescriptionAm: 'ኢትዮ ባስ በኢትዮጵያ የፍልፍል ጉዞ ከፍተኛ ደረጃን ይወክላል። ፕሪሚየም መኪናዎቹ የWi‑Fi ግንኙነት፣ የግል መዝናኛ ስክሪኖች፣ ተጨማሪ የእግር ቦታ እና ምቹ የሚመለስ መቀመጫዎችን ያካትታሉ። ለንግድ ተጓዦች እና ልዩ ምቾት ለሚፈልጉ ተሳፋሪዎች ሲያገለግል በተለይ የተመረጡ የውጭ መንገዶችንም በማስኬድ ኢትዮጵያን ከጎረቤት ሀገሮች ጋር ያገናኛል።',
    fullDescriptionOm: 'Ethio Bus imala luxi Itiyoophiyaa keessatti sadarkaa ol’aanaa bakka bu’a. Baasiwwan premium isaanii Wi-Fi, shaashii bashannanaa dhuunfaa, lafa miila dabalataa fi teessoo jilba deebisu qabu. Imaltoota hojii fi kanneen mijaawina premium barbaadan tajaajiluun, daandii biyya alaa filatamoo tajaajiluun Itiyoophiyaa biyyoota ollaatti wal qunnamsiisa.',
    phone: '+251 11 667 9900',
    locations: ['Addis Ababa', 'Nairobi (Kenya)', 'Djibouti', 'Mekelle', 'Dire Dawa', 'Hawassa'],
    features: ['Luxury Seating', 'Wi-Fi', 'Entertainment System', 'VIP Service', 'Onboard Refreshments', 'Extra Legroom'],
    image: etho,
    routes: ['Addis Ababa - Nairobi', 'Addis Ababa - Djibouti', 'Addis Ababa - Mekelle', 'Addis Ababa - Dire Dawa'],
    fares: [
      { from: 'Addis Ababa', to: 'Nairobi (Kenya)', price: 6500, seatsAvailable: 4 },
      { from: 'Addis Ababa', to: 'Djibouti', price: 4200, seatsAvailable: 6 },
      { from: 'Addis Ababa', to: 'Mekelle', price: 2300, seatsAvailable: 7 },
      { from: 'Addis Ababa', to: 'Dire Dawa', price: 1500, seatsAvailable: 9 },
      { from: 'Addis Ababa', to: 'Hawassa', price: 900, seatsAvailable: 12 }
    ]
  },
  {
    id: 'yegna-bus',
    name: 'Yegna Bus',
    shortDescription: 'Major routes from Merkato Terminal to regional cities.',
    shortDescriptionAm: 'ከመርካቶ ተርሚናል ወደ ክልል ከተሞች ዋና መስመሮች።',
    shortDescriptionOm: 'Daandiiwwan gurguddoo Tarminaala Merkato irraa gara magaalaa naannoo.',
    fullDescription: 'Operating primarily from the bustling Merkato Terminal in Addis Ababa, Yegna Bus connects the capital to numerous regional cities across Ethiopia. Known for their competitive pricing and frequent departures, Yegna Bus serves both urban and rural communities, playing a vital role in Ethiopia\'s transportation network.',
    fullDescriptionAm: 'በዋናነት ከአዲስ አበባ ታችኛው የመርካቶ ተርሚናል የሚነሱት የእግና ባስ ዋና ከተማውን ከብዙ ክልል ከተሞች ጋር ያገናኛሉ። በተመጣጣኝ ዋጋ እና በብዛት በሚነሱ ጉዞዎች የሚታወቁ ሲሆን ከከተማ እና ከገጠር ማህበረሰቦች ጋር በማገናኘት በኢትዮጵያ የመጓጓዣ አውታር ውስጥ አስፈላጊ ሚና ያላቸው ናቸው።',
    fullDescriptionOm: 'Yegna Bus Tarminaala Merkato, Finfinnee irraa ka’umsa godhee, mootummaa guddaa gara magaalaa naannoo baay’ee waliin wal qunnamsiisa. Gatiin madaalawaa fi ka’umsawwan hedduun beekamaa ta’uun, magaalaa fi baadiyyaa tajaajiluun hidha geejjibaa Itiyoophiyaa keessatti hojii murteessaa qaba.',
    phone: '+251 11 558 1122',
    locations: ['Addis Ababa (Merkato)', 'Jimma', 'Nekemte', 'Ambo', 'Wolkite', 'Hosanna'],
    features: ['Frequent Departures', 'Affordable Rates', 'Central Terminal Location', 'Wide Route Coverage'],
    image: yegna1,

    routes: ['Merkato - Jimma', 'Merkato - Nekemte', 'Merkato - Ambo', 'Merkato - Wolkite'],
    fares: [
      { from: 'Addis Ababa', to: 'Jimma', price: 700, seatsAvailable: 19 },
      { from: 'Addis Ababa', to: 'Nekemte', price: 600, seatsAvailable: 17 },
      { from: 'Addis Ababa', to: 'Ambo', price: 250, seatsAvailable: 28 },
      { from: 'Addis Ababa', to: 'Wolkite', price: 550, seatsAvailable: 16 },
      { from: 'Addis Ababa', to: 'Hosanna', price: 800, seatsAvailable: 12 }
    ]
  },
  {
    id: 'odaa-transport',
    name: 'ODAA Integrated Transport',
    shortDescription: 'Cross-country modern buses connecting major Ethiopian cities.',
    shortDescriptionAm: 'በኢትዮጵያ ዙሪያ ዋና ከተሞችን የሚያገናኙ ዘመናዊ ባሶች።',
    shortDescriptionOm: 'Baasiwwan ammayyaa biyya keessa gurguddoo wal qunnamsiisan.',
    fullDescription: 'ODAA Integrated Transport operates a modern fleet of buses that traverse the length and breadth of Ethiopia. With a focus on integrated transportation solutions, ODAA combines comfort, reliability, and affordability. Their network spans major cities and growing urban centers, making them a versatile choice for travelers.',
    fullDescriptionAm: 'ODAA ኢንተግሬትድ ትራንስፖርት በኢትዮጵያ በርዝመትና በስፋት የሚጓዙ ዘመናዊ መኪናዎችን ያስተዳድራል። በተቀናጀ የመጓጓዣ መፍትሄ ላይ ትኩረት በማድረግ ምቾት፣ ታማኝነት እና ተመጣጣኝ ዋጋ ያጣራል። አውታሩ ዋና ከተሞችን እና የሚያድጉ ከተማ ማዕከላትን በማራመድ ለተጓዦች ተስማሚ ምርጫ ያደርገዋል።',
    fullDescriptionOm: 'ODAA Integrated Transport baasiwwan ammayyaa Itiyoophiyaa guutuu keessa deeman hojjeta. Furmaata geejjibaa walitti qabaa irratti xiyyeeffachuun, mijaawina, amanamummaa fi gatii madaalawaa walitti makaa. Hidha isaanii magaalaa gurguddoo fi magaalaa guddachaa jiran irratti bal’inaan diriiree, imaltootaaf filannoo bal’aa ta’aniiru.',
    phone: '+251 11 646 5577',
    locations: ['Addis Ababa', 'Bahir Dar', 'Hawassa', 'Jimma', 'Adama', 'Arba Minch', 'Gondar'],
    features: ['Modern Fleet', 'Air Conditioning', 'Safety Features', 'Comfortable Seats', 'Regular Service'],
    image: odaa,
    routes: ['Addis Ababa - Bahir Dar', 'Addis Ababa - Hawassa', 'Addis Ababa - Jimma', 'Addis Ababa - Arba Minch'],
    fares: [
      { from: 'Addis Ababa', to: 'Bahir Dar', price: 1150, seatsAvailable: 13 },
      { from: 'Addis Ababa', to: 'Hawassa', price: 750, seatsAvailable: 15 },
      { from: 'Addis Ababa', to: 'Jimma', price: 820, seatsAvailable: 18 },
      { from: 'Addis Ababa', to: 'Arba Minch', price: 1550, seatsAvailable: 6 },
      { from: 'Addis Ababa', to: 'Gondar', price: 1600, seatsAvailable: 9 }
    ]
  },
  {
    id: 'awash-bus',
    name: 'Awash Bus',
    shortDescription: 'Comfortable buses with Wi-Fi, breakfast service, and tour packages.',
    shortDescriptionAm: 'Wi‑Fi፣ የቁርስ አገልግሎት እና የጉብኝት ፓኬጆች ያላቸው ምቹ ባሶች።',
    shortDescriptionOm: 'Baasiwwan mijataa; Wi-Fi, tajaajila buna ganamaa fi paakeejii daawwannaa qabu.',
    fullDescription: 'Awash Bus stands out for its passenger-centric approach, offering not just transportation but a complete travel experience. Passengers enjoy complimentary breakfast on morning departures, Wi-Fi connectivity throughout the journey, and the option to book tour packages to popular destinations. Their friendly staff and attention to detail make every journey memorable.',
    fullDescriptionAm: 'አዋሽ ባስ በተሳፋሪን ማዕከል ያደረገ አቀራረብ ይታወቃል፤ መጓጓዣ ብቻ ሳይሆን ሙሉ የጉዞ ልምድ ይሰጣል። ተሳፋሪዎች በጡዋት መነሻ የነፃ ቁርስ አገልግሎት፣ በጉዞ ሙሉ በሙሉ የWi‑Fi ግንኙነት እና ወደ ተወዳጅ መድረሻዎች የጉብኝት ፓኬጅ ማስያዣ አማራጭ ይጠቀማሉ። የሰራተኞቻቸው ልብስ እና ተግባራዊ ትኩረት እያንዳንዱን ጉዞ የሚታሰብ ያደርገዋል።',
    fullDescriptionOm: 'Awash Bus tajaajila imaltoota irratti xiyyeeffateen adda ta’a; geejjiba qofa osoo hin taane muuxannoo guutuu imalaa kenna. Imaltoonni ka’umsaa ganamaatti buna bilaashaa, imala guutuu keessatti Wi-Fi, akkasumas paakeejii daawwannaa bakka beekkamaa filachuuf carraa argatu. Hojjettoonni isaanii obbolummaa fi xiyyeeffannoo hojii irratti qaban, imala hundaa yaadannoo taasisu.',
    phone: '+251 11 661 3366',
    locations: ['Addis Ababa', 'Dire Dawa', 'Harar', 'Awash', 'Dessie', 'Mekelle'],
    features: ['Wi-Fi', 'Complimentary Breakfast', 'Tour Packages', 'Air Conditioning', 'Friendly Staff', 'Charging Ports'],
    image: awash,
    routes: ['Addis Ababa - Dire Dawa', 'Addis Ababa - Harar', 'Addis Ababa - Awash', 'Addis Ababa - Dessie'],
    fares: [
      { from: 'Addis Ababa', to: 'Dire Dawa', price: 1400, seatsAvailable: 10 },
      { from: 'Addis Ababa', to: 'Harar', price: 1550, seatsAvailable: 8 },
      { from: 'Addis Ababa', to: 'Awash', price: 500, seatsAvailable: 22 },
      { from: 'Addis Ababa', to: 'Dessie', price: 900, seatsAvailable: 14 },
      { from: 'Addis Ababa', to: 'Mekelle', price: 1900, seatsAvailable: 7 }
    ]
  },
  {
    id: 'gadaa-bus',
    name: 'Gadaa Bus',
    shortDescription: 'Regional operator connecting Oromia region cities with reliable service.',
    shortDescriptionAm: 'የኦሮሚያ ክልል ከተሞችን የሚያገናኝ ታማኝ ክልላዊ አገልግሎት።',
    shortDescriptionOm: 'Tajaajila naannoo Oromiyaa wal qunnamsiisu amanamaa.',
    fullDescription: 'Gadaa Bus specializes in connecting cities within the Oromia region, Ethiopia\'s largest regional state. With deep knowledge of local routes and communities, Gadaa Bus provides reliable and culturally-aware service. Their fleet serves both major urban centers and smaller towns, ensuring connectivity throughout the region.',
    fullDescriptionAm: 'ጋዳ ባስ የኢትዮጵያ ትልቁ ክልል የሆነውን ኦሮሚያ ውስጥ ከተሞችን በማገናኘት ልዩ ባለሙያ ነው። የአካባቢ መንገዶችን እና ማህበረሰቦችን በጥልቅ እውቀት በመረዳት ታማኝ እና ባህላዊ ስሜት ያለው አገልግሎት ይሰጣል። መኪና ቡድኑ ትልቅ ከተማ ማዕከላትንም ትንሽ ከተሞችንም ይረዳል፣ በክልሉ ሁሉ ግንኙነት እንዲኖር ያረጋግጣል።',
    fullDescriptionOm: 'Gadaa Bus naannoo Oromiyaa keessatti magaalaa wal qunnamsiisuu irratti adda ta’e. Daandiiwwan naannoo fi hawaasa irratti hubannoo gadi fageenya qabuun, tajaajila amanamaa fi aadaa beekuudhaan kenna. Baasiwwan isaanii magaalaa gurguddoo fi magaalaa xixiqqoo tajaajiluun, wal qunnamsiisaa naannichaa guutummaa isaa keessatti mirkaneessu.',
    phone: '+251 11 663 8844',
    locations: ['Addis Ababa', 'Adama', 'Jimma', 'Nekemte', 'Shashemene', 'Bale Robe', 'Asella'],
    features: ['Regional Expertise', 'Comfortable Seats', 'Local Knowledge', 'Affordable Rates', 'Regular Schedules'],
    image: 'https://images.pexels.com/photos/1209999/pexels-photo-1209999.jpeg?auto=compress&cs=tinysrgb&w=1200',
    routes: ['Addis Ababa - Adama', 'Addis Ababa - Jimma', 'Addis Ababa - Shashemene', 'Addis Ababa - Nekemte'],
    fares: [
      { from: 'Addis Ababa', to: 'Adama', price: 300, seatsAvailable: 23 },
      { from: 'Addis Ababa', to: 'Jimma', price: 800, seatsAvailable: 17 },
      { from: 'Addis Ababa', to: 'Shashemene', price: 600, seatsAvailable: 19 },
      { from: 'Addis Ababa', to: 'Nekemte', price: 650, seatsAvailable: 16 },
      { from: 'Addis Ababa', to: 'Asella', price: 500, seatsAvailable: 20 }
    ]
  },
  {
    id: 'birhan-bus',
    name: 'Birhan Bus',
    shortDescription: 'Community-focused buses with affordable rates and local connections.',
    shortDescriptionAm: 'በማህበረሰብ የተመሰረቱ ተመጣጣኝ ዋጋ ያላቸው እና አካባቢ ግንኙነት የሚያደርጉ ባሶች።',
    shortDescriptionOm: 'Baasiwwan hawaasa irratti xiyyeeffatan; gatii madaalawaa fi qunnamtii naannoo qabu.',
    fullDescription: 'Birhan Bus serves as a vital transportation link for Ethiopian communities, connecting urban centers with rural towns. Known for their community engagement and affordable fares, Birhan Bus plays an important role in social mobility and economic connectivity across regions. Their experienced drivers navigate various terrains with expertise and care.',
    fullDescriptionAm: 'ብርሃን ባስ ለኢትዮጵያ ማህበረሰቦች አስፈላጊ የመጓጓዣ መስመር ሆኖ ከከተማ ማዕከላትን ከገጠር ከተሞች ጋር ያገናኛል። በማህበረሰብ ግንኙነት እና ተመጣጣኝ ታሪፍ የሚታወቅ ሲሆን በክልሎች ሁሉ ማህበራዊ እና ኢኮኖሚያዊ ግንኙነትን ለማጠናከር አስፈላጊ ሚና ይጫወታል። ተሞክሮ ያላቸው አሽከርካሪዎች የተለያዩ መሬቶችን በብልሃት እና በጥንቃቄ ያስማማሉ።',
    fullDescriptionOm: 'Birhan Bus hawaasa Itiyoophiyaa keessatti hidha geejjibaa murteessaa ta’uun, magaalaa keessaa gara baadiyyaa wal qunnamsiisa. Qunnamtii hawaasaa fi gatii madaalawaa irratti beekamaa ta’uun, walitti dhufeenya hawaasummaa fi dinagdee naannolee keessatti gumaacha guddaa qaba. Konkolaachisaan isaanii muuxannoo qabu, lafa gara garaa irratti of eeggannoo fi ogummaa waliin hojjatu.',
    phone: '+251 11 642 5500',
    locations: ['Addis Ababa', 'Bahir Dar', 'Gondar', 'Lalibela', 'Dessie', 'Woldia', 'Mekelle'],
    features: ['Affordable Rates', 'Community Focus', 'Experienced Drivers', 'Luggage Space', 'Regular Maintenance'],
    image: birhan,
    routes: ['Addis Ababa - Bahir Dar', 'Addis Ababa - Lalibela', 'Addis Ababa - Dessie', 'Addis Ababa - Woldia'],
    fares: [
      { from: 'Addis Ababa', to: 'Bahir Dar', price: 1050, seatsAvailable: 15 },
      { from: 'Addis Ababa', to: 'Lalibela', price: 1800, seatsAvailable: 7 },
      { from: 'Addis Ababa', to: 'Dessie', price: 850, seatsAvailable: 13 },
      { from: 'Addis Ababa', to: 'Woldia', price: 950, seatsAvailable: 11 },
      { from: 'Addis Ababa', to: 'Mekelle', price: 1900, seatsAvailable: 6 },
      { from: 'Addis Ababa', to: 'Gondar', price: 1500, seatsAvailable: 9 }
    ]
  },
 
  {
    id: 'abyssinia-express',
    name: 'Abyssinia Express',
    shortDescription: 'Express services with premium comfort and cultural experiences.',
    shortDescriptionAm: 'ፕሪሚየም ምቾት እና ባህላዊ ልምድ የሚያቀርቡ ኤክስፕረስ አገልግሎቶች።',
    shortDescriptionOm: 'Tajaajila ekspireesii; mijaawina premium fi muuxannoo aadaa kenna.',
    fullDescription: 'Abyssinia Express blends transportation with cultural tourism, offering passengers not just a ride but an experience of Ethiopia\'s rich heritage. Their buses feature educational guides, cultural stops, and premium comfort amenities. Ideal for both domestic travelers and international tourists seeking authentic Ethiopian experiences.',
    fullDescriptionAm: 'አቢሲኒያ ኤክስፕረስ መጓጓዣን ከባህላዊ ቱሪዝም ጋር ያስቀላቀላል፤ ተሳፋሪዎችን የመጓጓዣ ብቻ ሳይሆን የኢትዮጵያ ባህላዊ ታሪክና ቅርስ ልምድ ይሰጣል። ባሶቹ የትምህርት መመሪያ እና ባህላዊ መቆሚያዎችን እንዲሁም ፕሪሚየም ምቾት ያላቸው አገልግሎቶችን ያካትታሉ። ለአገር ውስጥ ተጓዦችም ለዓለም አቀፍ ቱሪስቶችም የእውነተኛ የኢትዮጵያ ልምድ የሚፈልጉ በጣም ተመቻች ነው።',
    fullDescriptionOm: 'Abyssinia Express geejjiba fi daawwannaa aadaa walitti makuun, imaltootaaf imala qofa osoo hin taane muuxannoo seenaa fi aadaa Itiyoophiyaa kenna. Baasiwwan isaanii qajeelfama barnootaa, dhaabbii aadaa fi tajaajila premium mijaawoo qabu. Imaltoota biyya keessaa fi tuuristoota biyya alaa muuxannoo dhugaa barbaadan irratti baay’ee mijata.',
    phone: '+251 11 644 2255',
    locations: ['Addis Ababa', 'Gondar', 'Axum', 'Mekelle', 'Harar', 'Dire Dawa', 'Adama'],
    features: ['Cultural Tours', 'Premium Comfort', 'Educational Guides', 'Photography Stops', 'Local Cuisine'],
    image: absnya,
    routes: ['Addis Ababa - Gondar - Axum', 'Addis Ababa - Harar', 'Addis Ababa - Mekelle', 'Historical Circuit Tour'],
    fares: [
      { from: 'Addis Ababa', to: 'Gondar', price: 1650, seatsAvailable: 10 },
      { from: 'Addis Ababa', to: 'Axum', price: 2400, seatsAvailable: 5 },
      { from: 'Addis Ababa', to: 'Mekelle', price: 2100, seatsAvailable: 7 },
      { from: 'Addis Ababa', to: 'Harar', price: 1600, seatsAvailable: 8 },
      { from: 'Addis Ababa', to: 'Dire Dawa', price: 1500, seatsAvailable: 9 }
    ]
  },
  {
    id: 'hijra-bus',
    name: 'Hijra Bus',
    shortDescription: 'Reliable intercity service with spacious seating and safety first.',
    shortDescriptionAm: 'ሰፊ መቀመጫ እና ደህንነት በመጀመሪያ የሚያስተዳድር ታማኝ ከተሞች-መካከል አገልግሎት።',
    shortDescriptionOm: 'Tajaajila magaalaa gara magaalaa amanamaa; teessoo bal’aa fi nageenya dursee.',
    fullDescription: 'Hijra Bus stands for reliability and safety in Ethiopian long-distance travel. With spacious seating arrangements, professional drivers trained in defensive driving, and regular safety audits, Hijra Bus prioritizes passenger safety and comfort. Operating modern vehicles on well-maintained routes, they serve the discerning traveler.',
    fullDescriptionAm: 'ሂጅራ ባስ በኢትዮጵያ ረጅም ርቀት ጉዞ ውስጥ ታማኝነትና ደህንነትን ይወክላል። ሰፊ መቀመጫ አደራረጃ፣ በመከላከያ መንቀሳቀስ ላይ የተማሩ ሙያዊ አሽከርካሪዎች እና መደበኛ የደህንነት ምርመራዎች በመኖሩ ተሳፋሪዎች ደህንነትን እና ምቾትን በቅድሚያ ያደርጋል። በተጠበቁ መንገዶች ላይ ዘመናዊ መኪናዎችን በማስኬድ ጥሩ ጉዞ የሚፈልጉ ተጓዦችን ይሰራል።',
    fullDescriptionOm: 'Hijra Bus imala fagoo Itiyoophiyaa keessatti amanamummaa fi nageenya irratti beekama. Teessoo bal’aan, konkolaachisoota ogummaa qabaatan, fi qorannoo nageenya yeroo yeroon gaggeeffamuun, nageenya imaltoota dursee ilaala. Baasiwwan ammayyaa daandii sirnaan eeggaman irratti hojjachuun, imaltoota filatamoo tajaajila.',
    phone: '+251 11 645 1122',
    locations: ['Addis Ababa', 'Bahir Dar', 'Gondar', 'Mekelle', 'Dessie', 'Kombolcha', 'Dire Dawa'],
    features: ['Safety First', 'Spacious Seating', 'Professional Drivers', 'Regular Maintenance', 'Emergency Services'],
    image: 'https://images.pexels.com/photos/1126993/pexels-photo-1126993.jpeg?auto=compress&cs=tinysrgb&w=1200',
    routes: ['Addis Ababa - Bahir Dar', 'Addis Ababa - Mekelle', 'Addis Ababa - Dire Dawa', 'Addis Ababa - Dessie'],
    fares: [
      { from: 'Addis Ababa', to: 'Bahir Dar', price: 1200, seatsAvailable: 12 },
      { from: 'Addis Ababa', to: 'Mekelle', price: 2000, seatsAvailable: 6 },
      { from: 'Addis Ababa', to: 'Dire Dawa', price: 1400, seatsAvailable: 11 },
      { from: 'Addis Ababa', to: 'Dessie', price: 950, seatsAvailable: 13 },
      { from: 'Addis Ababa', to: 'Gondar', price: 1600, seatsAvailable: 8 }
    ]
  },
  {
    id: 'addis-express',
    name: 'Addis Express',
    shortDescription: 'Fast, reliable hub-and-spoke network from Addis Ababa.',
    shortDescriptionAm: 'ፈጣን እና ታማኝ ከአዲስ አበባ የሚጀምር የማዕከል-መንገድ አውታር።',
    shortDescriptionOm: 'Saffisaa fi amanamaa; hidha bu’uuraa Finfinnee irraa.',
    fullDescription: 'Addis Express operates a hub-and-spoke system centered in Addis Ababa, ensuring efficient connections to major cities. Known for punctuality and frequent departures, they serve business travelers, tourists, and regular commuters with modern buses and professional service. Multiple daily trips to main destinations ensure you get there when you need to.',
    fullDescriptionAm: 'አዲስ ኤክስፕረስ ከአዲስ አበባ የሚጀምር የማዕከል-መንገድ ስርዓት ያስተዳድራል፣ ይህም ወደ ዋና ከተሞች ቀልል እና ቀላል ግንኙነት ያረጋግጣል። በትክክለኛ ሰዓት መድረስ እና በብዛት መነሻ ስርዓት የሚታወቅ ሲሆን ንግድ ተጓዦች፣ ቱሪስቶች እና መደበኛ ተጓዦችን በዘመናዊ ባሶችና ባለሙያ አገልግሎት ይደግፋል። በየቀኑ ብዙ ጉዞዎች መኖሩ ወደ ዋና መድረሻዎች በሚፈልጉበት ጊዜ እንዲደርሱ ያረጋግጣል።',
    fullDescriptionOm: 'Addis Express sirna hidha bu’uuraa Finfinnee irratti hundaa’e hojjeta; kunis gara magaalaa gurguddoo qunnamtii saffisaa fi milkaa’inaa ni mirkaneessa. Yeroo irratti ga’uun fi ka’umsawwan baay’een beekamaa ta’uun, baasiwwan ammayyaa fi tajaajila ogeessaatiin imaltoota hojii, tuuristoota fi imaltoota guyyaa guyyaa tajaajila. Guyyaa keessatti imaltoota hedduun bakka barbaaddanitti yeroo barbaaddanitti geessu.',
    phone: '+251 11 646 9988',
    locations: ['Addis Ababa', 'Adama', 'Hawassa', 'Jimma', 'Dire Dawa', 'Mojo', 'Dukem'],
    features: ['Punctual Service', 'Frequent Departures', 'Hub Network', 'Modern Buses', 'Professional Staff'],
    image: 'https://images.pexels.com/photos/2747050/pexels-photo-2747050.jpeg?auto=compress&cs=tinysrgb&w=1200',
    routes: ['Addis Ababa - Adama', 'Addis Ababa - Hawassa', 'Addis Ababa - Jimma', 'Addis Ababa - Dire Dawa'],
    fares: [
      { from: 'Addis Ababa', to: 'Adama', price: 250, seatsAvailable: 25 },
      { from: 'Addis Ababa', to: 'Hawassa', price: 650, seatsAvailable: 18 },
      { from: 'Addis Ababa', to: 'Jimma', price: 780, seatsAvailable: 20 },
      { from: 'Addis Ababa', to: 'Dire Dawa', price: 1250, seatsAvailable: 12 },
      { from: 'Addis Ababa', to: 'Mojo', price: 200, seatsAvailable: 28 },
      { from: 'Addis Ababa', to: 'Dukem', price: 180, seatsAvailable: 30 }
    ]
  }
];
