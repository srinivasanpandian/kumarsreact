import React from 'react';

const menuData = [
  {
    category: "KUMAR'S ORIGINALS",
    subtitle: "These specialties were first introduced by Kumar's and most loved by all",
    items: [
      { name: 'NAATU KOZHI VARUVAL', desc: 'Country chicken stir-fried with aromatic spices', price: '$15.99' },
      { name: 'NANDU BONELESS', desc: 'Shell free crab meat, tossed in mild aromatic seasoning', price: '$17.99' },
      { name: 'MUTTON CHOPS', desc: 'Goat chops sauteed in a grilled masala sauce', price: '$17.99' },
      { name: 'CHETTINAD NANDU MASALA', desc: 'Fresh blue crabs, served in a savory curry base', price: '$17.99' },
      { name: 'NAATU KOZHI KOLAMBU', desc: 'Country Chicken curry, made with peppery gravy in sesame oil', price: '$15.99' },
      { name: 'KARI DOSAI', desc: 'Goat-grilled, chopped up, mixed with egg and topped on a dosai', price: '$14.99' },
      { name: 'JIGARTHANDA', desc: 'Classic Madurai favorite. Sweetened milk with jellied almond gum', price: '$5.99' },
    ],
  },
  {
    category: 'NON-VEG APPETIZERS - CHICKEN',
    items: [
      { name: 'CHENNAI CHILLI CHICKEN', desc: 'Deep fried chicken nuggets with spicy marinade', price: '$12.99' },
      { name: 'KOZHI VARUVAL', desc: 'Chicken stir-fried with aromatic spice masala', price: '$13.49' },
      { name: 'CHICKEN CHINTHAMANI', desc: 'Boneless chicken with lots of red chilies goodness', price: '$12.99' },
      { name: 'PEPPER CHICKEN DRY', desc: 'Boneless chicken with ground black pepper masala', price: '$12.99' },
      { name: 'PALLIPALAYAM CHICKEN DRY', desc: 'Kongu-style chicken fry with sliced coconuts', price: '$13.49' },
    ],
  },
  {
    category: 'MUTTON',
    items: [
      { name: 'MUTTON VARUVAL', desc: 'Goat cubes stir-fried with aromatic spice masala', price: '$14.99' },
      { name: 'MUTTON SUKKA BONELESS', desc: 'Boneless goat cubes, stir-fried in peppery sauce', price: '$16.99' },
      { name: 'KAARA MUTTON PERATTAL', desc: 'Spicy red chilli-based boneless goat fry', price: '$16.99' },
    ],
  },
  {
    category: 'WEEKDAY DINNER SPECIALS',
    items: [
      { name: 'MONDAY', desc: 'Indo Chinese Specials', price: 'starting from $9.99' },
      { name: 'TUESDAY', desc: 'CLOSED', price: '' },
      { name: 'WEDNESDAY', desc: 'Kuska Combo', price: 'starting from $9.99' },
      { name: 'THURSDAY', desc: 'Dosa Unlimited 7 varieties', price: 'starting from $9.99' },
      { name: 'FRIDAY', desc: 'Parotta Specials 7 varieties', price: 'starting from $9.99' },
      { name: 'SATURDAY', desc: 'Tiffin Specials Dosa, Pongal, Vadai, Idli, Kesari, Coffee', price: 'starting from $9.99' },
      { name: 'SUNDAY', desc: 'Biryani Specials 5 varieties', price: 'starting from $9.99' },
    ],
  },
  {
    category: 'COMBO',
    items: [
      { name: 'IDLY KOLAMBU COMBO', desc: '3Idly + Curry 12 OZ (Chicken Leg, Flour, Meat, Fish)', price: '$16.99' },
      { name: 'KAL DOSA KOLAMBU COMBO', desc: '2Kal Dosa + Curry 12 OZ (Chicken, Flour, Meat, Fish)', price: '$16.99' },
      { name: 'KUSKA + APPETIZER COMBO', desc: 'Plain Kuska 24 OZ, Appetizer 12 OZ (Rice, Spicy, Chicken, cauliflower, Meat, Pepper)', price: '$15.99' },
      { name: 'ABCD COMBO', desc: '(Rice, Spicy, Chicken, Meat, Vegan)', price: '$34.99' },
      { name: 'FAMILY COMBO', desc: '(Rice, Spicy, Chillies, Paneer, Chicken, cauliflower, Meat)', price: '$65.99' },
      { name: 'BUCKET BIRYANI COMBO', desc: '(Rice, Paneer, Chicken, cauliflower, Meat)', price: '$45.99' },
      { name: 'Half Tray', desc: '(Rice, Spicy, Chicken, Meat)', price: '$60.00' },
      { name: 'QUARTER Tray', desc: '(Rice, Spicy, Chicken, Meat)', price: '$40.00' },
      { name: 'BYOB COMBO PLATTER', desc: '(Chicken pepper fry, Masala Omelette, Chilli fish, Masala Egg, Peanuts, Chips, Salad)', price: '$14.99' },
    ],
  },
  {
    category: 'BEAST MEALS',
    items: [
      { name: 'BEAST MEALS (4-6 people) Pre-order required', desc: 'Tandoor Chicken, Mutton Chops, Pepper Prawns, Tandoor Pomfret, Chicken Biryani, Eggs, Chicken Curry, Mutton Kolambu, Saalna, Parotta, Payasam, Basundhi, Gulab Jamun, Salad, Raita', price: '$149.99' },
    ],
  },
  {
    category: 'SOUPS',
    items: [
      { name: 'MELAGU RASAM', desc: 'Thin tangy tomato vegetarian soup', price: '$3.99' },
      { name: 'KOZHI SOUP', desc: 'Spicy country style chicken soup', price: '$4.99' },
      { name: 'AATU KAAL SOUP', desc: 'Simmered bone soup from goat leg', price: '$5.49' },
    ],
  },
  {
    category: 'SEAFOOD',
    items: [
      { name: 'VANJARAM FRY', desc: 'King fish pan seared with signature dry rub', price: '$13.99' },
      { name: 'MEEN VARUVAL', desc: 'Fresh tilapia with bones fried village style', price: '$12.99' },
      { name: 'CHENNAI CHILLI FISH', desc: 'Boneless fish fried into spicy nuggets', price: '$12.99' },
      { name: 'PEPPER PRAWNS', desc: 'Tiger shrimp tossed in black pepper and garlic', price: '$14.99' },
      { name: 'NETHILI FRY', desc: 'spicy anchovies made into crispy fritters', price: '$13.99' },
    ],
  },
  {
    category: 'VEG APPETIZERS',
    items: [
      { name: 'CHENNAI CHILLI CAULIFLOWER', desc: 'Deep fried cauliflower florets with spicy marinade', price: '$11.99' },
      { name: 'CHENNAI CHILLI MUSHROOM', desc: 'Spicy fried mushroom fritters', price: '$12.49' },
      { name: 'CHENNAI CHILLI PANEER', desc: 'Cottage cheese cubes fried with spices', price: '$13.49' },
      { name: 'BABY CORN PEPPER FRY', desc: 'Fried baby corn tossed in a black pepper sauce', price: '$13.49' },
      { name: 'SEPPAN KELANGU FRY', desc: 'Taro roots, peeled, sliced, steamed, fried & then tossed in seasoning. Simple!', price: '$12.99' },
      { name: 'URULAI MILAGU PERATTAL', desc: 'Sliced potato, fried and tossed in black pepper sauce', price: '$12.49' },
    ],
  },
  {
    category: 'EGG ITEMS',
    items: [
      { name: 'OMLET', desc: 'Eggs beaten with onions, cilantro, chilies and seasoning', price: '$4.99' },
      { name: 'HALF BOIL', desc: 'Sunny side up!', price: '$2.99' },
      { name: 'KALAKKI', desc: 'Semi-cooked gooey egg turnover', price: '$2.99' },
      { name: 'MUTTAI PORIYAL', desc: 'Hard Scrambled eggs with onions & seasoning', price: '$4.49' },
      { name: 'EGG CURRY', desc: 'Sliced boiled eggs in a southern-style curry', price: '$12.99' },
    ],
  },
  {
    category: 'NON-VEG CURRIES',
    subtitle: 'Served with Rice',
    items: [
      { name: 'KOZHI VARUTHA CURRY', desc: 'Chicken curry with a hint of pepper & masala', price: '$13.99' },
      { name: 'GUNTUR KODI KOORA', desc: 'Andhra-style chicken curry in red chilli paste', price: '$13.99' },
      { name: 'PALLIPALAYAM CHICKEN CURRY', desc: 'Kongu specialty chicken dish with sliced coconuts', price: '$13.99' },
      { name: 'PEPPER CHICKEN GRAVY', desc: 'Black pepper based boneless chicken curry', price: '$13.99' },
      { name: 'CHICKEN SAALNA', desc: 'Bone-in chicken cubes in a thin coconut curry', price: '$6.99' },
      { name: 'MUTTON KOLAMBU', desc: 'Baby goat curry in Chettinad style', price: '$15.99' },
      { name: 'BONELESS MUTTON CURRY', desc: 'Kolambu made with tender boneless goat cubes', price: '$17.99' },
      { name: 'MUTTON CHOPS MASALA', desc: 'Goat chops cooked to tender perfection with a masala base', price: '$17.99' },
      { name: 'MEEN KOLAMBU', desc: 'Nethili | Tilapia - Choice of fish in a tangy tomato curry', price: '$13.99' },
    ],
  },
  {
    category: 'PAROTTA & CHAPATHI',
    items: [
      { name: 'OOR STYLE PAROTTA - SAALNA', desc: 'Layered flaky Malabar bread with choice of Saalna', price: '$12.49' },
      { name: 'CHAPATHI - SAALNA', desc: 'SWhole wheat tortillas, desi style with choice of curry', price: '$12.49' },
      { name: 'KOTHU PAROTTA', desc: 'Parotta shredded and tossed with choice of protein below', price: '(EGG/VEG $12 | CHICKEN $14 | MUTTON $15)' },
      { name: 'SINGLE PIECE PAROTTA', desc: '', price: '$2.99' },
      { name: 'SINGLE PIECE CHAPATHI', desc: '', price: '$2.49' },
    ],
  },
  {
    category: 'BIRYANI & RICE',
    items: [
      { name: 'THALAPAKATTI MUTTON BIRYANI', desc: 'Dindigul-style special goat biryani in jeera rice', price: '$14.99' },
      { name: 'AMBUR CHICKEN BIRYANI', desc: 'Red chilli paste biryani with chicken & spices in jeera rice', price: '$13.99' },
      { name: 'CHETTINAD VEGGIE BIRYANI', desc: 'Traditional southern style mixed veg jeera rice biryani', price: '$13.49' },
      { name: 'CURRY FRIED RICE (OR) NOODLES', desc: 'Basmati rice tossed with curry seasoning', price: '(VEG $12 | EGG $13 | CHICKEN $14)' },
      { name: 'STREET STYLE- FRIED RICE (OR) NOODLES', desc: 'straight from the Indian streets, no kidding!', price: '(VEG $12 | EGG $13 | CHICKEN $14 | SHRIMP $15)' },
    ],
  },
  {
    category: 'VEG CURRIES',
    subtitle: 'Served with Rice',
    items: [
      { name: 'MUSHROOM VARUTHA CURRY', desc: 'White mushrooms in a pepper & masala base', price: '$12.99' },
      { name: 'KAARA KOLAMBU', desc: 'Okra | Kathirika (Choice of vegetable in a tangy tomato curry)', price: '$12.99' },
      { name: 'CHANNA MASALA', desc: 'Garbanzo beans cooked with spices', price: '$11.99' },
      { name: 'ENNAI KATHIRIKKAI KOLAMBU', desc: 'Whole fried Eggplants in a tangy curry', price: '$12.99' },
      { name: 'VEG SAALNA', desc: 'Mixed veggies in a thin coconut curry', price: '$6.99' },
      { name: 'DAL TADKA', desc: 'Whole peeled garlic in a tangy tamarind curry', price: '$11.99' },
    ],
  },
  {
    category: 'TANDOOR',
    items: [
      { name: 'CHICKEN TANDOORI', desc: 'Chicken leg quarters, marinated and baked in a clay oven', price: '$13.99' },
      { name: 'TANDOORI POMFRET', desc: 'Whole pomfret baked to juicy perfection', price: '$15.99' },
      { name: 'CHICKEN TIKKA', desc: 'Boneless chicken cubes, skewered in tandoor', price: '$13.99' },
      { name: 'NAAN', desc: 'Garlic | Chilli - add for $1', price: '$3.49' },
    ],
  },
  {
    category: 'DOSA & SOUTH INDIAN',
    items: [
      { name: 'DOSAI', desc: 'Rice batter made into a crispy crepe', price: '$9.99' },
      { name: 'MUTTA DOSAI', desc: 'Eggs beaten with black pepper & cumin, spread on dosai', price: '$12.49' },
      { name: 'KAL DOSAI', desc: 'A homestyle thicker dosai, served with a choice of curry', price: '$10.99' },
      { name: 'UTHAPPAM', desc: 'Savory rice pancake - Add Onion/Chili/Veggie for $1', price: '$10.99' },
    ],
  },
  {
    category: 'TIFFIN ITEMS',
    items: [
      { name: 'ULUNDHU VADAI', desc: 'Savory Indian donuts, served with chutneys and sambar', price: '$8.49' },
      { name: 'IDLI SET', desc: 'Steamed rice patties with chutneys and sambar', price: '$8.49' },
      { name: 'IDLI VADAI COMBO', desc: '2 Idlis and a vadai, served with chutneys and sambar', price: '$9.49' },
      { name: 'SAMBAR VADAI', desc: 'Two vadais soaked in sambar to melt in your mouth', price: '$8.99' },
      { name: 'PODI IDLI', desc: 'Cubed Idlis, tossed in ghee and chutney powder', price: '$9.99' },
      { name: 'RASAM VADAI', desc: 'Two vadais soaked in melegu rasam soup', price: '$8.99' },
      { name: 'VEN PONGAL', desc: 'Porridge made with rice and lentils, with peppercorns', price: '$10.99' },
      { name: 'POORI KELANGU', desc: 'Puffed wheat bread with savory potato', price: '$10.99' },
      { name: 'SINGLE PIECE POORI', desc: 'Puffed wheat bread', price: '$3.99' },
    ],
  },
  {
    category: 'DESSERTS',
    items: [
      { name: 'BASUNDI', desc: 'Whole milk boiled with saffron, cardamom, and cane sugar until condensed', price: '$4.99' },
      { name: 'KULFI', desc: 'Desi frozen homestyle dairy ice cream', price: '$3.99' },
      { name: 'GHEE KESARI', desc: 'Perfectly sweetened grits with ghee', price: '$3.99' },
      { name: 'GULAB JAMUN', desc: 'Indian-style donut holes in sugary syrup', price: '$3.99' },
      { name: 'PAYASAM', desc: 'Sweet milk kheer with vermicelli', price: '$3.99' },
      { name: 'RASMALAI', desc: 'Homemade cheese soaked in milky goodness', price: '$3.99' },
    ],
  },
  {
    category: 'NORTH INDIAN',
    subtitle: 'SERVED WITH RICE',
    items: [
      { name: 'SAAG', desc: 'Choice of protein cooked with blended spinach & spices', price: '(CHICKEN $14 | GOAT $15 | PANEER $13)' },
      { name: 'TIKKA MASALA', desc: 'Choice of protein cooked in creamy tomato sauce', price: '(PANEER $14 | CHICKEN $15)' },
      { name: 'MUTTER PANEER', desc: 'Cottage cheese and green peas in a masala sauce', price: '$12.99' },
      { name: 'DAL TADKA', desc: 'Soaked and steamed lentils, tempered with mild spices', price: '$11.99' },
    ],
  },
  {
    category: 'DRINKS',
    items: [
      { name: "KUMAR'S SPECIAL JIGARTHANDA", desc: 'A madurai specialty. Ask your waiter for more details', price: '$5.99' },
      { name: 'KAAPI', desc: 'Traditional south indian slow drip caffe latte', price: '$2.99' },
      { name: 'BAKERY TEA', desc: 'Chai tea latte with ginger and cardamom', price: '$2.99' },
      { name: 'ROSE MILK', desc: 'Rose Infused creamy sweetened milk', price: '$3.99' },
      { name: 'NANNAARI SARBETH', desc: 'Sarsaparilla Root & Bael fruit extract. Healthy, yet tasty!', price: '$3.99' },
      { name: 'BADHAM PAAL', desc: 'House-made sweetened almond milk', price: '$4.99' },
      { name: 'MANGO LASSI', desc: 'Yogurt smoothie sweetened with mango pulp', price: '$3.99' },
      { name: 'MANGO MILK SHAKE', desc: 'Yogurt smoothie sweetened with mango pulp', price: '$3.99' },
    ],
  },
];

const MenuPage = () => {
  return (
    <main className="bg-[#f4fafd] min-h-screen pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-center mb-8 mt-4">
  <span className="w-12 border-t border-secondary mr-4"></span>
  <h1 className="text-[30px] font-simplifica text-[#66bfbf] font-semibold text-center whitespace-nowrap">
    Indian Food Menu
  </h1>
  <span className="w-12 border-t border-secondary ml-4"></span>
</div>

        {menuData.map((cat, idx) => (
          <section key={cat.category} className="mb-12">
            <div className="text-center mb-4">
              <h2 className="text-[30px] font-simplifica font-semibold text-[#0f172b] mb-1 uppercase tracking-wider">{cat.category}</h2>
              {cat.subtitle && <h3 className="font-simplifica text-[20px] font-semibold text-gray-700">({cat.subtitle})</h3>}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cat.items.map((item, i) => (
                <div key={i} className="flex flex-col border-b border-gray-200 pb-4 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-simplifica  text-[#0f172b] text-[25px] font-bold uppercase tracking-wide">{item.name}</span>
                    <span className="text-[22px] font-semibold text-[#66bfbf] font-simplifica">{item.price}</span>
                  </div>
                  <span className="italic text-[22px] font-semibold text-[#666565] font-simplifica mt-1">{item.desc}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

export default MenuPage; 