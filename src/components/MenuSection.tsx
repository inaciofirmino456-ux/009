import React, { useState } from 'react';
import { DISHES, DishItem } from '../data/restaurantData.ts';
import { MessageSquare, UtensilsCrossed } from 'lucide-react';

interface MenuSectionProps {
  onSelectDishToReserve: (dishName: string) => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectDishToReserve }) => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'principais' | 'especiais' | 'entradas' | 'sobremesas'>('todos');

  const filteredDishes = activeCategory === 'todos' 
    ? DISHES 
    : DISHES.filter((d) => d.category === activeCategory);

  const categories = [
    { key: 'todos', label: 'Todos os Pratos' },
    { key: 'principais', label: 'Pratos Principais' },
    { key: 'especiais', label: 'Especialidades & Vinho' },
    { key: 'entradas', label: 'Petiscos & Entradas' },
    { key: 'sobremesas', label: 'Sobremesas Tradicionais' },
  ] as const;

  return (
    <section id="ementa" className="py-20 sm:py-28 bg-[#F4EFE6] border-y border-[#E7DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#B45309] font-bold">
              Sabores do Minho
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-[#2C241E] mt-2 tracking-tight">
              A Nossa Ementa Tradicional.
            </h2>
            <p className="text-sm text-[#6B5E52] mt-2 max-w-xl">
              Consulte a nossa seleção de pratos confecionados diariamente com o melhor azeite virgem, carnes de fumeiro e peixe fresco.
            </p>
          </div>

          {/* Category Tabs (Segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-[#EAE2D5] rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.key
                    ? 'bg-white text-[#2C241E] shadow-xs'
                    : 'text-[#6B5E52] hover:text-[#2C241E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredDishes.map((item) => (
            <div
              key={item.id}
              className="p-4 sm:p-5 bg-white border border-[#E7DFD5] rounded-xl hover:border-[#B45309]/40 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div className="flex gap-4">
                {item.image && (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden shrink-0 bg-[#ECE4D8] border border-[#E7DFD5]">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="text-base font-bold font-display text-[#2C241E] truncate">
                      {item.name}
                    </h3>
                    <span className="text-[11px] font-semibold text-[#B45309] tracking-wide shrink-0 bg-amber-50 px-2 py-0.5 rounded">
                      Sob consulta
                    </span>
                  </div>
                  <p className="text-xs text-[#6B5E52] leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-2.5 border-t border-[#F2ECE3] flex items-center justify-between">
                <span className="text-[11px] text-[#8C7E72] capitalize">
                  {item.category === 'principais' ? 'Prato Principal' : item.category === 'especiais' ? 'Especialidade' : item.category === 'entradas' ? 'Entrada Típica' : 'Sobremesa'}
                </span>
                <button
                  onClick={() => onSelectDishToReserve(item.name)}
                  className="text-xs font-semibold text-[#B45309] hover:text-[#92400E] flex items-center gap-1 cursor-pointer"
                >
                  <MessageSquare className="w-3 h-3" />
                  <span>Consultar Preço & Pedir</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Menu Notice */}
        <div className="mt-8 text-center text-xs text-[#8C7E72]">
          * Os preços incluem IVA à taxa legal em vigor. Consulte o pessoal de sala sobre informações de alergénios alimentares ou reservas para grupos.
        </div>

      </div>
    </section>
  );
};
