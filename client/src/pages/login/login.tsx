import { FC, useState } from 'react';
import TextField from '../../atoms/text-field/text-field';
import LoginProps from './dto';

export const Login: FC<LoginProps> = ({
	pageTitle,
	usernameFieldData,
	passwordFieldData,
	loginFunc,
}: LoginProps): JSX.Element => {
	const [currentUserData, setCurrentUserData] = useState<{
		username: string;
		password: string;
	}>({
		username: '',
		password: '',
	});

	const handleInputChange = (key: string, value: string): void => {
		setCurrentUserData((prevData) => {
			return {
				...prevData,
				[key]: value,
			};
		});
	};

	const verifyUser = (): void => {
		console.log('Verify user data submitted: ', currentUserData);
	};

	return (
		<div>
			<h1>{pageTitle}</h1>
			<form action='' onSubmit={verifyUser} onKeyUp={verifyUser}>
				<TextField
					{...{
						...usernameFieldData,
						textFieldValue: currentUserData.username,
					}}
					callbackFunc={handleInputChange}
				/>
				<TextField
					{...{
						...passwordFieldData,
						textFieldValue: currentUserData.password,
					}}
					callbackFunc={handleInputChange}
				/>
			</form>
		</div>
	);
};
export default Login;
