import {
	FaGraduationCap,
	FaSuitcase,
	FaMedal,
	FaBlackTie,
	FaGlobeEurope,
	FaBrain,
	FaCheck,
	FaUserGraduate,
	FaGlobeAmericas,
} from 'react-icons/fa';

import { BsGraphUpArrow } from 'react-icons/bs';

export const works = [
	{
		id: 1,
		type: 0,
		image: 'companyx.png',
		start: '',
		end: '',
		location: '',
		summary:
			'Financial analysis, forecasts, and modeling of past and future performance to support capital raising, including process automation, valuation, pitch, and negotiations.',
		description:
			'Company X is a micromarket start-up in the retail industry',
		activities: [
			'Automation of the financial statements directly from the accounting entries according to the chart of accounts.',
			'Financial performance analysis based on the reorganized financial statements, including KPIs and metrics.',
			'Financial forecasts, including market and macroeconomic research.',
			'Review and analysis of the company’s investment plan to enhance strategic decision-making.',
			'Development of a valuation model and calculation of the enterprise valuation using DCF.',
			'Final financial modeling and analyses, including sensitivity analysis, IRR, and payback time.',
			'Benchmark analysis considering valuation multiples and metrics traded in similar deals.',
			'Pitch presentation script and pitch deck development.',
			'Assistance in investor matchmaking, negotiations, deals, and due diligence.',
		],
	},
	{
		id: 2,
		type: 1,
		image: 'companyx.png',
		start: '09/21',
		end: 'Present',
		location: 'Brazil',
		summary:
			'Business analysis to support capital raising and strategic decision-making, including strategy review, process improvement, data modeling, and business planning.',
		description:
			'Company X is a micromarket start-up in the retail industry',
		activities: [
			'Information gathering and review of the company’s business model, strategy, and competitive advantages.',
			'Market and competitive research to lay out the company’s competitive landscape, position, and opportunities.',
			'Mapping, implementation, and improvement of finance and business processes and operations.',
			'Data modeling and data consolidation using a relational database model containing data from various sources.',
			'Operational analysis of strategic customer- and revenue-related data, including KPIs and key metrics.',
			'Cohort analysis of strategic customer- and revenue-related KPIs and key metrics.',
			'Definition of the business plan structure and advisement on its development and writing.',
		],
	},
	{
		id: 3,
		type: 2,
		image: 'companyx.png',
		start: '09/21',
		end: 'Present',
		location: 'Brazil',
		summary:
			'Management of the corporate development activities aimed to achieve a round of capital raising, counting with the collaboration of the cross-functional team of cofounders.',
		description:
			'Company X is a micromarket start-up in the retail industry',
		activities: [
			'Project planning, including scope, objectives, strategy, timelines, work components, and tasks.',
			'Definition of the workflow of tasks and priorities.',
			'Work management using agile Kanban boards.',
			'Tracking progress through work logs, task completion, and an updated project timeline.',
			'Prioritizing the project backlog of tasks accounting for restrictions and dependencies.',
			'Management of the communication with the team of cofounders.',
			'Reporting progress, results, and status to the team of cofounders.',
		],
	},
	{
		id: 4,
		type: 0,
		image: 'companyy.png',
		start: '09/20',
		end: '02/21',
		location: 'Portugal',
		summary:
			'Financial analysis and valuation of innovation, product development, and launch projects to determine whether the firm’s practiced pricing was aligned with project fair value.',
		description:
			'Company Y is an innovation development services and consulting firm that works with clients through B2B projects',
		activities: [
			'Gathered financial performance data on key product development projects that achieved product launch.',
			'Carried out financial modeling of the selected projects and their product launches.',
			'Developed financial forecasts, including market and macroeconomic research.',
			'Developed a valuation model using a combination of DCF and ROV to evaluate the firm’s projects.',
			'Conducted sensitivity analysis using Monte Carlo Simulation for a wide range of scenarios.',
			'Calculated the fair value of projects using the valuation model and compared it with the firm’s pricing.',
			'Identified considerable differences of more than 50% between project fair value and pricing.',
			'Recommended pricing strategy improvements and implementation approaches to executive management.',
		],
	},
	

	
];

export const types = [
	
	
];

export const timeline = [
	{
		id: 1,
		title: 'Started BCs in Engineering',
		subtitle: 'São Paulo, Brazil',
		date: 'March 2013',
		icon: () => {
			return <FaGraduationCap />;
		},
	},
	{
		id: 2,
		title: 'Started Company X',
		subtitle: 'São Paulo, Brazil',
		date: 'March 2016',
		icon: () => {
			return <FaSuitcase />;
		},
	},
	{
		id: 3,
		title: '1s Place in Programming Olympics',
		subtitle: 'São Paulo, Brazil',
		date: 'June 2016',
		icon: () => {
			return <FaMedal />;
		},
	},
	{
		id: 4,
		title: 'Green Belt Lean Six Sigma',
		subtitle: 'São Paulo, Brazil',
		date: 'September 2016',
		icon: () => {
			return <BsGraphUpArrow />;
		},
	},
	{
		id: 5,
		title: 'Entrepreneur-in-Residence at Company Y',
		subtitle: 'São Paulo, Brazil',
		date: 'March 2017',
		icon: () => {
			return <FaBlackTie />;
		},
	},
	{
		id: 6,
		title: 'Moved to Portugal',
		subtitle: 'Porto, Portugal',
		date: 'June 2017',
		icon: () => {
			return <FaGlobeEurope />;
		},
	},
	{
		id: 7,
		title: 'Transferred to University of Porto (BSc + MSc)',
		subtitle: 'Porto, Portugal',
		date: 'July 2017',
		icon: () => {
			return <FaGraduationCap />;
		},
	},
	{
		id: 8,
		title: 'Raised Capital at Company Z',
		subtitle: 'Porto, Portugal',
		date: 'July 2018',
		icon: () => {
			return <BsGraphUpArrow />;
		},
	},
	{
		id: 9,
		title: 'Left Company Z to focus on the MSc',
		subtitle: 'Porto, Portugal',
		date: 'August 2019',
		icon: () => {
			return <FaBrain />;
		},
	},
	{
		id: 10,
		title: 'Started the work at Company W',
		subtitle: 'Porto, Portugal',
		date: 'September 2020',
		icon: () => {
			return <FaSuitcase />;
		},
	},
	{
		id: 11,
		title: 'Completed the work at Company W',
		subtitle: 'Porto, Portugal',
		date: 'February 2021',
		icon: () => {
			return <FaCheck />;
		},
	},
	{
		id: 12,
		title: 'Finished my MSc',
		subtitle: 'Porto, Portugal',
		date: 'February 2021',
		icon: () => {
			return <FaUserGraduate />;
		},
	},
	{
		id: 13,
		title: 'Moved to Brazil',
		subtitle: 'São Paulo, Brazil',
		date: 'April 2021',
		icon: () => {
			return <FaGlobeAmericas />;
		},
	},
	// {
	// 	id: 14,
	// 	title: 'Started working with Company X',
	// 	subtitle: 'São Paulo, Brazil',
	// 	date: 'September 2021',
	// 	icon: () => {
	// 		return <FaSuitcase />;
	// 	},
	// },
];
