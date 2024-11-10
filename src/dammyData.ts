type Namespace = {
  header: {
    travelTo: string;
    aboutUs: string;
    contact: string;
    countries: string;
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
    edit: string;
    restore: string;
  };
  popCountry: {
    title: string;
    population: string;
    capital: string;
  };
};

export const namespaces: Record<string, Namespace> = {
  ka: {
    header: {
      travelTo: "მოგზაურობა",
      aboutUs: "ჩვენს შესახებ",
      contact: "კონტაქტი",
      countries: "ქვეყანები",
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
      edit: "შეცვლა",
      restore: "აღდგენა",
    },
    popCountry: {
      title: "ყველაზე პოპულარული ქვეყანა",
      population: "მოსახლეობა",
      capital: "დედაქალაქი",
    },
  },
  en: {
    header: {
      travelTo: "Travel To",
      aboutUs: "About Us",
      contact: "Contact",
      countries: "Countries",
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
      edit: "Edit",
      restore: "Restor",
    },
    popCountry: {
      title: "Most popular country",
      population: "Population",
      capital: "Capital",
    },
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
