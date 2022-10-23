import graph from '../images/graph.png';
import logistics from '../images/logistics.png';
import transistor from '../images/transistor.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';
import Lightning from '../images/Lightning.png';
import Check from '../images/Check.png';
import Case from '../images/Case.png';
import SmallDryCubeContainer from '../images/SmallDryCubeContainer.png';
import HighCube from '../images/HighCube.png';
import BigDryCube from '../images/BigDryCube.png';
import RefrigeratorContainer from '../images/RefrigeratorContainer.png';
import admiral from "../images/admiral.svg";
import cma from "../images/cma.png";
import cosco from "../images/cosco.png";
import oocl from "../images/oocl.png";
import zim from "../images/zim.png";
import textainer from "../images/textainer.png";

export const companies = [
	{
		name: 'admiral',
		link: 'https://www.acolines.com/',
		img: admiral,
		width: 200,
		height: 100
	},
	{
		name: 'cma-cgm',
		link: 'https://www.cma-cgm.com/',
		img: cma,
		width: 150,
		height: 100
	},
	{
		name: 'cosco',
		link: 'https://lines.coscoshipping.com/',
		img: cosco,
		width: 80,
		height: 80
	},
	{
		name: 'OOCL',
		link: 'https://www.oocl.com/',
		img: oocl,
		width: 130,
		height: 50
	},
	{
		name: 'ZIM',
		link: 'https://www.zim.com/',
		img: zim,
		backgroundColor: '#19202E',
		width: 110,
		height: 40,
		padding: 8,
	},
	{
		name: 'textainer',
		link: 'https://www.textainer.com/',
		img: textainer,
		backgroundColor: '#19202E',
		width: 30,
		height: 100,
		padding: 8,
	}
];

export const serviceData = [
	{
		img: graph,
		alt: 'selling-buying-containers',
		baige: 'always-fair',
		heading: 'selling-buying-containers',
		text: 'selling-buying-second-text',
	},
	{
		img: logistics,
		alt: 'leasing-containers',
		baige: 'always-fair',
		heading: 'leasing-containers',
		text: 'container-leasing-second-text',
	},
];

export const questions = [
	{
		question: 'first-question',
		answer: 'first-answer',
	},
	{
		question: 'second-question',
		answer: 'second-answer',
	},
	{
		question: 'third-question',
		answer: 'third-answer',
	},
	{
		question: 'fourth-question',
		answer: 'fourth-answer',
	},
];

export const containers = [
	{
		value: 'huge',
		label: 'huge',
	},
	{
		value: 'medium',
		label: 'medium',
	},
	{
		value: 'small',
		label: 'small',
	},
];

export const contactsData = [
	{
		img: phone,
		text: '+380 67 484 8548',
	},
	{
		img: mail,
		text: 'office@cr.express',
	},
];

export const workSystem = [
	{
		img: Check,
		heading: 'Leave a request on the site',
		text: 'leave-request',
	},
	{
		img: Lightning,
		heading: 'Manager will contact you ',
		text: 'manage-contact',
	},
	{
		img: Case,
		heading: 'Your order done!',
		text: 'finish-manage',
	},
];

export const containersData = [
	{
		img: SmallDryCubeContainer,
		imgSmall: SmallDryCubeContainer,
		alt: 'Selling/buying containers',
		baige: "Marine 20' DC (Dry Cube)",
		heading: 'Selling/buying containers',
		text: 'Ships are typically larger than boats, but there is no universally accepted distinction between  ',
		volume: '33 m²',
		weight: '2200 kg',
		load: '24800 kg',
		iHeight: 'Height: 2390 mm',
		iWidth: 'Width: 2350 mm',
		iLong: 'Long: 5898 mm',
		doorHeight: 'Height: 2280 mm',
		doorWidth: 'Width: 2340 mm',
	},
	{
		img: HighCube,
		imgSmall: HighCube,
		alt: 'Container leasing',
		baige: "40' High Cube (HC)",
		heading: 'Container leasing',
		text: 'Ships are typically larger than boats, but there is no universally accepted distinction between  ',
		volume: '76,0 m³',
		weight: '3990 kg',
		load: '28570 kg',
		iHeight: 'Height: 2690 mm',
		iWidth: 'Width: 2350 mm',
		iLong: 'Long: 12030 mm',
		doorHeight: 'Height: 2579 mm',
		doorWidth: 'Width: 240 mm',
	},
	{
		img: BigDryCube,
		imgSmall: BigDryCube,
		alt: 'Container leasing',
		baige: "40' Dry Cube (DC)",
		heading: 'Container leasing',
		text: 'Ships are typically larger than boats, but there is no universally accepted distinction between  ',
		volume: '67,0 m³',
		weight: '3700 kg',
		load: '28800 kg',
		iHeight: 'Height: 2393 mm',
		iWidth: 'Width: 2350 mm',
		iLong: 'Long: 12035 mm',
		doorHeight: 'Height: 2274 mm',
		doorWidth: 'Width: 2339 mm',
	},
	{
		img: RefrigeratorContainer,
		imgSmall: RefrigeratorContainer,
		alt: 'Container leasing',
		baige: "40' REEFER CONTAINER (RF)",
		heading: 'Container leasing',
		text: 'Ships are typically larger than boats, but there is no universally accepted distinction between  ',
		volume: '58,7 m³',
		weight: '3950 kg',
		load: '28850 kg',
		iHeight: 'Height: 2210 mm',
		iWidth: 'Width: 2294 mm',
		iLong: 'Long: 11577 mm',
		doorHeight: 'Height: 2238 mm',
		doorWidth: 'Width: 2286 mm',
	},
];

export const UserData = {
	serviceID: `service_gnvaejb`, //userID
	templateID: `template_2v0fdc6`, //templateID
	publicKey: `J14-B7lVxUoYku9ma`,
};
