import React from "react"
import {Jumbotron} from '../components'
import jumboData from '../fixtures/jumbo.json'

export function JumbotronContainer() {
    return (
        <Jumbotron.Container>
            {jumboData.map((item) => (
                <Jumbotron key={item.data} direction={item.direction}>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src='./images/misc/eye.png' alt={item.alt}/>
                        <Jumbotron.SubTitle><p>test</p></Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src='./images/misc/eye.png' alt={item.alt}/>
                        <Jumbotron.SubTitle><p>test</p></Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src='./images/misc/eye.png' alt={item.alt}/>
                        <Jumbotron.SubTitle><p>test</p></Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                    <Jumbotron.Pane>
                        <Jumbotron.Image src='./images/misc/eye.png' alt={item.alt}/>
                        <Jumbotron.SubTitle><p>test</p></Jumbotron.SubTitle>
                    </Jumbotron.Pane>
                </Jumbotron>
            ))}
        </Jumbotron.Container>
    )
}

