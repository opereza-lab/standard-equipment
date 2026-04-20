import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacidadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-[80px]" style={{ background: "#f5f7fa", minHeight: "100vh" }}>
        <div className="max-w-[860px] mx-auto px-6 py-20">
          <p className="text-[#e07820] text-xs font-bold tracking-widest uppercase mb-4">Legal</p>
          <h1 className="text-4xl font-black mb-2" style={{ color: "#0d1528" }}>Política de Privacidad</h1>
          <p className="text-gray-400 text-sm mb-12">Última actualización: Abril 2026</p>

          <div className="space-y-10 text-gray-700 text-sm leading-relaxed">

            <section>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#0d1528" }}>1. Identificación del Responsable</h2>
              <p>
                Standard Equipment SpA, con domicilio en Santiago, Chile, es responsable del sitio web{" "}
                <strong>www.standard-equipment.cl</strong> y del tratamiento de los datos personales recopilados
                a través de él. Para consultas relacionadas con esta política, puede contactarnos a:{" "}
                <a href="mailto:contacto@standard-equipment.cl" className="text-[#e07820] hover:underline">
                  contacto@standard-equipment.cl
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#0d1528" }}>2. Información que Recopilamos</h2>
              <p className="mb-3">
                A través del formulario de contacto disponible en nuestro sitio, recopilamos la siguiente
                información cuando usted la proporciona voluntariamente:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nombre completo</li>
                <li>Empresa</li>
                <li>Correo electrónico</li>
                <li>Mensaje</li>
              </ul>
              <p className="mt-3">No recopilamos datos sensibles ni información financiera.</p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#0d1528" }}>3. Finalidad del Tratamiento</h2>
              <p>Los datos recopilados son utilizados exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-1 mt-2">
                <li>Responder consultas comerciales enviadas a través del formulario de contacto</li>
                <li>Gestionar comunicaciones relacionadas con nuestros productos y servicios</li>
                <li>Mejorar la experiencia de navegación en nuestro sitio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#0d1528" }}>4. No Compartimos sus Datos</h2>
              <p>
                Standard Equipment SpA no vende, arrienda ni comparte sus datos personales con terceros,
                salvo obligación legal expresa. Sus datos son tratados de manera confidencial y se almacenan
                en servidores con medidas de seguridad adecuadas.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#0d1528" }}>5. Propiedad Intelectual</h2>
              <p className="mb-3">
                Todo el contenido publicado en <strong>www.standard-equipment.cl</strong>, incluyendo pero
                no limitado a:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Textos, descripciones técnicas y especificaciones de productos</li>
                <li>Imágenes, fotografías y renders</li>
                <li>Diseños industriales y planos técnicos</li>
                <li>Logotipos, marcas y elementos gráficos</li>
              </ul>
              <p className="mt-3">
                Es propiedad exclusiva de Standard Equipment SpA y está protegido por la{" "}
                <strong>Ley N° 17.336 sobre Propiedad Intelectual</strong> y demás normas aplicables en Chile.
                Queda expresamente prohibida su reproducción, distribución, modificación o uso comercial sin
                autorización escrita previa. Las marcas y nombres comerciales mencionados en el sitio son
                propiedad de sus respectivos titulares.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#0d1528" }}>6. Derechos del Titular</h2>
              <p className="mb-3">
                Conforme a la <strong>Ley N° 19.628 sobre Protección de la Vida Privada</strong>, usted
                tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar información inexacta</li>
                <li>Cancelar o eliminar sus datos</li>
                <li>Oponerse al tratamiento de sus datos</li>
              </ul>
              <p className="mt-3">
                Para ejercer estos derechos, contáctenos a:{" "}
                <a href="mailto:contacto@standard-equipment.cl" className="text-[#e07820] hover:underline">
                  contacto@standard-equipment.cl
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#0d1528" }}>7. Cookies</h2>
              <p>
                Nuestro sitio puede utilizar cookies técnicas para el correcto funcionamiento de la plataforma.
                No utilizamos cookies de seguimiento ni publicidad de terceros.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold mb-3" style={{ color: "#0d1528" }}>8. Modificaciones</h2>
              <p>
                Esta Política de Privacidad puede ser actualizada. Le recomendamos revisarla periódicamente.
                La versión vigente siempre estará disponible en esta página.
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
