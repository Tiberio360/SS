
import { Store, Truck, Users, MapPin } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Store,
      number: "500+",
      label: "Restaurantes Activos",
      color: "text-teal-600"
    },
    {
      icon: Truck,
      number: "1,000+",
      label: "Repartidores",
      color: "text-orange-600"
    },
    {
      icon: Users,
      number: "50,000+",
      label: "Clientes Satisfechos",
      color: "text-slate-600"
    },
    {
      icon: MapPin,
      number: "15+",
      label: "Ciudades",
      color: "text-teal-600"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-teal-500 to-orange-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Números que Hablan por Sí Solos
          </h2>
          <p className="text-xl text-white opacity-90">
            Una comunidad en crecimiento constante
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white bg-opacity-20 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                <stat.icon className="text-white" size={32} />
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.number}
              </div>
              <div className="text-white opacity-90">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
