import React from 'react';
import moment from 'moment'

import Field from '../PresentationalComponenets/Field'

import '../App.css';


class NewTitleForm extends React.Component {
    state = {
        fields: {
            title: "",
            releaseDay: "",
            comment: "",
        },
        fieldErrors: {},
    };

    onInputChange = ({name, value, error}) => {
        const fields = this.state.fields;
        const fieldErrors = this.state.fieldErrors;

        fields[name] = value;
        fieldErrors[name] = error;

        this.setState({fields, fieldErrors});
    };

    onFormSubmit = (e) => {
        e.preventDefault();

        if (this.validate()) return;

        this.props.onSubmit(this.state.fields);
        this.setState({
            fields: {
                title: "",
                releaseDay: "",
                comment: "",
            },
        });
    };

    validate = () => {
        const row = this.state.fields;
        const fieldErrors = this.state.fieldErrors;
        const errMessages = Object.keys(fieldErrors).filter((k) => fieldErrors[k]);

        if (!row.title) return true;
        if (errMessages.length) return true;

        return false;
    };

    isValidDate = (val) => {
        return val === "" ? true : moment(val, "DD/MM/YYYY", true).isValid();
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <Field
                        placeholder="Title"
                        name="title"
                        value={this.state.fields.title}
                        onChange={this.onInputChange}
                        validate={(val) => (val ? false : 'Title Required')}
                    />

                    <br/>

                    <Field
                        placeholder="Release day, dd/mm/yyyy"
                        name="releaseDay"
                        value={this.state.fields.releaseDay}
                        onChange={this.onInputChange}
                        validate={(val) => (this.isValidDate(val) ? false : 'Invalid Date')}
                    />

                    <br/>

                    <Field
                        placeholder="Comment"
                        name="comment"
                        value={this.state.fields.comment}
                        onChange={this.onInputChange}
                    />

                    <button type="submit" disabled={this.validate()}>
                        {">"}
                    </button>
                </form>
            </div>
        );
    }

}

export default NewTitleForm;