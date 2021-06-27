type TextFieldProps = {
	textFieldPlaceholder?: string;
	labelText?: string;
	textFieldType?: string;
	textFieldName?: string;
	textFieldValue?: string;
	callbackFunc?: (key: string, value: string) => void;
};

export default TextFieldProps;
