import MenuCard from "./MenuCard";

const menuItems = [
  {
    id: 1,
    name: "Bebek Panggang + Nasi Hainam",
    description: "Rasakan Cita Rasa Bebek Panggang, Nasi Hainam, Saus Hoisin, Chili Oil Dalam Cita Rasa Yang Autentik",
    image: "/menu-1.jpg",
  },
  {
    id: 2,
    name: "Bebek Panggang + Bakmie Hongkong",
    description: "Bebek Panggang Peking Disajikan Dengan Bakmie Hongkong Serta Hoisin Sauce Dan Chili Oil Dalam Satu Rasa Autentik",
    image: "/menu-2.jpg",
  },
  {
    id: 3,
    name: "Nasi Hainam",
    description: "Nasi Hainan disajikan dengan rasa yang Autentik dan Lezat",
    image: "/menu-3.jpg",
  },
  {
    id: 4,
    name: "Bakmie Hongkong",
    description: "Bakmie Hongkong disajikan dengan rasa yang Autentik dan Lezat",
    image: "/menu-4.jpg",
  },
  {
    id: 5,
    name: "BEBEK PANGGANG 1 EKOR",
    description: "Bebek Panggang Peking 1 Ekor Dipotong dengan Rasa Yang Autentik Lengkap Dengan Sauce Hoisin Dan Chili Oil",
    image: "/menu-5.jpg",
  },
  {
    id: 6,
    name: "Bebek Panggang 1/2 Ekor",
    description: "Bebek Panggang Peking 1/2 Ekor Dipotong dengan Rasa Yang Autentik Lengkap Dengan Sauce Hoisin Dan Chili Oil",
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
            Bebek Peking dengan cita rasa autentik, cocok untuk acara keluarga, pertemuan perusahaan, dan berbagai acara spesial
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
