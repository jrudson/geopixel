import React, { useState } from "react";
import './form.css';
import Swal from "sweetalert2";

function Form() {

    // Estados para salvar o item adicionado no formulário, o valor que usuário digitar no input e o item que o mesmo selecionar no formulário
    const [items, setItems] = useState(['Geopixel']);
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState();

    // Captura o valor do input e salva no seu estado
    const handleInput = (event) => {
        setInputValue(event.target.value);
    }

    // Captura o item selecionado no formulário e salva no seu estado
    const handleChange = (event) => {
        setSelectedItem(event.target.value);
    };

    // Limpa o input e impede que a página atualize sempre que o formulário for alterado
    const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue('');
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <select className="select" onChange={handleChange}>
                <option value="" hidden>
                    Selecione uma opção
                </option>
                {
                    items !== '' ?
                        items.map((item, index) => {
                            return (
                                <option key={index}>{item}</option>
                            )
                        })
                        : null
                }
            </select>

            <input className="input" placeholder="Insira um item" value={inputValue} onChange={handleInput} />

            <div className="containerBotoes">

                <button
                    className="botoes"
                    onClick={() => {
                        if (inputValue !== '') {
                            if (!items.includes(inputValue)) {
                                setItems(oldList => [...oldList, inputValue]);
                                Swal.fire({
                                    title: 'Item adicionado ao formulário com sucesso!'
                                });
                            } else {
                                Swal.fire({
                                    title: 'Item já existe no formulário!'
                                });
                            }
                        } else {
                            Swal.fire({
                                title: 'Valor do campo está vazio!',
                                text: 'Por favor, digite algo para um item para ser adicionado!',
                            });
                        }
                    }
                    }>
                    Adicionar
                </button>

                <button
                    className="botoes"
                    onClick={() => {
                        if (items.includes(inputValue)) {
                            const newList = items.filter((value) => value !== inputValue);
                            setItems(newList);
                            Swal.fire({
                                title: `Item ${inputValue} removido com sucesso!`
                            });
                        } else {
                            Swal.fire({
                                title: 'Este item não existe no formulário!'
                            });
                        }
                    }}
                >
                    Remover
                </button>

                <button
                    className="botoes"
                    onClick={() => {
                        setItems('');
                        Swal.fire({
                            title: `Todos os itens removidos com sucesso!`
                        });
                    }}
                >
                    Limpar caixa
                </button>
            </div>

            <p>{selectedItem}</p>
        </form>
    )
}

export default Form;