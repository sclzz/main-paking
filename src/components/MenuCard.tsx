interface MenuCardProps {
  name: string;
  description: string;
  image: string;
  index: number;
}

const MenuCard = ({ name, description, image, index }: MenuCardProps) => {
  return (
    <div 
      className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-border/50"
      style={{ 
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Image Container */}
      <div className="aspect-[4/3] overflow-hidden bg-cream-dark relative">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          onError={(e) => {
            // Fallback to placeholder if image fails to load
            e.currentTarget.src = "/placeholder.svg";
          }}
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default MenuCard;
