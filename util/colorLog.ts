export default (color: string) :Function => {
	return (...args: any[]) :void => {
		console.log(args[0][color], ...args.slice(1));
	}
}