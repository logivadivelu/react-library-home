import React from "react";
import {Card, Button} from '@logi/magnetite';
import { HomeComponentProps } from "./HomeComponent.types";

import "./HomeComponent.scss";

const HomeComponent: React.FC<HomeComponentProps> = ({devices}) => (
  <div style={{flex: 1}}>
  {devices.map((device) => 
    <div>{device.name}</div>
  )}
      
     {/* <Button id="submit" text="Contained" onClick={() => {}} />
      <Card label={"Test"} onChange={() => {}} id="card1" name={"Card"}/>*/}
  </div>
);

export default HomeComponent;