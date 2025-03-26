import { useState } from "react";


const faqs = [
  {
    question: "¿Necesito experiencia previa para entrenar?",
    answer:
      "Para nada. Te acompañamos desde cero con rutinas adaptadas. No te hagas drama, todos empezamos alguna vez.",
  },
  {
    question: "¿Se paga matrícula o inscripción?",
    answer:
      "No cobramos matrícula, solo el abono mensual. Te damos la flexibilidad de arrancar cuando quieras.",
  },
  {
    question: "¿Hay entrenamientos personalizados?",
    answer:
      "¡Obvio! Podés coordinar con nuestro entrenador para armar un plan a tu medida.",
  },
  {
    question: "¿Qué pasa si no puedo ir todos los días?",
    answer:
      "No pasa nada, podés venir los días que quieras. Eso sí, para progresar, lo ideal es mantener cierta constancia.",
  },
];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center transition-colors duration-300"
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <span className="text-gray-600 text-2xl">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-4 overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-40 py-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
