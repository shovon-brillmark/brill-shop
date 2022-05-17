import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Heading,
  Button
} from "@shopify/polaris";
import { useState } from "react";

import trophyImgUrl from "../assets/home-trophy.png";
import { PopupCard } from './popup/PopupCard';

import { useDispatch, useSelector } from "react-redux";
import { increaseCount } from "../store/popup.reducer";
import { getUsersFetch } from "../store/popup.action";

export function HomePage() {
  const [welcomeMessage, setWelcomeMeessage] = useState({
    heading: 'Thanks for installing the Brillmark Popup App !!',
    description: 'The app is for testing the shopify app development, The Popup Feature for Storefront.'
  });

  const count = useSelector(state => state.popupReducer.count);
  const users = useSelector(state => state.popupReducer.users);

  const dispatch = useDispatch();

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
                  <p>{welcomeMessage.description}</p>
                  {/* Testing Redux below */}
                  {/* <p>Count :{count}</p>
                  <Button primary onClick={() => dispatch(increaseCount())}>Increase Count</Button>
                  <hr></hr>
                  <div>
                    Users : { users.map((user => (<div>{user.name}</div>))) }
                  </div>
                  <Button primary onClick={() => dispatch(getUsersFetch())}>Get users</Button> */}
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
      </Layout>
      <br></br>
      <Layout>
        <Layout.Section oneHalf>
          <PopupCard />
        </Layout.Section>
        <Layout.Section oneHalf>
          
        </Layout.Section>
      </Layout> 
    </Page>
  );
}
