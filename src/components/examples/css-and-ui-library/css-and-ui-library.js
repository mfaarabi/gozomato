import React from 'react';
import { Heading, Button, Input } from '@chakra-ui/core';
import styles from './styles.module.css';
import AirBnbExample from './air-bnb-example';

const CssAndUILibrary = () => (
  <div className={styles.main}>
    <Heading>UI Components</Heading>
    <AirBnbExample />
    <Input placeholder="Enter amount" />
    <Button>Click this button</Button>
  </div>
);

export default CssAndUILibrary;
