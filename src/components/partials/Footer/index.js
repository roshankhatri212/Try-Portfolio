import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaWhatsapp, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { primaryColor, textColor } from '../../../helpers/colors';
import { FooterArea } from './styled';

export default function Footer() {
	const defaultColor = primaryColor;
	const [emailColor, setEmailColor] = useState(textColor);
	const [whatsappColor, setWhatsappColor] = useState(textColor);
	const [linkedinColor, setLinkedinColor] = useState(textColor);
	const [githubColor, setGithubColor] = useState(textColor);

	return (
		<IconContext.Provider value={{ size: '18px' }}>
			<FooterArea>
				<div className="container">
					<a
						href={`mailto:roshankhatri212@gmail.com`}
						target="_blank"
						rel="noreferrer"
						onMouseEnter={() => {
							setEmailColor(defaultColor);
						}}
						onMouseLeave={() => {
							setEmailColor(textColor);
						}}
					>
						<FiMail stroke={emailColor} />
						<span>roshankhatri212@gmail.com</span>
					</a>
					<a
						href="https://api.whatsapp.com/send/?phone=%2B9779861284977&text&type=phone_number&app_absent=0"
						target="_blank"
						rel="noreferrer"
						onMouseEnter={() => {
							setWhatsappColor(defaultColor);
						}}
						onMouseLeave={() => {
							setWhatsappColor(textColor);
						}}
					>
						<FaWhatsapp fill={whatsappColor} />
						<span>+977 9861284977⠀</span>
					</a>
					<a
						href="https://www.linkedin.com/in/roshankc/"
						target="_blank"
						rel="noreferrer"
						onMouseEnter={() => {
							setLinkedinColor(defaultColor);
						}}
						onMouseLeave={() => {
							setLinkedinColor(textColor);
						}}
					>
						<FaLinkedin fill={linkedinColor} />
						<span>Roshan Khatri</span>
					</a>
					<a
						href="https://www.github.com/roshankhatri212/"
						target="_blank"
						rel="noreferrer"
						onMouseEnter={() => {
							setGithubColor(defaultColor);
						}}
						onMouseLeave={() => {
							setGithubColor(textColor);
						}}
					>
						<FaGithub fill={githubColor} />
						<span>Roshan Khatri</span>
					</a>
				</div>
			</FooterArea>
		</IconContext.Provider>
	);
}
