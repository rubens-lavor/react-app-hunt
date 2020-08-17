import React, { Component } from "react";
import api from "../../services/api";

export default class Main extends Component {

    //state é sempre um objeto
    state = {
        products: [],
    }

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

        this.setState({ products: response.data.docs });
        //console.log(response.data);
    }

    render() {
        const { products } = this.state;

        return (
            <div className="products-list">
                <h1>contagem de produtos: {this.state.products.length}</h1>
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>

                        <a href="#">Acessar</a>
                    </article>
                ))}

            </div>
        );
    }
};