import React, { useState } from 'react'
import NavbarMain from '../navbarmain'
import Footer from '../footer'
import { BlogNavbar } from './overviewpages/blognavbar';
import axios from 'axios';




export const Beauty = (props) => {
    const [blogdatas, setBlogDatas] = useState([]);
    const {
        storeid,
        footercopyrighttext,
        categoryListData

      } = props;

     const formData = new FormData();
formData.append("storeid", "2");
formData.append("catid1", "32");

// Define your headers
const headers = {
  'accesskey': 'VilvaKart2023'
};

// Make the POST request using Axios
axios.post("https://earth-api.vilvabusiness.com/api/blog", formData, { headers })
  .then(response => {

    console.log(response.data.data); 
    setBlogDatas(response.data.data[0].short_content); 

  })
  .catch(error => {
    // Handle errors
    console.error('Error:', error);
  });

const blogdata = [
            {
                "id": 1,
                "storeid": 2,
                "title": "What Abdul Kalam Spoke In European Parliament ?",
                "short_content": "<p>Yaadhum Oore Yavarum Kelir, a famous quote said by Kaniyan Pungundranar and used by APJ Abdul Kalam in his speech at European Parliament.</p>",
                "category_id": 1,
                "slug": "abdul-kalam-speech-purananooru-yaadhum-oore-tamil-thirukkural-poem-in-european-parliment",
                "meta_title": "What Abdul Kalam Spoke In European Parliament ?",
                "tags": null,
                "updatedby": null,
                "meta_description": "Yaadhum Oore Yavarum Kelir, a famous quote said by Kaniyan Pungundranar and used by APJ Abdul Kalam in his speech.",
                "meta_keywords": "yaadhum, oore, pungundranar, abdul, kalam, yavarum, kelir, purananooru,",
                "image": "mgs_blog/y/a/yaadhum-oore-yavarum-kelir-pungundranar-globe_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 2,
                "storeid": 2,
                "title": "தமிழில் ஆத்திசூடி வரிகள்",
                "short_content": "<p>பாரதியின் ஆத்திசூடி: மகாகவி பாரதி, 20-ம் நூற்றாண்டின் விடுதலை கவி, அவரது பெரிய படைப்பாக போற்றப்பட்டது புதிய ஆத்திச்சூடி. ஆத்திச்சூடியில் எழுச்சி மிகு வரிகள் பல இடம் பெற்று இருந்தது. அதில் இடம்பெற்ற சில வரிகளை காண்போம்.</p>",
                "category_id": 3,
                "slug": "introduction-of-famous-bharathiyar-tamil-poem",
                "meta_title": "தமிழில் ஆத்திசூடி வரிகள்",
                "tags": "1",
                "updatedby": null,
                "meta_description": "Bharathi, an extraordinary poet of 20th century who is most appreciated for his Literary works on Tamil Freedom Fights against British Indian rule. Acham Thavir is his most rated quote on those days.",
                "meta_keywords": "bharathi, bharathiyar, puratchi kavi, ",
                "image": "mgs_blog/b/h/bharathi-aathichoodi_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 3,
                "storeid": 2,
                "title": "சல்லிக்கட்டு - ஹரப்பா 'டு' அலங்காநல்லூர்  (வழி 'தமிழ்நாடு')",
                "short_content": "<p>என்ற நா.முத்துக்குமாரின் பாடல் வரிகள் தமிழ் பண்பாட்டில் கால்நடைகள் குறித்த முக்கியத்துவத்தை கிராமிய பாணியில் பசுமரத்தில் ஆணியாய் பதிவு செய்துவிட்டது. இந்த கட்டுரை எழுதுவதற்கு முன்னர் இந்த கட்டுரைக்கான தலைப்பிற்கான காரணத்தை கூற ஒரு சிறு கதையோடு ஆரம்பிக்கிறேன்.</p>",
                "category_id": 2,
                "slug": "manjirattu-sallikattu-chennai-youth-marina-protest",
                "meta_title": "சல்லிக்கட்டு - ஹரப்பா 'டு' அலங்காநல்லூர்  (வழி 'தமிழ்நாடு')",
                "tags": null,
                "updatedby": null,
                "meta_description": "Jallikattu, also known as Eru thazhuvuthal the jallikatu where it's coming from - A tradition over 5,000 years old, Jallikattu is a competitive sport Tamil blog",
                "meta_keywords": "jallikattu, manjuirattu, sallikattu,",
                "image": "mgs_blog/b/u/bull_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 4,
                "storeid": 2,
                "title": "தமிழ் மொழியை பற்றி மேலும் அறிவோம்",
                "short_content": "<p>பத்தாயிரம் ஆண்டுகளுக்கு மேல் உபயோகப்படுத்தும் நம் தமிழ் மொழி பல்வேறு காலநிலைகளைத் தாண்டி ஓங்கி உயர்ந்து இருக்கிறது. செந்தமிழ், பைந்தமிழ், சங்கத்தமிழ், நற்றமிழ் என அதன் பண்பைக் கொண்டு பற்பல பெயர்களும் அதிக எழுத்துக்களும் கொண்ட மொழி என்ற பெருமையும் உண்டு.</p>",
                "category_id": 4,
                "slug": "the-more-about-world-oldest-tamil-language",
                "meta_title": "தமிழ் மொழியை பற்றி மேலும் அறிவோம்",
                "tags": null,
                "updatedby": null,
                "meta_description": "Classic Tamil Language whose date of origin is still a mystery with enormous amount of Literary Works by thiruvalluvar, tholkappiyar, bharathi et al during sangam ages.  .",
                "meta_keywords": "tamil, langauage, tamil sangam, blog, tamiltshirts, tholkappiyam, thiruvalluvar",
                "image": "mgs_blog/t/a/tamil-literature-blog_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 5,
                "storeid": 2,
                "title": "Life History of the Great Karmaveerar Kamarajar",
                "short_content": "<p>அன்று பலரது மனத்திலும் ஓடிய கேள்வி வயசாகி கொண்டே போகிறதே ஏன் காமராசர் இன்னும் திருமணம் செய்யவில்லை, நாட்டின் முதல்வருக்கு பெண் தர யாரும் முன்வரவில்லையா என்றே, இங்கிலாந்து ராணி நேரடியாக கேட்டார், சிறிது கூட யோசிக்காமல் இன்றும் என் வீட்டில்(நாட்டில்) பல பேர் திருமண வயதாகியும் கல்யாணம் செய்யாமல் வறுமையில் இருக்க நான் மட்டும் எப்படி மணம் முடிக்க முடியும் என் சமூகத்தில் தங்கைக்கு தான் முதலில் முடிக்கும் வழக்கம் என்றார். நாட்டையே தன் வீடாக நினைக்கும் எண்ணம் இனி யாருக்கும் வராது.</p>",
                "category_id": 6,
                "slug": "life-and-history-of-kamarajar-and-his-achievements-in-tamil",
                "meta_title": "Life History of the Great Karmaveerar Kamarajar",
                "tags": null,
                "updatedby": null,
                "meta_description": "Life history of Perunthalaivar K Kamarajar, Freedom Leader from Tamil Nadu, achievements, sacrifice, struggles & his simplicity in Tamil & English.",
                "meta_keywords": "kamarajar, achievements, lifehistory, kingmaker, perambur, locoworks, Kamarajar In tamil",
                "image": "mgs_blog/k/a/kamarajar-life-history_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 6,
                "storeid": 2,
                "title": "குழைமா நல்லாயிருக்கும் சாப்பிட்டு இருக்கீங்களா?",
                "short_content": "<p>தமிழ் பேச தெரியுமா? உணவில் தொடங்குவோமா!!</p>",
                "category_id": 5,
                "slug": "tea-coffe-noodles-english-to-tamil-meaning",
                "meta_title": "குழைமா நல்லாயிருக்கும் சாப்பிட்டு இருக்கீங்களா?",
                "tags": null,
                "updatedby": null,
                "meta_description": "An introduction to the names of Food items in Tamil Language which we often use in our day to day life for example Tea which is termed as தேனீர்.",
                "meta_keywords": "tamil, language, tea, coffee, noodles, english to tamil ",
                "image": "mgs_blog/t/a/tamil-pesa-kathukanum-kalvettu_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 7,
                "storeid": 2,
                "title": "Benefits of Palm tree | A collection of palm tree",
                "short_content": "<p>In ancient days the tamil letters was written on palm leaves. The palm tree is the identity of the Tamil. Palm tree grew in Malaysia, Eelam, Mauritius Island, South Africa, Tamil Nadu.</p>",
                "category_id": 7,
                "slug": "official-tree-of-tamilnadu-history-benefits-national-palm-tree-types-india-malaysia-srilanka-tamils",
                "meta_title": "Benefits of Palm tree | A collection of palm tree",
                "tags": null,
                "updatedby": null,
                "meta_description": "In ancient days the tamil letters was written on palm leaves. The palm tree is the identity of the Tamil. Palm tree supplies food and food items. They are flowering plants, a family in the monocot order Arecales",
                "meta_keywords": "palm tree, jaggery,palm,toddy,benefits of  palm, national tree of india,palm tree in tamil,history of palm tree,nungu,flowering plant,evergreen leaves,handicraft products",
                "image": "mgs_blog/p/a/palm-tree_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 8,
                "storeid": 2,
                "title": "Aalaporaan Thamizhan Tamil Songs Lyrics",
                "short_content": "<p>2017 - ம் ஆண்டு அனைவருக்கும் போல் வில்வா தமிழ் ஆடைகள் குழுமத்திற்கும் சில ஏற்ற இறக்கங்களுடன் மிக மிக நல்ல வருடமாமே அமைந்தது. நமது ஆரம்பக்கால வடிவமான \"தீதும் நன்றும் பிறர் தர வாரா\" எனும் கூற்று மெய்ப்பிப்பதை கண்ணூடே வில்வா கண்டது, பற்பல நல்ல எண்ணங்களின் வெளிப்பாட்டில் பல அருமையான வாடிக்கையாளர்கள்/நண்பர்கள் கிடைத்தது பெரும் மகிழ்ச்சி, எங்களை போலும் எங்களை விடவும் தமிழ் மொழி ஈடுபாட்டில் உச்சத்தில் இருந்த பலரது தமிழ் ஆர்வத்தை காணும் போது மட்டற்ற மகிழ்ச்சி.</p>",
                "category_id": 6,
                "slug": "aalaporaan-thamizhan-mersal-tamil-song-lyrics",
                "meta_title": "Aalaporaan Thamizhan Tamil Songs Lyrics",
                "tags": null,
                "updatedby": null,
                "meta_description": "Browse super hit Thalabathy Vijay Mersal Tamil Cinema, Aalaporaan Thamizhan Tamil Songs with lyrics.",
                "meta_keywords": "cinema, mersal, tamil songs, aalaporan thamizhan, songs lyrics\r\n",
                "image": "mgs_blog/m/e/mersal-aalaporan-thamizhan-vilva-tamil-songs-lyrics_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 9,
                "storeid": 2,
                "title": "தமிழ் ஓரெழுத்தில் எத்தனை அர்த்தங்கள்",
                "short_content": "<p>தமிழில் 247 எழுத்துக்களில் 42 எழுத்துக்களுக்கும் தனியாக பொருள் உண்டு ! தமிழில் உள்ள மொத்த எழுத்துக்கள் 247, இந்த 247 எழுத்துக்களில் 42 எழுத்துக்கள் ஓரெழுத்து சொல்லாக விளங்குகின்றன அதாவது இந்த 42 எழுத்துக்களுக்கும் தனியாக பொருள் உண்டு</p>",
                "category_id": 1,
                "slug": "tamil-single-letter-has-numerous-meaning-tamil-language",
                "meta_title": "தமிழ் ஓரெழுத்தில் எத்தனை அர்த்தங்கள்",
                "tags": null,
                "updatedby": null,
                "meta_description": "Tamil Language is most unique language with its most significant speciality one word different meanings, only tamil language has the meaning for its letters",
                "meta_keywords": "tamil meaning, single letter tamil meaning, one word different meaning, amudhu tamil, tamil language",
                "image": "mgs_blog/t/a/tamili-eluthukal_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 10,
                "storeid": 2,
                "title": "நாம் அன்றாட உபயோகிக்கும் ஆங்கிலத்திற்கு மாற்றமான தமிழ் சொல்",
                "short_content": "<p>இதற்கு முந்தைய பதிப்பில் நாம் நமது தினசரி உணவு முறையில் பயன்படுத்திய ஆங்கில சொல்லிற்கு இணையான தமிழ் சொல்லை அறிந்தோம். இந்த பதிப்பில் மேலும் ஒரு படிச் சென்று இன்று உலக அளவில் அனைத்து மொழியினராலும் பயன்பாட்டில் இருந்து வரும் அறிவியல் தொழில்நுட்ப செயலிகளாக விளங்கும் WhatsApp, Messenger, Wifi போன்றவற்றிற்கான தனி தமிழ் சொற்கள் 2015-ம் ஆண்டு ஜனவரி 29-ம் தேதியில் மலேசியா நாட்டில் நடைபெற்ற 9-வது தனித் தமிழியக்க மாநாட்டில் நுட்பவியல் கலைச் சொற்கள் தமிழில் வெளியிடப்பட்டது.</p>",
                "category_id": 1,
                "slug": "tamil-words-as-an-alternative-to-english-in-our-daily-life",
                "meta_title": "நாம் அன்றாட உபயோகிக்கும் ஆங்கிலத்திற்கு மாற்றமான தமிழ் சொல்",
                "tags": null,
                "updatedby": null,
                "meta_description": "Tamil Translation for English Words like Whatsapp, Twitter, Facebook which was  published on the 9th Tamil Conference held on 29th January 2015 at Malaysia.",
                "meta_keywords": "tamil words, alternative english words, tamil",
                "image": "mgs_blog/t/a/tamil-meaning-for-whatsapp-twitter_1.png",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 11,
                "storeid": 2,
                "title": "தமிழனானேன்.க-வர்மக்கலை பற்றிய திரைப்படம் ",
                "short_content": "   சமூக பிரச்சனைகளான பெண்கள் அநீதி, சிறு பிள்ளைகள் வன்கொடுமை நம் நாட்டில் ஒரு புற்று நோய் செல் போல நாளுக்கு நாள் வளர்ந்து கொண்டே வருகிறது",
                "category_id": 5,
                "slug": "tamilzhananen-varma-kalai-tamil-movie",
                "meta_title": "தமிழனானேன்.க-வர்மக்கலை பற்றிய திரைப்படம் ",
                "tags": null,
                "updatedby": null,
                "meta_description": "தமிழனின் வர்மக்கலைகள் பற்றி வெளியான முதல் திரைப்படத்தின் சிறு தொகுப்பு Varma Kalai is an ancient art and immense knowledge of martial art Tamil blog",
                "meta_keywords": "Tamil Varma Kalai, Tamil blog, Tamil movie talk about varma kalai",
                "image": "mgs_blog/t/a/tamizhananen_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 12,
                "storeid": 2,
                "title": "வளர் தொழில் இதழில் தமிழ் ஆடைகள் பற்றி வெளியான கட்டுரை",
                "short_content": "<p>இனிக்கும் தமிழில் ஆடைகள் வழங்கும் \"வில்வா தமிழ் ஆடைகள்\" பற்றி தினசரி நாளிதழ், வாரஇதழ், தொழில் தொடர்பான இதழ்களில் எழுதி உள்ளனர், இதனை தவிர ஆன்லைனில்(online) பல இணையதளத்தில் எழுதி வருகின்றனர், அவ்வாறு நமக்கு முதன்முதலில் அங்கீகாரம் அளித்து வளர்தொழில் இதழில் வெளிவந்த செய்திகளை இங்கு காண்போம்.</p>",
                "category_id": 5,
                "slug": "valar-thozhil-business-magazine-article-about-vilva-tshirt",
                "meta_title": "வளர் தொழில் இதழில் தமிழ் ஆடைகள் பற்றி வெளியான கட்டுரை",
                "tags": null,
                "updatedby": null,
                "meta_description": "The released news article talks about vilva and his Made In India Tamil product - vilva who succeeding made in Tamil product",
                "meta_keywords": "vilva tshirt, vilva , vilva articles, vilva news",
                "image": "mgs_blog/v/a/valarthozhil-logo_1.png",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 13,
                "storeid": 2,
                "title": "வில்வா தமிழ் ஆடைகள் பற்றி புதிய தலைமுறை நாளிதழில் வெளிவந்த செய்தி",
                "short_content": "<p>ஆள் பாதி ஆடை பாதி’ என்று ஒரு பழமொழி தமிழில் உள்ளது அதற்கு ஒருவன் அணிந்திருக்கும் ஆடை அவனது தன்மை, தரம், சார்பு போன்றவற்றை அல்லது இயல்பை எடுத்துகாட்டும் என்பது பொருள் ஒருவன் அணிந்து இருக்கும் ஆடையே அவனை அடையாளம் காட்டும்.</p>",
                "category_id": 3,
                "slug": "article-blog-about-tamil-tshirt-in-pudhiya-thalaimurai-news-weekly-magazine",
                "meta_title": "வில்வா தமிழ் ஆடைகள் பற்றி புதிய தலைமுறை நாளிதழில் வெளிவந்த செய்தி",
                "tags": null,
                "updatedby": null,
                "meta_description": "புதிய தலைமுறை வார இதழில் எழுச்சிமிகு தமிழ் | Tamiltshirts.in",
                "meta_keywords": "pudhiya thalaimurai, tshirt, tamili, bharathi, parengum tamil,",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 14,
                "storeid": 2,
                "title": "தமிழ் Yourstory இணையத்தில் வில்வா பற்றிய கட்டுரை",
                "short_content": "டீ-ஷர்ட்கள் வழியாக, தமிழ் மொழியை\r\nஉலகெங்கும் பரப்பும் வில்வா!",
                "category_id": 5,
                "slug": "onlinenews-article-about-vilva-tamil-clothings-tshirt",
                "meta_title": "தமிழ் Yourstory இணையத்தில் வில்வா பற்றிய கட்டுரை",
                "tags": null,
                "updatedby": null,
                "meta_description": "திருக்குறள் நமக்கு வாழ்க்கை நெறிகளை கற்று தருவது போல வெற்றி பெற்றவர்களின் வாழ்க்கை அனுபவங்கள் நமக்கு வெற்றி பாதையை காட்டும்.அப்படி வெற்றி பெற்ற தட்ஷிர்ட்ஸ் பற்றி ஒரு கட்டுரை காணுவோம்.",
                "meta_keywords": "tamil, language, tamil, news, tamil news, online news, online tamil news, tamili, tamizhi",
                "image": "mgs_blog/y/o/your-story-logo_1.png",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 15,
                "storeid": 2,
                "title": "தமிழ் ஆடைகளை பாராட்டிய வாடிக்கையாளர்கள்",
                "short_content": "ஒரு நிறுவனத்தின் வளர்ச்சியை முடிவு செய்யும் அதிகாரம் வடிக்கையாளராகளுக்கே உண்டு. அப்படி வில்வாவின் வளர்ச்சிக்காக தங்கள் கருத்துக்களை கூறிய வாடிக்கையாளர்களின் தொகுப்பை படிக்கலாம் வாருங்கள்.",
                "category_id": 7,
                "slug": "customers-review-and-support-to-our-tamil-tshirt",
                "meta_title": "தமிழ் ஆடைகளை பாராட்டிய வாடிக்கையாளர்கள்",
                "tags": "2,3,4,5,6,7",
                "updatedby": null,
                "meta_description": "Customer Review About Our Tamiltshirts Review about tshirt expericence  our company our brand our tshirt Pride Moment For us ",
                "meta_keywords": "pride tamil tshirts, tamil pesum tshirts, tamil tshirts reviews, customers pride moments",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 16,
                "storeid": 2,
                "title": "Surprising & Unknown facts about Thirukkural in Tamil",
                "short_content": "Thirukural is the most commonly quoted book in the world for the three virtues of life, such as charity, material and pleasure. Caste, language and religion are not included in this book.",
                "category_id": 1,
                "slug": "unknown-and-hidden-facts-about-thirukkural-alias-tirukkural-and-the-poet-thiruvalluvar-in-tamil-and-english",
                "meta_title": "Surprising & Unknown facts about Thirukkural in Tamil",
                "tags": "5,8,9,10",
                "updatedby": null,
                "meta_description": "We have compiled much of the unknown information of Thirukkural written by Thiruvalluvar. We hope that this will bring glory and glory to the world.",
                "meta_keywords": "tamil,thiruvalluvar,tirukkural,thirukkural,jainism,buddhism,christianity,statue,letters,\r\nwords,alias,fossils,speach,health,hinduism,anicham,scriptures,aram,wealth,joy,\r\nrighteousness,educations",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 17,
                "storeid": 2,
                "title": "குழந்தைகள் வளரும் விதம் - அந்தக்காலம் vs இந்தக்காலம்",
                "short_content": "முன்னுரை:\r\n            பண்டையகாலத்தில் இருந்து குழ்ந்தை வளர்ப்பு முறைகளில் எவ்வாறான மாற்றங்கள் நிகழ்ந்துள்ளன என்பவை பற்றி இந்த கட்டுரையில் விரிவாக காணலாம். இன்றைய பிள்ளைகளே நாளைய சமூகம், நமக்கு இருக்கும் முக்கிய பொறுப்புகளில் பிள்ளை வளர்ப்பே முதன்மை என நாம் கொள்ளல் வேண்டும்.",
                "category_id": 1,
                "slug": "the-growth-of-children-past-generation-kids-vs-new-generation",
                "meta_title": "குழந்தைகள் வளரும் விதம் - அந்தக்காலம் vs இந்தக்காலம்",
                "tags": null,
                "updatedby": null,
                "meta_description": "How the child grows in the past to this generation the children growth, knowledge of past to present generation this Tamil blog talks about children's growth",
                "meta_keywords": "the growth of children, the generation of kids, past generation kids",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 18,
                "storeid": 2,
                "title": "Mentors & Inspiring Icons for Vilva Tamiltshirts.com",
                "short_content": "தமிழ் வரலாற்று ஆர்வலர்கள், தமிழ் நேசர்கள் மத்தியில் மிகவும் பிரபலமான மனிதர், தன் வாழ்நாளில் பெரும்பகுதியை தமிழர் வரலாறு எப்படி கடல் வழியே நீண்டு உலகளாவிய அளவில் விரிவடைந்துள்ளது என்று ஆய்வு செய்வதிலே ஈடுபட்டுவந்தவர்.",
                "category_id": 1,
                "slug": "tamil-mentors-who-inspired-for-our-business-vilva-tamil-tshirt",
                "meta_title": "Mentors & Inspiring Icons for Vilva Tamiltshirts.com",
                "tags": null,
                "updatedby": null,
                "meta_description": "Coaches and Influential money managers who upheld and urged and propelled us to become effective in our tamil image shirt business.",
                "meta_keywords": "tamil, business, mentors",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 19,
                "storeid": 2,
                "title": "தமிழுக்கு #30 நாட்கள் - வாரம் #01:",
                "short_content": "தமிழே மொழி, தமிழே உயிர் என நாம் வாய் வார்த்தையாக மட்டுமே கூறாமல் பிற மொழி கலக்காமல் \"வில்வா\" தமிழை பேச எடுத்த ஒரு சிறு முயற்சியே தமிழுக்கு 30 நாட்கள் எனும் முயற்சி. இந்த பக்கத்தில் கடந்த ஒரு வாரமாக நம் பக்கத்தில் பதிந்த காணொளிகளின் தொகுப்பை பார்க்கலாம். ",
                "category_id": 1,
                "slug": "learn-rajaraja-cholan-thanjavur-periya-koil-history-in-tamil",
                "meta_title": "தமிழுக்கு #30 நாட்கள் - வாரம் #01:",
                "tags": null,
                "updatedby": null,
                "meta_description": "The quality 7 days over the scheduled 30days for tamil is given as brief where each day we had discussed about a new topic such as mysteries of Tamil, Thiruvalluvar, Old Script - Tamili, Unique letter aah & zha, Raja raja chola, Thanjavur periya koil. Lot more to come in upcoming weeks.",
                "meta_keywords": "tamil, tamil language, bharathi, thanjavur periya koil history, rajaraja cholan,",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 20,
                "storeid": 2,
                "title": "தமிழ் பிடிக்கும் என்றால் இந்த 5 தளங்களும் நிச்சயம் பிடிக்கும் !",
                "short_content": "தமிழ் மொழியில் பல இணையதளங்களை பார்த்திருப்போம், ஆனால் நல்ல தமிழில் நல்ல தகவல்களை தமிழுக்கு பெருமை சேர்க்கும் விதமான செயலிகளை உள்ளடக்கி தொடர்ச்சியாக மேம்படுத்தப்படும் தளங்களில் முதன்மையான 5 தளங்களை மட்டும் இங்கு பதிவுசெய்துள்ளோம்.",
                "category_id": 1,
                "slug": "interest-useful-websites-for-tamil-lovers",
                "meta_title": "தமிழ் பிடிக்கும் என்றால் இந்த 5 தளங்களும் நிச்சயம் பிடிக்கும் !",
                "tags": null,
                "updatedby": null,
                "meta_description": "Valuable sites in Tamil helps to learn Tamil and to compose and communicate in the language with clear information and comprehension.",
                "meta_keywords": "tamil language, tamil websites, useful",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 21,
                "storeid": 2,
                "title": "Inspiration Story of Tamil Entrepreneurs Part #1",
                "short_content": "    இணையதள புரட்சியை முதன்முதலில் கண்ட நாடு அமெரிக்கா, இதனை .COM புரட்சி என்று சொல்வர். ",
                "category_id": 1,
                "slug": "success-story-about-tamil-people-who-run-the-business-in-ecoomerce",
                "meta_title": "Inspiration Story of Tamil Entrepreneurs Part #1",
                "tags": null,
                "updatedby": null,
                "meta_description": "Emerging tami business websites of 2018 representing the native special products of the state and their unique idea of marketing.",
                "meta_keywords": "tamil, business, websites, ecommerce, vangaannachi, halwakadai, nativespecial",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 22,
                "storeid": 2,
                "title": "மண் பானைகளில் தெரியாத சுவாரஸ்யமான உண்மைகள்",
                "short_content": "மண் பானைகளில் தெரியாத உண்மைகள்.",
                "category_id": 1,
                "slug": "using-water-stored-in-clay-pot-a-brief-study",
                "meta_title": "மண் பானைகளில் தெரியாத சுவாரஸ்யமான உண்மைகள்",
                "tags": null,
                "updatedby": null,
                "meta_description": "This blog explain heath benefits of using clay pot water and ph level of water compared with that of RO water.",
                "meta_keywords": "ph level of water,ph level of water in tamil,ph level of bady,ro water,benefits of ph water,health benefits of using clay water pot",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 23,
                "storeid": 2,
                "title": "Rulers of India 1193BC - 1719BC",
                "short_content": "இந்தியாவை ஆண்ட தலைவர்கள் விபரம்!  - India's rulers",
                "category_id": 1,
                "slug": "india-ruled-by-kings-and-leaders-in-tamil",
                "meta_title": "Rulers of India 1193BC - 1719BC",
                "tags": null,
                "updatedby": null,
                "meta_description": "This blog listed India's ancient kings from current leader names list and their ruled period",
                "meta_keywords": "india ruled by kings,india ruled by kings and prime miniters,india ruled by kings and leaders in tamil,india ruling current prime miniters,narendra modi,india leaders name list,list of rules in india,india history in tamil,india history",
                "image": "mgs_blog/i/n/india-652857_960_720_1.png",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 24,
                "storeid": 2,
                "title": "பழந்தமிழரின் 47 வகையான நீர்நிலைகள்|Types of water bodies in tamil",
                "short_content": "பழந்தமிழரின் 47 வகையான நீர்நிலைகள்:",
                "category_id": 1,
                "slug": "47-types-of-water-bodies-from-the-knowledge-of-ancient-tamils",
                "meta_title": "பழந்தமிழரின் 47 வகையான நீர்நிலைகள்|Types of water bodies in tamil",
                "tags": null,
                "updatedby": null,
                "meta_description": "This blog explains different types of water bodies and their names from the knowledge of ancient tamils.",
                "meta_keywords": "water bodies,water bodies in tamil, water, water types, rivers, ocean, brook, sea, weathering,source of water,rain,",
                "image": "mgs_blog/s/u/surfacetension_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 25,
                "storeid": 2,
                "title": "குறுந்தொகை பாடல் |  Kurunthogai padalgal",
                "short_content": "குறிஞ்சி",
                "category_id": 1,
                "slug": "kurunthogai-padalgal",
                "meta_title": "குறுந்தொகை பாடல் |  Kurunthogai padalgal",
                "tags": null,
                "updatedby": null,
                "meta_description": null,
                "meta_keywords": null,
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 26,
                "storeid": 2,
                "title": "Things to know the level of Mettur Dam",
                "short_content": "மேட்டூர்_அணை- என்று சொன்னாலே சும்மா அதிருதுல்ல...",
                "category_id": 1,
                "slug": "understanding-of-mettur-dam-water-level",
                "meta_title": "Things to know the level of Mettur Dam",
                "tags": null,
                "updatedby": null,
                "meta_description": "This blog explain about Understanding of Mettur Dam Water Level",
                "meta_keywords": "dams,dams in tamilnadu,dam in tamil,dams in tamil,mettur dam,mettur dam in tamil,water level in tami,news in tamilnadu,",
                "image": "mgs_blog/u/n/understanding_of_the_mettur_dam_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 27,
                "storeid": 2,
                "title": "Made in 'தமிழ்நாடு' | The sucessfull story of Tamil Brand",
                "short_content": "நாம் அன்றாடம் பயன்படுத்திவரும் பொருட்களில் எத்தனை Made in India ?",
                "category_id": 1,
                "slug": "tamil-tshirts-a-made-in-tamil-nadu-product-aim-and-success-story-customers-support",
                "meta_title": "Made in 'தமிழ்நாடு' | The sucessfull story of Tamil Brand",
                "tags": null,
                "updatedby": null,
                "meta_description": "Tamil Nadu based Clothing brand made a sounding impact in the business industry and went viral through meme's from several top facebook pages.",
                "meta_keywords": "made,in,tamil,nadu,tamilnadu,facebook,meme,tamilmeme,tamil meme, tamil tshirt,tamil tshirts,",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 28,
                "storeid": 2,
                "title": "Heath & Natural Benefits Of Athimathuram",
                "short_content": "அதிமதுரம்..!",
                "category_id": 1,
                "slug": "heath-benefits-of-athimathuram",
                "meta_title": "Heath & Natural Benefits Of Athimathuram",
                "tags": null,
                "updatedby": null,
                "meta_description": "This blog showing about heath benefits of athimathuram",
                "meta_keywords": "how reduce hair fall,how to stop hair fall,how to get black hair for men,how to get black hair women how to get normal delivery,what happen during  pregnancy,how to reduce cough in tamil,how to reduce how to reduce belly in tamil,how to reduce headpain,how",
                "image": "mgs_blog/b/l/black-liquorice_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 29,
                "storeid": 2,
                "title": "ஸ்ரீவில்லிபுத்தூரை பற்றிய ஓர் தொகுப்பு ",
                "short_content": "ஸ்ரீவில்லிபுத்தூர்  பால்கோவாவுக்கு பிரசித்திப்பெற்றது. இந்த ஊரின் தேரானது திருவாரூர் தேரை அடுத்து தமிழ்நாட்டின்  இரண்டாவது பெரிய தேராக கருதப்படுகிறது.",
                "category_id": 1,
                "slug": "beauty-and-history-of-srivilliputhur-sweet-palkova-kovilpatti-peanut-candy",
                "meta_title": "ஸ்ரீவில்லிபுத்தூரை பற்றிய ஓர் தொகுப்பு ",
                "tags": "11,12",
                "updatedby": null,
                "meta_description": "This blog about srivilliputhur beauty and history. Surprisingly, the temple is the second largest chariot in the state, after the Tiruvarur chariot in Tamil Nadu.",
                "meta_keywords": "palkova, srivilliputhur, tamilnadu, south India temples, sweets, peanut candy ",
                "image": "mgs_blog/w/h/whatsapp_image_2019-08-31_at_4.17.00_pm_1__1.jpeg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 30,
                "storeid": 2,
                "title": "Migration IT Thamizhan Series Episode - 1",
                "short_content": "IT தமிழன் ",
                "category_id": 1,
                "slug": "it-tamilan-struggle-migration-story-from-america-racism",
                "meta_title": "Migration IT Thamizhan Series Episode - 1",
                "tags": null,
                "updatedby": null,
                "meta_description": "ஐ.டி தொழில் செய்பவர்கள் வேறு ஒரு தனிமை உலகத்தில் வாழ்ந்து தான் ஆகா வேண்டும். ஊர், குடும்பம், இன்பம், துன்பம், தூக்கம் என அனைத்தையும் நினைத்த நேரத்தில் ருசித்து பார்க்க முடியாது. பணம் இன்று போகும் நாளை வரும். ஆனால் வாழ்க்கைக்கு பணம் மட்டும் போதாது. இந்த மாடர்ன் வாழ்விலும் அது மட்டும் தான் கிடைக்கிறது.",
                "meta_keywords": "family, IT, life, love, american, life, racism, whitepeople, blackpeople",
                "image": "mgs_blog/f/a/family_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 31,
                "storeid": 2,
                "title": "The Amazing story of Amazon Forest",
                "short_content": "அமேசன் என்கிற ஆச்சரியம்\r\n",
                "category_id": 1,
                "slug": "amazing-story-about-amazon-forest",
                "meta_title": "The Amazing story of Amazon Forest",
                "tags": null,
                "updatedby": null,
                "meta_description": "This blog explain amazing things about amazon forest",
                "meta_keywords": "Amazon fire,amazon fire in tamil,amazon forest in tamil ,amazon online shopping ,online chennai,amazon in chennai,amazon in tamil,amazon forest river,amazon forest in tamil,amazon forest",
                "image": "mgs_blog/a/m/amazon_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 32,
                "storeid": 2,
                "title": "Migration IT Thamizhan Series Episode - 2",
                "short_content": "IT தமிழன் ",
                "category_id": 1,
                "slug": "migration-series-story-of-thamizhan-episode-2-it-people-struggle-america-racism",
                "meta_title": "Migration IT Thamizhan Series Episode - 2",
                "tags": null,
                "updatedby": null,
                "meta_description": "ஐ.டி தொழிலாளர்கள் புலம் பெரியந்த வரலாற்று பாகம்-2 அவர்களுக்கு நடந்த இன்பம் துன்பம் அவர்களின் வாழ்க்கை அவர்களுக்கு நடந்த சோதனைகள் -IT Migration series part-2",
                "meta_keywords": "Tamil, Story, Whatsapp, tamila, Life, Struggle, Racism, father, funeral, India",
                "image": "mgs_blog/f/a/family_2_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 33,
                "storeid": 2,
                "title": "தமிழ் பிறந்த நாள் வாழ்த்து பாடல் | Happy Birthday Song In Tamil",
                "short_content": "பிறந்தநாள் வாழ்த்து பாடல் நம் தமிழ் மொழியில்.Happy Birthday\" என்ற ஆங்கிலப் பாடலுக்கு பதில்தமிழில் மனதார வாழ்த்தும் வரிகளைக் கொண்ட இந்த பிறந்தநாள் பாடலைப் பயன்படுத்துவோம்.நம் மொழியில் பிறந்தநாள் வாழ்த்து பாடலை பாடி அனைவரையும் வாழ்த்துவோம்.அதை அனைவரிடம் தமிழை வளர்க்க செய்யலாம்",
                "category_id": 1,
                "slug": "happy-birthday-song-in-tamil-with-lyrics-song-by-uthra-unnikrishnan-written-by-kavingar-arivumathikaving",
                "meta_title": "தமிழ் பிறந்த நாள் வாழ்த்து பாடல் | Happy Birthday Song In Tamil",
                "tags": "13,14",
                "updatedby": null,
                "meta_description": "Happy birthday song in tamil with lyrics written by kavin arivumathikaving and song by uthra unnikrishnan.\r\nThis is an attempt to spread the greatness of Tamil Language.",
                "meta_keywords": "happy birthday, tamil, lyrics,songs,uthra Unnikrishnan,written,kavinga arivumathikaving,happy birthday tamil songs, tamil birthday songs",
                "image": "mgs_blog/b/i/birthday-400-300_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 34,
                "storeid": 2,
                "title": "Corona Lockdown Love Story",
                "short_content": "Aanum Pennum Palaginaal kadhal endru porul kollum silaruku theriyavillai, adhanai vida natpe periyadhu endru... Natpe Thunai",
                "category_id": 1,
                "slug": "paravaiye-engu-irukirai-beautiful-love-thamizha-story",
                "meta_title": "Corona Lockdown Love Story",
                "tags": "15,16,17",
                "updatedby": null,
                "meta_description": "தமிழ் மொழி, பண்பாடு, கலை, இலக்கியம் முதலியவை நம்பகத்தன்மையுடன் உலகுக்கு உண்மையை எடுத்துரைக்கும் ஒரு முயற்சி.\r\nThis is an attempt to spread the greatness of Tamil Language.",
                "meta_keywords": "தமிழ், language, blog, tamil tshirts, whatsapp thamizha story, tamil love story, interesting tamil story",
                "image": "mgs_blog/p/a/paravai-blog-images_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 35,
                "storeid": 2,
                "title": "காமராசர் ஆட்சி காலத்தில் கட்டப்பட்ட அணைகள்",
                "short_content": "கலெக்டர் வந்தவுடன் இந்த பகுதியில் ஓடும் முல்லை பெரியாறு, வைகையை இணைத்து ஒரு அணை கட்ட வேண்டும். அதற்கான சர்வே எடுத்து அனுப்புங்கள்,'' என உத்தரவிட்டார்.\r\nதியாகராஜன் எம்.எல்.ஏ.,வோ, நாம் திருட்டு பற்றி கூறுகிறோம், சம்பந்தமில்லாமல் அணை கட்ட சொல்கிறாரே என நினைத்து காமராஜரிடமே கேட்டுவிட்டார். அவரோ, \"\"பொருட்களை ஏன் அபகரிக்கின்றனர். அவர்களுக்கு வேலையும் இல்லை, கையில் பணமும் இல்லை. இதற்கு அணை கட்டினால் விவசாயம் வளரும், பொருள்களை அபகரிப்பது குறையும்,'' என்றார். அப்படி உருவாக்கப்பட்ட வைகை அணையால், இன்று லட்ணக்கான ஏக்கருக்கு பாசன வசதியும், குடிநீரும் கிடைக்கிறது.\r\n",
                "category_id": 1,
                "slug": "kamarajar-construct-dams-in-tamilnadu-during-his-period-congress-party",
                "meta_title": "காமராசர் ஆட்சி காலத்தில் கட்டப்பட்ட அணைகள்",
                "tags": "15,2,18",
                "updatedby": null,
                "meta_description": "கர்மவீரர் காமராஜரால் தமிழ் நாட்டில் அவரது ஆட்சி காலத்தில் கட்டப்பட்ட அணைகள் மற்றும் அதன் பயன்கள்",
                "meta_keywords": "dams of tamilnadu, kamarajar dams, cm kamarajar, kamaraj tamilnadu, congress party",
                "image": "mgs_blog/m/a/malampuzha-1_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 36,
                "storeid": 2,
                "title": "Ex- Lover Story",
                "short_content": "\"உனக்கு ஒரு வேலை இருந்திருந்தா என்னை கல்யாணம் பண்ணியிருப்பல்லடா ? \"\r\n\r\n \" என்னை மறந்துர மாட்டல்ல \" போன்ற வாழ்விற்கும் மறக்க முடியாத வசனங்களை சொன்னவளே என் மகளின் ஆசிரியையாக நின்றுகொண்டிருந்தாள். அம்மு என்ற ஆனந்தி. கொஞ்சம் வயது ஏறி இருந்தாலும் கலையான அவள் முகத்தை இப்போதும் மகாலட்சுமி பெர்மணன்ட் லீசுக்கு எடுத்திருந்தாள்.\r\n\r\n நீ ???...சாரி நீங்க ?\r\n\r\n ரஞ்சனி என் பொண்ணு தான்..",
                "category_id": 1,
                "slug": "endrum-aval-ninaivil-naan-ex-love-memories-beautiful-love-story",
                "meta_title": "Ex- Lover Story",
                "tags": "15,19,16,2",
                "updatedby": null,
                "meta_description": "காதல் மறைந்தாலும் நீண்ட நாட்கள் பிறகு காதலியின் முகத்தை காணும் அந்த கணம் ஷங்கர் பட கிராபிக்ஸ் போல நமக்குள் எதோ ஒரு புதுவித உணர்ச்சியை தரும் அல்லவா. ",
                "meta_keywords": "ex love story, aval ninaivil, beautiful memories",
                "image": "mgs_blog/r/a/rajj-tharunn_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 37,
                "storeid": 2,
                "title": "அழகான ராட்சசியே Love Story During Corona period",
                "short_content": "\" அப்பா உன்ட்ட ஒண்ணு கேப்பேன் சொல்லுவியா \" என்ற என் மகளின் குரலிலும் என் மனைவியின் சாயல்\r\n\r\n\"கேளுடி அம்மு , நீ கேட்டு நான் என்னைக்கு பதில் சொல்லாம இருந்தேன்\" என்றேன்.\r\n\r\n\" ஏம்பா நிலா ஒவ்வொரு நாளும் ஒவ்வொரு மாதிரி இருக்கு ? \"\r\n\r\n\"ஏன் நம்ம டாமி நம்மள மாதிரி பேச மாட்டிங்குது. அதோட டாடி மம்மி அதுக்கு சொல்லி கொடுக்கலயா ? \"\r\n\r\n\" ஏன்ப்பா நைட் ஆனா வெளியே கருப்பா இருக்கு ? \"\r\n\r\nஎன பல கேள்விகள்.\r\n\r\n",
                "category_id": 1,
                "slug": "azhagana-ratchasiye-beautiful-love-story-during-in-corona",
                "meta_title": "அழகான ராட்சசியே Love Story During Corona period",
                "tags": "20,19,16,17,21,2,22",
                "updatedby": null,
                "meta_description": "காதல் முறிந்தால் வாழ்க்கை முடிந்தது என்று அர்த்தம் இல்லை காதலுக்கு பிறகும் வேறு ஒரு அழகான வாழ்க்கை உண்டு என்பதை இந்த சிறுகதையின் மூலம் படித்து உணருவோம் வாருங்கள்.",
                "meta_keywords": "love, corona, daughter, family, azhagana, ratchasiyea",
                "image": "mgs_blog/i/m/image-1_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 38,
                "storeid": 2,
                "title": "Why are girls daddy's little Princess?",
                "short_content": "புத்தி = நல்லதா/கெட்டதா (True or False)\r\nமனம் = பிடிச்சிருக்கா பிடிக்கலையா (Yes or No)\r\n\r\nஅதாவது புத்தி என்பது நல்லதா கெட்டதா என்று மட்டும் பார்க்கும், அதேபோல மனம் என்பது பிடிச்சிருக்கா பிடிக்கவில்லையா என்று மட்டும் பார்க்கும்.\r\n\r\nபிடித்ததா பிடிக்காததா என்பது குறித்து புத்தி கவலை கொள்ளாது, நல்லதா கெட்டதா என்பது குறித்து மனம் கவலை கொள்ளாது.\r\n",
                "category_id": 1,
                "slug": "why-dads-loves-daughter-more-than-mothers-facts",
                "meta_title": "Why are girls daddy's little Princess?",
                "tags": null,
                "updatedby": null,
                "meta_description": "மகள்களை பெற்ற அப்பாக்களுக்கு மட்டும் தான் தெரியும் முத்தம் காமத்தை சேர்ந்ததில்லை என்று வாருங்கள் அப்பா மகள் இடையே உள்ள பாசத்தை காண்போம் \r\n",
                "meta_keywords": "daughter, daddy, love, heart, mind, story",
                "image": "mgs_blog/w/a/ways_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 39,
                "storeid": 2,
                "title": "திரைப்படபாடல்களில் சங்க இலக்கியம்",
                "short_content": "சமீப \"#அவளும் நானும் அலையும் கடலும் \" பாரதிதாசன் வரிகளை 'அச்சம் என்பது மடமையடா'வில் ரசித்து முடிக்கும் முன்பே ,ரஹ்மான் அசத்தியிருக்கும் \"காற்று வெளியிடை படத்தில் \"நல்லை அல்லை\" வரிக்கு என்ன அர்த்தம் என்று தேட தொடங்கி கிடைத்த குறுந்தொகை பாடல் \"கருங்கால் வேங்கை வீயுகு துறுகல் இரும்புலிக் குருளையிற் றோன்றும் காட்டிடை எல்வி வருநர் களவிற்கு நல்லையல்லை நெடுவெண் ணிலவே\". தலைவன் வருகையை ஊரார் அறிந்து கொள்ள ஏதுவாக ஏன் இவ்வளவு எரிக்கிறாய்? என நிலவை பார்த்து தலைவி ஊடல் கொள்ளுவது .\r\n#நல்லை அல்லை =நன்மை தருவதாய் இல்லை\" . \r\n",
                "category_id": 1,
                "slug": "sanga-ilakkiya-tamil-literature-poems-in-tamil-movie-illayaraja-vaali-hits",
                "meta_title": "திரைப்படபாடல்களில் சங்க இலக்கியம்",
                "tags": "20,23,19,16,17",
                "updatedby": null,
                "meta_description": "20 முதல் 30 வரிகள் கொண்ட பாடல்களை மனபடமாக கூற தெரிந்த நம்மக்கு 2 அடிகள் கொண்ட திருக்குறள் கூற சற்று சிரமமே அப்படி பல இலக்கிய நூல்களில் உள்ள வரிகளை பாடல்களில் நிறைய கவிஞர்கள் எழுதி உள்ளனர் வாருங்கள் வாசித்து பார்க்கலாம்.",
                "meta_keywords": "tamil ilakiyam, tamil literature, ilaiyaraja, vaali, tamil songs, ",
                "image": "mgs_blog/t/a/tamil-ilakkiyam_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 40,
                "storeid": 2,
                "title": "Kamarajar Best ever CM of Tamilnadu",
                "short_content": "<p>Kamarajar served as a chief minister for a total period of 9 year, which is treated as the golden period of Tamilnadu even till now. All his works had a diplomatic future vision. Being loyal he made others to be loyal, all his decisions proved he is a honest and bold leader. Being a uneducated leader, he opened nearly 30000 schools in Tamilnadu and improvised the existing schools. In his period the educated people rate raised from 7% to 37%. His works in other fields are quite impressive.</p>",
                "category_id": 1,
                "slug": "history-of-kamarajar-and-unseen-photos-and-articles-of-best-cm-of-tamilnadu",
                "meta_title": "Kamarajar Best ever CM of Tamilnadu",
                "tags": "24,20,19,18,25,26",
                "updatedby": null,
                "meta_description": "Kamarajar Life History in English and Tamil Version with uncommon pictures and recordings of kamarajar . The Story about Tamil Nadu Icon Kamarajar",
                "meta_keywords": "kamarajar pictures, kamarajar essay, kamarajar english essay, kamaraj",
                "image": "mgs_blog/k/a/kamarajar-life-history_1_2.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 41,
                "storeid": 2,
                "title": "காக்கும் காவல் தெய்வங்கள்",
                "short_content": "               நாகரீகம் என்னும் பெயரில் நாம் நம் வரலாறுகளை, கதைகளை மறந்து கொண்டு வருகிறோம். சாமிகளை ஆன்மீகம் எனும் வட்டத்திற்குள் அடைத்து, அந்த கதைகளை மூட நம்பிக்கையாக கருதும் இளைய சமுதாயத்திடம் காத்திரமான இந்த கதைகளை கொண்டு சேர்க்கும் முயற்சியின் ஒரு சிறு துளியே  \"காக்கும் காவல் தெய்வங்கள் \"  எனும் இந்த தொடர். ",
                "category_id": 1,
                "slug": "kakkum-kaval-theivangal-body-guards-vel-tamil-devotional-story-seyon-history",
                "meta_title": "காக்கும் காவல் தெய்வங்கள்",
                "tags": null,
                "updatedby": null,
                "meta_description": "முன்னர் காலத்திலும் இன்றைய காலத்திலும்  மக்களையும் ஊரையும் காப்பவர்கள் தான் காக்கும் தெய்வங்கள். நம் கண்களுக்கு அவர்கள் தெரியவில்லை என்றாலும் நம்மை ஏதோ ஒரு சக்தியால் காத்து கொண்டு வருகிறார்கள் காக்கும் தெய்வங்கள்.",
                "meta_keywords": "kaval, deivangal, god, bodyguards, devotional, story, history",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 42,
                "storeid": 2,
                "title": "காமராஜர் பற்றிய அறிய காணொளிகள்",
                "short_content": null,
                "category_id": 1,
                "slug": "kamarajar-rare-videos-pictures-portray-life-of-best-chieft-minister-of-tamil-nadu",
                "meta_title": "காமராஜர் பற்றிய அறிய காணொளிகள்",
                "tags": null,
                "updatedby": null,
                "meta_description": "தமிழ் மொழி, பண்பாடு, கலை, இலக்கியம் முதலியவை நம்பகத்தன்மையுடன் உலகுக்கு உண்மையை எடுத்துரைக்கும் ஒரு முயற்சி.",
                "meta_keywords": null,
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 43,
                "storeid": 2,
                "title": "யார்  இந்த இசக்கி அம்மன் ?",
                "short_content": "கருணையும் கோபமுமாய் இணைந்து பொலிவோடு ஒரு குழந்தையை கையில் ஏந்தி நின்று கொண்டு இருக்கும் இசக்கி அம்மனின் இரக்க குணத்திற்கும் , அமைதிக்கும்  பின்னால்இருக்கும் கதை தான்  என்ன? அவற்றை பற்றிய ஒரு சிறு தொகுப்பே  இந்த வரலாறு ஆகும் .   ",
                "category_id": 1,
                "slug": "issaki-amman-varalaru-devotional-story-tamil-history-neeli-sivan-sakthi-god",
                "meta_title": "யார்  இந்த இசக்கி அம்மன் ?",
                "tags": null,
                "updatedby": null,
                "meta_description": "யார் இந்த இசக்கி அம்மன் அந்த அம்மனின் வரலாறு பற்றி அறிந்து கொண்டு அம்மனின் அருளை பெறுவோம் வாருங்கள்.",
                "meta_keywords": "amman, devotional, god, bakthi, sivan, sakthi, issaki, neeli",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 44,
                "storeid": 2,
                "title": "இசக்கி அம்மன் பாகம் - II",
                "short_content": "தமிழ்நாடு அன்றும் இன்றும் பழமையும் புதுமையும் பெற்று  இளமை  என்றும் மாறாமல்  விளங்கும் ஒரு மாநிலமாகும். மொழிக்கும் கலாச்சாரத்திற்கும் முன்னோடி மாநிலமாக கருதலாம் .",
                "category_id": 1,
                "slug": "issakki-amman-history-tamil-devotional-story-neeli-sivagami-sivan-parvathi-sakthi",
                "meta_title": "இசக்கி அம்மன் பாகம் - II",
                "tags": null,
                "updatedby": null,
                "meta_description": "இசக்கி அம்மன் பற்றிய சில சுவாரசியமான தகவல்களை முன்னத்தாய பாகத்தில் பார்த்தோம் அதன் தொடர்ச்சியாக இந்த பாகத்தில் காணலாம் வாங்க ",
                "meta_keywords": "issakki amman, devotional, history, tamil, story",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 45,
                "storeid": 2,
                "title": "காமராஜர் பற்றி 100 அற்புதமான அரிய தகவல்கள்..!!*",
                "short_content": "காமராஜரிடம் பேசும் போது, அவர் \"அமருங்கள், மகிழ்ச்சி,நன்றி'' என அழகுத் தமிழில்தான் பேசுவார்.நேரு, சர்தார்படேல், சாஸ்திரி உள்ளிட்ட வட மாநிலதலைவர்களுடன் பேசும் போது மிக, மிக அழகான ஆங்கிலத்தில்காமராஜர் பேசுவதை பலரும் கேட்டு ஆச்சரியத்தில் வாயடைத்துபோய் இருக்கிறார்கள்",
                "category_id": 1,
                "slug": "achievements-done-by-kamarajar-during-his-period",
                "meta_title": "காமராஜர் பற்றி 100 அற்புதமான அரிய தகவல்கள்..!!*",
                "tags": "17,18",
                "updatedby": null,
                "meta_description": "தமிழகத்திற்கு கிடைத்த ஒரு மிகப்பெரிய வரம் நமது காமராசர் ஐயா.அவரது காலத்தில் நாமும் நம் தமிழகமும் ஓங்கி செழிப்போடு இருந்தது.அவரின் சாதனைகளை பற்றி பார்ப்போம்.",
                "meta_keywords": "kamarajar, kamarajar, kamarajar achievements, kalvithanthai, karma veerar",
                "image": "mgs_blog/k/a/kamarajar-unknown-facts_1.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 46,
                "storeid": 2,
                "title": "90s Kid's Games",
                "short_content": "குழந்தைகள் வெளியில்  விளையாடுவதையே எப்போதும் விரும்புவார்கள்  நாமும் சிறுவயதில் அதையே விரும்பினோம். இருப்பினும், தொழில்நுட்பத்தின் வருகையுடன், போக்கு கொஞ்சம் மாறத் தொடங்கிவிட்டது. இந்த நாட்களில் குழந்தைகள் அருகிலுள்ள மைதானத்திற்கு வெளியே செல்வதற்கு பதிலாக கணினி அல்லது மொபைல் திரைக்கு முன்னால் அதிக நேரம் செலவிடுகிறார்கள். ",
                "category_id": 1,
                "slug": "the-old-90-s-games-boyghilli-vilayadu-ninaivugal-friends-nanbargal",
                "meta_title": "90s Kid's Games",
                "tags": null,
                "updatedby": null,
                "meta_description": "90's குழந்தைகளின்  விளையாட்டு. அது ஒரு அழகிய காலம். விடுமுறை வந்தவுடன் நண்பர்களுடன் சேர்ந்து தெருவில் கில்லி விளையாடுவது, இரவில் கண்ணாமூச்சி ஆடுவது என பல மலரும் நினைவுகளை மறைத்து கொண்டு இந்த மாடர்ன் உலகில் வாழ்ந்து வருகிறோம். வாருங்கள் சிறிது நேரம் 90 வாழ்க்கைக்கு செல்வோம்.",
                "meta_keywords": "90's, கில்லி, 90'slife, games, ghilli, vilayadu, ninaivugal, friends, nanbargal",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 47,
                "storeid": 2,
                "title": "ஸ்ரீ கோதை நாச்சியாரின் சீர்மையும் பெருமையும்",
                "short_content": "ஸ்ரீ ஆண்டாள் நாச்சியார் அவர்கள் மற்றும் அவர்கள் சார்ந்த ஆலயங்கள் போன்றவை பற்றிய வரலாற்று கண்ணோட்டம். ",
                "category_id": 1,
                "slug": "the-story-of-saint-sri-andal-nachiyaar-a-vision-devotional-story-srivilliputhur-aandal",
                "meta_title": "ஸ்ரீ கோதை நாச்சியாரின் சீர்மையும் பெருமையும்",
                "tags": null,
                "updatedby": null,
                "meta_description": "ஸ்ரீ  ஆண்டாள் நாச்சியார் அவர்கள் மற்றும் அவர்கள் சார்ந்த ஆலயங்கள் போன்றவை பற்றிய வரலாற்று சிறப்பு மிக்க தகவல்களை பற்றி காண்போம் வாருங்கள்.",
                "meta_keywords": "aandal, paalkova, srivilliputhur, kothai, natchiyar, history",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 48,
                "storeid": 2,
                "title": "ஸ்ரீ கோதை நாச்சியாரின் சீர்மையும் பெருமையும் -2",
                "short_content": "எப்படி?",
                "category_id": 1,
                "slug": "the-story-of-gothai-naachiyar-a-vision-gopuram-kalasam-srivilliputhur-thanjai-periya-kovil",
                "meta_title": "ஸ்ரீ கோதை நாச்சியாரின் சீர்மையும் பெருமையும் -2",
                "tags": null,
                "updatedby": null,
                "meta_description": "ஆலயம் தொழுவது சாலவும் நன்று, கோவிலில்லா ஊரில் குடியிருக்க வேண்டாம், கோபுர தரிசனம் கோடி புண்ணியம் என்று கூறிய முன்னோர்கள் கோவில்கள் அமைத்து கோபுரங்களை கட்டினார்கள் அதனை பற்றிய சுவாரசியமான தகவல்களை பற்றி கீழே காண்போம் வாருங்கள் ",
                "meta_keywords": "goothai, naatchiyar, gopuram, srivilliputhur, kalasam, tamilnadu, symbol",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 49,
                "storeid": 2,
                "title": "The Great Kamaraj Sucess Story",
                "short_content": "The life of Kamaraj is legendary. His early life depicts unselfishness as compared to the battle for thrown nowadays. ",
                "category_id": 1,
                "slug": "see-the-great-kamaraj-achievements-tamilnadu-chief-minister-karmaveerar-kalvithanthai",
                "meta_title": "The Great Kamaraj Sucess Story",
                "tags": null,
                "updatedby": null,
                "meta_description": "இந்த நாடு பார்த்ததுண்டா என்ற வாசகம் மிக அழகாக பொருந்தும் ஒருத்தர் என்றல் அவர் ஐயா கர்மா வீரர் காமராசர் மட்டுமே இன்னும் எத்தனை தலைவர்கள் வந்தாலும் காமராசரை போல ஒருவரை நம்மால் காண இயலாது அவரது ஆகா சிறந்த சில சாதனைகளை கீழே குறிப்பிட்டுளோம் படித்து பயன் பெறுக ",
                "meta_keywords": "kamarajar, kingmaker, kalvithanthai, karuppu gandhi, afternoon lunch scheme",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 50,
                "storeid": 2,
                "title": "The Great Kamarajar Achievement Story",
                "short_content": "The Achievements of Kamaraj are manifold. Here are shown some unknown history.",
                "category_id": 1,
                "slug": "achievements-of-kamaraj-prambikkulam-dam-aaliyar-papanassam-manimutharu",
                "meta_title": "The Great Kamarajar Achievement Story",
                "tags": null,
                "updatedby": null,
                "meta_description": "காமராசர்  ஐயா அவர்களின் காலத்தில் நாம் பிறக்கவில்லை என்றாலும் அவரின் சிறப்பினை ஆவது  நாம் அறிந்து கொள்ள வேண்டும். அவர் சாதனைகளை குறிப்பிட பக்கங்கள் போதாது ஆகையால் மிக முக்கியமானா  சாதனைகளை இதில் குறிப்பிட்டு உள்ளோம் படித்து பயன்பெறுக.",
                "meta_keywords": "kamarajar, kalvi",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 51,
                "storeid": 2,
                "title": "மறக்க முடியவில்லை Ex Love Story",
                "short_content": "அவள் என்னிடம் மறுஅறிமுகம் ஆன இந்த முக்கால் மணி நேரத்தில் முதல் முறையாக சிரிக்கிறாள். \r\nஅவளுக்கான மருந்தை அவளுக்குள்ளே வைத்துக்கொண்டு மருத்துவமனை நாடி வந்த பேதை இவள். அவள் சிரிப்பு அவளுக்கு மட்டும் அல்ல, என் மன அழுத்தத்துக்கும் மருந்து. \r\n",
                "category_id": 1,
                "slug": "ex-love-story-boy-friend-meet-lover-in-coimbatore-ex-memories",
                "meta_title": "மறக்க முடியவில்லை Ex Love Story",
                "tags": "24,15,16,17,21,2,27",
                "updatedby": null,
                "meta_description": "எத்தனை ஆண்டுகள் கடந்தாலும் அந்த முதல் காதலை மறக்குமா மனது அப்படி பட்ட காதலை மனதில் வைத்து இருக்கும் நம்ம ஹீரோ ஓட கதையை படிக்கலாம் வாங்க ",
                "meta_keywords": "love story in tamil, tamil love, ex memories, love, story, ex love story",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 52,
                "storeid": 2,
                "title": "ஸ்ரீ மீனாட்சி அம்மன் ஆலயத்தின் ஆலய பிரவேசங்கள்",
                "short_content": "ஸ்ரீ மீனாட்சி அம்மன் ஆலயத்தினுள் தாழ்த்தப்பட்டவர்கள் நுழைய அனுமதி மறுக்கப்பட்டது    1939-ல்  இராஜாஜி, வைத்தியநாத ஐயர்,  என்.எம்.ஆர்.சுப்பராமன் ஆகியோர் ஆலய பிரவேசத்தை  நடத்திவிட வேண்டும் என்று தீர்மானித்து  நடத்தி முடித்தனர்  ",
                "category_id": 1,
                "slug": "meenakshi-amman-temple-aalaya-pravesam-madurai-pride-maana-madurai-thoonganagaram-pandiya-nadu",
                "meta_title": "ஸ்ரீ மீனாட்சி அம்மன் ஆலயத்தின் ஆலய பிரவேசங்கள்",
                "tags": null,
                "updatedby": null,
                "meta_description": "மதுரை என்றாலே மணக்கும்  மல்லி சுட சுட இட்லி அப்பறோம் என்னங்க நம்ம மீனாட்சி அம்மன் கோவில் தான் வாருங்கள் மீனாட்சி அம்மனை பற்றி அறிந்து கொள்ளலாம் ",
                "meta_keywords": "madurai, thoonganagaram, malli, idli, meenakshi amman, mana madurai,pandiya naadu",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 53,
                "storeid": 2,
                "title": "தமிழகத்திற்கு காமராஜர் மேற்கொண்டுவந்த நலத்திட்டங்கள்",
                "short_content": "தமிழ்நாடு அரசியலில் 7 ஆண்டுகள் மட்டுமே முதலமைச்சராக பணியாற்றினார்.பல்கலைக்கழகங்கள் அவருக்கு டாக்டர்  பட்டம் அளிக்க முன் வந்த போது \"வேறு  வேலை இருந்தால் பாருங்கள்\" என்று கூறிய மகான் இவரே.அவர் வாழ்ந்த காலத்தில் மக்களுக்காக பல்வேறு நலத்திட்டங்களையும் முயற்சிகளையும் மேற்கொண்டிருக்கிறார் அவற்றுள் சில கீழே குறிப்பிடப்பட்டுள்ளது. ",
                "category_id": 1,
                "slug": "education-dams-schemes-and-initiatives-undertaken-by-kingmaker-kamarajar",
                "meta_title": "தமிழகத்திற்கு காமராஜர் மேற்கொண்டுவந்த நலத்திட்டங்கள்",
                "tags": null,
                "updatedby": null,
                "meta_description": " காமராசர் ஐயா அவர்கள் தமிழகத்திற்காக நிறைய சிறப்பான திட்டங்களை வழிவகுத்து தமிழகத்தில் கல்வியையும் வளர்த்து ஏழை மாணவர்களுக்கும் சென்றடைய உதவினார்.",
                "meta_keywords": "kamarjar, education, dams, cpcl, petroleum, kingmaker",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 54,
                "storeid": 2,
                "title": "தமிழகத்தில் பெட்ரோலிய துறையை  உருவாக்கியது யார் தெரியமா?",
                "short_content": "\"சென்னை மணலியில் அமைந்துள்ள , தமிழகத்தின் பெட்ரோலியத் துறையின் ஆணிவேரான CPCL பிறந்த கதை தெரியுமா....\"\r\n\r\nதென் இந்தியாவில்   எண்ணெய் நிறுவனம் ஒன்று அமைக்க மத்திய அரசு முடிவெடுத்தது. ",
                "category_id": 1,
                "slug": "kamarajar-built-petroleum-sector-in-tamil-nadu",
                "meta_title": "தமிழகத்தில் பெட்ரோலிய துறையை  உருவாக்கியது யார் தெரியமா?",
                "tags": null,
                "updatedby": null,
                "meta_description": "பெட்ரோலிய துறை நம் தமிழகத்தில் நம் சென்னையில் திறக்க மிகப் பெரிய காரணமாக இருந்தவர் தான் தலைவர் கர்ம வீரர் காமராசர். நிறைய குடும்பங்கள் இன்று நல்ல வேலை மட்டும் தங்க வீடோடு இருக்க பெரும் தொழிற்சாலை உருவாக்கி தந்தவர் காமராசர்.",
                "meta_keywords": "kamarajar, petroleum, tamil nadu, industry",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 55,
                "storeid": 2,
                "title": "Hindi Theriyathu, I'm Indian Twitter #1 Trending Topic in India",
                "short_content": "This Phrase \"I'am an தமிழ் பேசும்  Indian\", \"Hindi theriyathu Poda !\" are the most talked about for the past few days.\r\n\r\nPeople are going crazy over this and keep on sharing in their social handles to show the people of India that knowing hindi doesn't make an Indian and we tamil speaking are all proud Indians.",
                "category_id": 1,
                "slug": "hindi-theriyathu-poda-im-tamil-pesum-indian-tshirts-trending-in-twitter-story",
                "meta_title": "Hindi Theriyathu, I'm Indian Twitter #1 Trending Topic in India",
                "tags": "15,28,2,5",
                "updatedby": null,
                "meta_description": "The Non-Hindi speaking Indians are going crazy with these phrases, \"Hindi Theriyathu Poda\" & I'm Indian but I don't know Hindi.",
                "meta_keywords": null,
                "image": "mgs_blog/d/o/download.jpg",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 56,
                "storeid": 2,
                "title": "தமிழி எழுத்துக்களும் அதன் தோற்றமும்",
                "short_content": "\" 2000 வருடங்களுக்கு முன்னர் தோன்றிய தமிழி தோற்றம், தமிழி எழுத்துக்களும் அதற்க்கு இணையான தமிழ் எழுத்துக்களும் இந்த பதிவில் விவரித்து உள்ளது. பதிவினை படித்து பயன்பெறுக.\"",
                "category_id": 1,
                "slug": "appearance-and-appeared-of-tamili-words",
                "meta_title": "தமிழி எழுத்துக்களும் அதன் தோற்றமும்",
                "tags": "29",
                "updatedby": null,
                "meta_description": "நாம் இன்றைய நடைமுறையில் எழுதுகின்ற எழுத்துக்கள் எதன் வழியாக வந்தது எப்படி வந்தது அது எத்தனை வருடங்களுக்கு முன்னர் தோன்றியது என்ற சிறு சிறு கேள்விகளுக்கும் இந்த தொகுப்பு விடை அளிக்கும்",
                "meta_keywords": "oldest language, tamili, tamili letters, learn tamili, tamil appearance",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 57,
                "storeid": 2,
                "title": "சுடலை மாடன் – தமிழ்நாட்டு கோஸ்ட் ரைடர்",
                "short_content": "நம்மோடு எத்தனை பேர் துணை நின்றாலும் நம் மனதிற்கு கடவுளின் உதவியை நாடினால் தான் நிம்மதி. அப்படி நம்மை காத்து வரும் தமிழகத்தில் உள்ள எண்ணற்ற காவல் தெய்வங்களில் ஒருவரான சுடலை மாட தெய்வத்தை பற்றி தெரிந்து கொள்வோம் வாருங்கள்.",
                "category_id": 1,
                "slug": "sudalai-madan-devotional-history-by-whatsapp-tamila",
                "meta_title": "சுடலை மாடன் – தமிழ்நாட்டு கோஸ்ட் ரைடர்",
                "tags": null,
                "updatedby": null,
                "meta_description": "தமிழகத்தில் உள்ள எண்ணற்ற காவல் தெய்வங்களில் ஒருவரான சுடலை மாட தெய்வத்தை பற்றி தெரிந்து கொள்வோம் வாருங்கள்.",
                "meta_keywords": "sudalai madan, devotional, sivan, parvathi, சுடலை மாடன்,parvathi third son",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 58,
                "storeid": 2,
                "title": "அருண் ஐஸ்கிரீமின் சாதனைகள்",
                "short_content": "தள்ளு வண்டியில் ஐஸ் விற்று படிப்படியாக வாழ்க்கையில் ஒரு நிலையை அடைந்து பின்னர் சிறியவர் முதல் பெரியவர் வரை அனைவரது நாக்கிலும் அருண் ஐஸ்கிரீம் என்று சொன்னாலே அதன் ருசியை உணர முடியும் என்ற அளவுக்கு வளர்ச்சி அடைந்துள்ளார்.",
                "category_id": 1,
                "slug": "success-story-of-arun-ice-cream",
                "meta_title": "அருண் ஐஸ்கிரீமின் சாதனைகள்",
                "tags": null,
                "updatedby": null,
                "meta_description": "அருண் ஐஸ்கிரீம் தொடக்க காலமும் வளர்ச்சி பாதையும் பற்றி அறிந்து கொள்ளுவோம் வாருங்கள்.",
                "meta_keywords": "arun icecream, success story, milk products, hatsun, inspirational story",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 59,
                "storeid": 2,
                "title": "திருச்செந்தூர் முருகன் பற்றிய 60 தகவல்கள்",
                "short_content": "தமிழ் கடவுளான முருகனின் ஆறுபடை வீடுகளில் இரண்டாவது வீடான திருச்செந்தூர் பற்றிய நாம் அறிந்திடாத செய்திகளை இந்த பதிப்பில் படித்து மகிழுங்கள்.",
                "category_id": 1,
                "slug": "tamil-kadavul-tiruchendur-murugan-unknown-facts",
                "meta_title": "திருச்செந்தூர் முருகன் பற்றிய 60 தகவல்கள்",
                "tags": null,
                "updatedby": null,
                "meta_description": "தமிழ் கடவுளான முருகனின் ஆறுபடை வீடுகளில் இரண்டாவது வீடான திருச்செந்தூர் பற்றிய நாம் அறிந்திடாத செய்திகளை இந்த பதிப்பில் படித்து மகிழுங்கள்.",
                "meta_keywords": "tiruchendur, murugan, tamil kadavul, aarupadai veedu, tuticorin, soorasamharam",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 60,
                "storeid": 2,
                "title": "தமிழ் எழுத்துக்கள் அதன் வடிவங்களும்",
                "short_content": "தமிழில் மொத்தம் 247 எழுத்துக்கள் உள்ளன. அந்த எழுத்துக்களின் வகைப்பாடுகள் மற்றும் தமிழ் எழுத்துக்களின் தோற்றங்கள் ஆகியன பற்றி அறிந்துகொள்ளுங்கள். ",
                "category_id": 1,
                "slug": "tamil-letters-and-alphabets-learning-tamil-in-easy-way",
                "meta_title": "தமிழ் எழுத்துக்கள் அதன் வடிவங்களும்",
                "tags": null,
                "updatedby": null,
                "meta_description": "உலகின் மிக தொன்மையான மொழிகளில் தமிழும் ஒன்று என்று என்பதை கர்வத்தோடு கூறலாம்.அத்தகைய மொழியை கற்று கொடுக்க நாங்கள் உதவுகிறோம்.",
                "meta_keywords": "learn tamil, tamil letters, tamil alphabets, தமிழ் எழுத்துக்கள், easiest way to learn tamil, Mei eluthukkal, tamil uyirmei eluthukkal, உயிர் மெய் எழுத்துக்கள்,how many tamil letters, how many letters in tamil",
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 61,
                "storeid": 2,
                "title": "தமிழ் மாதமும் வருடமும்",
                "short_content": "தமிழில் வருடங்களுக்கு பெயர் உள்ளது என்று நம்மில் நிச்சயம் நிறைய பேருக்கு தெரியாது. ஏன் தமிழ் மாதங்களே  நிறையா பேருக்கு மறந்துருக்கும். ஆகையால் அவ்வற்றை சேகரித்து ஒரு தொகுப்பாக இங்கு இணைத்துள்ளோம் படித்து பயன்பெறுவோம்.",
                "category_id": 1,
                "slug": "tamil-years-and-month-calendar",
                "meta_title": "தமிழ் மாதமும் வருடமும்",
                "tags": null,
                "updatedby": null,
                "meta_description": "தமிழ் மொழி, பண்பாடு, கலை, இலக்கியம் முதலியவை நம்பகத்தன்மையுடன் உலகுக்கு உண்மையை எடுத்துரைக்கும் ஒரு முயற்சி.",
                "meta_keywords": null,
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            },
            {
                "id": 62,
                "storeid": 2,
                "title": "Tamil Stylish Fonts & Photoshop Supported Tamil Fonts Collection",
                "short_content": "This article is a collection of Stylish Tamil fonts and fonts in Tamil which can be used in Word, Photoshop, Coreldraw and other Computer applications for printing, designing and publishing needs in a single tamil Fonts collection.",
                "category_id": 1,
                "slug": "download-stylish-tamil-fonts-photoshop-coreldraw-supported-tamil-fonts-collection",
                "meta_title": "Tamil Stylish Fonts & Photoshop Supported Tamil Fonts Collection",
                "tags": "30,31,32,33",
                "updatedby": null,
                "meta_description": null,
                "meta_keywords": null,
                "image": "",
                "video": null,
                "created_at": "2024-03-11 17:39:10"
            }
        ]

        const blogdata2 = [
             {
                "id": 1,
                "storeid": 2,
                "title": "What Abdul Kalam Spoke In European Parliament ?",
                "short_content": "<p>Yaadhum Oore Yavarum Kelir, a famous quote said by Kaniyan Pungundranar and used by APJ Abdul Kalam in his speech at European Parliament.</p>",
                "content": "<h1>அப்துல் காலம் அவர்கள் ஐரோப்பிய மாநாட்டில் பேசிய தமிழ் பாடல்</h1>\r\n<br>\r\n<p> </p>\r\n<p style=\"text-align: center;\"><strong>இயற்றியவர்</strong>: கணியன் பூங்குன்றனார் <br><strong>நூல்</strong>: புறநானூறு - 192 <strong>காலம்</strong>: சங்க காலம்</p>\r\n<p>நம் தமிழ் மக்கள் தமது சாதனைக்காக அல்லது பேச்சாற்றலுக்காக தகுதிபெற்று வெளி மாநிலங்கத்திற்கோ வெளி நாட்டிற்கோ மேடையில் ஏறி பேச சென்றால் இந்த பாடல் வரியை மேற்கோள் காட்ட தவறுவது கிடையாது. அந்த அளவிற்கு அருமையான கருத்துக்கள் பெற்றது புறநானூற்றில் இடம்பெற்ற கணியன் பூங்குன்றனாரின் பாடல், ஆனால் இந்த பாடலின் ஒரு வரியை மட்டுமே மேற்கோள் காட்டி விட்டு வேறு கருத்துக்களை பேச தொடங்கி விடுவர். இப்படி பேசுவபவர்கள் மற்றும் நாம் என ஒரு ஒருவராவது இந்த பழந்தமிழ் பாடலின் முழுமையான கருத்தினை படித்திருப்பார்களா என்று சிந்தித்த தருணமே இந்த கட்டுரை.</p>\r\n<h2> </h2>\r\n<h2><span style=\"color: #ff0000;\">ஐரோப்பா மாநாட்டில் APJ அப்துல் காலம்:</span></h2>\r\n<p><iframe style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://www.youtube.com/embed/smjfGmCn7x0?start=19\" allowfullscreen=\"allowfullscreen\" width=\"100%\" height=\"315\" frameborder=\"0\"></iframe></p>\r\n<p>இளைஞர்களின் நம்பிக்கையாக வாழ்ந்து அண்மையில் மறைந்த முன்னாள் குடியரசு தலைவரும் அறிவியல் உலகின் தந்தையுமான பாரத இரத்தினா உயர்திரு APJ அப்துல் காலம் அவர்கள் கூட தமது ஐரோப்பிய மாநாட்டில் <a href=\"https://www.tamiltshirts.com/yaathum-oore.html\">யாதும் ஊரே யாவரும் கேளீர்</a> என மேற்கோள் காட்டி பேசி இருப்பார். அந்த பாடலின் முழுமையான பொருளை பாப்போம்.</p>\r\n<p> </p>\r\n<p> </p>\r\n<p> </p>\r\n<h2><span style=\"color: #ff0000;\">192- வது புறநானூற்று பாடல்</span></h2>\r\n<p>கணியன் பூங்குன்றனாரின் இந்த பாடல் தமிழர் பண்பாட்டையும் அறிவியலையும் மதத்தையும் முழுமையாக எடுத்துரைக்கிறது. புறநானூற்றில் இடம் பெற்ற 192 - வது பாடல்,</p>\r\n<p style=\"text-align: center;\">யாதும் ஊரே யாவரும் கேளிர்<br>தீதும் நன்றும் பிறர்தர வாரா<br>நோதலும் தணிதலும் அவற்றோ ரன்ன<br>சாதலும் புதுவது அன்றே, வாழ்தல்<br>இனிதென மகிழ்ந்தன்றும் இலமே முனிவின்<br>இன்னா தென்றலும் இலமே, மின்னொடு<br>வானம் தண்துளி தலைஇ யானாது<br>கல் பொருது மிரங்கு மல்லல் பேரியாற்று<br>நீர்வழிப் படூஉம் புணைபோல் ஆருயிர்<br>முறை வழிப் படூஉம் என்பது திறவோர்<br>காட்சியில் தெளிந்தனம் ஆகலின், மாட்சியின்<br>பெரியோரை வியத்தலும் இலமே,<br>சிறியோரை இகழ்தல் அதனினும் இலமே.</p>\r\n<p> </p>\r\n<h2><span style=\"color: #ff0000;\">தமிழ் பொருள்:</span></h2>\r\n<p> </p>\r\n<div style=\"color: #353535; font-family: merriweather, 'times new roman', times, serif; text-align: center;\"><span style=\"color: #252525; font-family: 'helvetica neue' , 'helvetica' , 'arial' , sans-serif; font-size: 14px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">எல்லா ஊரும் எம் ஊர் எல்லா மக்களும் எம் உறவினரே </span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">நன்மை தீமை அடுத்தவரால் வருவதில்லை</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">துன்பமும் ஆறுதலும்கூட மற்றவர் தருவதில்லை</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">சாதல் புதுமை யில்லை; வாழ்தல்</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">இன்பமென்று மகிழ்ந்தது இல்லை</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">வெறுத்து வாழ்வு துன்பமென ஒதுங்கியதுமில்லை</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">பேராற்று நீர்வழி ஓடும் தெப்பம்போல</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">இயற்கைவழி நடக்கும் உயிர்வாழ்வென்று</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">தக்கோர் ஊட்டிய அறிவால் தெளிந்தோம்</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">ஆதலினால்,பிறந்து வாழ்வோரில்</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">சிறியோரை இகழ்ந்து தூற்றியதும் இல்லை</span><br style=\"color: #222222; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Lato, Helvetica, Arial, sans-serif; font-size: 16px;\"><span style=\"color: #222222; font-family: , 'blinkmacsystemfont' , 'segoe ui' , 'roboto' , 'lato' , 'helvetica' , 'arial' , sans-serif; font-size: 16px;\">பெரியோரை வியந்து போற்றியதும் இல்லை.</span></span></div>\r\n<p style=\"text-align: center;\"> </p>\r\n<p><a href=\"https://www.vilvakart.in/c/traditional-organic-sweets-online\" target=\"_blank\" rel=\"noopener\"><img class=\"image2\" src=\"https://dnuiwk3g3296x.cloudfront.net/blog-images/ad-image-banners/blog-gif-sweets-600.gif\"></a></p>\r\n<p><a href=\"https://www.tamiltshirts.com/men/tops-men/round-neck-tshirts.html\"><img class=\"image1\" src=\"https://dnuiwk3g3296x.cloudfront.net/blog-images/ad-image-banners/vilva-clothing-tamil-tshirts-blog-page-adv1.gif\"></a></p>\r\n<h2><span style=\"color: #ff0000;\">முழு விளக்கம்:</span></h2>\r\n<ul>\r\n<li>உலக ஒற்றுமையை ஒரு வரியில் <strong>\"<p<a href=\"https://www.tamiltshirts.com/yaathum-oore.html\">யாதும் ஊரே யாவரும் கேளிர்</a>\"</strong> என கூறி இருக்கிறார். உலகில் உள்ள அனைத்து ஊரும் ஏன் ஊர்; அனைத்து மக்களும் ஏன் உறவினர் என்பது இதன் விளக்கம். பக்கத்துக்கு மாநிலம் ஏன் பக்கத்துக்கு வீட்டில் கூட சண்டை போடும் நிலை இப்போது இருக்க; சங்க காலத்திலே உலக மக்கள் அனைவரும் ஒற்றுமையாக வாழ கூறுவது சிறப்பே!</li>\r\n<li>\r\n<p>நமக்கு நன்மையையும் தீமையும் அடுத்தவர் தருவதில்லை ஏன் துன்பமும் ஆறுதலும் கூட மற்றவர் தருவதில்லை. நாம் செய்த செயலின் பயனையே நாம் அடைகிறோம். ஒருவற்கு நன்மை செய்தல் நமக்கும் நன்மை நாடாகும் அதுவே தீமை நினைத்தாலே போதும் நமக்கும் தீமை வந்தடையும். இதனையும் ஒரே வரியில் <strong>\"தீதும் நன்றும் பிறர் தரவாரா</strong>\" என்றுள்ளார்.</p>\r\n</li>\r\n<li>இறப்பு ஒன்றும் புதிது அல்ல துன்பப்பட; வாழ்வதும் இன்பம் என மகிழ்ச்சி அடைய ஒன்றுமில்லை. பிறப்பும் இறப்பும் நம் கையில் இல்லை</li>\r\n<li>\r\n<p>மழை எப்படி உருவாகின்றது என்ற ஒரு அறிவியல் கூற்றை இந்த பாடலில் எதார்த்தமாக கூறியுள்ளார். நீராவியாகுதல் என்ற அறிவியல் கோட்பாட்டை மேகமானது கடல் வழியாக வந்து மழைநீரை எடுத்து கொண்டு போவதை போல நம் வாழ்வும் உள்ளது என அருமையாக கூறியுள்ளார்.</p>\r\n</li>\r\n<li>தகுதியுடையர்கள் கற்றுக்கொடுத்ததை வைத்து நாம் வாழ்வில் தேர்ந்துள்ளோம் , ஆகா நம்மை விட பெரிய இடத்தில் இருப்பவர்களை நாம் தலை மேல் தூக்கி வைக்கவும் தேவையில்லை நம்மை விட சிறியவர்களை காலில் போட்டு மிதிக்கவும் தேவையில்லை. அதுவே வாழ்வில் கற்றவர்க்குரிய பண்பாகும்.</li>\r\n</ul>\r\n<p><a href=\"https://www.vilvakart.in/c/traditional-organic-sweets-online\" target=\"_blank\" rel=\"noopener\"><img class=\"image2\" src=\"https://dnuiwk3g3296x.cloudfront.net/blog-images/ad-image-banners/blog-gif-sweets-600.gif\"></a></p>\r\n<p><a href=\"https://www.tamiltshirts.com/men/tops-men/round-neck-tshirts.html\"><img class=\"image1\" src=\"https://dnuiwk3g3296x.cloudfront.net/blog-images/ad-image-banners/vilva-clothing-tamil-tshirts-blog-page-adv6.gif\"></a></p>\r\n<h2><span style=\"color: #ff0000;\"><strong>முடிவுரை</strong>:</span></h2>\r\n<p>இன்னலுக்கு பிறகு தானே இன்பம்; வாழ்க்கையின் துன்பங்கள் இன்பங்கள் எல்லாம் முன்னரே நிர்ணயிக்க பட்டதே; நம் எண்ணம் போல நம் வாழ்க்கை அமையும். சங்க கால பாடல்கள் பல நமது வாழ்வின் அறநெறிகளை மிக அருமையாக விளக்குகிறது. நாம் அதனை நம் வாழ்வில் எடுத்துக்கொள்வது அவசியம் ஆகிறது</p>\r\n<p> </p>\r\n<h2><span style=\"font-family: helvetica; font-size: large; color: #ff0000;\"><strong>English Version</strong>:</span></h2>\r\n<p style=\"text-align: center;\"><span style=\"font-family: helvetica; font-size: small;\">To us all towns are one, all men our kin,</span><br><span style=\"font-family: helvetica; font-size: small;\">Life's good comes not from others' gifts, nor ill,</span><br><span style=\"font-family: helvetica; font-size: small;\">Man's pains and pain's relief are from within,</span><br><span style=\"font-family: helvetica; font-size: small;\">Death's no new thing, nor do our bosoms thrill</span><br><span style=\"font-family: helvetica; font-size: small;\">When joyous life seems like a luscious draught.</span><br><span style=\"font-family: helvetica; font-size: small;\">When grieved, we patient suffer; for, we deem</span><br><span style=\"font-family: helvetica; font-size: small;\">This much-praised life of ours a fragile raft</span><br><span style=\"font-family: helvetica; font-size: small;\">Borne down the waters of some mountain stream</span><br><span style=\"font-family: helvetica; font-size: small;\">That o'er huge boulders roaring seeks the plain</span><br><span style=\"font-family: helvetica; font-size: small;\">Tho' storms with lightning's flash from darkened skies.</span><br><span style=\"font-family: helvetica; font-size: small;\">Descend, the raft goes on as fates ordain.</span><br><span style=\"font-family: helvetica; font-size: small;\">Thus have we seen in visions of the wise!</span><br><span style=\"font-family: helvetica; font-size: small;\">We marvel not at the greatness of the great;</span><br><span style=\"font-family: helvetica; font-size: small;\">Still less despise we men of low estate.</span></p>\r\n<p style=\"text-align: center;\"> </p>\r\n<p style=\"text-align: center;\"> </p>\r\n<p> </p>\r\n<p> </p>\r\n<p> </p>\r\n<p><span style=\"font-family: helvetica; font-size: large;\"><strong><a href=\"https://www.vilvakart.in/c/traditional-organic-sweets-online\" target=\"_blank\" rel=\"noopener\"><img class=\"image2\" src=\"https://dnuiwk3g3296x.cloudfront.net/blog-images/ad-image-banners/blog-gif-sweets-600.gif\"></a></strong></span></p>\r\n<p><a href=\"https://www.tamiltshirts.com/men/tops-men/round-neck-tshirts.html\"><img class=\"image1\" src=\"https://dnuiwk3g3296x.cloudfront.net/blog-images/ad-image-banners/vilva-clothing-tamil-tshirts-blog-page-adv5.gif\"></a></p>\r\n<p><span style=\"font-family: helvetica; font-size: large;\"><strong>Meaning:</strong></span><br><span style=\"font-family: helvetica; font-size: medium;\"> <strong><br></strong></span></p>\r\n<ul>\r\n<li><span style=\"font-family: helvetica; font-size: medium;\"> Every village is my village and every person is from my relative.</span></li>\r\n<li><span style=\"font-family: helvetica; font-size: medium;\"> Like a lot of things in life good and bad doesn't come from others.They come from within us.</span></li>\r\n<li><span style=\"font-family: helvetica; font-size: medium;\"> Likewise, sorrow or pain and relief of the pain doesn't come from others.They also come from within us.</span></li>\r\n<li><span style=\"font-family: helvetica; font-size: medium;\"> Death is not unheard of or new. It unnecessary to rejoice that life is sweet or complain in anger that life is bitter.</span></li>\r\n<li><span style=\"font-family: helvetica; font-size: medium;\"> Like rafts drifting along in the rapids of a great river, dashing over the rocks after a downpour (from skies resounding with thunder and lightning), our lives, no matter how dear, follows its own course(nature).</span></li>\r\n<li><span style=\"font-family: helvetica; font-size: medium;\"> We know this from the vision of wise seers who can see.</span></li>\r\n<li><span style=\"font-family: helvetica; font-size: medium;\"> So, we are neither awestruck by the great nor do we belittle the ‘not so great’.</span></li>\r\n</ul>\r\n<p><span style=\"font-size: medium;\"> <br><br></span></p>\r\n<hr>\r\n<h3><strong>Watch our Exclusive video on Yaadhum Oore</strong></h3>\r\n<p><iframe style=\"display: block; margin-left: auto; margin-right: auto;\" src=\"https://www.youtube.com/embed/NofKNIqJp_g\" allowfullscreen=\"allowfullscreen\" width=\"100%\" height=\"315\" frameborder=\"0\"></iframe></p>\r\n<style><!--\r\n@media only screen and (min-width: 480px)\r\n{\r\n.image1 { display: block; }\r\n.image2 { display: none; }\r\n}\r\n@media only screen and (max-width: 479px)\r\n{\r\n.image1 { display: none; }\r\n.image2 { display: block; }\r\n}\r\np {\r\n  word-spacing: 13px;\r\n}\r\n--></style>",
      
            }
        ]
        // {blogdata.map(blog => (
        //     // setBlogDatas(blog)
        // ))}
    //   console.log(categoryListData)
  return (
    <>
    <BlogNavbar/>

 
    <div className='container flex    mx-auto mt-10 '>

        <div class="" style={{width:'120%'}}>
   <h2 style={{borderLeft:'5px solid red',fontWeight:'600',marginBottom:'20px',paddingLeft:'5px'}}> BROWSING: {blogdata[0].title}</h2 >
   {/* <button>Beauty Products</button> */}
  
   {/* <h2 class="text-xl font-bold">{blogs.map(blog => (
        <div key={blog.id}>
          <h2>{blog.title}</h2></div>))}</h2> */}
   <div className="container mx-auto  ">             
        <img className='mx-auto py-5' src={blogdata[3].image} alt="Image"/>
       <p style={{color:'red',fontWeight:'800'}} dangerouslySetInnerHTML={{ __html: blogdatas }}/>
    </div>

    <h2 class=" font-bold mt-10 text-justify p-4">{blogdata2[0]?.title}</h2>
    <p className=' py-4 text-center' dangerouslySetInnerHTML={{ __html: blogdata2[0]?.content }}/>

    <section>
  {/* <div className='container mx-auto mt-10' style={{position:'relative'}}>
    <div className="flex flex-wrap">

      <div className="w-full md:w-1/2 bg-red-200 p-4 ">
        <iframe
        className='rounded-lg'
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <div className="w-full md:w-1/2 ">

        <div className="w-full bg-red-200 p-4 "style={{position:"static"}} >
          <iframe
          className='rounded-lg'
            width="30%"
            height="100"
            src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>

        <div className="w-full bg-red-200 p-4 ">
          <iframe
          className='rounded-lg'
            width="30%"
            height="100"
            src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
        <div className="w-full bg-red-200 p-4 ">
          <iframe
          className='rounded-lg'
            width="30%"
            height="100"
            src="https://www.youtube.com/embed/QGJJDXxw6mw?si=gIes4ATP7laMCWCG"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div> */}
</section>


    </div>


    <div className='hidden md:block'  style={{borderLeft:'0.2px solid gray',marginLeft:'30px',paddingLeft:'30px'}}> <div class="flex mb-3 ">

  <div class="">
  <img src='https://images.bewakoof.com/image/content/2024/03/27005601/best-anime-of-all-time-768x432.png'/>
  </div>
  


</div></div>
    </div>

    <Footer storeid={storeid} footercopyrighttext={footercopyrighttext} />
    </>
  )
}
