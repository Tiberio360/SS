
import { Mail, MessageCircle, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contacto" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Te sientes abrumado o simplemente no sabés por dónde empezar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos tu acompañante diario para entender lo que sientes, 
            aprender a gestionarlo y tomar decisiones con más claridad...
            Seguro que juntos haremos las cosas mejores.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Contáctanos
            </h3>

            <div className="space-y-6">


              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Mail className="text-blue-600" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <p className="text-gray-600">hola@MLearn.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg">
                  <MessageCircle className="text-purple-600" size={24} />
                </div>
                <a href="https://www.instagram.com/enjova_oficial" target="_blank" className="flex flex-col">
                  <h4 className="font-semibold text-gray-900">Instagram</h4>
                  <p className="text-gray-600">@MLearn_oficial</p>
                </a>
              </div>
            </div>
          </div>
          <div>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScKdMvNwXslo6ubJEqhXJy8XN_PMH4w-RdyLKHCXChJ3ERLVQ/viewform?usp=header" target="_blank"
              className="bg-teal-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 transition-all duration-300 hover:scale-105 flex items-center justify-center">
              Cuentanos...
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
