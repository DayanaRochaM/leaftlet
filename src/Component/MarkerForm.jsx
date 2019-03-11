import React, { Component } from 'react';
import { Button, Input, Form} from 'antd';
import {ServiceApi} from '../Service/MapService';

const FormItem = Form.Item;

export const MarkerForm =
    Form.create()(
        class extends Component{

            constructor(props){
                super(props);
                this.state = {
                    name: '',
                    latitude: 0,
                    longitude: 0
                }

                this.handleButtonOk = this.handleButtonOk.bind(this);
            }

            render() {
                return(
                    <div>
                        <h1>Informe a localização desejada:</h1>
                        <Form >
                            <FormItem label="Name">
                                <Input type = "text" name = "name" />
                            </FormItem>
                            <FormItem label="Latitude">
                                <Input type = "text" name = "latitude" />
                            </FormItem>
                            <FormItem label="Longitude">
                                <Input type = "text" name = "longitude"/>
                            </FormItem>
                            <Button key="submit" onClick={this.handleButtonOk}>Submit</Button>
                        </Form>
                    </div>
                );
            }

            handleButtonOk = (e) =>{
                const name = this.setState({name: e.target.value.name});
                const latitude = this.setState({latitude: e.target.value.latitude});
                const longitude = this.setState({longitude: e.target.value.longitude});
                ServiceApi.addMarker(name, latitude, longitude);
            }

            // handleChange = (e, name)=>{
            //     var campoSendoAlterado = {};
            //     campoSendoAlterado[name] = e.target.value;
            //     this.setState(campoSendoAlterado);
            // }
        }
    )