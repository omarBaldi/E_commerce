import { ChangeEvent, FC } from 'react';
import TextFieldProps from './dto';

export const TextField: FC<TextFieldProps> = ({
	textFieldPlaceholder,
	labelText,
	textFieldType,
	textFieldName,
	textFieldValue,
	callbackFunc,
}: TextFieldProps): JSX.Element => {
	return (
		<div>
			<label>{labelText}</label>
			<input
				tabIndex={0}
				type={textFieldType ?? 'text'}
				value={textFieldValue ?? ''}
				name={textFieldName ?? ''}
				placeholder={textFieldPlaceholder ?? ''}
				onChange={(e: ChangeEvent<HTMLInputElement>) => {
					callbackFunc && callbackFunc(e.target.name, e.target.value);
				}}
			/>
		</div>
	);
};
export default TextField;
