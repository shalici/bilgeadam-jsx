    import React, {Component} from 'react';
    import {withRouter} from 'react-dom';

    class DeleteMeal extends Component {
        constructor() {
            super();
            this.state = {
                //meal : {code: 'MNT1', name: 'Mantı', price: 12, photo: 'text', detail: 'Süper bi yemek!'}
                meal: [
                    {code: 'MNT1', name: 'Mantı', price: 12, photo: 'text', detail: 'Süper bi yemek!'},
                    {code: 'CRB1', name: 'Çorba', price: 12, photo: 'text', detail: 'Süper bi yemek!'},
                    {code: 'PD1', name: 'Pide', price: 12, photo: 'text', detail: 'Süper bi yemek!'}
                ]
            }
        }


        render() {
            return (
                <div>
                    <h1>Meal List</h1>
                    <div className="container">
                        <table className="table">
                            <thead>
                            <tr>
                                <th>NAME</th>
                                <th>PRICE</th>
                                <th>PHOTO</th>
                                <th>DETAIL</th>
                            </tr>
                            </thead>
                            <tbody>

                            {
                                this.state.meal.map(
                                    meal =>
                                        <tr key={meal.code}>
                                            <td>{meal.name}</td>
                                            <td>{meal.price}</td>
                                            <td>{meal.photo}</td>
                                            <td>{meal.detail}</td>
                                        </tr>
                                )
                            }
                            </tbody>
                        </table>
                        <div>
                            <button className="btn btn-success bg-dark fg-light">Sil</button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    export default DeleteMeal;