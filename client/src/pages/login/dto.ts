import TextFieldProps from '../../atoms/text-field/dto';

type LoginProps = {
	pageTitle?: string;
	usernameFieldData: TextFieldProps;
	passwordFieldData: TextFieldProps;
	loginFunc?: (username: string, password: string) => void;
};

export default LoginProps;
