import React from "react";
import { IconContainer, ServiceContainer } from "./Servicios.style";

const Servicios = () => {
    return (
        <section>
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h2>h2 Servicios</h2>
                    <p>Todos nuestros coworkers cuentan con los siguientes servicios:</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span class="material-symbols-outlined">
                                    wifi
                                </span>
                            </IconContainer>
                            <h4>Wifi de alta velocidad</h4>
                        </ServiceContainer>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span class="material-symbols-outlined">
                                    inventory_2
                                </span>
                            </IconContainer>
                            <h4>Recepción de paquetería</h4>
                        </ServiceContainer>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span class="material-symbols-outlined">
                                    key
                                </span>
                            </IconContainer>
                            <h4>Acceso seguro 24/7</h4>
                        </ServiceContainer>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span class="material-symbols-outlined">
                                    print
                                </span>
                            </IconContainer>
                            <h4>Uso de impresora</h4>
                        </ServiceContainer>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span class="material-symbols-outlined">
                                    meeting_room
                                </span>
                            </IconContainer>
                            <h4>Salas de reuniones</h4>
                        </ServiceContainer>
                    </div>
                    <div class="xl:w-1/3 md:w-1/2 p-4">
                        <ServiceContainer>
                            <IconContainer>
                                <span class="material-symbols-outlined">
                                    power
                                </span>
                            </IconContainer>
                            <h4>Suministros incluidos</h4>
                        </ServiceContainer>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Servicios;