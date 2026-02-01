import MenuCard from "./MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Bebek Goreng Sambal Ijo",
    description: "Crispy fried duck served with our signature green chili sambal and fresh vegetables",
    image: "/menu-1.jpg",
  },
  {
    id: 2,
    name: "Bebek Bakar Bumbu Rujak",
    description: "Grilled duck marinated in sweet and spicy rujak sauce, served with steamed rice",
    image: "/menu-2.jpg",
  },
  {
    id: 3,
    name: "Bebek Kremes",
    description: "Traditional crispy duck with crunchy spiced flakes and aromatic herbs",
    image: "/menu-3.jpg",
  },
  {
    id: 4,
    name: "Bebek Rica-Rica",
    description: "Spicy duck dish with rich Manado-style chili sauce and fragrant spices",
    image: "/menu-4.jpg",
  },
  {
    id: 5,
    name: "Bebek Panggang Madu",
    description: "Honey-glazed roasted duck with a perfect balance of sweet and savory flavors",
    image: "/menu-5.jpg",
  },
  {
    id: 6,
    name: "Bebek Penyet",
    description: "Smashed crispy duck with traditional sambal terasi and fresh cucumber",
    image: "/menu-6.jpg",
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="section-padding bg-cream-dark/50">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest uppercase text-sm">
            Signature Dishes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mt-3 mb-4">
            Our Menu
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Hidangan bebek premium yang dibuat khusus untuk katering dan pesanan dalam jumlah besar. Sempurna untuk acara-acara, pertemuan perusahaan, dan bisnis katering.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <MenuCard
              key={item.id}
              name={item.name}
              description={item.description}
              image={item.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
