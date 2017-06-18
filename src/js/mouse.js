export default class Mouse {
	constructor(canvas) {
		this.x = 0;
		this.y = 0;
        var rect = canvas.getBoundingClientRect();

		canvas.onmousemove = e => {
			this.x = e.clientX - rect.left;
			this.y = e.clientY - rect.top;
		};
	}
}
