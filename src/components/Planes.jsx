import { CircleCheck, MessageCircleQuestion } from "lucide-react";

function PlanesBlackGym() {
  const planes = [
    {
      title: "1 Mes pase libre",
      description: ["Entrenamientos ilimitados", "Horario de entrada libre"],
      cash: "35.000",
      precioBase: "40.000",
    },
    {
      title: "3 Meses pase libre",
      description: ["Entrenamientos ilimitados", "Horario de entrada libre"],
      cash: "95.000",
      precioBase: "105.000",
    },
    {
      title: "6 Meses pase libre",
      description: ["Entrenamientos ilimitados", "Horario de entrada libre"],
      cash: "180.000",
      precioBase: "200.000",
    },
  ];

  return (
    <section className="bg-neutral-900 text-white py-16 px-6 h-full text-center">
      <div className="w-full text-center">
        <h2 className="text-4xl font-bold mb-12 mt-36">Nuestros Precios</h2>
        <div className="flex justify-center mb-10">
          <div className="bg-neutral-800 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 cursor-default w-full max-w-[20rem] p-8 flex flex-col justify-between">
            <h3 className="text-2xl font-semibold mb-4">Inscripción</h3>
            <div className="flex flex-col gap-2 mb-4">
              <p className="text-sm text-neutral-300 text-start flex gap-3 items-start">
                <CircleCheck className="w-5 h-5 text-emerald-500" />
                Se abona una única vez
              </p>
              <p className="text-sm text-neutral-300 text-start flex gap-3 items-start">
                <CircleCheck className="w-5 h-5 text-emerald-500" />
                Aceptamos cualquier método de pago
              </p>
            </div>
            <p className="text-xl font-bold text-white mt-5">Total: $10.000</p>
          </div>
        </div>
        <h3 className="text-center text-4xl font-bold mb-12 mt-10">
          Opciones de planes
        </h3>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20">
          {planes.map((plan, index) => {
            return (
              <div
                key={index}
                className="bg-neutral-800 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 cursor-default w-full max-w-[20rem] p-8 flex flex-col justify-between"
              >
                <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
                <div className="flex flex-col gap-2 mb-4">
                  {plan.description.map((desc, index) => (
                    <p
                      key={index}
                      className="text-sm text-neutral-300 text-start flex gap-3 items-start"
                    >
                      <CircleCheck className="w-5 h-5 text-emerald-500" />{" "}
                      {desc}
                    </p>
                  ))}
                </div>
                <p className="text-xl font-bold text-white mt-5">
                  Total: ${plan.precioBase}
                </p>
                <p className="text-sm text-emerald-500 mt-2">
                  Efectivo: ${plan.cash}
                </p>
              </div>
            );
          })}
        </div>

        <a
          href="https://wa.me/5492615355439?text=Hola%2C%20quiero%20tener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20precios%20del%20gimnasio."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-neutral-800 text-white border border-white px-6 py-3 rounded-xl hover:bg-neutral-700 hover:text-green-400 transition-colors duration-300"
        >
          <p className="flex gap-3">
            <MessageCircleQuestion /> Pedir más información por WhatsApp
          </p>
        </a>
      </div>
    </section>
  );
}

export default PlanesBlackGym;
