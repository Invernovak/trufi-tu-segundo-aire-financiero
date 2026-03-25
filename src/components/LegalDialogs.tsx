import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface LegalDialogProps {
    children: React.ReactNode;
}

export const TermsDialog = ({ children }: LegalDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-md md:max-w-3xl h-[85vh] p-0 overflow-hidden flex flex-col">
                <DialogHeader className="px-6 pt-6 pb-4 border-b">
                    <DialogTitle className="text-2xl font-bold text-slate-800">Términos y Condiciones</DialogTitle>
                    <DialogDescription className="text-slate-500 mt-2">
                        Condiciones legales, reglamento y políticas de uso de los servicios financieros de TRUFI.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed text-justify pb-6">
                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">1. Generalidades del Servicio</h3>
                            <p>Al acceder o utilizar los servicios de TRUFI S.A.S., el usuario acepta de manera expresa, voluntaria e inequívoca las políticas, restricciones y condiciones establecidas por la compañía en el presente documento. Entendiendo que toda solicitud de producto está sujeta a etapas de estudio, capacidad de endeudamiento y verificación de viabilidad por parte de nuestro comité crediticio.</p>
                        </section>
                        
                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">2. Condiciones y Políticas de Aprobación</h3>
                            <p>Toda solicitud de libranza o crédito de libre inversión está condicionada a los resultados arrojados por las centrales de riesgo y los convenios activos con las diferentes pagadurías (Ej: CASUR, CREMIL, Fopep, Fiduprevisora, Colpensiones, etc.). Los montos, tasas de interés, plazos y condiciones finales podrán ser limitados, modificados, ajustados o declinados de manera unilateral por TRUFI S.A.S., de acuerdo a su evaluación interna de riesgo.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">3. Transparencia de Costos y Tasas</h3>
                            <p>En TRUFI S.A.S. aseguramos total transparencia. Los costos asociados que pueden incluir intereses corrientes, seguros de vida y costos de administración o plataformas tecnológicas, serán detallados plenamente en el pagaré y la liquidación del crédito previo al desembolso.</p>
                            <p className="mt-2 text-rose-600 font-medium">IMPORTANTE: TRUFI S.A.S. no exige, ni solicitará bajo ninguna circunstancia cobros anticipados, pagos por "estudio de crédito" ni consignaciones a cuentas de terceros como condición para desembolsar su crédito. Absténgase de realizar transferencias a nombre de personas naturales.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">4. Canales Transaccionales</h3>
                            <p>El cliente podrá realizar actualizaciones de datos, solicitudes de paz y salvos, reestructuraciones y consultas directas a través de nuestros canales oficiales. TRUFI se reserva el derecho de admitir refinanciaciones o compras de cartera de acuerdo a los comportamientos de pagos históricos.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">5. Autorización de Verificación</h3>
                            <p>Al aceptar estos términos, autoriza a TRUFI S.A.S. para consultar, informar, conservar, procesar, solicitar y reportar a las Centrales de Información Financiera (DataCrédito, TransUnion - CIFIN, Procrédito o cualquier otra), la información que se refiere a comportamiento crediticio, comercial y de servicios.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">6. Prevención de Riesgos</h3>
                            <p>Bajo las normas internacionales y nacionales de prevención LAFT (Lavado de Activos y Financiación del Terrorismo), el cliente afirma bajo gravedad de juramento que todos los dineros transados tienen procedencia lícita.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">7. Modificaciones a los Términos</h3>
                            <p>TRUFI podrá modificar periódicamente estas condiciones. Las actualizaciones se harán públicas en esta misma plataforma web y serán efectivas inmediatamente a partir de su publicación.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">8. Jurisdicción y Leyes Aplicables</h3>
                            <p>El presente acuerdo y la relación entre el Cliente y TRUFI estarán regidos en todos sus puntos por las leyes vigentes aplicables de la República de Colombia. Cualquier controversia será dirimida en los tribunales correspondientes del domicilio principal de la empresa.</p>
                        </section>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export const PrivacyDialog = ({ children }: LegalDialogProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="max-w-md md:max-w-3xl h-[85vh] p-0 overflow-hidden flex flex-col">
                <DialogHeader className="px-6 pt-6 pb-4 border-b">
                    <DialogTitle className="text-2xl font-bold text-slate-800">Política de Privacidad y Tratamiento de Datos</DialogTitle>
                    <DialogDescription className="text-slate-500 mt-2">
                        Conoce cómo protegemos tus datos bajo las normativas colombianas y la Ley Estatutaria 1581 de 2012 (Habeas Data).
                    </DialogDescription>
                </DialogHeader>
                <div className="flex-1 overflow-y-auto px-6 py-4">
                    <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed text-justify pb-6">
                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">1. Objetivo y Alcance</h3>
                            <p>TRUFI S.A.S. (en adelante "La Empresa"), con el fin de proteger la privacidad de la información personal de sus clientes, prospectos, proveedores y colaboradores, establece el presente manual de políticas que regula la recolección, almacenamiento, tratamiento, administración, transferencia y transmisión de dichos datos.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">2. Finalidad del Tratamiento de Datos</h3>
                            <p>La información almacenada en nuestras bases de datos será utilizada primordialmente para los siguientes propósitos:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li>Adelantar análisis de viabilidad financiera y perfilamiento de riesgo crediticio.</li>
                                <li>Gestionar los desembolsos, recaudos, reportes de cartera y procesos judiciales u ordinarios de cobranza.</li>
                                <li>Contactar al Titular a través de llamadas telefónicas, SMS, correos electrónicos o WhatsApp con fines operativos, de servicio al cliente o de recuperación de cartera.</li>
                                <li>Implementar estrategias comerciales, ofertas de productos conexos o promociones autorizadas.</li>
                                <li>Informar sobre cambios en nuestros servicios y responder consultas, peticiones, quejas y reclamos (PQR).</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">3. Seguridad y Confidencialidad</h3>
                            <p>Nos comprometemos expresamente a resguardar tu información utilizando estrictos protocolos de seguridad perimetral e informática. Queda prohibida la venta, cesión o comercialización indiscriminada del historial de los Titulares frente a terceros que no guarden relación directa con el servicio contratado. Solamente proveedores tecnológicos acreditados (como plataformas de validación de identidad o CRM) y autoridades competentes tendrán acceso restringido.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">4. Derechos que le Asisten como Titular</h3>
                            <p>En conformidad con la Ley 1581 de 2012, el usuario titular de los datos cuenta con las siguientes facultades:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-2">
                                <li><strong>Derecho a Conocer:</strong> Solicitar constancia de la existencia de datos y el tratamiento aplicable.</li>
                                <li><strong>Derecho a Actualizar y Rectificar:</strong> Corregir información que sea parcial, inexacta, incompleta o fraccionada.</li>
                                <li><strong>Derecho a Suprimir o Revocar:</strong> Cancelar la autorización de manipulación de datos, a excepción de cuando exista un deber legal o contractual (Ej: obligaciones de crédito vigentes y no saldadas).</li>
                                <li><strong>Derecho de Petición:</strong> Elevar consultas orientadas al uso que se le ha dado a su información personal.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">5. Procedimientos de Peticiones y Reclamos</h3>
                            <p>Para la atención a los Titulares que deseen ejercer sus derechos, la compañía dispone del canal de PQRS virtual, y designa como único canal físico la sede principal. Toda comunicación deberá detallar la identificación plena del usuario, descripción de los hechos que dan lugar al reclamo y aportar las evidencias pertinentes. El término máximo para dar respuesta a estas reclamaciones es de quince (15) días hábiles.</p>
                        </section>

                        <section>
                            <h3 className="text-lg font-semibold text-slate-800 mb-2">6. Vigencia</h3>
                            <p>La presente política entrará en vigor de acuerdo con lo regulado en las legislaciones de Colombia frente a protección y reserva. Las bases de datos se mantendrán vigentes mientras el Titular sustente una relación con TRUFI S.A.S.</p>
                        </section>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
