type Namespace = {
  header: {
    travelTo: string;
    aboutUs: string;
    contact: string;
  };
  hero: {
    title: string;
    text: string;
    button: string;
  };
  aboutUs: {
    title: string;
    text: string;
    image: string;
  };
  aboutCompany: Array<{
    name: string;
    text: string;
    image: string;
  }>;
  country: {
    title: string;
    addCountry: string;
    delete: string;
    restore: string;
  };
  countries: Array<{
    georgianName: string;
    georgianCapital: string;
    georgianAbout: string;
    name: string;
    population: number;
    capital: string;
    about: string;
    image: string;
    id: string;
    like: number;
  }>;
};

export const namespaces: Record<string, Namespace> = {
  ka: {
    header: {
      travelTo: "მოგზაურობა",
      aboutUs: "ჩვენს შესახებ",
      contact: "კონტაქტი",
    },
    hero: {
      title: "აღმოაჩინე მსოფლიო ჭიქით",
      text: `დაიწყეთ მოგზაურობა მსოფლიოს ყველაზე დახვეწილ ვენახებში უნიკალური 
            ღვინოებითა და დაუვიწყარი გამოცდილებით. აღმოაჩინეთ ხელოვნების კულტურა 
            და ვნება ყოველი ბოთლის მიღმა ჩვენი კურირებული ღვინის ტურებით`,
      button: "იხილე მეტი",
    },
    aboutUs: {
      title: "ჩვენს შესახებ",
      text: `WineWander-ში ჩვენი მიზანია მოგზაურების შთაგონება და დაკავშირება
            მსოფლიოს საუკეთესო ღვინის რეგიონები. ჩვენი მიზანია მოგაწოდოთ ავთენტური,
            გამოცდილების გამდიდრება, რომელიც აღნიშნავს როგორც კულტურას, ასევე
            მეღვინეობის ოსტატობა. კურირებული ტურების საშუალებით ჩვენ ვცდილობთ
            დაუვიწყარი მოგონებების შექმნა, ღვინისადმი სიყვარულის გაღვივება და
            ხელი შეუწყოს მდგრადი ტურიზმს თითოეულ რეგიონში, რომელსაც ჩვენ ვსტუმრობთ.`,
      image: "company-staff.jpg",
    },
    aboutCompany: [
      {
        name: "ჩვენი მისია",
        text: `WineWander-ში ჩვენი მიზანია მოგზაურების შთაგონება და დაკავშირება
                მსოფლიოს საუკეთესო ღვინის რეგიონები. ჩვენი მიზანია მოგაწოდოთ ავთენტური,
                გამოცდილების გამდიდრება, რომელიც აღნიშნავს როგორც კულტურას, ასევე
                მეღვინეობის ოსტატობა. კურირებული ტურების საშუალებით ჩვენ ვცდილობთ
                დაუვიწყარი მოგონებების შექმნა, ღვინისადმი სიყვარულის გაღვივება და
                ხელი შეუწყოს მდგრადი ტურიზმს თითოეულ რეგიონში, რომელსაც ჩვენ ვსტუმრობთ.`,
        image: "vineyard.jpg",
      },
      {
        name: "კომპანიის ისტორია",
        text: `WineWander დაიბადა ღვინისადმი საერთო გატაცების შედეგად, მოგზაურობა,
              და კულტურა. რაც დაიწყო, როდესაც რამდენიმე მეგობარი ვენახებს იკვლევდა
              გადაიზარდა აღმოჩენების გლობალურ მოგზაურობაში. შთაგონებული
              მდიდარი ტრადიციები და თითოეული რეგიონის უნიკალური არომატი, ჩვენ დავიწყეთ
              შექმენით კურირებული ღვინის ტურები, რომლებიც აერთიანებს კვლევას, განათლებას და
              დაუვიწყარი გამოცდილება ღვინის მოყვარულთათვის.`,
        image: "marani.jpg",
      },
    ],
    country: {
      title: "აღმოაჩინეთ მიმართულება",
      addCountry: "დაამატე ქვეყანა",
      delete: "წაშლა",
      restore: "აღდგენა",
    },
    countries: [
      {
        name: "იტალია",
        population: 58.94,
        capital: "რომი",
        about: `იტალიის ღვინის კულტურა არის ისტორიის, ტრადიციის და
                ვნება. მრავალფეროვანი რეგიონებით, ძირძველი ყურძნით და დროში დამსახურებული
                მეღვინეობის მეთოდები, ის გთავაზობთ უნიკალურ და დაუვიწყარ
                გამოცდილება.`,
        image: "vineyards-italy.jpg",
        id: "1",
        like: 10,
        georgianAbout: "",
        georgianName: "",
        georgianCapital: "",
      },
      {
        name: "საფრანგეთი",
        population: 67.97,
        capital: "პარიზი",
        about: `საფრანგეთის ღვინის კულტურა ცნობილია თავისი მდიდარი ისტორიით,
                მრავალფეროვანი რეგიონები და მსოფლიო დონის ვენახები. ბორდოდან ბურგუნდიაში,
                იგი აღნიშნავს ტრადიციას, ხელოსნობას და მეღვინეობის ხელოვნებას..`,
        image: "vineyards-France.jpg",
        id: "2",
        like: 16,
        georgianAbout: "",
        georgianName: "",
        georgianCapital: "",
      },
      {
        name: "საქართველო",
        population: 3.713,
        capital: "თბილისი",
        about: `საქართველო, ღვინის სამშობლო, ამაყობს 8000 წლიანი ტრადიციით
                უნიკალური ქვევრის მეღვინეობით. მისი მდიდარი კულტურა აერთიანებს უძველეს ტექნიკას,
                მრავალფეროვანი ყურძნის ჯიშები და ძლიერი ღვინის ფესტივალები.`,
        image: "vineyards-georgia.jpg",
        id: "3",
        like: 90,
        georgianAbout: "",
        georgianName: "",
        georgianCapital: "",
      },
    ],
  },
  en: {
    header: {
      travelTo: "Travel To",
      aboutUs: "About Us",
      contact: "Contact",
    },
    hero: {
      title: "Explore the World, One Glass at a Time",
      text: `Embark on a journey through the worlds most exquisite 
            vineyards savoring unique wines and unforgettable experiences. 
            Discover the art culture and passion behind every bottle with 
            our curated wine tours`,
      button: "Follow For More",
    },
    aboutUs: {
      title: "About Us",
      text: `At WineWander, our goal is to inspire and connect travelers with
                    the world’s finest wine regions. We aim to provide authentic,
                    enriching experiences that celebrate both the culture and
                    craftsmanship of winemaking. Through curated tours, we strive to
                    create unforgettable memories, foster a love for wine, and
                    promote sustainable tourism in each region we visit.`,
      image: "company-staff.jpg",
    },
    aboutCompany: [
      {
        name: "Our Mission",
        text: `At WineWander, our goal is to inspire and connect travelers with
                    the world’s finest wine regions. We aim to provide authentic,
                    enriching experiences that celebrate both the culture and
                    craftsmanship of winemaking. Through curated tours, we strive to
                    create unforgettable memories, foster a love for wine, and
                    promote sustainable tourism in each region we visit.`,
        image: "vineyard.jpg",
      },
      {
        name: "Our Story",
        text: `WineWander was born out of a shared passion for wine, travel,
                    and culture. What started as a few friends exploring vineyards
                    has grown into a global journey of discovery. Inspired by the
                    rich traditions and unique flavors of each region, we set out to
                    create curated wine tours that blend exploration, education, and
                    unforgettable experiences for fellow wine lovers.`,
        image: "marani.jpg",
      },
    ],
    country: {
      title: "Discover Wine Destinations",
      addCountry: "Add Country",
      delete: "Delete",
      restore: "Restor",
    },
    countries: [
      {
        name: "italy",
        population: 58.94,
        capital: "Rome",
        about: `Italy's wine culture is a rich tapestry of history, tradition, and
                    passion. With diverse regions, indigenous grapes, and time-honored
                    winemaking methods, it offers a unique and unforgettable
                    experience.`,
        image: "vineyards-italy.jpg",
        id: "1",
        like: 10,
        georgianAbout: "",
        georgianName: "",
        georgianCapital: "",
      },
      {
        name: "France",
        population: 67.97,
        capital: "Paris",
        about: `France's wine culture is renowned for its rich history, 
                    diverse regions, and world-class vineyards. From Bordeaux to Burgundy, 
                    it celebrates tradition, craftsmanship, and the art of winemaking.`,
        image: "vineyards-France.jpg",
        id: "2",
        like: 16,
        georgianAbout: "",
        georgianName: "",
        georgianCapital: "",
      },
      {
        name: "Georgia",
        population: 3.713,
        capital: "Tbilisi",
        about: `Georgia, the birthplace of wine, boasts an 8,000-year-old tradition 
                  with unique qvevri winemaking. Its rich culture blends ancient techniques, 
                  diverse grape varieties, and vibrant wine festivals.`,
        image: "vineyards-georgia.jpg",
        id: "3",
        like: 90,
        georgianAbout: "",
        georgianName: "",
        georgianCapital: "",
      },
    ],
  },
};

export const locales = Object.keys(namespaces);
export const defaultLocale = "ka";

type NamespaceValue = string | number | boolean | object | null | undefined;

function getNestedValue<T extends NamespaceValue>(
  obj: T,
  key: string,
): NamespaceValue {
  return key.split(".").reduce<NamespaceValue | undefined>((o, i) => {
    if (o && typeof o === "object" && i in o) {
      return (o as Record<string, NamespaceValue>)[i];
    }
    return undefined;
  }, obj) as NamespaceValue;
}

export function getTranslation(lang?: string) {
  if (!lang || !locales.includes(lang)) {
    console.warn("Unknown locale, falling back to default.");
    lang = defaultLocale;
  }

  const selectedNamespace = namespaces[lang as keyof typeof namespaces];

  return (key: string): NamespaceValue => {
    const result = getNestedValue(selectedNamespace, key);
    return result;
  };
}
