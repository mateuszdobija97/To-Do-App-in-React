import React, { Component, Fragment } from 'react';
import './AddTask.css'

class AddTask extends Component {
    state = {
        txt: '',
        checked: false,
        date: new Date().toISOString().slice(0, 10), // current date
        error: false,
    }

    handleChange = e => { // controlled values
        if (e.target.type === 'checkbox') {
            this.setState({
                [e.target.name]: e.target.checked,
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }

    }

    handleClick = () => {

        const { txt, checked, date } = this.state;
        const add = txt.length > 0 ? this.props.add(txt, checked, date) : this.setState({ error: true });

        if (add) {
            this.setState({
                txt: '',
                checked: false,
                date: new Date().toISOString().slice(0, 10),
                error: false,
            })
        }
    }

    render() {

        const minDate = new Date().toISOString().slice(0, 10); // slice the first 10 values "rrrr-mm-dd ..."
        let maxDate = minDate.slice(0, 4) * 1 + 1; // add 1 year more than minDate
        maxDate += "-12-31";

        return (
            <header className="form">
                <h1>Zaplanuj swoje zadania</h1>
                <input type="text" placeholder="Dodaj zadanie..." value={this.state.txt} name="txt" onChange={this.handleChange} />
                <input type="checkbox" checked={this.state.checked} onChange={this.handleChange} name="checked" id="important" />
                <label htmlFor="important">Priorytet</label>
                {this.state.error && <Fragment><br /><span style={{ color: 'red' }}>Wpisz zadanie!</span></Fragment>}
                <br />
                <label htmlFor="date">Do kiedy zrobić: </label>
                <input type="date" value={this.state.date} name="date" onChange={this.handleChange} min={minDate} max={maxDate} />
                <button style={{ display: 'block' }} className='btn' onClick={this.handleClick}>Dodaj</button>
            </header>
        );
    }
}

export default AddTask;