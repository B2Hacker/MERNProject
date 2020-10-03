import React from 'react';
import './App.css';
import { store } from "./actions/store";
import { Provider } from "react-redux";
import PostMessages from './components/PostMessages';
import { Container, AppBar, Typography } from "@material-ui/core";


function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        |<AppBar position="static" color="inherit">
          <Typography variant="h2" align="center">
            Post Box
          </Typography>
        </AppBar>
    <PostMessages />
    </Container>
    </Provider>
  );
}

export default App;
