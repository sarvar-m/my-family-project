import React from 'react'
import {  Container,  Divider, Grid,  Header,  Image, List,  Segment} from "semantic-ui-react";
import "./footer.css"
// import { Link } from "react-router-dom";


function Footer() {
    return (
        <div className= "footer">
        <Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 30em' }} vertical>
          <Container textAlign='center'>
            <Grid columns={4} divided stackable inverted>
              <Grid.Row>
                {/* <Grid.Column>
                  <Header inverted as='h4' content='Group 1' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 2' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column>
                  <Header inverted as='h4' content='Group 3' />
                  <List link inverted>
                    <List.Item as='a'>Link One</List.Item>
                    <List.Item as='a'>Link Two</List.Item>
                    <List.Item as='a'>Link Three</List.Item>
                    <List.Item as='a'>Link Four</List.Item>
                  </List>
                </Grid.Column> */}
                <Grid.Column>
                  <Header inverted as='h2' content='Footer Header' />
                  <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non velit sodales, placerat ante ut, fringilla erat. Maecenas eu accumsan dolor.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Divider inverted section />
            
            <List horizontal inverted divided link size='small'>
                
              <List.Item as='a' href='#'>
                About
              </List.Item>
              <List.Item as='a' href='#'>
                Contact
              </List.Item>
              <List.Item as='a' href='#'>
                Support
              </List.Item>
            </List>
          </Container>
        </Segment>
        <a href="mailto:room4@mail.com" class="nav-link email">
          <span class="nav-text">room4@mail.com</span>
        </a>
        <div class="copyright">Copyright © 2021 Room4, All rights reserved</div>
     
        </div>
    )
}

export default Footer

