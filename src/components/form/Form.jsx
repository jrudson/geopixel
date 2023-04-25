import React, { useState } from "react";
import './form.css';
import Swal from "sweetalert2";

function Form() {

    // Estados para salvar o item adicionado no formulário, o valor que usuário digitar no input, o item que o mesmo selecionar no formulário e desabilitar/habilitar selected
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [selectedItem, setSelectedItem] = useState('setSelectedItem');
    const [itemIsDisable, setItemIsDisable] = useState(false);

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
            <select className="select" onChange={handleChange} value={selectedItem}>
                <option value="" disabled={itemIsDisable}>
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
                    onClick={() => {
                        if (inputValue !== '') {
                            if (!items.includes(inputValue)) {
                                setItems(oldList => [...oldList, inputValue]);
                                setItemIsDisable(true);
                                setSelectedItem(inputValue);
                                Swal.fire('Item adicionado ao formulário com sucesso!', '', 'success');
                            } else {
                                Swal.fire('Item já existe no formulário!', '', 'warning');
                            }
                        } else {
                            Swal.fire('Valor do campo está vazio!', 'Por favor, digite algo para um item para ser adicionado!', 'error');
                        }
                    }
                    }>
                    Adicionar
                </button>

                <button
                    onClick={() => {
                        if (inputValue !== '') {
                            if (items.includes(inputValue)) {
                                const newList = items.filter((value) => value !== inputValue);
                                setItems(newList);
                                if (inputValue === selectedItem) {
                                    setSelectedItem(newList[0]);
                                }
                                Swal.fire(`Item ${inputValue} removido com sucesso!`, '', 'success');
                            } else {
                                Swal.fire('Este item não existe no formulário!', '', 'warning');
                            }
                        } else {
                            Swal.fire('Valor do campo está vazio!', 'Por favor, digite algo para um item para ser adicionado!', 'error');
                        }
                    }}
                >
                    Remover
                </button>

                <button
                    onClick={() => {
                        setItems('');
                        setSelectedItem('setSelectedItem');
                        setItemIsDisable(false);
                        Swal.fire(`Todos os itens removidos com sucesso!`, '', 'success');
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