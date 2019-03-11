import React, { Component } from 'react';
import { Button, Input, Form} from 'antd';
import {ServiceApi} from '../Service/MapService';
import "./TrajectoriesForm.css"
;
import {TrajectoriesTable} from "./TrajectoriesTable";
const FormItem = Form.Item;

export class TrajectoriesForm extends Component{

            // constructor(props){
            //     super(props);
            //     this.state = {
            //         name: '',
            //         latitude: 0,
            //         longitude: 0
            //     }
            //
            //     this.handleButtonOk = this.handleButtonOk.bind(this);
            // }

            render() {
                return(
                    <div>
                        <Form >
                            <FormItem label="Maximum Number of Trajectories">
                                <Input type = "text" name = "max-trajectories" className="max-trajectories"/>
                            </FormItem>
                            <FormItem label="Trajectories">
                                <TrajectoriesTable />
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
