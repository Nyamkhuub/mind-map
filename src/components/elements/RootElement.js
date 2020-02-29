import React from "react";
import Konva from "konva";
import { Stage, Layer, Rect, Text, Image, Circle } from "react-konva";

import "../styles/rootElement.scss";

const MENU = 'menu';
const AMENU = 'activatedMenu';
/**
 *Энэ класс нь оюуны зураглалын үндсэн элементийн логик кодыг агуулна.
 *
 */
class RootElement extends React.Component {
	
	constructor() {
		super();
		this.state = {
			children: [],
			title: "Click and edit me",
			color: "white",
			background: "black",
			fontSize: 16,
			menu: MENU,
			position: null
		}
		this.contextMenu = this.contextMenu.bind(this);
		this.onClickAction = this.onClickAction.bind(this);
	}

	styleWithPosition(x, y) {
		return ({
			top: y,
			left: x
		});
	}
	onClickAction() {
		this.setState({
			menu: MENU
		});
	}

	contextMenu(event) {
		event.evt.preventDefault();
		console.log(event);
		this.setState({
			menu: AMENU,
			position: this.styleWithPosition(event.evt.offsetX, event.evt.offsetY)
		});
	}

	doubleClickAction() {
		window.alert("test");
	}

	render() {
		return (
			<div className="test">
				<div id={this.state.menu} style={this.state.position} >
					<button>Add child</button>
					<button>Change color</button>
				</div>
				<Stage width={window.innerWidth} height={window.innerHeight}>
					<Layer>
						<Rect width={200} height={50} fill={this.state.background} cornerRadius={15}
							onContextmenu={this.contextMenu} onClick={this.onClickAction}
							x={window.innerWidth/2 - 100} y={window.innerHeight/2 - 25} />
						<Text fontSize={this.state.fontSize} text={this.state.title} 
							onContextmenu={this.contextMenu} onClick={this.onClickAction}
							x={window.innerWidth/2 - 65} y={window.innerHeight/2 - 15}
							fill={this.state.color} padding={5}/>
					</Layer>
				</Stage>
			</div>
		);
	}
}

export default RootElement;
