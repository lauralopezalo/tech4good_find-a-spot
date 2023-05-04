import React from "react";
import { Container, Description } from "./Portada.styles";
// import image from '../../../../assets/img/portada.jpg'

const Portada = () => {

    return (<>
        <Container>
            <h1>Microdosing synth tattooed vexillologist</h1>
            <Description>
                Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing
                tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt
                ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
                meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af
                fingerstache pitchfork.
            </Description>
            <div>
                {/* //TODO botón despliega modal de contacto */}
                <button>Button</button>
            </div>
        </Container>
    </>
    )
}

export default Portada;