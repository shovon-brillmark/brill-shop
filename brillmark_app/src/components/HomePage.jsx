import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading
} from "@shopify/polaris";
import { useState } from "react";

import trophyImgUrl from "../assets/home-trophy.png";

import { ProductsCard } from "./ProductsCard";
import { PopupCard } from './popup/PopupCard';

export function HomePage() {
  const [welcomeMessage, setWelcomeMeessage] = useState({
    heading: 'Thanks for installing the Brillmark !!',
    description: 'The app is for testing the shopify app development, The Popup Feature for Storefront.'
  });

  return (
    <Page fullWidth>
      <Layout>
        <Layout.Section>
          <Card sectioned>
            <Stack
              wrap={false}
              spacing="extraTight"
              distribution="trailing"
              alignment="center"
            >
              <Stack.Item fill>
                <TextContainer spacing="loose">
                  <Heading>{welcomeMessage.heading} 🎉</Heading>
                  <hr></hr>
                  <br></br>
                  <p>{welcomeMessage.description}</p>
                </TextContainer>
              </Stack.Item>
              <Stack.Item>
                <div style={{ padding: "0 20px" }}>
                  <Image
                    source={trophyImgUrl}
                    alt="Nice work on building a Shopify app"
                    width={120}
                  />
                </div>
              </Stack.Item>
            </Stack>
          </Card>
        </Layout.Section>
        <Layout.Section secondary>
          <ProductsCard />
        </Layout.Section>
      </Layout>
      <Layout>
        <Layout.Section>
          <PopupCard />
        </Layout.Section>
      </Layout>
    </Page>
  );
}
