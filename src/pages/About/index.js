import React from 'react';
import { motion } from 'framer-motion';
import { PageArea } from './styled';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import Icon from '../../components/partials/Icon';


export default function About() {
	return (
		<>
			<Header />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<PageArea>
					<h1>About me</h1>

					<div className="area">
						<div className="leftSide">
							<div className="icons">
								<div className="social">
									<Icon title={'linkedin'} />
									<Icon title={'email'} />
									<Icon title={'whatsapp'} />
								</div>

								<Icon title={'resume'} />
							
							</div>
							<p >I am full-stack javascript web developer looking for my first IT work experience to help launch my career. Specialized in React, interested in deploying scalable and user-friendly projects while considering UX strategies. I would like to be part of a team, surrounded by experienced people, and help achieve objectives. At the same time, I want to continue learning new tools and technologies constantly.
                </p>
						</div>
						
					</div>
				</PageArea>
			</motion.div>

			<Footer />
		</>
	);
}
