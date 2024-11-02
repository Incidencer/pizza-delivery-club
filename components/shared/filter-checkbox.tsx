import React from 'react';
import { Checkbox } from '../ui';

export interface FilterChecboxProps {
	text: string; // Описание
	value: string; // Значение checkbox
	endAdornment?: React.ReactNode; // дополнительный JSX после text
	onCheckedChange?: (checked: boolean) => void; // true or false
	checked?: boolean; // состояние чекбокса при рендере
	name?: string;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
	text,
	value,
	endAdornment,
	onCheckedChange,
	checked,
	name,
}) => {
	return (
		<div className='flex items-center space-x-2'>
			<Checkbox
				onCheckedChange={onCheckedChange}
				checked={checked}
				value={value}
				className='rounded-[8px] w-6 h-6'
				id={`checkbox-${String(name)}-${String(value)}`}
			/>
			<label
				htmlFor={`checkbox-${String(name)}-${String(value)}`}
				className='leading-none cursor-pointer flex-1'
			>
				{text}
			</label>
			{endAdornment}
		</div>
	);
};
