import React from "react";

export class Create extends React.Component {

    constructor() {

        //Parent class constructor
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeBookTitle = this.onChangeBookTitle.bind(this);
        this.onChangeBookCover = this.onChangeBookCover.bind(this);
        this.onChangeBookAuthor = this.onChangeBookAuthor.bind(this);


        this.state = {
            title: '',
            cover: '',
            author: ''
        }
    }

    //implementing handle submit
    handleSubmit(e) {
        e.preventDefault();
        console.log(`${this.state.title}`);

    }
    //changes current value from render
    onChangeBookTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    //changes current value from render
    onChangeBookCover(e) {
        this.setState({
            cover: e.target.value
        })
    }

    //changes current value from render
    onChangeBookAuthor(e){
        this.setState({
            author: e.target.value
        })
    }    

    render() {
        return (
            <div>
                <h3>hello from my Create component</h3>
                {/*event*/}
                <form onSubmit={this.handleSubmit}>

                    {/* The application should handle the new events from the button click and log the information submitted */}

                    <div className="form-group">
                        <label>Add Book Title: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.title}
                            onChange={this.onChangeBookTitle}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Cover: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.cover}
                            onChange={this.onChangeBookCover}
                        />
                    </div>

                    <div className="form-group">
                        <label>Add Book Author: </label>
                        <input type="text"
                            className="form-control"
                            value={this.state.author}
                            onChange={this.onChangeBookAuthor}
                        />
                    </div>


                    {/* this has value submitt will apear as button */}
                    <input type="submit" value="Add Book" />
                </form >
            </div >
        );
    }
}