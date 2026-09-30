import arrozPato from '../assets/images/arroz_pato_real_1790777084949.jpg';
import bacalhauBatatas from '../assets/images/bacalhau_batatas_real_1790777100347.jpg';
import caldoVerdeFiletes from '../assets/images/caldo_verde_filetes_real_1790777145044.jpg';
import leiteCreme from '../assets/images/leite_creme_real_1790777068317.jpg';
import pataniscasEntradas from '../assets/images/pataniscas_entradas_real_1790777116501.jpg';
import polvoOvos from '../assets/images/polvo_ovos_real_1790777162490.jpg';
import pratoAssadoLaranja from '../assets/images/prato_assado_laranja_1790773639071.jpg';
import tabuaEnchidos from '../assets/images/tabua_enchidos_real_1790777130985.jpg';
/**
 * Dados autênticos da Tasquinha Dom Ferreira (Braga, Portugal)
 */

export interface DishItem {
  id: string;
  name: string;
  category: 'principais' | 'especiais' | 'entradas' | 'sobremesas';
  priceNote?: string;
  description: string;
  image?: string;
  tag?: string;
  highlight?: boolean;
}

export const RESTAURANT_INFO = {
  name: 'Tasquinha Dom Ferreira',
  tagline: 'O Templo da Cozinha Tradicional Minhota em Braga desde 1951',
  foundingYear: 1951,
  rating: '4.6',
  reviewsCount: '380+',
  address: {
    street: 'Rua de São Vicente, 33-35',
    postalCode: '4710-312',
    city: 'Braga',
    country: 'Portugal',
    secondaryStreet: 'Avenida das Descobertas 18, Braga',
    mapsUrl: 'https://maps.google.com/?q=Tasquinha+Dom+Ferreira+Rua+de+São+Vicente+Braga'
  },
  contacts: {
    landline: '+351 253 262 870',
    mobile: '+351 964 238 128',
    email: 'tasquinhadomferreira@gmail.com',
    facebook: 'https://www.facebook.com/tasquinha.domferreira',
    whatsapp: 'https://wa.me/351964238128'
  },
  hours: [
    { day: 'Segunda-feira', hours: '12:00 – 15:30', note: 'Almoço tradicional' },
    { day: 'Terça-feira', hours: '12:00 – 15:30', note: 'Almoço tradicional' },
    { day: 'Quarta-feira', hours: '12:00 – 15:30', note: 'Almoço tradicional' },
    { day: 'Quinta-feira', hours: '12:00 – 15:30', note: 'Dia do Cozido à Portuguesa' },
    { day: 'Sexta-feira', hours: '12:00 – 15:30', note: 'Pratos de peixe e carne' },
    { day: 'Sábado', hours: 'Encerrado', note: 'Descanso da equipa' },
    { day: 'Domingo', hours: '12:00 – 15:30', note: 'Almoço de domingo em família' }
  ]
};

// URL builders for direct messaging, calling and emailing
export function buildSmsLink(message?: string): string {
  const text = message || 'Olá Tasquinha Dom Ferreira! Gostaria de reservar uma mesa / obter informações.';
  return `sms:+351964238128?body=${encodeURIComponent(text)}`;
}

export function buildWhatsAppLink(message?: string): string {
  const text = message || 'Olá Tasquinha Dom Ferreira! Gostaria de fazer uma reserva.';
  return `https://wa.me/351964238128?text=${encodeURIComponent(text)}`;
}

export function buildEmailLink(subject?: string, body?: string): string {
  const sub = subject || 'Pedido de Reserva / Informação - Tasquinha Dom Ferreira';
  const content = body || 'Olá equipa da Tasquinha Dom Ferreira,\n\nGostaria de solicitar informações sobre disponibilidade para reserva.\n\nNome:\nNúmero de pessoas:\nData pretendida:\nHora:\nContacto:\n\nMuito obrigado!';
  return `mailto:tasquinhadomferreira@gmail.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(content)}`;
}

export function buildPhoneCallLink(type: 'landline' | 'mobile' = 'landline'): string {
  return type === 'landline' ? 'tel:+351253262870' : 'tel:+351964238128';
}

export const DISHES: DishItem[] = [
  {
    id: 'bacalhau-batatas',
    name: 'Bacalhau à Braga com Batata às Rodelas',
    category: 'principais',
    priceNote: 'Sob consulta',
    description: 'A autêntica travessa de barro da Tasquinha: bacalhau generoso com cebolada dourada, rodeado por batatas às rodelas estaladiças, azeitonas e cenoura ripada.',
    image: bacalhauBatatas,
    tag: 'Especialidade da Casa',
    highlight: true
  },
  {
    id: 'assado-laranja',
    name: 'Assado no Forno com Laranja & Batatas',
    category: 'principais',
    priceNote: 'Sob consulta',
    description: 'Travessa rústica de barro com carne suculenta assada no forno, batatinhas novas douradas, couves salteadas e fatias de laranja fresca.',
    image: pratoAssadoLaranja,
    tag: 'Prato Emblemático',
    highlight: true
  },
  {
    id: 'arroz-pato',
    name: 'Arroz de Pato Tostado em Assadeira de Barro',
    category: 'principais',
    priceNote: 'Sob consulta',
    description: 'Arroz de pato escuro e bem tostado no forno na típica assadeira de barro retangular, rematado com chouriço de carne da casa e raminho de salsa.',
    image: arrozPato,
    tag: 'Receita Tradicional',
    highlight: true
  },
  {
    id: 'polvo-ovos',
    name: 'Polvo Assado com Batatas, Grelos e Ovos',
    category: 'principais',
    priceNote: 'Sob consulta',
    description: 'Travessa farta de polvo tenro com batatas a murro da época, couve salteada, ovos cozidos às rodelas e regado com azeite virgem extra.',
    image: polvoOvos,
    tag: 'Sabor do Mar',
    highlight: true
  },
  {
    id: 'leite-creme',
    name: 'Leite Creme Queimado na Hora',
    category: 'sobremesas',
    priceNote: 'Sob consulta',
    description: 'A sobremesa mais famosa da Tasquinha servida na tradicional malga de barro, com crosta espessa de açúcar bem queimada a ferro em brasa.',
    image: leiteCreme,
    tag: 'Doçaria Regional',
    highlight: true
  },
  {
    id: 'pataniscas-entradas',
    name: 'Pataniscas Douradas de Bacalhau',
    category: 'entradas',
    priceNote: 'Sob consulta',
    description: 'Pataniscas fofas e estaladiças servidas no prato pintado à mão, com azeitonas temperadas na malguinha de barro.',
    image: pataniscasEntradas,
    tag: 'Petisco',
    highlight: true
  },
  {
    id: 'tabua-enchidos',
    name: 'Tábua de Fumeiro & Queijos Regionais',
    category: 'entradas',
    priceNote: 'Sob consulta',
    description: 'Prancha com seleção de salpicão, presunto fatiado fino, queijo curado, pão de forno rústico e pataniscas acabadas de fritar.',
    image: tabuaEnchidos,
    tag: 'Entrada Completa',
    highlight: false
  },
  {
    id: 'caldo-verde-filetes',
    name: 'Caldo Verde na Panela & Filetes com Limão',
    category: 'especiais',
    priceNote: 'Sob consulta',
    description: 'Púcaro de barro vidrado com caldo verde aveludado com couve fresca, acompanhado de travessa com filetes dourados e limão.',
    image: caldoVerdeFiletes,
    tag: 'Menu Tradicional',
    highlight: false
  },
  {
    id: 'cozido-portuguesa',
    name: 'Cozido à Portuguesa (Às Quintas)',
    category: 'especiais',
    priceNote: 'Sob consulta',
    description: 'O banquete semanal das quintas-feiras: chouriço de carne, morcela, carnes de fumeiro, couves e batatas cozidas no caldo.',
    tag: 'Às Quintas-feiras',
    highlight: false
  }
];

export const TESTIMONIALS = [
  {
    author: 'Manuel Gonçalves',
    origin: 'Braga',
    date: 'Setembro 2024',
    content: 'Uma verdadeira pérola da gastronomia bracarense. O Bacalhau à Braga é fenomenal e as porções são muito generosas. Atendimento caloroso como numa casa de família.'
  },
  {
    author: 'Teresa Moreira',
    origin: 'Porto',
    date: 'Julho 2024',
    content: 'Fomos numa quinta-feira de propósito para o Cozido à Portuguesa e superou todas as expectativas. Carnes no ponto, sabor inigualável e o leite creme no final é obrigatório!'
  },
  {
    author: 'António Faria',
    origin: 'Guimarães',
    date: 'Agosto 2024',
    content: 'Mais de 70 anos de tradição que se notam em cada garfada. O arroz de pato e o vinho verde em jarro de barro transportam-nos às tascas antigas de Portugal. 5 estrelas!'
  }
];
