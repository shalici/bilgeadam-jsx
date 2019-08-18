import React, {Component} from 'react'

class CreateMeal extends Component {
    constructor() {
        super();
        this.state = {
            code: null,
            name: null,
            price: null,
            photo: null,
            detail: null
    }

    }


    render() {
        return (
            <div>
                <h1>Create Meal</h1>
                <div className="container">
                        <div>
                            <table>
                                Name: <input type="text" name="name" value={this.state.name}
                                             onChange={this.handleChange}/>
                              Price: <input type="text" name="price" value={this.state.price}
                                                   onChange={this.handleChange}/>
                              Photo: <input type="text" name="photo" value={this.state.photo}
                                                   onChange={this.handleChange}/>
                                Detail <input type="textarea" name="detail" value={this.state.detail}
                                                                     onChange={this.handleChange}/>
                            </table>

                        </div>
                    <div>
                    <button className="btn btn-success bg-dark" onClick={this.CreateList}>Ekle</button>
                    </div>
                </div>
            </div>
        )
    }

    CreateList = (event) => {
            if (this.state.name !== null && this.state.price !== null && this.detail !== null) {
            console.log("kayıt eklendi")
            } else {
            console.log("kayıt eklenemedi.")
            }
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

}

export default CreateMeal;