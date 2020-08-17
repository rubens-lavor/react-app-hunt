import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {
    componentDidMount() {
        this.loadProducts();
    }

    //quando se usa os componetes pertencentes ao react
    //pode se usar o modelo tradicional de função.
    //porém quando a função é criada, é preciso usar uma
    //Arrow function, senão a função não consegue ver o escopo
    // do this.
    
    loadProducts = async () => {
        const response = await api.get('/products');

        console.log(response.data.docs);
    }

    render() {
        return (
            <h1>OIII GAlera do Mundo!</h1>
        );
    }
};