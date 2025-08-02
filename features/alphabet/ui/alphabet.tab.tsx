'use client'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import Hiragana from './hiragana';
import Katakana from './katakana';

interface TabPanelProps {
	children?: React.ReactNode;
	index: number;
	value: number;
}

function CustomTabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div hidden={value !== index} {...other}>
			{value === index && children}
		</div>
	);
}

export default function AlphabetTab() {
	const [value, setValue] = useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<div className='pl-4.5'>
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Hiragana" />
					<Tab label="Katakana" />
					<Tab label="Kanji" />
				</Tabs>
			</Box>

			<CustomTabPanel value={value} index={0}>
				<Hiragana />
			</CustomTabPanel>

			<CustomTabPanel value={value} index={1}>
				<Katakana />
			</CustomTabPanel>

			<CustomTabPanel value={value} index={2}>
				// cho trang kanji o day
			</CustomTabPanel>
		</div>
	);
}
