import React from "react";
import { Feature } from "../components";

export function FeatureContainer() {
  return (
    <Feature>
      <Feature.Container>
          <Feature.Row>
              <Feature.Column>
                    <Feature.Title>
                <p>40K RPM on the VMC</p>
                    </Feature.Title>
                    <Feature.SubTitle>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </Feature.SubTitle>
              </Feature.Column>
              <Feature.Column>
              <Feature.Image src='./images/misc/layer.png'></Feature.Image>
              <Feature.Image src='./images/misc/layer.png'></Feature.Image>
              <Feature.Image src='./images/misc/layer.png'></Feature.Image>
              </Feature.Column>
          </Feature.Row>
    
      </Feature.Container>
      
    </Feature>
  );
}
