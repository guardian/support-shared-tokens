import React, { Component } from 'react';

import styles from './Header.css';

const skins = [
	{
		emoji: '⚪️',
		title: 'white',
	},
	{
		emoji: '🔴',
		title: 'red',
	},
	{
		emoji: '🔵',
		title: 'blue',
	},
	{
		emoji: '🏳️‍🌈',
		title: 'happy',
	},
];

const Nav = ({ skin, setSkin }) => (
	<nav>
		<ul>
			<div>
				<i>🎨</i>
				<div />
			</div>
			{skins.map(({ emoji, title }) => (
				<button
					key={emoji}
					onClick={() => {
						setSkin(title);
					}}
				>
					<i>{emoji}</i>
					{title === skin ? <i>🥦</i> : <i>❌</i>}
				</button>
			))}
		</ul>
	</nav>
);

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			clientSide: false,
			open: false,
			skin: skins[0].title,
		};
	}
	componentDidMount() {
		this.setState({ clientSide: true });
	}
	render() {
		const { skin, open, clientSide } = this.state;
		return (
			<header className={styles.base} data-skin={skin}>
				<h1>
					<i>🌜</i>
				</h1>
				{clientSide ? (
					<button
						onClick={() => {
							this.setState(({ open }) => ({ open: !open }));
						}}
					>
						{open ? <i>❌</i> : <i>⬇️</i>}
					</button>
				) : (
					<div />
				)}
				{open && (
					<Nav {...{ skin }} setSkin={skin => this.setState({ skin })} />
				)}
			</header>
		);
	}
}

export default Header;
