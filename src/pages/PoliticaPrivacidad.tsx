import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const PoliticaPrivacidad = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <main className="flex-grow py-24">
                <div className="container max-w-4xl mx-auto px-4">
                    <Link to="/">
                        <Button variant="ghost" size="sm" className="mb-8 gap-2 hover:bg-white">
                            <ArrowLeft className="w-4 h-4" />
                            Volver al inicio
                        </Button>
                    </Link>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12">
                        <h1 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-6">
                            POLÍTICA DE PROTECCIÓN DE DATOS PERSONALES
                        </h1>

                        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
                            <p>
                                La presente política se aplicará a todos los datos personales, bases de datos y/o archivos que
                                contengan datos personales que sean objeto de tratamiento por parte de Trufi S.A.S. (en adelante
                                simplemente "Trufi") y cualquier otro dato que sea susceptible de ser tratado por Trufi en
                                desarrollo de su objeto social o con ocasión de cualquier tipo de relación civil, laboral o comercial que
                                llegue a surgir en virtud de sus actividades conexas o propias de su actividad empresarial.
                            </p>

                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                                1. RESPONSABLE DEL TRATAMIENTO DE DATOS PERSONALES
                            </h2>
                            <ul className="list-none space-y-2 bg-gray-50 p-6 rounded-xl border border-gray-100">
                                <li><span className="font-bold text-gray-900">Nombre:</span> Trufi S.A.S.</li>
                                <li><span className="font-bold text-gray-900">NIT:</span> 901.165.197-9</li>
                                <li><span className="font-bold text-gray-900">Domicilio:</span> Santiago de Cali – Colombia</li>
                                <li><span className="font-bold text-gray-900">Dirección:</span> Calle 25 # 98-414 Piso 15 – Edificio Empresarial Jardín Central 2</li>
                                <li><span className="font-bold text-gray-900">Correo Electrónico:</span> juridico@trufi.com.co</li>
                            </ul>

                            <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">
                                2. TRATAMIENTO Y FINALIDAD
                            </h2>
                            <h3 className="text-lg font-bold text-gray-800 mt-6 mb-3">
                                2.1. TRATAMIENTO DE DATOS PERSONALES Y FINALIDADES
                            </h3>

                            <p>
                                De acuerdo con las disposiciones legales y conforme a las autorizaciones impartidas por los titulares,
                                Trufi realizará operaciones o conjunto de operaciones que incluyen la recolección de datos, su
                                almacenamiento, uso, circulación y supresión de datos personales exclusivamente para las finalidades
                                autorizadas y previstas en la presente política, así como las especificas otorgadas por parte de los
                                titulares. De la misma forma, Trufi tratará los datos personales cuando exista una obligación legal
                                o contractual para ello, siempre bajo los lineamientos internos y con plena observancia del marco legal
                                aplicable.
                            </p>

                            <p className="mt-6 mb-4 font-medium text-gray-800">
                                De manera general, Trufi tratará los datos personales de los titulares para los siguientes fines:
                            </p>

                            <ul className="list-[lower-alpha] pl-6 space-y-4 marker:font-bold marker:text-gray-900">
                                <li>
                                    Tramitar la vinculación ante la compañía en cumplimiento a las políticas internas y
                                    disposiciones legales en materia de conocimiento del cliente y la prevención del riesgo de
                                    lavado de activos, la financiación del terrorismo y la financiación de la proliferación de armas
                                    de destrucción masiva.
                                </li>
                                <li>
                                    Conformar bases de datos necesarias para el desarrollo de los procesos interno de la
                                    compañía y el mantenimiento de las relaciones legales o contractuales. Asimismo, para
                                    actualizar bases de bases de datos, incluyendo los casos en que se requiera transmitir o
                                    transferir a un tercero, la información para la validación, depuración, enriquecimiento y
                                    homogenización de datos, previo cumplimiento de las exigencias legales.
                                </li>
                                <li>
                                    Efectuar labores de mercadeo, estudios, estadísticas, realizar muestreos, análisis de
                                    tendencias, encuestas e investigaciones comerciales y de servicio, de riesgos, realizar
                                    pruebas, utilizar modelos matemáticos, identificar, recolectar y asociar información sobre
                                    intereses y hábitos de utilización de los productos o servicios y derivar conclusiones o
                                    determinar tendencias para ser aprovechadas por la compañía o compartidas con aliados
                                    comerciales para los fines previstos en la presente finalidad.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <WhatsAppButton />
        </div>
    );
};

export default PoliticaPrivacidad;
