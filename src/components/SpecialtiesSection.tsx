import React from 'react';
import { DISHES, DishItem } from '../data/restaurantData.ts';
import { MessageSquare, Utensils, Sparkles } from 'lucide-react';

interface SpecialtiesSectionProps {
  onSelectDishToReserve: (dishName: string) => void;
}

export const SpecialtiesSection: React.FC<SpecialtiesSectionProps> = ({ onSelectDishToReserve }) => {
  const highlightDishes = DISHES.filter((d) => d.image && d.highlight);

  return (
    <section id="especialidades" className="py-20 sm:py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <span className="text-xs uppercase tracking-widest text-[#B45309] font-bold">
            Tradição & Mestria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#2C241E] mt-2 mb-4 tracking-tight">
            Pratos que contam a história de Braga.
          </h2>
          <p className="text-base text-[#6B5E52] leading-relaxed">
            Na Tasquinha Dom Ferreira cozinhamos sem pressas. Ingredientes selecionados dos melhores produtores locais do Minho, servidos com a generosidade de antigamente.
          </p>
        </div>

        {/* Real Dishes from Customer Screenshots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {highlightDishes.map((dish) => (
            <div
              key={dish.id}
              className="group bg-white border border-[#E7DFD5] rounded-2xl overflow-hidden hover:border-[#B45309]/50 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Dish Photo */}
              <div className="relative aspect-4/3 overflow-hidden bg-[#ECE4D8]">
                {dish.image ? (
                  <img
                    src={dish.image}
                    alt={dish.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-[#8C7E72]">
                    <Utensils className="w-8 h-8" />
                  </div>
                )}
                {/* Quiet unboxed text tag over photo gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-white/95 tracking-wide">
                    {dish.tag}
                  </span>
                </div>
              </div>

              {/* Dish Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold font-display text-[#2C241E] group-hover:text-[#B45309] transition-colors">
                      {dish.name}
                    </h3>
                    <span className="text-xs font-semibold text-[#B45309] tracking-wide shrink-0">
                      Preço sob consulta
                    </span>
                  </div>
                  <p className="text-xs text-[#6B5E52] leading-relaxed line-clamp-3 mb-4">
                    {dish.description}
                  </p>
                </div>

                {/* Direct Action */}
                <button
                  onClick={() => onSelectDishToReserve(dish.name)}
                  className="w-full py-2.5 px-3 bg-[#FAF7F2] hover:bg-[#B45309] hover:text-white border border-[#E7DFD5] hover:border-[#B45309] rounded-xl text-xs font-semibold text-[#4A3F35] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Consultar Preço & Disponibilidade</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Banner: Quinta-Feira do Cozido */}
        <div className="mt-12 p-6 sm:p-8 bg-[#2C241E] text-white rounded-2xl relative overflow-hidden flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#FBBF24] tracking-wider uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Especialidade Semanal Imperdível
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
              Quinta-Feira: O Tradicional Cozido à Portuguesa
            </h3>
            <p className="text-xs sm:text-sm text-[#D5C9BD] leading-relaxed">
              Todas as quintas-feiras ao almoço preparamos um dos mais afamados cozidos à portuguesa de Braga. Enchidos genuínos, carnes selecionadas de fumeiro e legumes frescos da região. Recomenda-se reserva antecipada!
            </p>
          </div>
          <button
            onClick={() => onSelectDishToReserve('Cozido à Portuguesa de Quinta-feira')}
            className="px-6 py-3 bg-[#FBBF24] hover:bg-[#F59E0B] text-[#2C241E] font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 whitespace-nowrap"
          >
            Reservar Mesa para Quinta-Feira
          </button>
        </div>

      </div>
    </section>
  );
};
