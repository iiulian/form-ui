import * as React from 'react';

export interface FieldProps {
    id: string;
    name: string;
    description?: string;
    type: string;
    placeholder?: string;
    value: any;
    label: string;
}

export class Field extends React.Component<FieldProps> {
    constructor(props: FieldProps) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    private onChange(e: React.ChangeEvent<any>) {

    }

    render() {
        const props = this.props;

        return (
            <div className="form-group">
                <label htmlFor={props.id}>{props.label}</label>
                <input type="text" name={props.name} id={props.id} placeholder={props.placeholder} onChange={this.onChange} value={props.value} />
                {props.description ? <p className="text-muted">{props.description}</p> : null}
            </div>
        );
    }

}
