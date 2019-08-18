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
                                             <br/>
                                             <br/>
                                             <br/>
                              <div className="text">  Price: <input type="text" name="price" value={this.state.price}
                                                   onChange={this.handleChange}/></div>
                                              <br/>
                                              <br/>
                                              <br/>
                                <div className="text">Photo: <input type="text" name="photo" value={this.state.photo}
                                                   onChange={this.handleChange}/></div>
                                              <br/>
                                              <br/>
                                              <br/>
                                <div className="text"> Detail <input type="textarea" name="detail" value={this.state.detail}
                                                                     onChange={this.handleChange}/></div>
                            </table>
                            <table>
                                <div className="container"><h1>deneme</h1></div>
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
                this.setState(this.state.name);
                this.setState(this.state.price);
                this.setState(this.state.photo);
                this.setState(this.state.detail);
            } else {

            }
    }


}

export default CreateMeal;