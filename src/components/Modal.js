import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label,
} from "reactstrap";

export default class CustomModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem,
        };
    }

    handleChange = (e) => {
        let { name, value } = e.target;

        if (e.target.type === "checkbox") {
            value = e.target.checked;
        }

        const activeItem = { ...this.state.activeItem, [name]: value };

        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;

        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Tarea por hacer</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="todo-title">Título</Label>
                            <Input
                                type="text"
                                id="todo-title"
                                name="title"
                                value={this.state.activeItem.title}
                                onChange={this.handleChange}
                                placeholder="Escriba un título"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="todo-description">Descripción</Label>
                            <Input
                                type="text"
                                id="todo-description"
                                name="description"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Escriba una descripción"
                            />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input
                                    type="checkbox"
                                    name="completed"
                                    checked={this.state.activeItem.completed}
                                    onChange={this.handleChange}
                                />
                                Completado
                            </Label>
                        </FormGroup>
                        <FormGroup>
                            <Label for="todo-description">Fecha</Label>
                            <Input
                                type="date"
                                id="todo-date_due"
                                name="date_due"
                                value={this.state.activeItem.description}
                                onChange={this.handleChange}
                                placeholder="Escriba una fecha límite"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="success"
                        onClick={() => onSave(this.state.activeItem)}
                    >
                        Guardar
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}